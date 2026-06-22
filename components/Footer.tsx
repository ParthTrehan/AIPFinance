import { IconBrandFacebook, IconBrandLinkedin } from "./TablerIcons";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0F2B5B", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "56px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 18,
            marginBottom: 24,
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: 16,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#ffffff",
              margin: 0,
            }}
          >
            AIP FINANCE
          </p>
          <div style={{ display: "flex", gap: 18 }}>
            <a
              href="https://www.facebook.com/pg/aipfinance/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Facebook"
              className="social-icon"
              style={{ color: "var(--color-accent)" }}
            >
              <IconBrandFacebook size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/anita-parker-sareen-11270a152"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="social-icon"
              style={{ color: "var(--color-accent)" }}
            >
              <IconBrandLinkedin size={24} />
            </a>
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 32px", color: "#94A3B8", fontFamily: "'Inter', sans-serif", fontSize: 14 }}>
          <a href="tel:+61498241696" style={{ color: "#94A3B8", textDecoration: "none" }}>
            +61 498 241 696
          </a>
          <a href="mailto:anita@aipfinance.com.au" style={{ color: "#94A3B8", textDecoration: "none" }}>
            anita@aipfinance.com.au
          </a>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 22, marginTop: 28 }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#64748B", lineHeight: 1.8, margin: 0 }}>
            AIP Finance Pty Ltd ABN 24 687 349 387 is a corporate credit representative (#483455) of Connective Credit Services Pty Ltd ABN 51 143 651 496 Australian Credit Licence #389328. © 2025 AIP Finance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
