import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { suburbs, getSuburbBySlug, Suburb } from "../../data/suburbs";
import { useEnquiry } from "../../context/EnquiryContext";

const SITE_URL = "https://aipfinance.com.au";

const services = [
  { title: "First Home Buyer Loans", desc: "We guide first home buyers through every step — from borrowing capacity to settlement." },
  { title: "Refinancing", desc: "Already have a loan? We compare your current rate against 40+ lenders to find savings." },
  { title: "Investment Property Loans", desc: "Build your portfolio with the right loan structure for maximum returns." },
  { title: "Low Doc Loans", desc: "Self-employed? We find lenders who understand your income structure." },
  { title: "Business & Commercial", desc: "Commercial property and business finance tailored to your situation." },
];

export default function SuburbPage({ suburb }: { suburb: Suburb }) {
  const { openModal } = useEnquiry();
  const pageUrl = `${SITE_URL}/mortgage-broker/${suburb.slug}/`;

  const schema = {
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
  };

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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>

      <Header />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0F2B5B 0%, #1a3a7a 100%)", padding: "96px 0 64px" }}>
        <div className="container" style={{ maxWidth: 760, textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-accent)", margin: "0 0 12px" }}>
            {suburb.region}
          </p>
          <h1 style={{ color: "#fff", marginBottom: 16, fontSize: "clamp(28px, 4.5vw, 48px)" }}>
            Mortgage Broker in {suburb.name}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 18, lineHeight: 1.7, maxWidth: 600, margin: "0 auto 32px" }}>
            AIP Finance helps {suburb.buyerType} in {suburb.name} compare 40+ lenders to find a better home loan — with no broker fee.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn btn-primary" onClick={openModal} style={{ fontSize: 16 }}>Get a free quote</button>
            <a className="btn btn-accent" href="tel:+61498241696" style={{ fontSize: 16 }}>Call 0498 241 696</a>
          </div>
        </div>
      </section>

      {/* Why AIP Finance */}
      <section style={{ padding: "72px 0", background: "#fff" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <h2 style={{ textAlign: "center", marginBottom: 8 }}>Why {suburb.name} residents choose AIP Finance</h2>
          <p style={{ textAlign: "center", color: "var(--muted)", marginBottom: 48, fontSize: 16 }}>
            We know {suburb.region} and what local {suburb.buyerType} need.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
            {[
              { icon: "✓", title: "No broker fee", desc: "Our service is completely free to you. We're paid by the lender." },
              { icon: "🏦", title: "40+ lenders", desc: "We compare ANZ, NAB, Westpac, Macquarie and 36+ more." },
              { icon: "⚡", title: "Fast pre-approval", desc: "Get pre-approved in as little as 48 hours." },
              { icon: "📍", title: "Local knowledge", desc: `We understand ${suburb.name}'s property market and what lenders look for.` },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="card" style={{ textAlign: "center", padding: 28 }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
                <h3 style={{ fontSize: 16, marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "72px 0", background: "var(--neutral-100)" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <h2 style={{ textAlign: "center", marginBottom: 8 }}>Our services in {suburb.name}</h2>
          <p style={{ textAlign: "center", color: "var(--muted)", marginBottom: 48, fontSize: 16 }}>Whatever your situation, we have a solution.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {services.map(({ title, desc }) => (
              <div key={title} className="card" style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: "20px 24px" }}>
                <span style={{ color: "var(--color-accent)", fontWeight: 700, fontSize: 18, flexShrink: 0 }}>✓</span>
                <div>
                  <h3 style={{ fontSize: 16, margin: "0 0 4px" }}>{title}</h3>
                  <p style={{ fontSize: 14, color: "var(--muted)", margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby suburbs */}
      <section style={{ padding: "56px 0", background: "#fff" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <h2 style={{ textAlign: "center", marginBottom: 8 }}>Also serving nearby suburbs</h2>
          <p style={{ textAlign: "center", color: "var(--muted)", marginBottom: 32, fontSize: 16 }}>
            We help clients across {suburb.region}.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            {suburb.nearby.map((s) => {
              const nearbySlug = s.toLowerCase().replace(/\s+/g, "-");
              return (
                <a
                  key={s}
                  href={`/mortgage-broker/${nearbySlug}/`}
                  style={{ padding: "8px 20px", border: "1px solid var(--card-border)", borderRadius: 20, fontSize: 14, color: "var(--color-primary)", textDecoration: "none", fontWeight: 500, transition: "all 0.15s ease" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--color-primary)"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "var(--color-primary)"; }}
                >
                  Mortgage Broker {s}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "72px 0", background: "var(--neutral-100)" }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <h2 style={{ textAlign: "center", marginBottom: 48 }}>Common questions from {suburb.name} buyers</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { q: `Do I pay anything for a mortgage broker in ${suburb.name}?`, a: "No — AIP Finance charges zero broker fees. We're paid a commission by the lender you choose, at no extra cost to you." },
              { q: `How many lenders does AIP Finance compare for ${suburb.name} buyers?`, a: "We compare 40+ lenders including the major banks (ANZ, NAB, Westpac, CBA) and specialist lenders like Macquarie, Bankwest, and more." },
              { q: `How quickly can I get pre-approved in ${suburb.name}?`, a: "Most clients get pre-approval within 48 hours. We do all the paperwork so you can focus on finding your property." },
              { q: "Can you help first home buyers?", a: `Yes — we specialise in helping first home buyers in ${suburb.name} understand their borrowing capacity, government grants, and find the right loan.` },
              { q: "Can I refinance my existing loan?", a: "Absolutely. If you already own in or around ${suburb.name}, we can review your current rate and compare it against 40+ lenders to find potential savings." },
            ].map(({ q, a }) => (
              <div key={q} className="card" style={{ padding: "20px 24px" }}>
                <h3 style={{ fontSize: 15, margin: "0 0 8px", color: "var(--color-primary)" }}>{q}</h3>
                <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.7 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "72px 0", background: "var(--color-primary)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 640 }}>
          <h2 style={{ color: "#fff", marginBottom: 12 }}>Ready to find a better home loan in {suburb.name}?</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, marginBottom: 32 }}>
            Talk to Anita today — free consultation, no obligation, no broker fee.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn btn-accent" onClick={openModal} style={{ fontSize: 16 }}>Get a free quote</button>
            <a className="btn" href="tel:+61498241696" style={{ fontSize: 16, background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" }}>Call 0498 241 696</a>
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
