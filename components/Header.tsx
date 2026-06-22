import { useState, useEffect } from "react";
import { IconPhone, IconMenu2, IconX } from "./TablerIcons";
import { useEnquiry } from "../context/EnquiryContext";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Reviews", href: "#testimonials" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openModal } = useEnquiry();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="header"
      aria-label="Top navigation"
      style={{
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : undefined,
        transition: "box-shadow 0.2s ease",
      }}
    >
      <div className="header-inner">
        {/* Logo */}
        <a href="#" className="site-logo" aria-label="AIP Finance home" style={{ textDecoration: "none" }}>
          AIP <span style={{ color: "var(--color-accent)" }}>Finance</span>
        </a>

        {/* Desktop nav */}
        <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: 14,
                color: "#374151",
                textDecoration: "none",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--color-primary)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#374151")
              }
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right: phone + CTA + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <a
            href="tel:+61498241696"
            className="phone-link"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: "#374151",
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
              transition: "color 0.15s ease",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--color-primary)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#374151")
            }
          >
            <IconPhone size={15} />
            +61 498 241 696
          </a>

          <a className="btn btn-primary" href="tel:+61498241696" style={{ whiteSpace: "nowrap" }}>
            Call now
          </a>

          {/* Hamburger — only visible on mobile via CSS */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--color-primary)",
              padding: 4,
              display: "none",
            }}
          >
            {menuOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "#fff",
            borderTop: "1px solid var(--card-border)",
            padding: "8px 24px 20px",
          }}
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: 16,
                color: "#111827",
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid var(--card-border)",
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="tel:+61498241696"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: 16,
              color: "#111827",
              textDecoration: "none",
              padding: "12px 0",
              borderBottom: "1px solid var(--card-border)",
            }}
          >
            +61 498 241 696
          </a>
          <div style={{ display: "flex", gap: 10, paddingTop: 16 }}>
            <button
              onClick={() => { openModal(); setMenuOpen(false); }}
              className="btn btn-primary"
              style={{ flex: 1, justifyContent: "center", fontSize: 14 }}
            >
              Get a free quote
            </button>
            <a
              href="tel:+61498241696"
              onClick={() => setMenuOpen(false)}
              className="btn btn-ghost"
              style={{ flex: 1, justifyContent: "center", fontSize: 14 }}
            >
              Call now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
