import Head from "next/head";
import { Manrope, Krona_One } from "next/font/google";
import "@/styles/globals.css";
import MainLayout from "@/layouts/MainLayout";
import SmoothScroll from "@/components/shared/SmoothScroll";
import PageLoader from "@/components/shared/PageLoader";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const kronaOne = Krona_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-krona",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);
  return (
    <div className={`${manrope.variable} ${kronaOne.variable} font-sans`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SmoothScroll>
        {getLayout(<Component {...pageProps} />)}
      </SmoothScroll>
      <PageLoader />
    </div>
  );
}
