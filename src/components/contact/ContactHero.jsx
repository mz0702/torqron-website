import PageHero from "@/components/shared/PageHero";

export default function ContactHero() {
  return (
    <PageHero
      label="Contact Us"
      title="Request a Quote"
      description="Send an OEM reference, drawing, spec, or photo and our engineers will identify the right part fast. Most inquiries get a reply within 24 hours."
      image="/images/spare-parts-logistics.jpg"
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
    />
  );
}
