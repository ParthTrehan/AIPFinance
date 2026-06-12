import { IconHome, IconTrendingUp, IconRefresh, IconWallet, IconArrowRight } from "./TablerIcons";

const cards = [
  {
    Icon: IconHome,
    title: "Home Loans",
    items: [
      "1st Home Buyers",
      "Construction Loans",
      "Bridging Loans",
      "Upgrading / Downsizing",
      "Self Employed",
    ],
  },
  {
    Icon: IconTrendingUp,
    title: "Investments",
    items: [
      "Tax Effective Loan Structure for Investment Property Loans",
      "SMSF",
    ],
  },
  {
    Icon: IconRefresh,
    title: "Refinance",
    items: [
      "Analysis of current loans",
      "Comparison of other possible options",
      "Consideration of desired goals and outcomes",
      "Debt Consolidation",
    ],
  },
  {
    Icon: IconWallet,
    title: "Other",
    items: ["Vehicle Finance", "Personal Loans", "Debt Consolidation"],
  },
];

export default function ServiceCards() {
  return (
    <section style={{ backgroundColor: "#F8FAFB", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
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
            WHAT WE OFFER
          </p>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", lineHeight: 1.15 }}>
            Services tailored to <em>your situation</em>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: 24,
          }}
          className="service-cards-grid"
        >
          {cards.map(({ Icon, title, items }) => (
            <div
              key={title}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #E2E8F0",
                borderRadius: 20,
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 2px 12px rgba(15,43,91,0.06)",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  backgroundColor: "#EFF6FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0F2B5B",
                  marginBottom: 22,
                }}
              >
                <Icon size={24} />
              </div>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#0F2B5B",
                  marginBottom: 14,
                }}
              >
                {title}
              </p>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  color: "#94A3B8",
                  fontWeight: 500,
                  marginBottom: 10,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Includes:
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 14,
                      color: "#475569",
                      lineHeight: 1.5,
                      paddingLeft: 14,
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "#D4A017",
                        fontWeight: 700,
                      }}
                    >
                      –
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 28,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#0F2B5B",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#D4A017";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#0F2B5B";
                }}
              >
                Read More <IconArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
