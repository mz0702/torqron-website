import { useRef } from "react";
import Link from "next/link";
import useReveal from "@/hooks/useReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { applications } from "@/data/applications";

export default function ApplicationsGridSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gs-reveal max-w-3xl mb-14 sm:mb-20">
          <SectionHeading
            label="Six Industry Verticals"
            title="Built for every part of the polymer value chain"
            description="We support plant operators, machinery builders, and processors with the same OEM-grade rigor across every sector we serve."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {applications.map((app) => (
            <div
              key={app.slug}
              id={app.slug}
              className="gs-reveal bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-brand-dark text-brand-primary flex items-center justify-center text-sm font-bold shrink-0">
                  {app.number}
                </span>
                <h2 className="text-xl sm:text-2xl font-semibold text-brand-dark">{app.name}</h2>
              </div>

              <p className="text-brand-gray text-sm sm:text-base mb-6 leading-relaxed">{app.focus}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-brand-gray font-semibold mb-3">
                    Typical Applications
                  </p>
                  <ul className="flex flex-col gap-2">
                    {app.applications.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-brand-dark">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-brand-gray font-semibold mb-3">
                    What We Supply
                  </p>
                  <ul className="flex flex-col gap-2">
                    {app.offerings.map((o) => (
                      <li key={o} className="flex items-start gap-2 text-sm text-brand-dark">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-1.5 shrink-0" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark hover:text-brand-primary transition-colors pt-4 border-t border-gray-200 w-full"
              >
                Explore related products
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
