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
      "Investment Property Loans",
      "Tax Effective Loan Structure",
      "SMSF Property Finance",
      "Portfolio Diversification",
      "Equity Release",
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
      "Home Equity Access",
    ],
  },
  {
    Icon: IconWallet,
    title: "Other",
    items: ["Vehicle Finance", "Personal Loans", "Equipment Finance", "Commercial Property", "Business Loans"],
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
            color: "var(--color-accent)",
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
                minHeight: 520,
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
                backgroundColor: "rgba(0,184,148,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-primary)",
                marginBottom: 16,
                flexShrink: 0,
              }}>
                <Icon size={22} />
              </div>

              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                fontWeight: 700,
                color: "var(--color-primary)",
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
                      color: "var(--color-accent)",
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
                  className="btn btn-primary"
                  style={{
                    fontSize: 13,
                  }}
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
