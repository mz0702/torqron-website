import { useRef } from "react";
import useReveal from "@/hooks/useReveal";
import SectionHeading from "@/components/shared/SectionHeading";

const brands = [
  "AST", "Berringer", "Berstorff", "Black Clawson", "Buss Condux", "Conair",
  "Cumberland", "Egan", "Erema", "Farrell", "Gala", "Ikegai", "JSW", "Kobe",
  "PTI", "Rieter/Automatik", "Werner Pfleiderer", "APM", "Coperion", "Econ", "Nordson BKG",
];

export default function PartnersSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gs-reveal max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <SectionHeading
            label="Equipment Compatibility"
            title="Compatible with leading equipment brands"
            description="Our granulation, extrusion, and filtration components are engineered to fit the major machine platforms already running on your plant floor."
            align="center"
          />
        </div>

        <div className="gs-reveal flex flex-wrap justify-center gap-3">
          {brands.map((name) => (
            <span
              key={name}
              className="px-5 py-2.5 rounded-full border border-gray-200 bg-white text-sm sm:text-base font-medium text-brand-dark/70 hover:text-brand-dark hover:border-brand-primary transition-colors"
            >
              {name}
            </span>
          ))}
        </div>

        <p className="gs-reveal text-center text-xs text-brand-gray mt-8 max-w-2xl mx-auto">
          Brand names are the property of their respective owners. Compatibility does not imply
          affiliation, partnership, or endorsement.
        </p>
      </div>
    </section>
  );
}
