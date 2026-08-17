import Head from "next/head";
import AboutHero from "@/components/about/AboutHero";
import StorySection from "@/components/about/StorySection";
import MissionValuesSection from "@/components/about/MissionValuesSection";
import PhilosophySection from "@/components/about/PhilosophySection";
import ImpactStatsSection from "@/components/about/ImpactStatsSection";
import PartnersSection from "@/components/about/PartnersSection";
import CtaBanner from "@/components/shared/CtaBanner";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us — TORQRON Solutions</title>
        <meta
          name="description"
          content="TORQRON FZE is a strategic procurement and engineering partner to petrochemical facilities worldwide — 20+ years of expertise, 12 countries, 28+ industrial operations served."
        />
      </Head>
      <AboutHero />
      <StorySection />
      <MissionValuesSection />
      <PhilosophySection />
      <ImpactStatsSection />
      <PartnersSection />
      <CtaBanner
        label="Work With Us"
        title={"Ready to secure your\ncritical parts supply?"}
        description="Send an OEM reference, drawing, or spec and our engineers will respond within 24 hours."
        buttonLabel="Request a Quote"
        buttonHref="/contact"
      />
    </>
  );
}
