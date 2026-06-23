import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TrustBar from "../../components/TrustBar";
import { suburbs, getSuburbBySlug, Suburb } from "../../data/suburbs";
import { useEnquiry } from "../../context/EnquiryContext";
import {
  IconCurrencyDollar,
  IconBuildingBank,
  IconBolt,
  IconMapPin,
  IconHome,
  IconRefresh,
  IconBriefcase,
  IconFileDescription,
  IconPhone,
} from "../../components/TablerIcons";

const SITE_URL = "https://aipfinance.com.au";

const services = [
  { Icon: IconHome, title: "First Home Buyer Loans", desc: "We guide first home buyers through every step — borrowing capacity, grants, and settlement." },
  { Icon: IconRefresh, title: "Refinancing", desc: "Already have a loan? We compare your current rate against 40+ lenders to find real savings." },
  { Icon: IconBriefcase, title: "Investment Property Loans", desc: "Build your portfolio with the right loan structure for maximum returns and tax effectiveness." },
  { Icon: IconFileDescription, title: "Low Doc Loans", desc: "Self-employed? We find lenders who understand your income structure and won't penalise you." },
  { Icon: IconBuildingBank, title: "Business & Commercial", desc: "Commercial property and business finance tailored to your exact situation." },
];

const benefits = [
  { Icon: IconCurrencyDollar, title: "No broker fee", desc: "Our service is completely free to you. We're paid by the lender you choose." },
  { Icon: IconBuildingBank, title: "40+ lenders", desc: "We compare ANZ, NAB, Westpac, Macquarie, and 36+ more to find your best deal." },
  { Icon: IconBolt, title: "48hr pre-approval", desc: "Get conditionally pre-approved in as little as 48 hours so you can bid with confidence." },
  { Icon: IconMapPin, title: "Local knowledge", desc: "We know what lenders look for and how to position your application to succeed." },
];

const heroStats = [
  { label: "Lenders compared", value: "40+" },
  { label: "Broker fee", value: "$0" },
  { label: "Pre-approval time", value: "48hrs" },
  { label: "Years experience", value: "10+" },
  { label: "Client rating", value: "5.0 ★" },
];

export default function SuburbPage({ suburb }: { suburb: Suburb }) {
  const { openModal } = useEnquiry();
  const pageUrl = `${SITE_URL}/mortgage-broker/${suburb.slug}/`;

  const faqItems = [
    { q: `Do I pay anything for a mortgage broker in ${suburb.name}?`, a: "No — AIP Finance charges zero broker fees. We're paid a commission by the lender you choose, at no extra cost to you." },
    { q: `How many lenders does AIP Finance compare for ${suburb.name} buyers?`, a: "We compare 40+ lenders including the major banks (ANZ, NAB, Westpac, CBA) and specialist lenders like Macquarie, Bankwest, and more." },
    { q: `How quickly can I get pre-approved in ${suburb.name}?`, a: "Most clients get pre-approval within 48 hours. We handle all the paperwork so you can focus on finding your property." },
    { q: "Can you help first home buyers?", a: `Yes — we specialise in helping first home buyers in ${suburb.name} understand their borrowing capacity, access government grants, and find the right loan.` },
    { q: "Can I refinance my existing loan?", a: `Absolutely. If you already own in or around ${suburb.name}, we can review your current rate and compare it against 40+ lenders to find potential savings.` },
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": ["FinancialService", "LocalBusiness"],
      name: "AIP Finance",
      description: `Mortgage broker serving ${suburb.name}, VIC. Comparing 40+ lenders for home loans, refinancing and investment. No broker fee.`,
      url: pageUrl,
      telephone: "+61498241696",
      email: "anita@aipfinance.com.au",
      address: {
        "@type": "PostalAddress",
        addressLocality: suburb.name,
        addressRegion: "VIC",
        postalCode: suburb.postcode,
        addressCountry: "AU",
      },
      areaServed: { "@type": "City", name: suburb.name },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "5", bestRating: "5", reviewCount: "47" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ];

  return (
    <>
      <Head>
        <title>Mortgage Broker {suburb.name} | AIP Finance — No Broker Fee</title>
        <meta name="description" content={`Looking for a mortgage broker in ${suburb.name}? AIP Finance compares 40+ lenders to find you the best home loan rate. No broker fee. Call Anita: 0498 241 696.`} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={`Mortgage Broker ${suburb.name} | AIP Finance`} />
        <meta property="og:description" content={`Compare 40+ lenders in ${suburb.name}. No broker fee. Free consultation with Anita — call 0498 241 696.`} />
        <meta property="og:locale" content="en_AU" />
        <meta name="geo.region" content="AU-VIC" />
        <meta name="geo.placename" content={suburb.name} />
        {schema.map((s, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
        ))}
      </Head>

      <Header />

      {/* Hero */}
      <section className="suburb-hero" style={{ background: "linear-gradient(135deg, #0F2B5B 0%, #1a3a7a 100%)", padding: "88px 24px 64px" }}>
        <div className="suburb-hero-inner">
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-accent)", margin: "0 0 10px" }}>
              {suburb.region}
            </p>
            <h1 style={{ color: "#fff", marginBottom: 16, fontSize: "clamp(28px, 4vw, 46px)", lineHeight: 1.1 }}>
              Mortgage Broker<br />in {suburb.name}
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 17, lineHeight: 1.75, maxWidth: 520, margin: "0 0 32px" }}>
              AIP Finance helps {suburb.buyerType} in {suburb.name} compare 40+ lenders to find a better home loan — with <strong style={{ color: "#fff" }}>no broker fee</strong>.
            </p>
            <div className="suburb-hero-btns">
              <button className="btn btn-accent" onClick={openModal} style={{ fontSize: 15, padding: "13px 28px" }}>
                Get a free quote
              </button>
              <a className="btn" href="tel:+61498241696" style={{ fontSize: 15, padding: "13px 28px", background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)" }}>
                <IconPhone size={16} />
                0498 241 696
              </a>
            </div>
          </div>

          {/* Stats card — hidden on mobile via CSS */}
          <div className="suburb-hero-card" style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 20,
            padding: "28px 32px",
            backdropFilter: "blur(8px)",
            minWidth: 210,
          }}>
            {heroStats.map(({ label, value }, i) => (
              <div key={label} style={{
                paddingBottom: i < heroStats.length - 1 ? 18 : 0,
                marginBottom: i < heroStats.length - 1 ? 18 : 0,
                borderBottom: i < heroStats.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
              }}>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 3px" }}>
                  {label}
                </p>
                <p style={{ color: i === heroStats.length - 1 ? "var(--color-accent)" : "#fff", fontSize: 24, fontWeight: 700, margin: 0, lineHeight: 1 }}>
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Benefits */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontSize: 12, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-accent)", margin: "0 0 10px" }}>
            Why choose us
          </p>
          <h2 style={{ textAlign: "center", marginBottom: 10 }}>Why {suburb.name} residents choose AIP Finance</h2>
          <p style={{ textAlign: "center", color: "var(--muted)", fontSize: 16, maxWidth: 520, margin: "0 auto 48px" }}>
            We know {suburb.region} and what local {suburb.buyerType} need.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {benefits.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="card"
                style={{ padding: "28px 24px", borderRadius: 16, transition: "box-shadow 0.2s ease, transform 0.2s ease" }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "0 8px 32px rgba(15,43,91,0.1)";
                  el.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "";
                  el.style.transform = "";
                }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(15,43,91,0.07)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-primary)", marginBottom: 16 }}>
                  <Icon size={22} />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: "var(--color-primary)" }}>{title}</h3>
                <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "80px 24px", background: "var(--neutral-100)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontSize: 12, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-accent)", margin: "0 0 10px" }}>
            What we offer
          </p>
          <h2 style={{ textAlign: "center", marginBottom: 10 }}>Our services in {suburb.name}</h2>
          <p style={{ textAlign: "center", color: "var(--muted)", fontSize: 16, margin: "0 0 48px" }}>
            Whatever your situation, we have a solution.
          </p>
          <div style={{ display: "grid", gap: 14 }}>
            {services.map(({ Icon, title, desc }) => (
              <div key={title} style={{ background: "#fff", border: "1px solid var(--card-border)", borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "flex-start", gap: 18 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(15,43,91,0.06)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-primary)", flexShrink: 0 }}>
                  <Icon size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 600, margin: "0 0 5px", color: "var(--color-primary)" }}>{title}</h3>
                  <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.65 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anita mini strip */}
      <section style={{ padding: "64px 24px", background: "#fff", borderTop: "1px solid var(--card-border)", borderBottom: "1px solid var(--card-border)" }}>
        <div className="anita-strip" style={{ maxWidth: 920, margin: "0 auto", display: "flex", alignItems: "center", gap: 36, flexWrap: "wrap", justifyContent: "center" }}>
          <div style={{ width: 90, height: 90, borderRadius: "50%", overflow: "hidden", border: "3px solid var(--card-border)", flexShrink: 0, boxShadow: "0 4px 16px rgba(15,43,91,0.1)" }}>
            <img src="/anita.jpg" alt="Anita Parker Sareen, Accredited Mortgage Broker" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
          </div>
          <div style={{ flex: 1, minWidth: 240 }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-accent)", margin: "0 0 5px" }}>
              Your broker
            </p>
            <h3 style={{ fontSize: 21, margin: "0 0 4px", color: "var(--color-primary)" }}>Anita Parker Sareen</h3>
            <p style={{ fontSize: 13, color: "var(--muted)", margin: "0 0 12px" }}>
              Accredited Mortgage Broker · Cert IV Finance &amp; Mortgage Broking · Connective Network
            </p>
            <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.7, margin: 0, maxWidth: 500 }}>
              Anita takes the time to understand your situation before recommending anything. With access to 40+ lenders, she'll find the right loan for you — and guide you from application to settlement.
            </p>
          </div>
          <div className="anita-strip-actions" style={{ display: "flex", flexDirection: "column", gap: 10, flexShrink: 0 }}>
            <a className="btn btn-primary" href="tel:+61498241696" style={{ fontSize: 14, justifyContent: "center" }}>
              <IconPhone size={15} />
              Call Anita
            </a>
            <button className="btn btn-ghost" onClick={openModal} style={{ fontSize: 14, justifyContent: "center" }}>
              Free quote
            </button>
          </div>
        </div>
      </section>

      {/* Nearby suburbs */}
      <section style={{ padding: "64px 24px", background: "var(--neutral-100)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", marginBottom: 8 }}>Also serving nearby suburbs</h2>
          <p style={{ textAlign: "center", color: "var(--muted)", marginBottom: 32, fontSize: 15 }}>
            We help clients across {suburb.region}.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
            {suburb.nearby.map((s) => {
              const nearbySlug = s.toLowerCase().replace(/\s+/g, "-");
              return (
                <a
                  key={s}
                  href={`/mortgage-broker/${nearbySlug}/`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "10px 22px",
                    background: "#fff",
                    border: "1px solid var(--card-border)",
                    borderRadius: 999,
                    fontSize: 14,
                    color: "var(--color-primary)",
                    textDecoration: "none",
                    fontWeight: 500,
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "var(--color-primary)";
                    el.style.color = "#fff";
                    el.style.borderColor = "var(--color-primary)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "#fff";
                    el.style.color = "var(--color-primary)";
                    el.style.borderColor = "var(--card-border)";
                  }}
                >
                  <IconMapPin size={13} />
                  Mortgage Broker {s}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontSize: 12, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-accent)", margin: "0 0 10px" }}>
            Common questions
          </p>
          <h2 style={{ textAlign: "center", marginBottom: 48 }}>Questions from {suburb.name} buyers</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {faqItems.map(({ q, a }) => (
              <div key={q} style={{ background: "#fff", border: "1px solid var(--card-border)", borderRadius: 14, padding: "22px 26px" }}>
                <h3 style={{ fontSize: 15, margin: "0 0 10px", color: "var(--color-primary)", fontWeight: 600, lineHeight: 1.5 }}>{q}</h3>
                <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.75 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: "var(--color-primary)", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-accent)", margin: "0 0 12px" }}>
            Get started today
          </p>
          <h2 style={{ color: "#fff", marginBottom: 12 }}>Ready to find a better home loan in {suburb.name}?</h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, marginBottom: 28, lineHeight: 1.7 }}>
            Talk to Anita today — free consultation, no obligation, no broker fee.
          </p>
          <a
            href="tel:+61498241696"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 14,
              padding: "14px 28px",
              marginBottom: 28,
              textDecoration: "none",
            }}
          >
            <IconPhone size={22} style={{ color: "var(--color-accent)" }} />
            <span style={{ fontSize: 26, fontWeight: 700, color: "#fff", letterSpacing: "0.02em" }}>0498 241 696</span>
          </a>
          <div className="cta-buttons" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn btn-accent" onClick={openModal} style={{ fontSize: 15, padding: "13px 28px" }}>
              Get a free quote
            </button>
            <a
              className="btn"
              href="mailto:anita@aipfinance.com.au"
              style={{ fontSize: 15, padding: "13px 28px", background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" }}
            >
              Email Anita
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: suburbs.map((s) => ({ params: { suburb: s.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const suburb = getSuburbBySlug(params?.suburb as string);
  if (!suburb) return { notFound: true };
  return { props: { suburb } };
};
