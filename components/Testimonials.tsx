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
