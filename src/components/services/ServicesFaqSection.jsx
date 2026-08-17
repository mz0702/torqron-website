import { useState, useRef } from "react";
import useReveal from "@/hooks/useReveal";
import SectionHeading from "@/components/shared/SectionHeading";

const faqs = [
  {
    question: "How long is delivery for spare parts and components?",
    answer:
      "Standard delivery to the Middle East is typically 2–4 weeks from order confirmation, with fixed lead times guaranteed through physical transportation logistics. Exact timing depends on whether the part is a standard or custom-engineered configuration.",
  },
  {
    question: "Can components be manufactured to a customer drawing or OEM part number?",
    answer:
      "Yes. Die plates, extruder screws, barrel housings, and most other components are custom-manufactured to your drawing, specification, or OEM reference number, engineered to exact tolerances rather than a generic equivalent.",
  },
  {
    question: "Which equipment brands are your parts compatible with?",
    answer:
      "Our granulation tools are compatible with all major granulator brands, including AST, Berringer, Berstorff, Black Clawson, Buss Condux, Conair, Cumberland, Egan, Erema, Farrell, Gala, Ikegai, JSW, Kobe, PTI, Rieter/Automatik, and Werner Pfleiderer, with custom engineering available for APM, Coperion, Econ, and Nordson BKG.",
  },
  {
    question: "Do you provide on-site installation?",
    answer:
      "Yes. Our field engineers provide professional on-site installation, commissioning, technical training for plant personnel, and post-installation troubleshooting at your facility.",
  },
  {
    question: "How fast is reconditioning turnaround for die plates or plungers?",
    answer:
      "We work to the shortest possible turnaround using European-standard repair methods. Die plates up to 1200 mm diameter are serviced independent of the original manufacturer — get in touch with your component details for a specific estimate.",
  },
  {
    question: "What quality standard do your components meet?",
    answer:
      "All components are manufactured or sourced to exact OEM specifications and tolerances, and equipment ships with complete safety certifications, CE declarations, and manufacturer documentation.",
  },
];

export default function ServicesFaqSection() {
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
              title="Answers to the common questions"
              description="Don&apos;t see what you&apos;re looking for? Send us your OEM reference or drawing and we&apos;ll get back to you."
            />
          </div>

          <div className="gs-reveal flex flex-col">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
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
                    <p className="pt-4 text-sm sm:text-base">{faq.answer}</p>
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
