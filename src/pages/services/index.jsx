import Head from "next/head";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGridSection from "@/components/services/ServicesGridSection";
import ApproachSection from "@/components/services/ApproachSection";
import BenefitsSection from "@/components/services/BenefitsSection";
import IndustriesSection from "@/components/services/IndustriesSection";
import ServicesFaqSection from "@/components/services/ServicesFaqSection";
import CtaBanner from "@/components/shared/CtaBanner";

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services — TORQRON Solutions</title>
        <meta
          name="description"
          content="TORQRON services: spare parts procurement, reconditioning & refurbishment, on-site installation, logistics & supply chain, and technical consulting for petrochemical and plastics manufacturing plants."
        />
      </Head>
      <ServicesHero />
      <ServicesGridSection />
      <ApproachSection />
      <BenefitsSection />
      <IndustriesSection />
      <ServicesFaqSection />
      <CtaBanner
        label="Let's Talk"
        title={"Not sure which service\nfits your operation?"}
        description="Send us your requirement — spare part, reconditioning job, or installation — and our engineers will scope it with you at no cost."
        buttonLabel="Talk to an engineer"
        buttonHref="/contact"
      />
    </>
  );
}
