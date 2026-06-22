export default function Booking() {
  return (
    <section id="booking" className="booking-section" style={{ backgroundColor: "#ffffff", padding: "96px 24px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 16 }}>
            GET STARTED
          </p>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", lineHeight: 1.15, marginBottom: 14 }}>
            Book your free <em>consultation</em>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#64748B", lineHeight: 1.8 }}>
            No cost. No obligation. Just a 30-minute call to explore your options.
          </p>
        </div>

        <div style={{ border: "1px solid #E2E8F0", borderRadius: 24, overflow: "hidden" }}>
          <iframe
            src="https://calendly.com/aipfinance/consultation?hide_gdpr_banner=1&primary_color=D4A017"
            width="100%"
            height="700"
            style={{ border: "none", display: "block" }}
            title="Book a free consultation with AIP Finance"
          />
        </div>
      </div>
    </section>
  );
}
