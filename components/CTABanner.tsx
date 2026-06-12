export default function CTABanner() {
  return (
    <section style={{ backgroundColor: "#0F2B5B", padding: "80px 24px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#D4A017",
              margin: 0,
            }}
          >
            READY TO TALK
          </p>
        </div>
        <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", color: "#ffffff", marginBottom: 22, lineHeight: 1.15 }}>
          Ready to find a better <em>home loan?</em>
        </h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#94A3B8", lineHeight: 1.8, marginBottom: 38 }}>
          Whether you're buying, refinancing, or investing — let's talk. No cost, no obligation, just honest advice.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
          <a
            href="#booking"
            style={{
              backgroundColor: "#D4A017",
              color: "#ffffff",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 15,
              padding: "15px 32px",
              borderRadius: 10,
              textDecoration: "none",
              transition: "background-color 0.15s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#b8890e";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#D4A017";
            }}
          >
            Book your free consultation
          </a>
          <a
            href="tel:+61498241696"
            style={{
              border: "2px solid rgba(255,255,255,0.35)",
              color: "#ffffff",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 15,
              padding: "15px 32px",
              borderRadius: 10,
              textDecoration: "none",
              transition: "border-color 0.15s ease, background-color 0.15s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.7)";
              el.style.backgroundColor = "rgba(255,255,255,0.08)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.35)";
              el.style.backgroundColor = "transparent";
            }}
          >
            Call +61 498 241 696
          </a>
        </div>
      </div>
    </section>
  );
}
