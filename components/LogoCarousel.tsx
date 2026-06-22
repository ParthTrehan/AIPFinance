import React from "react";

const DEFAULT_LOGOS = [
  { src: "/AIPFinance/logos/anz-logo.png", alt: "ANZ" },
  { src: "/AIPFinance/logos/westpac-logo.jpg", alt: "Westpac" },
  { src: "/AIPFinance/logos/nab-logo.svg", alt: "NAB" },
  { src: "/AIPFinance/logos/macquarie-bank-logo.png", alt: "Macquarie Bank" },
  { src: "/AIPFinance/logos/bankwest-logo.svg", alt: "Bankwest" },
  { src: "/AIPFinance/logos/amp-logo.svg", alt: "AMP" },
  { src: "/AIPFinance/logos/suncorp-logo.svg", alt: "Suncorp" },
  { src: "/AIPFinance/logos/me-bank-logo.svg", alt: "ME Bank" },
  { src: "/AIPFinance/logos/firstmac-logo.svg", alt: "Firstmac" },
  { src: "/AIPFinance/logos/bank-of-melbourne-logo.svg", alt: "Bank of Melbourne" },
  { src: "/AIPFinance/logos/citibank-logo.svg", alt: "Citibank" },
];

type Logo = { src: string; alt?: string };

export default function LogoCarousel({ logos = DEFAULT_LOGOS }: { logos?: Logo[] }) {
  const looped = [...logos, ...logos];

  return (
    <section className="logo-marquee-section">
      <p className="logo-marquee-label">Lenders we work with</p>
      <div className="container" style={{overflow:'hidden'}}>
        <div className="logo-marquee">
          <div className="logo-track">
            {looped.map((l, i) => (
              <div className="logo-item" key={`${l.alt || i}-${i}`}>
                <img src={l.src} alt={l.alt || `logo-${i}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
