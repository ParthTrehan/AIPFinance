import { useInView } from "./useInView";
import { IconHome, IconRefresh, IconBriefcase } from "./TablerIcons";

const cards = [
  { Icon: IconHome, title: "Home loans", desc: "First home & investment" },
  { Icon: IconRefresh, title: "Refinancing", desc: "Save thousands today" },
  { Icon: IconBriefcase, title: "Business loans", desc: "Commercial & equipment" },
];

export default function IntroStory() {
  const { ref, inView } = useInView(0.1);

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "64px 24px" }}>
      <div
        ref={ref}
        style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "3fr 2fr", gap: 72, alignItems: "flex-start" }}
        className="intro-story-grid"
      >
        <div style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateX(0)" : "translateX(-24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 20 }}>
            YOUR MELBOURNE MORTGAGE BROKER
          </p>
          <h2 style={{ fontSize: "clamp(30px, 3.8vw, 44px)", marginBottom: 28, lineHeight: 1.15 }}>
            We know the <em>market</em> so you don't have to
          </h2>
          <div style={{ color: "#64748B", fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
            <p style={{ marginBottom: 20 }}>
              The Melbourne home loan market can be overwhelming — even for experienced borrowers. There's comparing rates, understanding lender policies, managing paperwork, and negotiating terms. Add in constantly changing interest rates and it becomes a full-time job just to find the right loan.
            </p>
            <p>
              Let AIP Finance make it simple. With access to 40+ lenders and years of experience helping Melbourne families and investors, Anita handles everything — so you just focus on moving forward.
            </p>
          </div>
          <a href="tel:+61498241696" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
            Call now — 0498 241 696
          </a>
        </div>

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 18,
          opacity: inView ? 1 : 0,
          transform: inView ? "translateX(0)" : "translateX(24px)",
          transition: "opacity 0.6s 0.15s ease, transform 0.6s 0.15s ease",
        }}>
          {cards.map(({ Icon, title, desc }) => (
            <div key={title} style={{ backgroundColor: "#ffffff", border: "1px solid #E2E8F0", borderRadius: 20, padding: "24px", display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, backgroundColor: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center", color: "#0F2B5B", flexShrink: 0 }}>
                <Icon size={20} />
              </div>
              <div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, fontWeight: 600, color: "#0F2B5B", marginBottom: 6 }}>{title}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#64748B", lineHeight: 1.7 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
