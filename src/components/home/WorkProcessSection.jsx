import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { asset } from "@/lib/asset";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Send Your Requirement",
    description:
      "An OEM reference, drawing, spec, part number, or even a photo is enough — our engineers identify the exact component you need.",
  },
  {
    number: "02",
    title: "Source, Certify & Manufacture",
    description:
      "We source or custom-manufacture to exact OEM tolerances, shipped with full safety certifications and CE declarations.",
  },
  {
    number: "03",
    title: "Deliver & Support",
    description:
      "Guaranteed fixed lead times to your site, with on-site installation and after-sales support available where needed.",
  },
];

export default function WorkProcessSection() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const lineRef = useRef(null);
  const stepRefs = useRef([]);
  const nodeRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
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

      // Set initial state: all steps hidden
      gsap.set(stepRefs.current, { y: 60, opacity: 0, scale: 0.95 });
      gsap.set(nodeRefs.current, { borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)", scale: 1 });

      // Main scroll-pin timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: `+=${steps.length * 500}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Animate line fill across all steps
      tl.to(lineRef.current, { width: "100%", ease: "none", duration: steps.length }, 0);

      // Reveal each step sequentially
      steps.forEach((_, index) => {
        tl.to(
          nodeRefs.current[index],
          {
            borderColor: "#0b63b8",
            color: "#0b63b8",
            scale: 1.15,
            duration: 0.3,
            ease: "back.out(2)",
          },
          index
        )
          .to(
            stepRefs.current[index],
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.6,
              ease: "power3.out",
            },
            index
          )
          .to(
            nodeRefs.current[index],
            {
              scale: 1,
              duration: 0.3,
            },
            index + 0.3
          );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-brand-dark text-white">
      {/* Pinned wrapper */}
      <div ref={pinRef} className="relative min-h-screen overflow-hidden flex items-center py-16 sm:py-20 lg:py-24">
        {/* Subtle background overlay */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
          <img
            src={asset("/images/spare-parts-logistics.jpg")}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="mb-12 sm:mb-16 gs-reveal">
            <div className="inline-flex items-center gap-2 text-sm font-semibold mb-4 text-gray-400">
              <span className="w-2 h-2 rounded-full bg-brand-primary" />
              How We Work
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium">
              From RFQ to <br /> reliable delivery
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative mt-16 sm:mt-24 md:mt-32 mb-12">
            {/* Timeline row: line + nodes (desktop only) */}
            <div className="relative h-12 mb-10 hidden md:block">
              {/* Base Line - centered vertically */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[2px] bg-white/20" />
              {/* Animated Fill Line */}
              <div
                ref={lineRef}
                className="absolute top-1/2 -translate-y-1/2 left-0 h-[2px] bg-brand-primary w-0"
              />

              {/* Nodes positioned on the line */}
              <div className="grid grid-cols-3 gap-8 h-full relative">
                {steps.map((step, index) => (
                  <div
                    key={`node-${index}`}
                    className="flex items-center justify-center h-full"
                  >
                    <div
                      ref={(el) => (nodeRefs.current[index] = el)}
                      className="w-12 h-12 rounded-full bg-brand-dark border-2 flex items-center justify-center font-semibold transition-colors"
                    >
                      {step.number}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Mobile-only static badge */}
                  <div className="md:hidden flex items-center justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-brand-dark border-2 border-brand-primary text-brand-primary flex items-center justify-center font-semibold">
                      {step.number}
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    ref={(el) => (stepRefs.current[index] = el)}
                    className="p-6 sm:p-8 rounded-3xl relative bg-white text-brand-dark"
                  >
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-white hidden md:block" />
                    <p className="text-sm font-semibold mb-3 sm:mb-4 text-brand-gray">
                      Step: {step.number}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{step.title}</h3>
                    <p className="text-brand-gray text-sm sm:text-base">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
