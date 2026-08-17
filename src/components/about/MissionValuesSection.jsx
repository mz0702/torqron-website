import { useRef } from "react";
import useReveal from "@/hooks/useReveal";
import SectionHeading from "@/components/shared/SectionHeading";

const competencyIcon = (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 256 256">
    <path d="M120,40V32a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-8-8a8,8,0,0,0-11.32,11.32Zm0,116.68-8,8a8,8,0,0,0,11.32,11.32l8-8a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l8-8a8,8,0,0,0-11.32-11.32l-8,8A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l8,8a8,8,0,0,0,11.32-11.32ZM40,120H32a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Zm88,88a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-8A8,8,0,0,0,128,208Zm96-88h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z" />
  </svg>
);

const competencies = [
  {
    title: "Petrochemical Plant Engineering",
    description: "Deep knowledge of complex production environments and facility requirements.",
  },
  {
    title: "Extrusion Technology",
    description: "Specialized expertise in extruder systems, components, and performance optimization.",
  },
  {
    title: "Industrial Plant Engineering",
    description: "Comprehensive understanding of production machinery, equipment integration, and systems optimization.",
  },
  {
    title: "Sealing Technology",
    description: "Advanced solutions for critical high-pressure and high-temperature sealing applications.",
  },
  {
    title: "Filtration Technology",
    description: "A complete range of industrial filtration systems and process-critical components.",
  },
];

export default function MissionValuesSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-brand-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gs-reveal">
          <SectionHeading
            label="Core Competencies"
            title="Five specialized areas of technical expertise"
            description="Every product and service we deliver is grounded in one of these disciplines."
            variant="light"
            align="center"
            maxWidth="max-w-3xl"
          />
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
          {competencies.map((value, i) => (
            <div
              key={i}
              className="gs-reveal group relative p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-brand-primary/50 transition-all duration-500 bg-white/5 hover:bg-white/10"
            >
              <div className="absolute top-6 right-6 text-xs font-semibold text-gray-400">
                0{i + 1}
              </div>
              <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-brand-dark transition-colors">
                {competencyIcon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
