import { IconBrandFacebook, IconBrandLinkedin } from "./TablerIcons";

const suburbs = [
  "Richmond", "South Yarra", "Carlton", "Fitzroy", "Hawthorn",
  "Box Hill", "Doncaster", "Glen Waverley", "Coburg", "Preston",
  "Bundoora", "Werribee", "Point Cook", "Hoppers Crossing", "Dandenong",
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0F2B5B", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "56px 24px 40px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Top row */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 32, marginBottom: 36 }}>
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: "0.12em", textTransform: "uppercase", color: "#ffffff", margin: "0 0 8px" }}>
              AIP <span style={{ color: "var(--color-accent)" }}>Finance</span>
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#94A3B8", margin: "0 0 16px", maxWidth: 280 }}>
              Melbourne's trusted mortgage broker. No fee, no pressure — just the right loan for you.
            </p>
            <div style={{ display: "flex", gap: 14 }}>
              <a href="https://www.facebook.com/aipfinance/" target="_blank" rel="noreferrer noopener" aria-label="AIP Finance on Facebook" className="social-icon" style={{ color: "var(--color-accent)" }}>
                <IconBrandFacebook size={22} />
              </a>
              <a href="https://www.linkedin.com/in/anita-parker-sareen-11270a152" target="_blank" rel="noreferrer noopener" aria-label="Anita Parker Sareen on LinkedIn" className="social-icon" style={{ color: "var(--color-accent)" }}>
                <IconBrandLinkedin size={22} />
              </a>
            </div>
          </div>

          <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-accent)", margin: "0 0 14px" }}>Services</p>
              {["Home Loans", "Refinancing", "Investment Loans", "Low Doc Loans", "Commercial"].map(s => (
                <a key={s} href="#services" style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#94A3B8", textDecoration: "none", marginBottom: 8, transition: "color 0.15s ease" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#94A3B8")}
                >{s}</a>
              ))}
            </div>
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-accent)", margin: "0 0 14px" }}>Contact</p>
              <a href="tel:+61498241696" style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#94A3B8", textDecoration: "none", marginBottom: 8 }}>0498 241 696</a>
              <a href="mailto:anita@aipfinance.com.au" style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#94A3B8", textDecoration: "none", marginBottom: 8 }}>anita@aipfinance.com.au</a>
              <a href="#faq" style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#94A3B8", textDecoration: "none", marginBottom: 8 }}>FAQ</a>
              <a href="#about" style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#94A3B8", textDecoration: "none", marginBottom: 8 }}>About Anita</a>
            </div>
          </div>
        </div>

        {/* Suburbs */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, marginBottom: 24 }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#64748B", margin: "0 0 10px" }}>
            Serving Melbourne suburbs
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#475569", margin: 0, lineHeight: 1.8 }}>
            {suburbs.join(" · ")} · and all of Victoria
          </p>
        </div>

        {/* Legal */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 22 }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#475569", lineHeight: 1.8, margin: "0 0 12px" }}>
            AIP Finance Pty Ltd ABN 24 687 349 387 is a corporate credit representative (#483455) of Connective Credit Services Pty Ltd ABN 51 143 651 496 Australian Credit Licence #389328. © {new Date().getFullYear()} AIP Finance. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <a href="/privacy-policy" style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#64748B", textDecoration: "underline" }}>Privacy Policy</a>
            <a href="/credit-guide" style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#64748B", textDecoration: "underline" }}>Credit Guide</a>
            <a href="/complaints" style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#64748B", textDecoration: "underline" }}>Complaints Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
