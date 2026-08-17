import { useState, useRef } from "react";
import useReveal from "@/hooks/useReveal";
import SectionHeading from "@/components/shared/SectionHeading";

const faqs = [
  {
    question: "Are TORQRON parts compatible with my existing OEM equipment?",
    answer:
      "Yes. All components are manufactured or sourced to exact OEM specifications and tolerances. Our granulation tools alone are compatible with AST, Berringer, Berstorff, Black Clawson, Buss Condux, Conair, Cumberland, Egan, Erema, Farrell, Gala, Ikegai, JSW, Kobe, PTI, Rieter/Automatik and Werner Pfleiderer, with custom engineering available for APM, Coperion, Econ and Nordson BKG.",
  },
  {
    question: "Can you manufacture parts to a custom drawing or specification?",
    answer:
      "Yes. Extruder barrel housings, screw elements, screw shafts, die plates, and stainless steel containers are all available as individual, custom-engineered manufacturing to your drawing, part number, or material specification.",
  },
  {
    question: "What is the typical lead time?",
    answer:
      "Standard delivery to the Middle East runs 2–4 weeks depending on configuration, quantity, and whether the part is standard or custom-engineered. We guarantee fixed lead times through physical transportation logistics — contact us for a precise timeline on your specific requirement.",
  },
  {
    question: "What quality standards and certifications do your products carry?",
    answer:
      "All industrial equipment and spare parts ship with safety certifications, CE declarations, and manufacturer certifications. Components are manufactured or sourced to exact OEM specifications and tolerances, not generic aftermarket equivalents.",
  },
  {
    question: "Is there a minimum order quantity?",
    answer:
      "No fixed minimum applies across the range — we supply everything from single critical spare parts for emergency plant downtime to full package procurement across multiple product categories. Send us your requirement and we'll quote accordingly.",
  },
];

export default function ProductsFaqSection() {
  const [open, setOpen] = useState(0);
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
          <div className="gs-reveal">
            <SectionHeading
              label="FAQ"
              title="Product & sourcing questions"
              description="Don't see what you're looking for? Send us your OEM reference or drawing and we'll get back to you directly."
            />
          </div>

          <div className="gs-reveal flex flex-col">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={faq.question}
                  className="border-b border-gray-200 py-5 sm:py-6 cursor-pointer"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <div className="flex justify-between items-center gap-4 group">
                    <h3 className="text-base sm:text-lg md:text-xl font-medium text-brand-dark group-hover:text-brand-primary transition-colors">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-5 h-5 sm:w-6 sm:h-6 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 text-brand-gray ${
                      isOpen ? "max-h-60" : "max-h-0"
                    }`}
                  >
                    <p className="pt-4 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
