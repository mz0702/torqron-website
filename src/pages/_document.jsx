import { Html, Head, Main, NextScript } from "next/document";
import { asset } from "@/lib/asset";

// ponytail: next/font/google cannot run inside pages/_document.js (Next.js hard
// restriction) — the Manrope font + --font-manrope variable are set up in _app.jsx
// instead. Do not re-add a font import here, it breaks `next build`.
export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <meta name="theme-color" content="#0a121c" />
        <link rel="icon" href={asset("/favicon.ico")} sizes="any" />
        <link rel="apple-touch-icon" href={asset("/images/apple-touch-icon.png")} />
        <link rel="icon" type="image/png" sizes="192x192" href={asset("/images/icon-192.png")} />
      </Head>
      <body className="antialiased selection:bg-brand-primary selection:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
