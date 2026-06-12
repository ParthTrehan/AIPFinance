const stats = [
  {
    value: "40+",
    label: "Lenders compared",
    sub: "Every major Australian lender",
  },
  {
    value: "$0",
    label: "Cost to you",
    sub: "Broker fees paid by lenders",
  },
  {
    value: "5★",
    label: "Client rating",
    sub: "Across all reviews",
  },
  {
    value: "48hrs",
    label: "Pre-approval",
    sub: "Average turnaround time",
  },
];

export default function StatsRow() {
  return (
    <section style={{ backgroundColor: "#0F2B5B", padding: "72px 24px" }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: 0,
        }}
        className="stats-counter-grid"
      >
        {stats.map(({ value, label, sub }, index) => (
          <div
            key={label}
            style={{
              textAlign: "center",
              padding: "24px 16px",
              borderRight: index < stats.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
            }}
          >
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 52,
                fontWeight: 600,
                color: "#D4A017",
                margin: 0,
                lineHeight: 1,
              }}
            >
              {value}
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                color: "#ffffff",
                fontWeight: 600,
                margin: "14px 0 8px",
              }}
            >
              {label}
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                color: "#94A3B8",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              {sub}
            </p>
          </div>
        ))}
      </div>

      {/* Responsive rules moved to globals.css to avoid hydration mismatches */}
    </section>
  );
}
