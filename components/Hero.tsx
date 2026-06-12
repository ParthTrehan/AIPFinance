const stats = [
  { value: "40+", label: "Lenders compared" },
  { value: "$0", label: "Cost to you" },
  { value: "5★", label: "Client rating" },
];

export default function Hero() {
  return (
    <section
      style={{
        backgroundColor: "#0F2B5B",
        paddingTop: 68,
      }}
    >
      {/* Main content */}
      <div
        style={{
          maxWidth: 860,
          margin: "0 auto",
          padding: "88px 24px 72px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#D4A017",
            marginBottom: 24,
          }}
        >
          Melbourne Mortgage Broker
        </p>

        <h1
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 600,
            color: "#ffffff",
            lineHeight: 1.18,
            marginBottom: 28,
            letterSpacing: "-0.01em",
          }}
        >
          Your Melbourne Mortgage Broker —{" "}
          <span style={{ color: "#D4A017" }}>We Find the Right Loan,</span>{" "}
          You Save Money
        </h1>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 18,
            fontWeight: 400,
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.7,
            maxWidth: 620,
            margin: "0 auto 48px",
          }}
        >
          AIP Finance compares 40+ lenders to find you the best rate. Home
          loans, refinancing, business loans — at no cost to you.
        </p>

        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#booking"
            style={{
              backgroundColor: "#D4A017",
              color: "#ffffff",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 15,
              padding: "15px 36px",
              borderRadius: 10,
              textDecoration: "none",
              transition: "background-color 0.15s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.backgroundColor = "#b8890e")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.backgroundColor = "#D4A017")
            }
          >
            Book a Free Call
          </a>
          <a
            href="tel:+61498241696"
            style={{
              border: "2px solid rgba(255,255,255,0.35)",
              color: "#ffffff",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 15,
              padding: "15px 36px",
              borderRadius: 10,
              textDecoration: "none",
              transition: "border-color 0.15s ease, background-color 0.15s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              const el = e.target as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.7)";
              el.style.backgroundColor = "rgba(255,255,255,0.06)";
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.35)";
              el.style.backgroundColor = "transparent";
            }}
          >
            Call +61 498 241 696
          </a>
        </div>
      </div>

      {/* Stat strip */}
      <div
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div
          style={{
            maxWidth: 860,
            margin: "0 auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              style={{
                padding: "36px 0",
                textAlign: "center",
                borderRight: i < stats.length - 1
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "none",
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 36,
                  fontWeight: 600,
                  color: "#D4A017",
                  lineHeight: 1,
                }}
              >
                {value}
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.5)",
                  marginTop: 6,
                  letterSpacing: "0.04em",
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
