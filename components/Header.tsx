"use client";
import { useState, useEffect } from "react";
import { IconPhone } from "./TablerIcons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "#0F2B5B",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.25)" : "none",
        transition: "box-shadow 0.2s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
        }}
      >
        {/* Logo */}
        <a href="/" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 18,
              color: "#ffffff",
              letterSpacing: "0.02em",
            }}
          >
            AIP{" "}
            <span style={{ color: "#D4A017" }}>Finance</span>
          </span>
        </a>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <a
            href="tel:+61498241696"
            style={{
              display: "none",
              alignItems: "center",
              gap: 6,
              color: "rgba(255,255,255,0.75)",
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
            }}
            className="sm-flex"
          >
            <IconPhone size={15} />
            +61 498 241 696
          </a>

          <a
            href="#booking"
            style={{
              backgroundColor: "#D4A017",
              color: "#ffffff",
              fontWeight: 600,
              fontSize: 14,
              padding: "10px 22px",
              borderRadius: 8,
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "background-color 0.15s ease",
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
        </div>
      </div>

      {/* moved small helper to globals.css */}
    </header>
  );
}
