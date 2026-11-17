// Serve a finished build from a sub-path, e.g. https://mz0702.github.io/torqron-website/.
// The source links root-relative ("/products/") because the real home is the root of torqron.com;
// this rewrites every root-relative URL in the built HTML and CSS to start with the sub-path,
// then fails if any is left over.
//
// usage: node scripts/rebase.mjs <dist dir> </sub-path> [--noindex]
//   --noindex  adds <meta name="robots" content="noindex"> so the preview does not compete
//              in search with the future site on torqron.com
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const [dir, rawBase, flag] = process.argv.slice(2);
const base = (rawBase ?? '').replace(/\/+$/, '');
if (!dir || !/^\/[\w.-]+(\/[\w.-]+)*$/.test(base)) {
  console.error('usage: node scripts/rebase.mjs <dist dir> </sub-path> [--noindex]');
  process.exit(1);
}
const esc = base.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// a root-relative URL: starts with one "/", is not protocol-relative ("//") and not already rebased
const rootRel = `\\/(?!\\/|${esc.slice(1)}\\/)`;
const ATTR = new RegExp(`(\\s(?:href|src|poster|data-src|action)=["'])${rootRel}`, 'g');
const SRCSET = /(\ssrcset=["'])([^"']*)/g;
const CSSURL = new RegExp(`(url\\(\\s*["']?)${rootRel}`, 'g');

const files = (d) => readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? files(join(d, e.name)) : [join(d, e.name)]));

let changed = 0;
const leftovers = [];
for (const file of files(dir)) {
  const isHtml = file.endsWith('.html');
  if (!isHtml && !file.endsWith('.css')) continue;
  const before = readFileSync(file, 'utf8');
  let s = before.replace(CSSURL, `$1${base}/`);
  if (isHtml) {
    s = s
      .replace(ATTR, `$1${base}/`)
      .replace(SRCSET, (_, head, list) => head + list.replace(new RegExp(`(^|,\\s*)${rootRel}`, 'g'), `$1${base}/`));
    if (flag === '--noindex' && !/<meta name="robots"/.test(s)) s = s.replace(/<head>/, '<head><meta name="robots" content="noindex">');
  }
  if (s !== before) {
    writeFileSync(file, s);
    changed++;
  }
  // check: nothing root-relative may survive
  const scan = s.replace(SRCSET, (_, head, list) => head + list.split(',').map((u) => u.trim()).join(' '));
  for (const re of [new RegExp(`\\s(?:href|src|poster|data-src|action|srcset)=["']${rootRel}`), new RegExp(`url\\(\\s*["']?${rootRel}`)]) {
    const hit = scan.match(re);
    if (hit) leftovers.push(`${file}: ${scan.slice(hit.index, hit.index + 80)}`);
  }
  if (isHtml) {
    for (const m of s.matchAll(SRCSET)) {
      for (const url of m[2].split(',').map((u) => u.trim().split(/\s+/)[0])) {
        if (url.startsWith('/') && !url.startsWith('//') && !url.startsWith(`${base}/`)) leftovers.push(`${file}: srcset ${url}`);
      }
    }
  }
}

if (leftovers.length) {
  console.error(`rebase: ${leftovers.length} root-relative URL(s) left:\n${leftovers.slice(0, 10).join('\n')}`);
  process.exit(1);
}
console.log(`rebase: ${changed} file(s) rewritten for ${base}/`);
