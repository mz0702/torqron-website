import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/asset";

// Origin only — asset() already adds the /torqron-website basePath prefix.
const SITE_ORIGIN = "https://mz0702.github.io";

const companyLinks = [
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/applications" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact / RFQ", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Legal Notice", href: "/legal" },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TORQRON Solutions",
  legalName: "TORQRON L.L.C-FZ",
  url: `${SITE_ORIGIN}${asset("/")}`,
  logo: `${SITE_ORIGIN}${asset("/images/torqron-logo.png")}`,
  slogan: "Critical Parts. Always On Time.",
  description:
    "Specialized B2B procurement and engineering solutions provider for the petrochemical and plastics manufacturing industries.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "info@torqron.com",
      contactType: "sales",
      areaServed: ["AE", "SA", "QA", "OM", "KW", "BH", "EU", "TR"],
      availableLanguage: ["en"],
    },
  ],
  areaServed: ["Middle East", "Europe", "Turkey", "Asia"],
  knowsAbout: [
    "Petrochemical Plant Engineering",
    "Extrusion Technology",
    "Industrial Filtration",
    "Sealing Technology",
    "Plastics Manufacturing",
    "Granulation Systems",
  ],
};

export default function Footer() {
  const handleBackToTop = () => {
    if (typeof window !== "undefined" && window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-brand-dark text-white pt-24 pb-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Col 1 */}
          <div className="lg:col-span-1">
            <Image src={asset("/images/torqron-logo.png")} alt="TORQRON" width={2774} height={280} className="h-7 w-auto mb-5" />
            <p className="text-brand-primary text-sm font-semibold tracking-wide uppercase mb-4">
              Critical Parts. Always On Time.
            </p>
            <p className="text-gray-400 text-sm max-w-xs">
              Specialized B2B procurement and engineering solutions for petrochemical
              and plastics manufacturing, delivering critical spare parts, precision
              tools, additives, and supply chain services across 12 countries.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="flex flex-col gap-3 text-gray-400">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brand-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Legal</h4>
            <ul className="flex flex-col gap-3 text-gray-400">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brand-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Talk to Our Engineers</h4>
            <p className="text-gray-400 text-sm mb-4">
              Send an OEM reference, drawing, spec, or photo and we&apos;ll identify the
              right part fast.
            </p>
            <a
              href="mailto:info@torqron.com"
              className="inline-flex items-center gap-2 text-brand-primary font-medium hover:text-white transition-colors"
            >
              info@torqron.com
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-12 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start pb-12">
            <div className="space-y-1">
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Email Us</p>
              <a href="mailto:info@torqron.com" className="text-lg hover:text-brand-primary transition-colors">
                info@torqron.com
              </a>
            </div>

            <div className="space-y-1">
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Based In</p>
              <p className="text-lg">Dubai, United Arab Emirates</p>
              <p className="text-gray-400">Serving the Middle East, Europe, Turkey &amp; Asia</p>
            </div>

            <div className="flex md:justify-end">
              <button
                onClick={handleBackToTop}
                className="group flex items-center gap-3 px-5 py-3 rounded-full border border-white/20 hover:border-brand-primary hover:bg-brand-primary hover:text-brand-dark transition-all"
                aria-label="Back to top"
              >
                <span className="text-sm font-medium">Back to top</span>
                <svg className="w-4 h-4 transition-transform group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* TORQRON full-width wordmark */}
      <div className="w-full flex justify-center overflow-hidden leading-none mt-4 px-4">
        <h2 className="text-white/[0.06] font-bold tracking-tight whitespace-nowrap leading-[0.85] text-[clamp(3rem,18vw,20rem)]">
          TORQRON
        </h2>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 mt-8 pt-6 border-t border-white/5 gap-4">
          <p>&copy; {new Date().getFullYear()} TORQRON L.L.C-FZ. All rights reserved.</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
            <Link href="/legal" className="hover:text-gray-300 transition-colors">Legal Notice</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
