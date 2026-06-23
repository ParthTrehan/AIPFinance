import { useInView } from "./useInView";
import { IconCheck, IconBrandFacebook, IconBrandLinkedin } from "./TablerIcons";

const trustPoints = [
  "Access to 40+ lenders",
  "No cost to you",
  "Melbourne based",
  "Connective Network member",
];

export default function About() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="about" style={{ backgroundColor: "#F8FAFB", padding: "96px 24px" }} className="about-section">
      <div
        ref={ref}
        style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "3fr 2fr", gap: 72, alignItems: "flex-start" }}
        className="about-grid"
      >
        <div style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateX(0)" : "translateX(-24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 20 }}>
            ABOUT ANITA
          </p>
          <h2 style={{ fontSize: "clamp(30px, 3.8vw, 44px)", marginBottom: 28, lineHeight: 1.15 }}>
            A broker who actually <em>listens</em>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#64748B", lineHeight: 1.8, marginBottom: 20 }}>
            Anita Parker Sareen founded AIP Finance with one goal — to make the home loan process simple, transparent, and stress-free for every Australian. With access to 40+ lenders and years of hands-on experience, Anita takes the time to understand your situation before recommending anything.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#64748B", lineHeight: 1.8, marginBottom: 32 }}>
            Whether you're a first home buyer, a seasoned investor, or self-employed, Anita will find the right loan structure for your needs — and be with you every step of the way from application to settlement.
          </p>
          <a href="tel:+61498241696" className="btn btn-primary" style={{ marginTop: 8 }}>
            Call Anita — 0498 241 696
          </a>
        </div>

        <aside style={{
          backgroundColor: "#ffffff",
          border: "1px solid #E2E8F0",
          borderRadius: 24,
          padding: "40px 32px",
          textAlign: "center",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateX(0)" : "translateX(24px)",
          transition: "opacity 0.6s 0.15s ease, transform 0.6s 0.15s ease",
        }}>
          <div style={{ width: 160, height: 160, borderRadius: "50%", overflow: "hidden", margin: "0 auto", border: "4px solid #E2E8F0", boxShadow: "0 4px 20px rgba(15,43,91,0.12)" }}>
            <img src="/anita.jpg" alt="Anita Parker Sareen, Accredited Mortgage Broker Melbourne" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
          </div>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "#0F2B5B", marginTop: 20, marginBottom: 4 }}>
            Anita Parker Sareen
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#64748B", marginBottom: 4 }}>
            Accredited Mortgage Broker
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "var(--color-accent)", fontWeight: 600, marginBottom: 20 }}>
            Cert IV Finance & Mortgage Broking
          </p>
          <div style={{ width: 48, height: 1, backgroundColor: "var(--color-accent)", margin: "0 auto 24px" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
            {trustPoints.map((point) => (
              <div key={point} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <IconCheck size={15} style={{ color: "var(--color-accent)", flexShrink: 0 }} />
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#1E293B", margin: 0 }}>{point}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 18, marginTop: 28, paddingTop: 22, borderTop: "1px solid #E2E8F0" }}>
            <a href="https://www.facebook.com/pg/aipfinance/" target="_blank" rel="noreferrer noopener" aria-label="AIP Finance on Facebook" className="social-icon" style={{ color: "var(--color-primary)" }}>
              <IconBrandFacebook size={24} />
            </a>
            <a href="https://www.linkedin.com/in/anita-parker-sareen-11270a152" target="_blank" rel="noreferrer noopener" aria-label="Anita Parker Sareen on LinkedIn" className="social-icon" style={{ color: "var(--color-primary)" }}>
              <IconBrandLinkedin size={24} />
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
