import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { asset } from "@/lib/asset";

gsap.registerPlugin(ScrollTrigger);

const accordionData = [
  {
    icon: "bolt",
    number: "01",
    title: "Speed & Reliability",
    content:
      "Market-atypical delivery speed backed by guaranteed, fixed lead times. Critical Parts. Always On Time — with a 99%+ on-time delivery rate across 12 countries.",
  },
  {
    icon: "shield",
    number: "02",
    title: "OEM-Grade Quality",
    content:
      "Every component is manufactured to exact OEM specifications and tolerances, shipped with complete safety certifications, CE declarations, and manufacturer documentation.",
  },
  {
    icon: "wrench",
    number: "03",
    title: "Custom Engineering",
    content:
      "Beyond our standard catalog, our engineers design individual, company-specific solutions matched to your exact machine type, drawing, or OEM part number.",
  },
];

const icons = {
  bolt: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  ),
  shield: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75l1.75 1.75L15 10M12 3l7.5 3v5.25c0 4.72-3.13 8.94-7.5 10.25-4.37-1.31-7.5-5.53-7.5-10.25V6L12 3z"
      />
    </svg>
  ),
  wrench: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.77 3.77z"
      />
    </svg>
  ),
};

export default function WhyChooseSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const contentRefs = useRef([]);

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

  // Animate accordion content height
  useEffect(() => {
    contentRefs.current.forEach((el, index) => {
      if (!el) return;
      const isActive = activeIndex === index;
      gsap.to(el, {
        height: isActive ? "auto" : 0,
        opacity: isActive ? 1 : 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
    });
  }, [activeIndex]);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-brand-light border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 gs-reveal">
          <div className="inline-flex items-center gap-2 text-sm font-semibold mb-4 justify-center text-brand-gray">
            <span className="w-2 h-2 rounded-full bg-brand-dark" />
            Why TORQRON
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-brand-dark leading-tight">
            Built for plants that can&apos;t afford downtime
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Image */}
          <div className="rounded-3xl overflow-hidden min-h-[320px] sm:min-h-[420px] lg:min-h-[500px] gs-reveal">
            <img
              src={asset("/images/valves-flow-control.jpg")}
              alt="Industrial valves and flow control equipment"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Accordion */}
          <div className="flex flex-col gap-4 gs-reveal">
            {accordionData.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                  className={`rounded-3xl p-5 sm:p-6 md:p-8 cursor-pointer transition-all duration-500 border ${
                    isActive
                      ? "bg-brand-dark text-white border-transparent shadow-xl"
                      : "bg-white border-gray-200 hover:border-brand-dark/30"
                  }`}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span
                      className={`transition-colors duration-300 ${
                        isActive ? "text-brand-primary" : "text-brand-dark"
                      }`}
                    >
                      {icons[item.icon]}
                    </span>
                    <span className={`font-light text-lg sm:text-xl ${isActive ? "text-gray-400" : "text-gray-400"}`}>
                      {item.number}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-0">{item.title}</h3>

                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    className="overflow-hidden"
                    style={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                  >
                    <p className={`pt-4 leading-relaxed text-sm sm:text-base ${isActive ? "text-gray-300" : "text-brand-gray"}`}>
                      {item.content}
                    </p>
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
