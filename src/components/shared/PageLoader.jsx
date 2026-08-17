import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { asset } from "@/lib/asset";

// First-load overlay. Rendered on the server too (so there is no flash of the
// page before hydration), then unmounted for good once the exit timeline ends.
// It lives in _app.jsx, whose instance survives client-side route changes, so
// the `visible` state only ever initialises on a genuine page load.
//
// Motion: a left-to-right clip wipe on the wordmark + a hairline progress rule
// and counter filling in the same direction, then the panel collapses through a
// circular clip-path — the same visual language as Navbar.jsx's reveal, run in
// reverse. Total ~2.55s.
export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const rootRef = useRef(null);
  const contentRef = useRef(null);
  const logoRef = useRef(null);
  const barRef = useRef(null);
  const countRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const done = () => {
        document.body.style.overflow = "";
        setVisible(false);
      };

      if (reduced) {
        gsap.set(logoRef.current, { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 });
        gsap.set(".pl-in", { opacity: 1, y: 0 });
        gsap.set(barRef.current, { scaleX: 1 });
        countRef.current.textContent = "100";
        gsap.to(rootRef.current, { opacity: 0, duration: 0.25, delay: 0.2, ease: "none", onComplete: done });
        return;
      }

      const radius = Math.hypot(window.innerWidth, window.innerHeight) / 2;
      const open = `circle(${radius}px at 50% 50%)`;
      const closed = "circle(0px at 50% 50%)";
      const progress = { value: 0 };

      gsap
        .timeline({ onComplete: done })
        .set(rootRef.current, { clipPath: open, WebkitClipPath: open })
        .to(
          logoRef.current,
          {
            clipPath: "inset(0% 0% 0% 0%)",
            WebkitClipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            duration: 0.8,
            ease: "power3.inOut",
          },
          0
        )
        .to(".pl-in", { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power3.out" }, 0.25)
        .to(
          progress,
          {
            value: 100,
            duration: 1.2,
            ease: "power2.inOut",
            onUpdate: () => {
              gsap.set(barRef.current, { scaleX: progress.value / 100 });
              countRef.current.textContent = String(Math.round(progress.value));
            },
          },
          0.35
        )
        .to(contentRef.current, { opacity: 0, y: -24, duration: 0.35, ease: "power2.in" }, 1.7)
        .to(
          rootRef.current,
          { clipPath: closed, WebkitClipPath: closed, duration: 0.7, ease: "power3.inOut" },
          1.85
        );
    }, rootRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Without JS the timeline never runs, so never show the panel at all. */}
      <noscript dangerouslySetInnerHTML={{ __html: "<style>#page-loader{display:none}</style>" }} />
      <div
        id="page-loader"
        ref={rootRef}
        aria-hidden="true"
        className="fixed inset-0 z-[100] bg-brand-dark flex items-center justify-center"
        style={{ willChange: "clip-path" }}
      >
        <div ref={contentRef} className="w-full max-w-[20rem] sm:max-w-[26rem] px-6 flex flex-col items-center">
          <div
            ref={logoRef}
            style={{ clipPath: "inset(0% 100% 0% 0%)", WebkitClipPath: "inset(0% 100% 0% 0%)", opacity: 0 }}
          >
            <Image
              src={asset("/images/torqron-logo.png")}
              alt=""
              width={2774}
              height={280}
              priority
              className="h-6 sm:h-7 w-auto"
            />
          </div>

          <p
            className="pl-in mt-5 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-white/45 text-center"
            style={{ opacity: 0, transform: "translateY(12px)" }}
          >
            Critical Parts. Always On Time.
          </p>

          <div
            className="pl-in mt-10 sm:mt-12 w-full flex items-center gap-4"
            style={{ opacity: 0, transform: "translateY(12px)" }}
          >
            <span className="relative block h-px flex-1 bg-white/15">
              <span
                ref={barRef}
                className="absolute inset-0 block bg-brand-primary"
                style={{ transform: "scaleX(0)", transformOrigin: "left center" }}
              />
            </span>
            <span className="font-display text-[10px] text-white/60 tabular-nums w-10 text-right">
              <span ref={countRef}>0</span>%
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
