const testimonials = [
  {
    quote: "Anita is a thorough professional and she really listens to and understands your financial needs.",
    author: "Saad Sami",
  },
  {
    quote: "Great reliable service, quick and efficient, highly recommend it!!!",
    author: "Olesea Spicer",
  },
  {
    quote: "Most reliable and quick service for home loan assistance. Always ready to answer any questions any time. Highly recommended.",
    author: "Paresh Vekariya",
  },
];

export default function Testimonials() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#D4A017",
              marginBottom: 16,
            }}
          >
            WHAT OUR CLIENTS SAY
          </p>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", lineHeight: 1.12 }}>
            Real results for <em>real Australians</em>
          </h2>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 24 }}
          className="testimonials-grid"
        >
          {testimonials.map(({ quote, author }) => (
            <article
              key={author}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #E2E8F0",
                borderRadius: 24,
                padding: "40px 32px",
                display: "flex",
                flexDirection: "column",
                minHeight: 320,
              }}
            >
              <p style={{ color: "#D4A017", fontSize: 14, letterSpacing: "0.18em", marginBottom: 18 }}>
                ★★★★★
              </p>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 60,
                  lineHeight: 0.8,
                  color: "#D4A017",
                  margin: 0,
                  opacity: 0.8,
                }}
              >
                &ldquo;
              </p>
              <blockquote
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontSize: 18,
                  color: "#1E293B",
                  lineHeight: 1.75,
                  margin: "16px 0 0",
                  flex: 1,
                }}
              >
                {quote}
              </blockquote>
              <div style={{ marginTop: 32 }}>
                <div style={{ width: 40, height: 2, backgroundColor: "#D4A017", marginBottom: 12 }} />
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: 14,
                    color: "#0F2B5B",
                    margin: 0,
                  }}
                >
                  {author}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Responsive rules moved to globals.css to avoid hydration mismatches */}
    </section>
  );
}
