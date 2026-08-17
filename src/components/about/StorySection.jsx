import { useRef } from "react";
import useReveal from "@/hooks/useReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { asset } from "@/lib/asset";

export default function StorySection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="gs-reveal order-2 lg:order-1 rounded-3xl overflow-hidden h-[400px] sm:h-[500px] lg:h-[600px]">
            <img
              src={asset("/images/extrusion-system-components.jpg")}
              alt="Precision-machined extruder screw elements and shafts"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="order-1 lg:order-2 gs-reveal">
            <SectionHeading
              label="Our Story"
              title="From a specialized engineering group to a multinational solutions provider"
            />
            <div className="mt-6 sm:mt-8 space-y-4 text-brand-gray text-base sm:text-lg leading-relaxed">
              <p>
                TORQRON was founded by seasoned industry professionals who saw the same problem
                repeat across petrochemical and plastics manufacturing plants: critical components
                stuck in slow, fragmented procurement chains while production waited. Built on
                20+ years of combined industry expertise, the company set out to close that gap.
              </p>
              <p>
                What began as a specialized engineering group has grown into a multinational
                solutions provider with a strategic presence across 12 countries, supporting
                28+ major industrial operations — primarily across the Middle East, with a
                growing footprint in Europe, Turkey, and Asia.
              </p>
            </div>

            <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-6 sm:gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl sm:text-4xl font-light text-brand-dark">20+</div>
                <p className="text-sm text-brand-gray mt-1">Years Combined Expertise</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-light text-brand-dark">12</div>
                <p className="text-sm text-brand-gray mt-1">Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
