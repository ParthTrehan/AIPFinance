import { useInView } from "./useInView";
import { IconBuildingBank, IconCurrencyDollar, IconMapPin, IconBolt } from "./TablerIcons";

const items = [
  { Icon: IconBuildingBank, label: "40+ lenders", desc: "We search them all" },
  { Icon: IconCurrencyDollar, label: "No cost to you", desc: "Broker fee free" },
  { Icon: IconMapPin, label: "Melbourne based", desc: "Local expertise" },
  { Icon: IconBolt, label: "48hr pre-approval", desc: "Average turnaround time" },
];

export default function TrustBar() {
  const { ref, inView } = useInView(0.2);

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "36px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-accent)", margin: "0 0 8px" }}>
            AIP Finance at a glance
          </p>
          <h2 style={{ margin: 0, fontSize: "clamp(22px, 3vw, 30px)" }}>Fast, local, and free to you</h2>
        </div>
        <div
          ref={ref}
          style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}
          className="trust-bar-grid"
        >
          {items.map(({ Icon, label, desc }, index) => (
            <div
              key={label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "24px 16px",
                borderRight: index < items.length - 1 ? "1px solid #E2E8F0" : "none",
                opacity: inView ? undefined : 0,
                animation: inView ? `fadeUp 0.5s cubic-bezier(0.4,0,0.2,1) ${index * 80}ms both` : undefined,
              }}
            >
              <div style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: "rgba(0,184,148,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-primary)", marginBottom: 14 }}>
                <Icon size={20} />
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600, color: "var(--color-primary)", marginBottom: 6 }}>
                {label}
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#64748B", lineHeight: 1.6 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
