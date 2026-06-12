import {
  IconBuildingBank,
  IconCurrencyDollar,
  IconMapPin,
  IconBolt,
} from "./TablerIcons";

const items = [
  {
    Icon: IconBuildingBank,
    label: "40+ lenders",
    desc: "We search them all",
  },
  {
    Icon: IconCurrencyDollar,
    label: "No cost to you",
    desc: "Broker fee free",
  },
  {
    Icon: IconMapPin,
    label: "Melbourne based",
    desc: "Local expertise",
  },
  {
    Icon: IconBolt,
    label: "Fast approval",
    desc: "Pre-approval in days",
  },
];

export default function TrustBar() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "48px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            borderTop: "1px solid #E2E8F0",
            borderBottom: "1px solid #E2E8F0",
          }}
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
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  backgroundColor: "#EFF6FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0F2B5B",
                  marginBottom: 14,
                }}
              >
                <Icon size={20} />
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#0F2B5B",
                  marginBottom: 6,
                }}
              >
                {label}
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  color: "#64748B",
                  lineHeight: 1.6,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive rules moved to globals.css to avoid hydration mismatches */}
    </section>
  );
}
