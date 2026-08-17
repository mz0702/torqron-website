import PageHero from "@/components/shared/PageHero";

export default function AboutHero() {
  return (
    <PageHero
      label="About TORQRON"
      title="A strategic procurement partner to petrochemical facilities worldwide"
      description="TORQRON FZE is a specialized B2B procurement and engineering solutions provider for the petrochemical and plastics manufacturing industries — critical spare parts, precision tools, advanced additives, and supply chain services through one integrated platform."
      image="/images/critical-parts-banner.jpg"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "About Us" },
      ]}
    />
  );
}
