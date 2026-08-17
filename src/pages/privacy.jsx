import Head from "next/head";
import LegalLayout from "@/components/shared/LegalLayout";

const sections = [
  {
    title: "Introduction",
    paragraphs: [
      "TORQRON L.L.C-FZ (“TORQRON,” “we,” “our,” or “us”) respects your privacy. This policy explains what information this website collects, why, and what rights you have over it.",
      "This site is aimed at industrial and commercial visitors evaluating our products and services. We only collect what is necessary to respond to your inquiries — nothing more.",
    ],
  },
  {
    title: "Information we collect",
    paragraphs: [
      "The only personal information we collect is what you choose to provide through our Contact / Request a Quote form: your name, company name, email address, phone number (optional), country/region (optional), product or service interest, and the content of your message.",
      "Like most websites, our hosting infrastructure automatically logs standard technical data (such as IP address, browser type, and pages requested) for security and reliability purposes. This site does not currently use third-party analytics, advertising, or tracking cookies.",
    ],
  },
  {
    title: "How we use your information",
    paragraphs: [
      "We use the information you submit solely to respond to your inquiry, prepare a quotation, identify the parts or services you need, and — where an ongoing business relationship exists — to communicate about that relationship.",
      "We do not sell, rent, or trade your personal information to third parties. We do not use your data for automated decision-making or profiling.",
    ],
  },
  {
    title: "Cookies",
    paragraphs: [
      "This website does not set analytics, advertising, or tracking cookies. If that changes in the future, this policy will be updated in advance and a consent mechanism will be added where required by law.",
    ],
  },
  {
    title: "Data retention",
    paragraphs: [
      "We retain inquiry and quotation data for as long as reasonably necessary to handle your request and maintain accurate business records, and delete or anonymize it sooner on request wherever we are not legally required to keep it longer.",
    ],
  },
  {
    title: "International transfers",
    paragraphs: [
      "TORQRON L.L.C-FZ is based in Dubai, United Arab Emirates. If you contact us from the European Economic Area or another region with data-transfer restrictions, be aware that your information will be processed outside that region, on servers and by staff based in or accessible from the UAE and our supplier/logistics network.",
    ],
  },
  {
    title: "Your rights",
    paragraphs: [
      "You may request access to, correction of, or deletion of the personal data we hold about you at any time by emailing info@torqron.com. We will respond within a reasonable timeframe.",
      "If you are located in the European Economic Area, you may also have rights under the General Data Protection Regulation (GDPR), including the right to lodge a complaint with your local supervisory authority.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "Questions about this policy or how your data is handled can be sent to info@torqron.com.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy — TORQRON Solutions</title>
        <meta name="description" content="How TORQRON L.L.C-FZ collects, uses, and protects the information you share through this website." />
      </Head>
      <LegalLayout
        title="Privacy Policy"
        updatedAt="August 17, 2026"
        sections={sections}
        breadcrumbLabel="Privacy"
      />
    </>
  );
}
