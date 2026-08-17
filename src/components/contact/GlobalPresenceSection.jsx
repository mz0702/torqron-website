import { useRef } from "react";
import useReveal from "@/hooks/useReveal";
import SectionHeading from "@/components/shared/SectionHeading";

const regions = [
  {
    name: "Middle East",
    role: "Primary Focus",
    detail: "Based in Dubai, UAE — serving UAE, Saudi Arabia, Qatar, Oman, Kuwait and Bahrain.",
  },
  {
    name: "Europe",
    role: "Secondary Market",
    detail: "Reconditioning to European standards and sourcing from qualified European manufacturers.",
  },
  {
    name: "Turkey",
    role: "Secondary Market",
    detail: "Established supply and logistics routes serving Turkish polymer processors.",
  },
  {
    name: "Asia",
    role: "Secondary Market",
    detail: "Extended reach for petrochemical and plastics manufacturing operations.",
  },
];

export default function GlobalPresenceSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gs-reveal max-w-3xl mb-12 sm:mb-16">
          <SectionHeading
            label="Global Presence"
            title="12 countries. 28+ major industrial operations."
            description="TORQRON operates across the Middle East, Europe, Turkey and Asia — with a primary focus on Middle East petrochemical and plastics manufacturing."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {regions.map((r) => (
            <div
              key={r.name}
              className="gs-reveal bg-brand-light rounded-3xl p-6 sm:p-8 border border-gray-200"
            >
              <div className="text-xs uppercase tracking-wider text-brand-primary font-semibold mb-3">
                {r.role}
              </div>
              <h3 className="text-xl font-semibold text-brand-dark mb-2">{r.name}</h3>
              <p className="text-brand-gray text-sm leading-relaxed">{r.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
