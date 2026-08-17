import PageHero from "@/components/shared/PageHero";

export default function ServicesHero() {
  return (
    <PageHero
      label="Our Services"
      title="Expert Services Supporting Reliable Industrial Operations"
      description="Engineering and procurement services for petrochemical plants, polymer production lines, and industrial facilities worldwide — built for safe, reliable, and efficient operation."
      image="/images/extrusion-detail.jpg"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services" },
      ]}
    />
  );
}
