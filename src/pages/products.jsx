import Head from "next/head";
import PageHero from "@/components/shared/PageHero";
import ProductCategoriesSection from "@/components/products/ProductCategoriesSection";
import ProductsFaqSection from "@/components/products/ProductsFaqSection";
import CtaBanner from "@/components/shared/CtaBanner";

export default function ProductsPage() {
  return (
    <>
      <Head>
        <title>Products — Critical Petrochemical & Plastics Components | TORQRON</title>
        <meta
          name="description"
          content="Critical components, precision tools, and advanced additives for petrochemical and plastics manufacturing — 11 categories, OEM-grade quality, fixed lead times."
        />
      </Head>

      <PageHero
        label="Products"
        title="High-Performance Products for Petrochemical & Plastics Manufacturing"
        description="From granulation tools and extrusion components to plastic additives and industrial equipment — 11 product categories manufactured or sourced to exact OEM specification."
        image="/images/granulation-technology.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
      />

      <ProductCategoriesSection />
      <ProductsFaqSection />

      <CtaBanner
        label="Request a Quote"
        title={"Need a part fast?\nSend us the spec."}
        description="Upload an OEM reference, drawing, or photo — our engineers will identify the exact component and quote a fixed lead time."
        buttonLabel="Contact for RFQ"
        buttonHref="/contact"
      />
    </>
  );
}
