import React from "react";

const DEFAULT_LOGOS = [
  {
    src: "/AIPFinance/logos/anz-logo.jpg",
    alt: "ANZ",
  },
  {
    src: "/AIPFinance/logos/westpac-logo.jpg",
    alt: "Westpac",
  },
  {
    src: "/AIPFinance/logos/nab-logo.svg",
    alt: "NAB",
  },
  {
    src: "/AIPFinance/logos/commbank-logo.svg",
    alt: "Commonwealth Bank",
  },
];

type Logo = { src: string; alt?: string };

export default function LogoCarousel({ logos = DEFAULT_LOGOS }: { logos?: Logo[] }) {
  // Duplicate the list so the marquee can loop seamlessly
  const looped = [...logos, ...logos];

  return (
    <section className="logo-marquee-section">
      <div className="max-w-6xl mx-auto px-6 logo-marquee">
        <div className="logo-track" aria-hidden="false">
          {looped.map((l, i) => (
            <div className="logo-item" key={`${l.alt || i}-${i}`}>
              <img src={l.src} alt={l.alt || `logo-${i}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
