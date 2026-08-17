import { useRef } from "react";
import Link from "next/link";
import useReveal from "@/hooks/useReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { applications } from "@/data/applications";

export default function IndustriesSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-brand-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gs-reveal max-w-3xl mb-12 sm:mb-16">
          <SectionHeading
            label="Industries"
            title="Built for every part of the polymer value chain"
            description="We support operators, machinery builders, and processors across six core industrial verticals."
            variant="light"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden">
          {applications.map((ind) => (
            <Link
              key={ind.slug}
              href={`/applications#${ind.slug}`}
              className="gs-reveal bg-brand-dark p-6 sm:p-8 group hover:bg-white/5 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-semibold text-gray-500">{ind.number}</span>
                <svg
                  className="w-5 h-5 text-gray-500 group-hover:text-brand-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4-4m0 0h-8m8 0v8M7 16l-4 4m0 0v-8m0 8h8" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{ind.name}</h3>
              <p className="text-sm text-gray-400">{ind.focus}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
