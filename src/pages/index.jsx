import Head from "next/head";
import HeroSection from "@/components/home/HeroSection";
import ValueSection from "@/components/home/ValueSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import AboutSection from "@/components/home/AboutSection";
import StackedCardsSection from "@/components/home/StackedCardsSection";
import WorkProcessSection from "@/components/home/WorkProcessSection";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";
import { asset } from "@/lib/asset";

// Origin only — asset() already adds the /torqron-website basePath prefix.
const SITE_ORIGIN = "https://mz0702.github.io";

export default function Home() {
  return (
    <>
      <Head>
        <title>TORQRON Solutions | Critical Parts. Always On Time.</title>
        <meta
          name="description"
          content="TORQRON is a specialized B2B procurement and engineering partner for petrochemical and plastics manufacturing — critical spare parts, precision tools, additives, and supply chain services across 12 countries."
        />
        <meta property="og:title" content="TORQRON Solutions | Critical Parts. Always On Time." />
        <meta
          property="og:description"
          content="Critical spare parts, precision tools, additives, and engineering services for petrochemical and plastics manufacturing — 20+ years of expertise, 28+ major operations, 12 countries."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_ORIGIN}${asset("/images/critical-parts-banner.jpg")}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`${SITE_ORIGIN}${asset("/")}`} />
      </Head>
      <HeroSection />
      <ValueSection />
      <WhyChooseSection />
      <AboutSection />
      <StackedCardsSection />
      <WorkProcessSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
