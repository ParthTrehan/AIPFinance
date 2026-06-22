import { useInView } from "./useInView";

const testimonials = [
  {
    quote: "Anita is a thorough professional and she really listens to and understands your financial needs.",
    author: "Saad Sami",
    initials: "SS",
  },
  {
    quote: "Great reliable service, quick and efficient, highly recommend it!!!",
    author: "Olesea Spicer",
    initials: "OS",
  },
  {
    quote: "Most reliable and quick service for home loan assistance. Always ready to answer any questions any time. Highly recommended.",
    author: "Paresh Vekariya",
    initials: "PV",
  },
];

export default function Testimonials() {
  const { ref, inView } = useInView(0.05);

  return (
    <section className="testimonials" id="testimonials">
      <div className="container" ref={ref}>
        <div style={{
          textAlign: "center",
          marginBottom: 36,
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          <p style={{ textTransform: "uppercase", letterSpacing: ".12em", fontSize: 12, color: "var(--muted)", margin: 0 }}>What our clients say</p>
          <h2 style={{ marginTop: 8 }}>Real results for <em>real Australians</em></h2>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginTop: 12, backgroundColor: "#fff", border: "1px solid #E2E8F0", borderRadius: 40, padding: "8px 20px", boxShadow: "0 1px 6px rgba(15,43,91,0.06)" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" aria-label="Google"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 700, color: "#0F2B5B" }}>5.0</span>
            <span style={{ color: "#D4A017", fontSize: 13, letterSpacing: 1 }}>★★★★★</span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#64748B" }}>Google Reviews</span>
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map(({ quote, author, initials }, i) => (
            <article
              className="testimonial"
              key={author}
              style={{
                opacity: inView ? undefined : 0,
                animation: inView ? `fadeUp 0.55s cubic-bezier(0.4,0,0.2,1) ${i * 100}ms both` : undefined,
              }}
            >
              <div style={{ color: "var(--color-accent)", fontWeight: 700, letterSpacing: ".04em", fontSize: 14, marginBottom: 12 }}>★★★★★</div>
              <blockquote style={{ marginTop: 0, flex: 1, fontStyle: "italic", color: "#475569" }}>{quote}</blockquote>
              <footer style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--card-border)" }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundImage: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 14,
                  flexShrink: 0,
                }}>{initials}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: "var(--text)" }}>{author}</div>
                  <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>Verified client</div>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
