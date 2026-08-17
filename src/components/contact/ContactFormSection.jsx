import { useRef, useState } from "react";
import useReveal from "@/hooks/useReveal";
import Button from "@/components/shared/Button";
import { productCategories } from "@/data/products";
import { services } from "@/data/services";

const interests = [
  ...productCategories.map((p) => p.title),
  ...services.map((s) => s.title),
  "Other",
];

export default function ContactFormSection() {
  const ref = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  useReveal(ref);

  // ponytail: no email-delivery backend is wired up yet (no API keys available in this
  // build) — this only simulates success client-side. Wire a real endpoint (Next.js API
  // route, Formspree, or Resend) to `action`/`onSubmit` before this form goes live.
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
          {/* Left: Contact info */}
          <div className="gs-reveal space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold mb-4 text-brand-gray">
                <span className="w-2 h-2 rounded-full bg-brand-dark" />
                Talk to Our Engineers
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-brand-dark mb-4">
                Critical Parts. Always On Time.
              </h2>
              <p className="text-brand-gray text-base sm:text-lg leading-relaxed">
                Fill in a few details and we&apos;ll come back with tailored next steps —
                typically within 24 hours. No OEM reference on hand? A drawing, spec sheet,
                or even a photo of the worn part is enough for us to start.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-primary flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-brand-gray mb-1">Email</div>
                  <a href="mailto:info@torqron.com" className="font-medium text-brand-dark hover:text-brand-primary transition-colors">
                    info@torqron.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-primary flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-brand-gray mb-1">Based In</div>
                  <div className="font-medium text-brand-dark">Dubai, United Arab Emirates</div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <div className="text-xs uppercase tracking-wider text-brand-gray mb-3">Response Time</div>
              <p className="text-brand-dark">All inquiries are confidential.<br/>Expect a reply within 24 hours.</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="gs-reveal bg-brand-dark text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl">
            {submitted ? (
              <div className="flex flex-col items-center text-center py-10">
                <div className="w-16 h-16 rounded-full bg-brand-primary text-white flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3">Request received</h3>
                <p className="text-gray-400 mb-6">
                  Thank you. Our team will review your request and respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-brand-primary text-sm font-semibold"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-xl font-semibold">Request Your Custom Quote</h3>
                <p className="text-sm text-gray-400 -mt-3">
                  Get a response within 24 hours. All inquiries are confidential.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-gray-400 mb-2 block">
                      Full name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-brand-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-gray-400 mb-2 block">
                      Company name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Company"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-brand-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-gray-400 mb-2 block">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-brand-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-gray-400 mb-2 block">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+971 ..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-brand-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-gray-400 mb-2 block">
                      Product / service interest
                    </label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-primary transition-colors">
                      {interests.map((t) => (
                        <option key={t} value={t} className="bg-brand-dark">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-gray-400 mb-2 block">
                      Country / region
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. UAE, Saudi Arabia, Germany"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-brand-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-gray-400 mb-2 block">
                    Message / requirements *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="OEM reference, drawing details, quantity, or the issue you're seeing..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-brand-primary transition-colors resize-none"
                  />
                </div>

                <label className="flex items-start gap-3 text-xs text-gray-400">
                  <input type="checkbox" required className="mt-0.5 accent-brand-primary" />
                  I agree to be contacted by TORQRON regarding this inquiry, in line with the{" "}
                  <a href="/privacy" className="text-brand-primary hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                  . *
                </label>

                <Button type="submit" variant="primary" size="lg" radius="rounded" fullWidth>
                  Send Request
                </Button>

                <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-1.5">
                  <span aria-hidden="true">🔒</span> Your information is secure and confidential.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
