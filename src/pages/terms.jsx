import Head from "next/head";
import LegalLayout from "@/components/shared/LegalLayout";

const sections = [
  {
    title: "Acceptance of terms",
    paragraphs: [
      "By accessing or using this website, you agree to these Terms of Service. If you do not agree, please do not use the site. These Terms apply to the website only; they do not by themselves constitute a supply, service, or purchase agreement.",
    ],
  },
  {
    title: "Quotations and pricing",
    paragraphs: [
      "Product and service information on this site is provided for reference and is not an offer to sell. Pricing is available on request only — no public price list is published. Any quotation issued by TORQRON is non-binding and subject to written confirmation via a purchase order or signed agreement before it becomes a binding commitment.",
      "Delivery times referenced on this site (including regional lead-time estimates) are indicative and are confirmed per order based on part availability, specification, and destination.",
    ],
  },
  {
    title: "Compatibility references",
    paragraphs: [
      "Where our products are described as compatible with, or manufactured to specification for, machinery from named original equipment manufacturers (OEMs) or granulator/extruder brands, this describes technical fit only. It does not imply affiliation with, sponsorship by, or endorsement from those manufacturers. All third-party trademarks and brand names remain the property of their respective owners.",
    ],
  },
  {
    title: "Intellectual property",
    paragraphs: [
      "All text, images, and other content on this website are the property of TORQRON L.L.C-FZ or its licensors and may not be copied, reproduced, or redistributed without prior written consent.",
    ],
  },
  {
    title: "Service and supply engagements",
    paragraphs: [
      "Any procurement, manufacturing, reconditioning, installation, or logistics engagement with TORQRON is governed by a separate purchase order, quotation, or project agreement. These website Terms do not replace or override the terms of that agreement.",
    ],
  },
  {
    title: "Limitation of liability",
    paragraphs: [
      "To the fullest extent permitted by applicable law, TORQRON L.L.C-FZ is not liable for indirect, incidental, or consequential damages arising from use of this website or reliance on its content. Nothing in these Terms limits liability that cannot lawfully be excluded.",
    ],
  },
  {
    title: "Governing law",
    paragraphs: [
      "[Placeholder: governing law and jurisdiction to be confirmed with TORQRON's registered free zone authority before this page is published live.]",
    ],
  },
  {
    title: "Changes to these terms",
    paragraphs: [
      "We may update these Terms from time to time. Continued use of the site after an update constitutes acceptance of the revised Terms.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "Questions about these Terms can be sent to info@torqron.com.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Service — TORQRON Solutions</title>
        <meta name="description" content="The terms governing use of the TORQRON website and how quotations, pricing, and compatibility references work." />
      </Head>
      <LegalLayout
        title="Terms of Service"
        updatedAt="August 17, 2026"
        sections={sections}
        breadcrumbLabel="Terms"
      />
    </>
  );
}
