import { useInView } from "./useInView";
import { useEnquiry } from "../context/EnquiryContext";

const steps = [
  {
    step: "01",
    title: "Tell us your situation",
    desc: "A free call or quick enquiry form — no jargon, no commitment.",
  },
  {
    step: "02",
    title: "We search 40+ lenders",
    desc: "Anita compares rates, fees and policies across every major bank and non-bank lender.",
  },
  {
    step: "03",
    title: "Get a clear recommendation",
    desc: "A plain-English side-by-side comparison with our best pick — no pressure to proceed.",
  },
  {
    step: "04",
    title: "We handle everything to settlement",
    desc: "Paperwork, lender negotiations, follow-ups — Anita manages it all so you don't have to.",
  },
];

export default function HowItWorks() {
  const { ref, inView } = useInView(0.1);
  const { openModal } = useEnquiry();

  return (
    <section id="how-it-works" style={{ backgroundColor: "#fff", padding: "88px 24px" }}>
      <div ref={ref} style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{
          textAlign: "center",
          marginBottom: 56,
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 12 }}>
            HOW IT WORKS
          </p>
          <h2 style={{ fontSize: "clamp(26px, 3.2vw, 38px)", lineHeight: 1.15, margin: 0 }}>
            From enquiry to settlement — <em>we handle it all</em>
          </h2>
        </div>

        {/* 2×2 grid — far more breathing room than 4 columns */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px 64px" }} className="how-steps-grid">
          {steps.map(({ step, title, desc }, i) => (
            <div
              key={step}
              style={{
                display: "flex",
                gap: 20,
                alignItems: "flex-start",
                opacity: inView ? undefined : 0,
                animation: inView ? `fadeUp 0.55s cubic-bezier(0.4,0,0.2,1) ${i * 100}ms both` : undefined,
              }}
            >
              {/* Circle number */}
              <div style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                backgroundColor: "var(--color-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 700, color: "var(--color-accent)" }}>{step}</span>
              </div>
              {/* Text */}
              <div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--color-primary)", marginBottom: 8, lineHeight: 1.3 }}>{title}</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#64748B", lineHeight: 1.75, margin: 0 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          textAlign: "center",
          marginTop: 52,
          opacity: inView ? 1 : 0,
          transition: "opacity 0.6s 0.45s ease",
        }}>
          <button onClick={openModal} className="btn btn-primary" style={{ fontSize: 15 }}>
            Get started — it's free
          </button>
        </div>
      </div>
    </section>
  );
}
