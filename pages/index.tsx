import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import LogoCarousel from "../components/LogoCarousel";
import ServiceCards from "../components/ServiceCards";
import IntroStory from "../components/IntroStory";
import Services from "../components/Services";
import StatsRow from "../components/StatsRow";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Mortgage Broker Melbourne | AIP Finance — Free Home Loan Consultation
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Hero />
      <ServiceCards />
      <LogoCarousel />
      <TrustBar />
      <IntroStory />
      <Services />
      <StatsRow />
      <Testimonials />
      <About />
      <CTABanner />
      <Footer />
    </>
  );
}
