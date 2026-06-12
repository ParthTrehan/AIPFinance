import { IconCheck, IconBrandFacebook, IconBrandLinkedin } from "./TablerIcons";

const trustPoints = [
  "Access to 40+ lenders",
  "No cost to you",
  "Melbourne based",
];

export default function About() {
  return (
    <section style={{ backgroundColor: "#F8FAFB", padding: "96px 24px" }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "3fr 2fr",
          gap: 72,
          alignItems: "flex-start",
        }}
        className="about-grid"
      >
        <div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#D4A017",
              marginBottom: 20,
            }}
          >
            ABOUT ANITA
          </p>
          <h2 style={{ fontSize: "clamp(30px, 3.8vw, 44px)", marginBottom: 28, lineHeight: 1.15 }}>
            A broker who actually <em>listens</em>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#64748B", lineHeight: 1.8, marginBottom: 20 }}>
            Anita Parker Sareen founded AIP Finance with one goal — to make the home loan process simple, transparent, and stress-free for every Australian. With access to 40+ lenders and years of hands-on experience, Anita takes the time to understand your situation before recommending anything.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#64748B", lineHeight: 1.8, marginBottom: 26 }}>
            Whether you're a first home buyer, a seasoned investor, or self-employed, Anita will find the right loan structure for your needs — and be with you every step of the way from application to settlement.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#94A3B8", lineHeight: 1.8, marginBottom: 32 }}>
            AIP Finance Pty Ltd ABN 24 687 349 387 is a corporate credit representative (#483455) of Connective Credit Services Pty Ltd ABN 51 143 651 496 Australian Credit Licence #389328.
          </p>
          <a
            href="#booking"
            style={{
              display: "inline-block",
              backgroundColor: "#0F2B5B",
              color: "#ffffff",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 15,
              padding: "14px 30px",
              borderRadius: 10,
              textDecoration: "none",
              transition: "background-color 0.15s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#0a1f44";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#0F2B5B";
            }}
          >
            Book a free call with Anita
          </a>
        </div>

        <aside
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #E2E8F0",
            borderRadius: 24,
            padding: "40px 32px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              backgroundColor: "#0F2B5B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 20, color: "#ffffff" }}>
              APS
            </span>
          </div>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "#0F2B5B", marginTop: 18, marginBottom: 4 }}>
            Anita Parker Sareen
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#64748B", marginBottom: 20 }}>
            Accredited Mortgage Broker
          </p>
          <div style={{ width: 48, height: 1, backgroundColor: "#D4A017", margin: "0 auto 26px" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
            {trustPoints.map((point) => (
              <div key={point} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <IconCheck size={16} style={{ color: "#D4A017" }} />
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#1E293B", margin: 0 }}>
                  {point}
                </p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 18, marginTop: 30, paddingTop: 22, borderTop: "1px solid #E2E8F0" }}>
            <a
              href="https://www.facebook.com/pg/aipfinance/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Facebook"
              style={{ color: "#0F2B5B", transition: "color 0.15s ease" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#D4A017";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#0F2B5B";
              }}
            >
              <IconBrandFacebook size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/anita-parker-sareen-11270a152"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              style={{ color: "#0F2B5B", transition: "color 0.15s ease" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#D4A017";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#0F2B5B";
              }}
            >
              <IconBrandLinkedin size={24} />
            </a>
          </div>
        </aside>
      </div>

      {/* Responsive rules moved to globals.css to avoid hydration mismatches */}
    </section>
  );
}
