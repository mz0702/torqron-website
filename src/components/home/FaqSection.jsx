import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { asset } from "@/lib/asset";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What does TORQRON supply?",
    answer:
      "Critical spare parts, precision tools, advanced additives, and industrial equipment for petrochemical and plastics manufacturing — plus procurement, reconditioning, on-site installation, and logistics services.",
  },
  {
    question: "Which regions do you deliver to?",
    answer:
      "Our primary focus is the Middle East (UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain), with secondary coverage across Europe, Turkey, and Asia — a strategic presence across 12 countries in total.",
  },
  {
    question: "How fast can you deliver?",
    answer:
      "Typical delivery to the Middle East is 2-4 weeks depending on configuration (standard or custom), with express options available for urgent requirements and a 99%+ on-time delivery rate.",
  },
  {
    question: "Can you manufacture custom components from a drawing?",
    answer:
      "Yes. Most of our product lines — die plates, screw elements, barrel housings, and more — are custom-engineered to your drawing, OEM part number, or exact machine configuration.",
  },
  {
    question: "Are your components compatible with my existing OEM equipment?",
    answer:
      "Yes. Components are manufactured to exact OEM specifications and tolerances, and are compatible with all major granulator, extruder, and processing equipment brands.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "Send an OEM reference, drawing, spec, part number, or even a photo to info@torqron.com or through our contact form. Our engineers typically respond within 24 hours.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(-1);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reveals = sectionRef.current.querySelectorAll(".gs-reveal");
      reveals.forEach((elem) => {
        gsap.fromTo(
          elem,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: elem,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="gs-reveal">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-brand-dark mb-6 sm:mb-8">
              Frequently<br />Asked Questions
            </h2>
            <img
              src={asset("/images/drive-technology-power-transmission.jpg")}
              alt="Industrial drive and gear components"
              className="rounded-3xl w-full h-[220px] sm:h-[280px] lg:h-[300px] object-cover"
            />
          </div>

          <div className="flex flex-col gap-0 gs-reveal">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 py-5 sm:py-6 cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex justify-between items-center group gap-4">
                  <h3 className="text-base sm:text-lg md:text-xl font-medium text-brand-dark group-hover:text-brand-primary transition-colors">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 shrink-0 ${
                      openIndex === index ? "rotate-45" : ""
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
                    openIndex === index ? "max-h-60" : "max-h-0"
                  }`}
                >
                  <p className="pt-4 text-sm sm:text-base">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
