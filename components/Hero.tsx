import { useEnquiry } from "../context/EnquiryContext";

function HeroVisual() {
  const lenders = [
    { name: "ANZ",     img: "/logos/anz-logo.png",     rate: "5.89%", best: true },
    { name: "NAB",     img: "/logos/nab-logo.png",     rate: "6.04%", best: false },
    { name: "Westpac", img: "/logos/westpac-logo.png", rate: "6.19%", best: false },
  ];

  return (
    <div className="hero-visual-card" style={{
      background: "#fff",
      borderRadius: 20,
      padding: "28px",
      boxShadow: "0 24px 64px rgba(0,0,0,0.22)",
      maxWidth: 400,
      width: "100%",
    }}>
      <p style={{ fontSize: 11, fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.12em", margin: "0 0 6px" }}>
        Best rate found
      </p>
      <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 22 }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 600, color: "#0F2B5B", lineHeight: 1 }}>5.89</span>
        <span style={{ fontSize: 20, color: "#0F2B5B", fontWeight: 600 }}>% p.a.</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {lenders.map(({ name, img, rate, best }) => (
          <div key={name} style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 14px",
            background: best ? "#EFF6FF" : "#F8FAFB",
            borderRadius: 10,
            border: best ? "1px solid rgba(15,43,91,0.12)" : "1px solid transparent",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {best && (
                <span style={{
                  fontSize: 9,
                  fontWeight: 700,
                  color: "#D4A017",
                  background: "rgba(212,160,23,0.15)",
                  padding: "2px 7px",
                  borderRadius: 20,
                  letterSpacing: "0.06em",
                }}>BEST</span>
              )}
              <img src={img} alt={name} style={{ height: 20, width: "auto", objectFit: "contain", display: "block" }} />
            </div>
            <span style={{ fontSize: 15, fontWeight: 700, color: best ? "#0F2B5B" : "#94A3B8" }}>{rate}</span>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 20,
        paddingTop: 16,
        borderTop: "1px solid #E2E8F0",
        display: "flex",
        justifyContent: "space-between",
      }}>
        <span style={{ fontSize: 12, color: "#64748B" }}>40+ lenders compared</span>
        <span style={{ fontSize: 12, fontWeight: 700, color: "#D4A017" }}>✓ No broker fee</span>
      </div>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: "#94A3B8", marginTop: 12, lineHeight: 1.6 }}>
        * Rates indicative only. Subject to lender criteria, fees and charges. Accurate as of {new Date().toLocaleString("en-AU", { month: "long", year: "numeric" })}.
      </p>
    </div>
  );
}

export default function Hero() {
  const { openModal } = useEnquiry();

  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy" style={{ animation: "slideInLeft 0.7s cubic-bezier(0.4,0,0.2,1) both" }}>
          <p className="lead" style={{color:'var(--color-accent)'}}>Melbourne mortgage broker</p>
          <h1 style={{color:'#fff'}}>
            Simple home loans that save you money
          </h1>
          <p className="lead-body" style={{color:'rgba(255,255,255,0.8)'}}>
            AIP Finance compares 40+ lenders to find a lower rate for your home loan, refinance or investment — with no broker fee.
          </p>

          <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
            <button className="btn btn-primary" onClick={openModal}>Get a free quote</button>
            <a className="btn" href="tel:+61498241696" style={{ backgroundColor: "var(--color-accent)", color: "#0F2B5B", fontWeight: 700, boxShadow: "0 2px 8px rgba(212,160,23,0.25)" }}>Call now — 0498 241 696</a>
          </div>
        </div>

        <div className="hero-visual" style={{ animation: "slideInRight 0.7s 0.15s cubic-bezier(0.4,0,0.2,1) both" }}>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
