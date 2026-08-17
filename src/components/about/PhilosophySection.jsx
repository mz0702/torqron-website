import { useRef } from "react";
import useReveal from "@/hooks/useReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { asset } from "@/lib/asset";

const pillars = [
  {
    tag: "Precision",
    title: "Precision over approximation",
    description:
      "Every component is sourced or manufactured to exact OEM specifications and tolerances. We'd rather take the time to identify the right part than ship a close-enough substitute.",
    image: "/images/die-plate-detail.jpg",
  },
  {
    tag: "Reliability",
    title: "Speed without compromise",
    description:
      "“Critical Parts. Always On Time.” isn't a slogan — it's a commitment to guaranteed fixed lead times, backed by physical transportation logistics and a global supplier network.",
    image: "/images/warehouse-spare-parts.jpg",
  },
];

export default function PhilosophySection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gs-reveal max-w-3xl mb-12 sm:mb-16">
          <SectionHeading
            label="Our Philosophy"
            title="A down-to-earth methodology, built on hands-on experience"
            description="Transparent communication and enduring business relationships — not one-off transactions."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="gs-reveal group relative rounded-[2rem] overflow-hidden bg-brand-dark text-white min-h-[480px] flex flex-col"
            >
              <div className="absolute inset-0">
                <img
                  src={asset(pillar.image)}
                  alt={pillar.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/30" />
              </div>

              <div className="relative z-10 p-8 sm:p-10 flex flex-col justify-end flex-1">
                <span className="inline-block px-3 py-1 rounded-full bg-brand-primary text-white text-xs font-semibold mb-5 self-start">
                  {pillar.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-medium mb-3">{pillar.title}</h3>
                <p className="text-gray-200 leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
