import React from "react";

const lenders: { name: string; img?: string }[] = [
  { name: "ANZ",               img: "/logos/anz-logo.png" },
  { name: "Westpac",           img: "/logos/westpac-logo.jpg" },
  { name: "NAB",               img: "/logos/nab-logo.png" },
  { name: "Macquarie",         img: "/logos/macquarie-bank-logo.png" },
  { name: "Bankwest" },
  { name: "AMP" },
  { name: "Suncorp" },
  { name: "ME Bank" },
  { name: "Firstmac" },
  { name: "Bank of Melbourne" },
  { name: "Citibank" },
];

export default function LogoCarousel() {
  const doubled = [...lenders, ...lenders];

  return (
    <section className="logo-marquee-section">
      <p className="logo-marquee-label">Lenders we work with</p>
      <div className="container" style={{ overflow: "hidden" }}>
        <div className="logo-marquee">
          <div className="logo-track">
            {doubled.map(({ name, img }, i) => (
              <div
                key={`${name}-${i}`}
                style={{
                  flexShrink: 0,
                  height: 48,
                  minWidth: img ? 100 : undefined,
                  padding: img ? "0 20px" : "0 22px",
                  border: "1px solid #E2E8F0",
                  borderRadius: 40,
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 1px 4px rgba(15,43,91,0.05)",
                }}
              >
                {img ? (
                  <img
                    src={img}
                    alt={`${name} logo`}
                    style={{ height: 26, width: "auto", objectFit: "contain", display: "block" }}
                  />
                ) : (
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#374151",
                    whiteSpace: "nowrap",
                  }}>
                    {name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
