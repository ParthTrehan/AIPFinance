import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import LogoCarousel from "../components/LogoCarousel";
import IntroStory from "../components/IntroStory";
import HowItWorks from "../components/HowItWorks";
import Services from "../components/Services";
import StatsRow from "../components/StatsRow";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import FAQ from "../components/FAQ";
import { faqs } from "../components/FAQ";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

const SITE_URL = "https://aipfinance.com.au";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE_URL,
  name: "AIP Finance",
  description:
    "Melbourne mortgage broker comparing 40+ lenders for home loans, refinancing and investment. No broker fee. Pre-approval in 48 hours.",
  url: SITE_URL,
  telephone: "+61498241696",
  email: "anita@aipfinance.com.au",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -37.8136,
    longitude: 144.9631,
  },
  priceRange: "Free",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "3",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    "https://www.facebook.com/pg/aipfinance/",
    "https://www.linkedin.com/in/anita-parker-sareen-11270a152",
  ],
  employee: {
    "@type": "Person",
    name: "Anita Parker Sareen",
    jobTitle: "Accredited Mortgage Broker",
    hasCredential: "Cert IV Finance & Mortgage Broking",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Mortgage Broker Melbourne | AIP Finance — Free Home Loan Consultation</title>
        <meta name="description" content="AIP Finance is Melbourne's trusted mortgage broker. Compare rates across 40+ lenders for home loans, refinancing & investment. No broker fee. Pre-approval in 48hrs. Call Anita: 0498 241 696." />
        <meta name="keywords" content="mortgage broker Melbourne, home loan Melbourne, first home buyer Melbourne, refinance Melbourne, investment loan Melbourne, low doc loan Melbourne, mortgage broker no fee, AIP Finance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={SITE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content="Mortgage Broker Melbourne | AIP Finance — Free Home Loan" />
        <meta property="og:description" content="Compare 40+ lenders. No broker fee. Pre-approval in 48hrs. Melbourne's trusted mortgage broker — call Anita on 0498 241 696." />
        <meta property="og:image" content={`${SITE_URL}/anita.jpg`} />
        <meta property="og:locale" content="en_AU" />
        <meta property="og:site_name" content="AIP Finance" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mortgage Broker Melbourne | AIP Finance" />
        <meta name="twitter:description" content="Compare 40+ lenders. No broker fee. Pre-approval in 48hrs." />
        <meta name="twitter:image" content={`${SITE_URL}/anita.jpg`} />

        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="AU-VIC" />
        <meta name="geo.placename" content="Melbourne" />
        <meta name="geo.position" content="-37.8136;144.9631" />
        <meta name="ICBM" content="-37.8136, 144.9631" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <Header />
      <Hero />
      <LogoCarousel />
      <TrustBar />
      <IntroStory />
      <HowItWorks />
      <Services />
      <StatsRow />
      <Testimonials />
      <About />
      <FAQ />
      <CTABanner />
      <Footer />
    </>
  );
}
