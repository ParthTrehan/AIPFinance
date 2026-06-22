import React from "react";
import { useInView } from "./useInView";
import { IconHome, IconRefresh, IconFileDescription, IconBriefcase, IconCheck, IconArrowRight } from "./TablerIcons";

interface ServiceRowProps {
  eyebrow: string;
  heading: React.ReactNode;
  body: string;
  visual: React.ReactNode;
  flip: boolean;
  bg: string;
}

function HomeLoansVisual() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ backgroundColor: "#fff", border: "1px solid #E2E8F0", borderRadius: 20, padding: "24px 28px", boxShadow: "0 4px 20px rgba(15,43,91,0.08)" }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>
          Estimated Borrowing Power
        </p>
        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 600, color: "#0F2B5B", margin: "0 0 4px", lineHeight: 1 }}>
          $750,000
        </p>
        <p style={{ fontSize: 13, color: "#64748B", margin: "0 0 20px" }}>Based on your income &amp; expenses</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {["First Home Buyer eligible", "40+ lenders compared", "No broker fee"].map(item => (
            <div key={item} style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <div style={{ width: 20, height: 20, borderRadius: "50%", backgroundColor: "#D4A017", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <IconCheck size={12} style={{ color: "#fff" }} />
              </div>
              <span style={{ fontSize: 14, color: "#374151" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {[{ label: "Lenders", value: "40+" }, { label: "Avg approval", value: "48 hrs" }].map(({ label, value }) => (
          <div key={label} style={{ backgroundColor: "#0F2B5B", borderRadius: 14, padding: "18px 20px" }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 600, color: "#D4A017", margin: 0 }}>{value}</p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", margin: "4px 0 0" }}>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function RefinanceVisual() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ backgroundColor: "#fff", border: "1px solid #E2E8F0", borderRadius: 20, padding: "24px 28px", boxShadow: "0 4px 20px rgba(15,43,91,0.08)" }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 18px" }}>
          Rate Comparison
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
          <div style={{ flex: 1, backgroundColor: "#FEF2F2", borderRadius: 12, padding: "16px", textAlign: "center" }}>
            <p style={{ fontSize: 11, color: "#EF4444", fontWeight: 600, textTransform: "uppercase", margin: "0 0 4px" }}>Current</p>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, color: "#EF4444", margin: 0, fontWeight: 600 }}>7.20%</p>
          </div>
          <IconArrowRight size={20} style={{ color: "#94A3B8", flexShrink: 0 }} />
          <div style={{ flex: 1, backgroundColor: "#F0FDF4", borderRadius: 12, padding: "16px", textAlign: "center" }}>
            <p style={{ fontSize: 11, color: "#16A34A", fontWeight: 600, textTransform: "uppercase", margin: "0 0 4px" }}>New Rate</p>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, color: "#16A34A", margin: 0, fontWeight: 600 }}>5.89%</p>
          </div>
        </div>
        <div style={{ backgroundColor: "#0F2B5B", borderRadius: 12, padding: "16px 20px", textAlign: "center" }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", margin: "0 0 4px" }}>Monthly savings</p>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, color: "#D4A017", margin: 0, fontWeight: 600 }}>$412 / mo</p>
        </div>
      </div>
    </div>
  );
}

function LowDocVisual() {
  const steps = [
    { label: "ABN registered", done: true },
    { label: "6+ months trading", done: true },
    { label: "BAS statements", done: true },
    { label: "Bank statements (3 months)", done: true },
  ];
  return (
    <div style={{ backgroundColor: "#fff", border: "1px solid #E2E8F0", borderRadius: 20, padding: "28px", boxShadow: "0 4px 20px rgba(15,43,91,0.08)" }}>
      <p style={{ fontSize: 12, fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 20px" }}>
        Low Doc Eligibility Checklist
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
        {steps.map(({ label, done }) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", backgroundColor: "#F8FAFB", borderRadius: 10 }}>
            <div style={{ width: 22, height: 22, borderRadius: "50%", backgroundColor: done ? "#D4A017" : "#E2E8F0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              {done && <IconCheck size={13} style={{ color: "#fff" }} />}
            </div>
            <span style={{ fontSize: 14, color: "#374151", fontWeight: 500 }}>{label}</span>
          </div>
        ))}
      </div>
      <div style={{ backgroundColor: "#0F2B5B", borderRadius: 12, padding: "14px 20px", textAlign: "center" }}>
        <p style={{ fontSize: 14, fontWeight: 600, color: "#D4A017", margin: 0 }}>✓ You qualify for a Low Doc loan</p>
      </div>
    </div>
  );
}

function BusinessVisual() {
  const items = [
    { label: "Commercial Property", amount: "$850K" },
    { label: "Equipment Finance", amount: "$120K" },
    { label: "Working Capital", amount: "$45K" },
  ];
  return (
    <div style={{ backgroundColor: "#fff", border: "1px solid #E2E8F0", borderRadius: 20, padding: "28px", boxShadow: "0 4px 20px rgba(15,43,91,0.08)" }}>
      <p style={{ fontSize: 12, fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 20px" }}>
        Business Loan Facility
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
        {items.map(({ label, amount }) => (
          <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 14px", backgroundColor: "#F8FAFB", borderRadius: 10 }}>
            <span style={{ fontSize: 14, color: "#374151" }}>{label}</span>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 600, color: "#0F2B5B" }}>{amount}</span>
          </div>
        ))}
      </div>
      <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: "#64748B" }}>Total Facility</span>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 600, color: "#D4A017" }}>$1.015M</span>
      </div>
    </div>
  );
}

const rows: ServiceRowProps[] = [
  {
    eyebrow: "HOME LOANS",
    heading: <>Buying your <em>first home?</em> We'll guide you through it.</>,
    body: "Buying your first home is one of the biggest decisions you'll ever make. AIP Finance walks you through every step — from understanding your borrowing power to settlement day. We handle the lender comparisons, the paperwork, and the negotiations so you don't have to.",
    visual: <HomeLoansVisual />,
    flip: false,
    bg: "#ffffff",
  },
  {
    eyebrow: "REFINANCING",
    heading: <>Still on your old rate? You could be <em>saving thousands.</em></>,
    body: "Interest rates change constantly — and your loyalty to your current lender isn't rewarded. AIP Finance reviews your existing loan and compares it against 40+ lenders to find you a better deal. Most clients are surprised by how much they save.",
    visual: <RefinanceVisual />,
    flip: true,
    bg: "#F8FAFB",
  },
  {
    eyebrow: "LOW DOC LOANS",
    heading: <>Self-employed? <em>Home ownership</em> is still within reach.</>,
    body: "If you don't have traditional payslips or tax returns, standard loan applications can feel impossible. AIP Finance specialises in low doc loans designed specifically for self-employed Australians — making home ownership a reality regardless of how you work.",
    visual: <LowDocVisual />,
    flip: false,
    bg: "#ffffff",
  },
  {
    eyebrow: "BUSINESS & COMMERCIAL",
    heading: <>Growing your <em>property portfolio</em> or business?</>,
    body: "Whether you're investing in commercial property or need equipment finance to grow your business, AIP Finance understands how commercial lending works. We review your cash flow, navigate the options, and find the most competitive rates for your situation.",
    visual: <BusinessVisual />,
    flip: true,
    bg: "#F8FAFB",
  },
];

function ServiceRow({ eyebrow, heading, body, visual, flip, bg }: ServiceRowProps) {
  const { ref, inView } = useInView(0.1);

  const textAnim: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : `translateX(${flip ? "-24px" : "24px"})`,
    transition: "opacity 0.6s ease, transform 0.6s ease",
  };

  const visualAnim: React.CSSProperties = {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : `translateX(${flip ? "24px" : "-24px"})`,
    transition: "opacity 0.6s 0.1s ease, transform 0.6s 0.1s ease",
  };

  const text = (
    <div className="service-text" style={textAnim}>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 18 }}>
        {eyebrow}
      </p>
      <h2 style={{ fontSize: "clamp(28px, 3.2vw, 38px)", marginBottom: 20, lineHeight: 1.2 }}>
        {heading}
      </h2>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#64748B", lineHeight: 1.8, marginBottom: 28 }}>
        {body}
      </p>
      <a href="tel:+61498241696" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
        Call now — 0498 241 696
      </a>
    </div>
  );

  return (
    <section className="service-row-section" style={{ backgroundColor: bg, padding: "80px 24px" }}>
      <div
        ref={ref}
        style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}
        className="service-row-grid"
      >
        {flip ? (
          <>
            {text}
            <div className="service-visual" style={visualAnim}>{visual}</div>
          </>
        ) : (
          <>
            <div className="service-visual" style={visualAnim}>{visual}</div>
            {text}
          </>
        )}
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      {rows.map((row) => (
        <ServiceRow key={row.eyebrow} {...row} />
      ))}
    </>
  );
}
