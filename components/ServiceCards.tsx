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
    <section style={{ backgroundColor: "#ffffff", padding: "72px 24px 48px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#D4A017",
            marginBottom: 12,
          }}>
            WHAT WE OFFER
          </p>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 38px)", lineHeight: 1.15, margin: 0 }}>
            Services tailored to <em>your situation</em>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: 20,
          }}
          className="service-cards-grid"
        >
          {cards.map(({ Icon, title, items }) => (
            <div
              key={title}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #E2E8F0",
                borderRadius: 16,
                padding: "28px 24px 24px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 1px 8px rgba(15,43,91,0.07)",
                transition: "box-shadow 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "0 8px 28px rgba(15,43,91,0.13)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "0 1px 8px rgba(15,43,91,0.07)";
                el.style.transform = "translateY(0)";
              }}
            >
              <div style={{
                width: 46,
                height: 46,
                borderRadius: 12,
                backgroundColor: "#EFF6FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0F2B5B",
                marginBottom: 16,
                flexShrink: 0,
              }}>
                <Icon size={22} />
              </div>

              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                fontWeight: 700,
                color: "#0F2B5B",
                marginBottom: 4,
              }}>
                {title}
              </p>

              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                color: "#94A3B8",
                fontWeight: 600,
                marginBottom: 10,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}>
                Includes
              </p>

              <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}>
                {items.map((item) => (
                  <li key={item} style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    color: "#475569",
                    lineHeight: 1.5,
                    paddingLeft: 12,
                    position: "relative",
                  }}>
                    <span style={{
                      position: "absolute",
                      left: 0,
                      color: "#D4A017",
                      fontWeight: 700,
                    }}>–</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div style={{
                marginTop: 20,
                paddingTop: 16,
                borderTop: "1px solid #F1F5F9",
              }}>
                <a
                  href="#booking"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
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
                  Book Now <IconArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
