import React from "react";

const lenders = [
  "ANZ", "Westpac", "NAB", "Macquarie", "Bankwest",
  "AMP", "Suncorp", "ME Bank", "Firstmac", "Bank of Melbourne", "Citibank",
];

export default function LogoCarousel() {
  const doubled = [...lenders, ...lenders];

  return (
    <section className="logo-marquee-section">
      <p className="logo-marquee-label">Lenders we work with</p>
      <div className="container" style={{ overflow: "hidden" }}>
        <div className="logo-marquee">
          <div className="logo-track">
            {doubled.map((name, i) => (
              <div
                key={`${name}-${i}`}
                style={{
                  flexShrink: 0,
                  padding: "8px 22px",
                  border: "1px solid #E2E8F0",
                  borderRadius: 40,
                  backgroundColor: "#fff",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#374151",
                  whiteSpace: "nowrap",
                  boxShadow: "0 1px 4px rgba(15,43,91,0.05)",
                }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
