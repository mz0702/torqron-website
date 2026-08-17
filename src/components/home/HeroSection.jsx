import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Button from "@/components/shared/Button";
import { asset } from "@/lib/asset";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const elemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.fromTo(
        bgRef.current,
        { scale: 1.15, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: "power3.out" },
      );

      gsap.fromTo(
        elemsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.5,
        },
      );

      // Parallax
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !elemsRef.current.includes(el)) {
      elemsRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen pb-12 pt-28 sm:pt-32 md:pt-36 flex items-center justify-center overflow-hidden bg-brand-dark"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={bgRef}
          autoPlay
          muted
          loop
          playsInline
          poster={asset("/images/extrusion-system-components.jpg")}
          className="w-full h-full object-cover opacity-0 scale-105"
        >
          <source src={asset("/videos/hero-background.mp4")} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-brand-dark/40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-between">
        {/* Main Title Area */}
        <div className="flex flex-col justify-center">
          <div className="max-w-5xl text-white">
            <div
              ref={addToRefs}
              className="inline-flex items-center gap-2 text-sm font-medium mb-4 sm:mb-6 text-white/90"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
              Critical Parts. Always On Time.
            </div>
            <h1
              ref={addToRefs}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-medium leading-[1.1] tracking-tight"
            >
              Industrial excellence for global petrochemical operations
            </h1>
          </div>
        </div>

        {/* Bottom Elements */}
        <div
          ref={addToRefs}
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 sm:gap-12 lg:gap-8 w-full mt-8 sm:mt-12"
        >
          {/* Bottom Left */}
          <div className="max-w-[28rem]">
            <p className="text-base sm:text-lg text-gray-200 mb-6 sm:mb-8 leading-relaxed">
              20+ years of engineering expertise delivering granulation tools, extrusion
              components, polymer additives, and spare parts to 28+ major industrial
              operations across 12 countries.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="primary" size="lg" radius="rounded">
                Request a Quote
              </Button>
              <a
                href="/products"
                className="text-sm font-semibold text-white border-b border-white/40 pb-1 hover:text-brand-primary hover:border-brand-primary transition-colors"
              >
                View Products
              </a>
            </div>
          </div>

          {/* Bottom Right */}
          <div className="flex flex-col items-start lg:items-end gap-12 w-full lg:w-auto">
            <div className="dark-glass p-4 sm:p-5 rounded-[2rem] flex items-center gap-4 sm:gap-6 w-full sm:max-w-[24rem]">
              <img
                src={asset("/images/granulation-technology.jpg")}
                alt="Precision granulation components"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover shrink-0"
              />
              <div className="text-white">
                <h4 className="font-medium text-lg sm:text-xl leading-tight mb-3 sm:mb-4">
                  Precision
                  <br />
                  Components
                </h4>
                <a
                  href="/products"
                  className="text-sm font-medium border-b border-white pb-1 hover:text-brand-primary hover:border-brand-primary transition-colors inline-block"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
