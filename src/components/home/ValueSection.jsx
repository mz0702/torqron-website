import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { asset } from "@/lib/asset";

gsap.registerPlugin(ScrollTrigger);

export default function ValueSection() {
  const sectionRef = useRef(null);
  const counterRef = useRef(null);

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

      // Counter animation
      if (counterRef.current) {
        ScrollTrigger.create({
          trigger: counterRef.current,
          start: "top 90%",
          onEnter: () => {
            gsap.to(counterRef.current, {
              innerHTML: 28,
              duration: 2,
              snap: { innerHTML: 1 },
              ease: "power1.out",
            });
          },
          once: true,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-12 gs-reveal">
          <div className="inline-flex items-center gap-2 text-sm font-semibold mb-4 text-brand-gray">
            <span className="w-2 h-2 rounded-full bg-brand-dark" />
            Our Value
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-brand-dark">Precision, at industrial scale</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 h-auto md:h-[500px]">
          {/* Card 1 */}
          <div className="bg-brand-tint p-6 sm:p-8 rounded-3xl flex flex-col justify-between gs-reveal group">
            <div>
              <p className="text-sm font-medium mb-4 text-brand-gray">Engineering-Led</p>
              <h3 className="text-2xl sm:text-3xl font-medium leading-tight mb-5 sm:mb-6">Precision engineering built into every component</h3>
            </div>
            <div>
              <p className="text-brand-gray mb-5 sm:mb-6 text-sm sm:text-base">
                We combine deep petrochemical process knowledge with OEM-grade
                manufacturing to deliver parts that perform to exact specification, every time.
              </p>
              <p className="text-sm font-semibold">Precision Engineering // OEM-Grade Quality</p>
            </div>
          </div>

          {/* Card 2 (Image) */}
          <div className="rounded-3xl overflow-hidden relative gs-reveal h-64 md:h-full">
            <img
              src={asset("/images/extrusion-system-components.jpg")}
              alt="Precision-machined extrusion screw components"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Card 3 */}
          <div className="bg-brand-dark text-white p-6 sm:p-8 rounded-3xl flex flex-col justify-between gs-reveal">
            <div>
              <p className="text-sm font-medium mb-4 text-gray-400">Reliability-Centered</p>
              <h3 className="text-2xl sm:text-3xl font-medium leading-tight mb-5 sm:mb-6">Supply chains engineered for zero downtime</h3>
            </div>
            <div>
              <div className="text-5xl sm:text-6xl font-light text-brand-primary mb-2 flex items-baseline gap-1">
                <span ref={counterRef}>0</span>+
              </div>
              <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">Major Industrial Operations Served</p>
              <p className="text-sm font-semibold text-gray-300">Fixed Lead Times // 12 Countries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
