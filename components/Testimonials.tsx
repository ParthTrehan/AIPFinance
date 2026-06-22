import { useState, useEffect, useCallback } from "react";
import { useInView } from "./useInView";

const testimonials = [
  {
    quote: "Anita is a thorough professional and she really listens to and understands your financial needs. She found us a rate we couldn't have found on our own.",
    author: "Saad Sami",
    initials: "SS",
    service: "Home Loan",
  },
  {
    quote: "Great reliable service, quick and efficient, highly recommend it!!! Anita made the whole process so easy from start to finish.",
    author: "Olesea Spicer",
    initials: "OS",
    service: "Refinancing",
  },
  {
    quote: "Most reliable and quick service for home loan assistance. Always ready to answer any questions any time. Highly recommended.",
    author: "Paresh Vekariya",
    initials: "PV",
    service: "First Home Buyer",
  },
];

const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/search/AIP+Finance+Melbourne";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animating, setAnimating] = useState(false);
  const { ref, inView } = useInView(0.05);

  const goTo = useCallback((index: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 250);
  }, [animating]);

  const next = useCallback(() => goTo((current + 1) % testimonials.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + testimonials.length) % testimonials.length), [current, goTo]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [paused, next]);

  const t = testimonials[current];

  return (
    <section className="testimonials" id="testimonials" style={{ padding: "88px 0" }}>
      <div className="container" ref={ref}>

        {/* Header */}
        <div style={{
          textAlign: "center",
          marginBottom: 48,
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          <p style={{ textTransform: "uppercase", letterSpacing: ".14em", fontSize: 11, fontWeight: 600, color: "var(--color-accent)", margin: "0 0 12px" }}>
            What our clients say
          </p>
          <h2 style={{ marginTop: 0 }}>Real results for <em>real Australians</em></h2>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noreferrer noopener"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginTop: 14,
              backgroundColor: "#fff",
              border: "1px solid #E2E8F0",
              borderRadius: 40,
              padding: "8px 20px",
              boxShadow: "0 1px 6px rgba(15,43,91,0.06)",
              textDecoration: "none",
              transition: "box-shadow 0.2s ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 4px 16px rgba(15,43,91,0.12)")}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 1px 6px rgba(15,43,91,0.06)")}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-label="Google">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 700, color: "#0F2B5B" }}>5.0</span>
            <span style={{ color: "#D4A017", fontSize: 13, letterSpacing: 1 }}>★★★★★</span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#64748B" }}>Google Reviews</span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "var(--color-accent)", fontWeight: 600 }}>↗</span>
          </a>
        </div>

        {/* Carousel */}
        <div
          style={{ position: "relative", maxWidth: 760, margin: "0 auto" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Card */}
          <div
            style={{
              backgroundColor: "#fff",
              border: "1px solid #E2E8F0",
              borderRadius: 24,
              padding: "48px 56px",
              textAlign: "center",
              boxShadow: "0 4px 24px rgba(15,43,91,0.07)",
              opacity: animating ? 0 : 1,
              transform: animating ? "scale(0.98)" : "scale(1)",
              transition: "opacity 0.25s ease, transform 0.25s ease",
              minHeight: 260,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="testimonial-card-inner"
          >
            <div style={{ color: "var(--color-accent)", fontSize: 22, letterSpacing: 3, marginBottom: 24 }}>★★★★★</div>
            <blockquote style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(17px, 2vw, 21px)",
              fontStyle: "italic",
              color: "#1E293B",
              lineHeight: 1.65,
              margin: "0 0 32px",
              maxWidth: 600,
            }}>
              "{t.quote}"
            </blockquote>
            <div style={{ display: "flex", alignItems: "center", gap: 14, justifyContent: "center" }}>
              <div style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: 700,
                fontSize: 15,
                flexShrink: 0,
              }}>
                {t.initials}
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 15, color: "#1E293B" }}>{t.author}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#64748B", marginTop: 2 }}>
                  {t.service} · <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>Verified Google review</span>
                </div>
              </div>
            </div>
          </div>

          {/* Prev / Next */}
          <button
            onClick={prev}
            aria-label="Previous review"
            style={{
              position: "absolute",
              left: -20,
              top: "50%",
              transform: "translateY(-50%)",
              width: 40,
              height: 40,
              borderRadius: "50%",
              backgroundColor: "#fff",
              border: "1px solid #E2E8F0",
              boxShadow: "0 2px 8px rgba(15,43,91,0.1)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              color: "var(--color-primary)",
              transition: "box-shadow 0.2s ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 4px 16px rgba(15,43,91,0.18)")}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 2px 8px rgba(15,43,91,0.1)")}
            className="carousel-arrow"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next review"
            style={{
              position: "absolute",
              right: -20,
              top: "50%",
              transform: "translateY(-50%)",
              width: 40,
              height: 40,
              borderRadius: "50%",
              backgroundColor: "#fff",
              border: "1px solid #E2E8F0",
              boxShadow: "0 2px 8px rgba(15,43,91,0.1)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              color: "var(--color-primary)",
              transition: "box-shadow 0.2s ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 4px 16px rgba(15,43,91,0.18)")}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 2px 8px rgba(15,43,91,0.1)")}
            className="carousel-arrow"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 24 }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to review ${i + 1}`}
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: i === current ? "var(--color-primary)" : "#CBD5E1",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 36 }}>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noreferrer noopener"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              color: "var(--color-primary)",
              fontWeight: 600,
              textDecoration: "none",
              borderBottom: "1px solid rgba(15,43,91,0.25)",
              paddingBottom: 1,
            }}
          >
            See all Google reviews →
          </a>
        </div>

      </div>
    </section>
  );
}
