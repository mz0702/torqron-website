import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useReveal from "@/hooks/useReveal";
import SectionHeading from "@/components/shared/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const impacts = [
  { target: 20, suffix: "+", label: "Years combined industry expertise" },
  { target: 12, suffix: "", label: "Countries of operation" },
  { target: 28, suffix: "+", label: "Major industrial operations served" },
  { target: 99, suffix: "%+", label: "On-time delivery rate" },
];

export default function ImpactStatsSection() {
  const ref = useRef(null);
  const counterRefs = useRef([]);
  useReveal(ref);

  useEffect(() => {
    const ctx = gsap.context(() => {
      counterRefs.current.forEach((el, i) => {
        if (!el) return;
        const target = impacts[i].target;
        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          onEnter: () => {
            const obj = { val: 0 };
            gsap.to(obj, {
              val: target,
              duration: 2.2,
              ease: "power1.out",
              onUpdate: () => {
                el.innerHTML = Math.round(obj.val);
              },
            });
          },
          once: true,
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-brand-tint">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gs-reveal max-w-3xl mb-12 sm:mb-16">
          <SectionHeading
            label="By The Numbers"
            title="What 20+ years in petrochemical procurement looks like"
            description="Real figures behind a strategic partner to petrochemical facilities worldwide."
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {impacts.map((item, i) => (
            <div key={i} className="gs-reveal border-t-2 border-brand-dark pt-6">
              <div className="text-4xl sm:text-5xl md:text-6xl font-light text-brand-dark mb-3 flex items-baseline">
                <span ref={(el) => (counterRefs.current[i] = el)}>0</span>
                <span className="text-2xl sm:text-3xl ml-1">{item.suffix}</span>
              </div>
              <p className="text-brand-gray text-sm sm:text-base">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
