import Head from "next/head";
import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import GlobalPresenceSection from "@/components/contact/GlobalPresenceSection";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact / Request a Quote — TORQRON Solutions</title>
        <meta
          name="description"
          content="Request a quote from TORQRON. Send an OEM reference, drawing, spec, or photo and our engineers will identify the right part fast."
        />
      </Head>
      <ContactHero />
      <ContactFormSection />
      <GlobalPresenceSection />
    </>
  );
}
