import Head from "next/head";
import PageHero from "@/components/shared/PageHero";
import ApplicationsGridSection from "@/components/applications/ApplicationsGridSection";
import CtaBanner from "@/components/shared/CtaBanner";

export default function ApplicationsPage() {
  return (
    <>
      <Head>
        <title>Applications — Industries We Serve | TORQRON Solutions</title>
        <meta
          name="description"
          content="TORQRON serves petrochemical plants, polymer manufacturing, machinery OEMs, chemical producers, packaging systems, and industrial logistics worldwide."
        />
      </Head>

      <PageHero
        label="Applications"
        title="Engineering Solutions for the World's Most Demanding Industrial Environments"
        description="TORQRON serves petrochemical plants, polymer manufacturing, machinery OEMs, chemical producers, packaging systems, and industrial logistics with products, additives, spare parts, and engineering services that ensure reliable performance and minimized downtime."
        image="/images/measurement-control-safety.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Applications" },
        ]}
      />

      <ApplicationsGridSection />

      <CtaBanner
        label="Not Sure Which Category Fits?"
        title={"Not sure which components\nyour application requires?"}
        description="Our engineering and procurement specialists identify parts via OEM references, drawings, specs, material requirements, descriptions, photos, or documentation."
        buttonLabel="Talk to Our Engineers"
        buttonHref="/contact"
      />
    </>
  );
}
