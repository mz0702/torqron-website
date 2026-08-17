import { useRef } from "react";
import Image from "next/image";
import useReveal from "@/hooks/useReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { productCategories } from "@/data/products";
import { asset } from "@/lib/asset";

export default function ProductCategoriesSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gs-reveal max-w-3xl mb-14 sm:mb-20">
          <SectionHeading
            label="Full Product Range"
            title="11 categories, one qualified source"
            description="Every category below is sourced or manufactured to OEM specification, with fixed lead times and complete certification documentation."
          />
        </div>

        <div className="flex flex-col">
          {productCategories.map((cat, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={cat.slug}
                id={cat.slug}
                className="gs-reveal grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center py-10 sm:py-12 border-b border-gray-200 last:border-0 scroll-mt-28"
              >
                <div className={`relative h-[240px] sm:h-[320px] lg:h-[380px] rounded-3xl overflow-hidden ${reversed ? "lg:order-2" : ""}`}>
                  <Image
                    src={asset(cat.image)}
                    alt={cat.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-primary text-white text-xs font-bold">
                    {cat.number}
                  </span>
                </div>

                <div className={reversed ? "lg:order-1" : ""}>
                  <h2 className="text-2xl sm:text-3xl font-medium text-brand-dark mb-3">{cat.title}</h2>
                  <p className="text-brand-gray text-base sm:text-lg mb-6 leading-relaxed">{cat.summary}</p>

                  <dl className="flex flex-col gap-4">
                    {cat.items.map((item) => (
                      <div key={item.name} className="border-l-2 border-brand-primary/30 pl-4">
                        <dt className="font-semibold text-brand-dark text-sm sm:text-base">{item.name}</dt>
                        <dd className="text-brand-gray text-sm mt-1 leading-relaxed">{item.detail}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
