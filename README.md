# TORQRON website

Static site built with [Astro](https://astro.build). English, 32 indexable pages plus a 404.

```
npm install
npm run dev      # local preview with hot reload
npm run build    # production build into dist/ (plain HTML, CSS, images)
npm run preview  # serve dist/ locally
```

`dist/` can be uploaded to any static host (Vercel, Netlify, Cloudflare Pages, S3, classic web space).

## Where things live

- `src/data/site.ts`: company constants (e-mail, phone, address, licence) and the registry of
  products, applications and services (names, teasers, photos). Menus, footer and cards are generated from it.
- `src/data/products.ts`, `applications.ts`, `services.ts`: long-form content of the detail pages.
- `src/pages/`: one file per page; `[slug].astro` files render the detail pages from the data files.
- `src/components/`, `src/layouts/Base.astro`: shared building blocks and the SEO head.
- `src/styles/global.css`: the whole design system. `src/scripts/ui.js`: all behaviour.
- `src/assets/img/`: photos (resized and converted to WebP at build time). `public/media/`: hero video and PDF.

## Still to be supplied by TORQRON

Set these in `src/data/site.ts`; they appear on the site as soon as they are filled in:

- `phone`, `address`, `licence` (footer, contact page, legal pages, structured data)

There is no contact form: every call to action leads to `/contact/`, which offers the e-mail address. Links such as
`/contact/?topic=Sealing%20technology` put the topic into the e-mail subject.

`/privacy/` and `/legal-notice/` state only what is true of the site as built and need a legal review.

## Deployment

Every push to `main` builds the site and publishes it to GitHub Pages at
https://mz0702.github.io/torqron-website/ (`.github/workflows/deploy.yml`). Because Pages serves it from a
sub-folder, `scripts/rebase.mjs` prefixes all internal links with `/torqron-website` after the build and marks the
pages `noindex`, so this preview does not compete in search with the future site.

For the move to torqron.com, upload a plain `npm run build` (`dist/`) to the web root; no rewrite is needed there.
