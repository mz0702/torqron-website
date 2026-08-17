import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { asset } from "@/lib/asset";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/applications" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Ported from the "menu-section" GSAP reference demo: a corner button whose
// clip-path circle grows to reveal a fullscreen nav. Unlike the demo (which
// hardcodes the circle at 60px/60px), the center + radius are measured from
// the button on every open so it works at any viewport size or button
// position — see references/gsap-effekte-katalog.md #9 for the rationale.
export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const navRef = useRef(null);
  const itemsRef = useRef([]);
  const burgerRef = useRef(null);
  const closeIconRef = useRef(null);
  const tlRef = useRef(null);
  const originRef = useRef({ cx: 0, cy: 0, radius: 0 });
  const isOpenRef = useRef(false);

  const isActive = (href) => {
    if (href === "/") return router.pathname === "/";
    return router.pathname === href || router.pathname.startsWith(href + "/");
  };

  const reducedMotion = () =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Two dedicated timelines (not one reversed) — closing is deliberately
  // quicker and punchier than opening, matching the ported reference demo's
  // own openTl/closeTl split rather than mirroring the slow elastic open.
  const openMenu = () => {
    if (isOpenRef.current) return;
    isOpenRef.current = true;

    const reduced = reducedMotion();
    const rect = btnRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const radius = Math.hypot(window.innerWidth, window.innerHeight);
    originRef.current = { cx, cy, radius };

    tlRef.current?.kill();
    const closed = `circle(0px at ${cx}px ${cy}px)`;
    const grown = `circle(${radius}px at ${cx}px ${cy}px)`;

    const tl = gsap.timeline();
    tl.set(navRef.current, { clipPath: closed, WebkitClipPath: closed })
      .to(navRef.current, {
        clipPath: grown,
        WebkitClipPath: grown,
        duration: reduced ? 0.01 : 0.85,
        ease: "power4.out",
      }, 0)
      .to(itemsRef.current, {
        x: 0,
        opacity: 1,
        duration: reduced ? 0.01 : 0.75,
        stagger: reduced ? 0 : 0.05,
        ease: "elastic.out(1, 0.85)",
      }, reduced ? 0 : 0.1)
      .to(closeIconRef.current, { opacity: 1, yPercent: -125, duration: reduced ? 0.01 : 0.5, ease: "power3.out" }, 0)
      .to(burgerRef.current, { opacity: 0, yPercent: -125, duration: reduced ? 0.01 : 0.5, ease: "power3.out" }, 0);

    tlRef.current = tl;
    document.body.style.overflow = "hidden";
    setOpen(true);
  };

  const closeMenu = () => {
    if (!isOpenRef.current) return;
    isOpenRef.current = false;

    const reduced = reducedMotion();
    const { cx, cy } = originRef.current;
    const closed = `circle(0px at ${cx}px ${cy}px)`;

    tlRef.current?.kill();

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
      },
    });
    tl.to(itemsRef.current, {
        x: -80,
        opacity: 0,
        duration: reduced ? 0.01 : 0.3,
        stagger: reduced ? 0 : 0.025,
        ease: "power2.in",
      }, 0)
      .to(navRef.current, {
        clipPath: closed,
        WebkitClipPath: closed,
        duration: reduced ? 0.01 : 0.4,
        ease: "power3.in",
      }, reduced ? 0 : 0.08)
      .to(closeIconRef.current, { opacity: 0, yPercent: 125, duration: reduced ? 0.01 : 0.3, ease: "power3.in" }, 0)
      .to(burgerRef.current, { opacity: 1, yPercent: 0, duration: reduced ? 0.01 : 0.3, ease: "power3.in" }, 0);

    tlRef.current = tl;
    setOpen(false);
  };

  const toggleMenu = () => (isOpenRef.current ? closeMenu() : openMenu());

  // Close on route change (link clicks navigate immediately; this catches
  // back/forward nav and any programmatic navigation too)
  useEffect(() => {
    router.events.on("routeChangeStart", closeMenu);
    return () => router.events.off("routeChangeStart", closeMenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.events]);

  useEffect(() => {
    return () => {
      tlRef.current?.kill();
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {/* Top bar: logo centered, burger trigger on the right */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center h-16 sm:h-20 dark-glass rounded-full mt-3 sm:mt-4 px-3 sm:px-6">
            <Link
              href="/contact"
              className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-brand-primary text-white font-semibold uppercase tracking-wide px-3 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-sm hover:bg-white hover:text-brand-dark transition-colors"
            >
              Contact
            </Link>

            <Link href="/" aria-label="TORQRON Home" className="flex items-center">
              <Image
                src={asset("/images/torqron-logo.png")}
                alt="TORQRON"
                width={2774}
                height={280}
                priority
                className="h-5 sm:h-6 w-auto"
              />
            </Link>

            {/* Trigger button */}
            <button
              ref={btnRef}
              type="button"
              onClick={toggleMenu}
              aria-expanded={open}
              aria-controls="main-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-brand-primary flex items-center justify-center shadow-lg shadow-black/20 hover:scale-105 active:scale-95 transition-transform"
            >
              <span className="relative block w-5 h-4 sm:w-6 sm:h-5 overflow-hidden">
                <svg ref={burgerRef} viewBox="0 0 448 512" className="absolute inset-0 w-full h-full text-white" fill="currentColor">
                  <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
                </svg>
                <svg
                  ref={closeIconRef}
                  viewBox="0 0 320 512"
                  className="absolute inset-0 w-full h-full text-white opacity-0"
                  style={{ transform: "translateY(125%)" }}
                  fill="currentColor"
                >
                  <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen reveal menu */}
      <nav
        id="main-menu"
        ref={navRef}
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex flex-col justify-center overflow-y-auto bg-brand-dark ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{
          clipPath: "circle(0px at 100% 0%)",
          WebkitClipPath: "circle(0px at 100% 0%)",
          willChange: "clip-path",
        }}
      >
        <ul className="container mx-auto px-6 sm:px-10 lg:px-16 flex flex-col mt-[2cm]">
          {mainLinks.map((link, i) => {
            const active = isActive(link.href);
            return (
              <li
                key={link.href}
                ref={(el) => (itemsRef.current[i] = el)}
                className="opacity-0"
                style={{ transform: "translateX(-80px)" }}
              >
                <Link
                  href={link.href}
                  tabIndex={open ? 0 : -1}
                  className="group relative inline-flex items-center gap-4 sm:gap-6 py-1.5 sm:py-2.5"
                >
                  <span
                    className={`h-[3px] rounded-full bg-brand-primary transition-all duration-300 ${
                      active ? "w-8 sm:w-12" : "w-0 group-hover:w-8 sm:group-hover:w-12"
                    }`}
                  />
                  <span
                    className={`font-display uppercase leading-none tracking-tight text-[10.4vw] sm:text-[5.6vw] lg:text-[4rem] transition-colors duration-300 ${
                      active ? "text-brand-primary" : "text-white/40 group-hover:text-white"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="container mx-auto px-6 sm:px-10 lg:px-16 mt-10 sm:mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
          <Link
            href="/contact"
            tabIndex={open ? 0 : -1}
            className="inline-flex items-center justify-center bg-brand-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-white hover:text-brand-dark transition-colors w-fit"
          >
            Request a Quote
          </Link>
          <a
            href="mailto:info@torqron.com"
            tabIndex={open ? 0 : -1}
            className="text-white/60 hover:text-brand-primary transition-colors text-sm sm:text-base"
          >
            info@torqron.com
          </a>
        </div>
      </nav>
    </>
  );
}
