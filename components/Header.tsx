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
    <header className="header" aria-label="Top navigation">
      <div className="header-inner">
        <a href="/" className="site-logo" aria-label="AIP Finance home">
          AIP <span style={{color:'var(--color-accent)'}}>Finance</span>
        </a>

        <nav style={{display:'flex',alignItems:'center',gap:16}}>
          <a className="small p-muted" href="#services">Services</a>
          <a className="small p-muted" href="#testimonials">Testimonials</a>
          <a className="btn btn-primary" href="#booking">Book a Free Call</a>
        </nav>
      </div>
    </header>
  );
}
