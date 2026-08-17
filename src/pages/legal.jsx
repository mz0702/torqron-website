import Head from "next/head";
import LegalLayout from "@/components/shared/LegalLayout";

const sections = [
  {
    title: "Company information",
    paragraphs: [
      "This website is operated by TORQRON L.L.C-FZ, a free zone establishment registered in Dubai, United Arab Emirates.",
      "[Placeholder: exact free zone authority, trade licence number, and registered office address to be inserted once confirmed with TORQRON's UAE company registration documents.]",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "For all enquiries relating to this website or to TORQRON L.L.C-FZ, please contact info@torqron.com.",
    ],
  },
  {
    title: "Responsible for content",
    paragraphs: [
      "TORQRON L.L.C-FZ is responsible for the content published on this website in accordance with applicable United Arab Emirates law.",
    ],
  },
  {
    title: "Disclaimer",
    paragraphs: [
      "Product, service, and specification information on this website is provided for general reference. While we take care to keep it accurate and current, TORQRON makes no warranty as to completeness — always confirm technical specifications and lead times for a specific order via a written quotation.",
      "This website may link to third-party websites (for example, supplier or logistics partners). TORQRON is not responsible for the content of external sites it does not operate.",
    ],
  },
  {
    title: "Intellectual property",
    paragraphs: [
      "The TORQRON name and logo are trademarks of TORQRON L.L.C-FZ. All other product names, brand names, and trademarks referenced on this site — including OEM and machinery-brand names used to describe compatibility — are the property of their respective owners and are used for identification purposes only.",
    ],
  },
  {
    title: "Related policies",
    paragraphs: [
      "See our Privacy Policy for how we handle personal data submitted through this site, and our Terms of Service for the terms governing use of this website and how quotations and pricing work.",
    ],
  },
];

export default function LegalPage() {
  return (
    <>
      <Head>
        <title>Legal Notice — TORQRON Solutions</title>
        <meta name="description" content="Company and legal information for TORQRON L.L.C-FZ, operator of this website." />
      </Head>
      <LegalLayout
        title="Legal Notice"
        updatedAt="August 17, 2026"
        sections={sections}
        breadcrumbLabel="Legal Notice"
      />
    </>
  );
}
