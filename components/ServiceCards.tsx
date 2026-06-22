import { useInView } from "./useInView";
import { IconHome, IconTrendingUp, IconRefresh, IconWallet, IconCheck } from "./TablerIcons";
import { useEnquiry } from "../context/EnquiryContext";

const cards = [
  {
    Icon: IconHome,
    title: "Home Loans",
    items: ["First Home Buyers", "Construction Loans", "Bridging Loans", "Upgrading / Downsizing", "Self Employed"],
  },
  {
    Icon: IconTrendingUp,
    title: "Investments",
    items: ["Investment Property Loans", "Tax Effective Loan Structure", "SMSF Property Finance", "Portfolio Diversification", "Equity Release"],
  },
  {
    Icon: IconRefresh,
    title: "Refinance",
    items: ["Analysis of current loans", "Comparison of other possible options", "Consideration of desired goals and outcomes", "Debt Consolidation", "Home Equity Access"],
  },
  {
    Icon: IconWallet,
    title: "Personal & Commercial",
    items: ["Vehicle Finance", "Personal Loans", "Equipment Finance", "Commercial Property", "Business Loans"],
  },
];

export default function ServiceCards() {
  const { ref, inView } = useInView(0.1);
  const { openModal } = useEnquiry();

  return (
    <section id="services" style={{ backgroundColor: "#ffffff", padding: "72px 24px 48px" }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>

        <div style={{
          textAlign: "center",
          marginBottom: 44,
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
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
          style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 20 }}
          className="service-cards-grid"
        >
          {cards.map(({ Icon, title, items }, i) => (
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
                opacity: inView ? undefined : 0,
                animation: inView ? `fadeUp 0.55s cubic-bezier(0.4,0,0.2,1) ${100 + i * 80}ms both` : undefined,
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
                color: "var(--color-primary)",
                marginBottom: 16,
                flexShrink: 0,
              }}>
                <Icon size={22} />
              </div>

              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 700, color: "var(--color-primary)", marginBottom: 4 }}>
                {title}
              </p>

              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#94A3B8", fontWeight: 600, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Includes
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                {items.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <div style={{ width: 16, height: 16, borderRadius: "50%", backgroundColor: "rgba(212,160,23,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                      <IconCheck size={10} style={{ color: "var(--color-accent)" }} />
                    </div>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#475569", lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid #F1F5F9" }}>
                <button onClick={openModal} className="btn btn-primary" style={{ fontSize: 13 }}>
                  Get a free quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
