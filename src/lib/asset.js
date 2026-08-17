// GitHub Pages project sites are served under /<repo-name>/, so every
// hardcoded absolute path (raw <img>/<source> src, favicon links, etc.) needs
// this prefix — unlike next/image or next/link, which pick up next.config.js's
// basePath automatically. Set at build time via NEXT_PUBLIC_BASE_PATH.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path) {
  return `${BASE_PATH}${path}`;
}
