import React from "react";
import {
  IconHome,
  IconRefresh,
  IconFileDescription,
  IconBriefcase,
  IconArrowRight,
} from "./TablerIcons";

interface ServiceRowProps {
  eyebrow: string;
  heading: React.ReactNode;
  body: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  flip: boolean;
  bg: string;
}

const rows: ServiceRowProps[] = [
  {
    eyebrow: "HOME LOANS",
    heading: (
      <>
        Buying your <em>first home?</em> We'll guide you through it.
      </>
    ),
    body: "Buying your first home is one of the biggest decisions you'll ever make. AIP Finance walks you through every step — from understanding your borrowing power to settlement day. We handle the lender comparisons, the paperwork, and the negotiations so you don't have to.",
    Icon: IconHome,
    flip: false,
    bg: "#ffffff",
  },
  {
    eyebrow: "REFINANCING",
    heading: (
      <>
        Still on your old rate? You could be <em>saving thousands.</em>
      </>
    ),
    body: "Interest rates change constantly — and your loyalty to your current lender isn't rewarded. AIP Finance reviews your existing loan and compares it against 40+ lenders to find you a better deal. Most clients are surprised by how much they save.",
    Icon: IconRefresh,
    flip: true,
    bg: "#F8FAFB",
  },
  {
    eyebrow: "LOW DOC LOANS",
    heading: (
      <>
        Self-employed? <em>Home ownership</em> is still within reach.
      </>
    ),
    body: "If you don't have traditional payslips or tax returns, standard loan applications can feel impossible. AIP Finance specialises in low doc loans designed specifically for self-employed Australians — making home ownership a reality regardless of how you work.",
    Icon: IconFileDescription,
    flip: false,
    bg: "#ffffff",
  },
  {
    eyebrow: "BUSINESS & COMMERCIAL",
    heading: (
      <>
        Growing your <em>property portfolio</em> or business?
      </>
    ),
    body: "Whether you're investing in commercial property or need equipment finance to grow your business, AIP Finance understands how commercial lending works. We review your cash flow, navigate the options, and find the most competitive rates for your situation.",
    Icon: IconBriefcase,
    flip: true,
    bg: "#F8FAFB",
  },
];

function ServiceRow({ eyebrow, heading, body, Icon, flip, bg }: ServiceRowProps) {
  const visual = (
    <div
      style={{
        backgroundColor: "#EFF6FF",
        borderRadius: 24,
        minHeight: 320,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#0F2B5B",
      }}
    >
      <Icon size={48} />
    </div>
  );

  const text = (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--color-accent)",
          marginBottom: 18,
        }}
      >
        {eyebrow}
      </p>
      <h2 style={{ fontSize: "clamp(28px, 3.2vw, 38px)", marginBottom: 20, lineHeight: 1.2 }}>
        {heading}
      </h2>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 16,
          color: "#64748B",
          lineHeight: 1.8,
          marginBottom: 28,
        }}
      >
        {body}
      </p>
      <a
        href="#booking"
        className="btn btn-primary"
        style={{
          marginTop: "auto",
        }}
      >
        Learn More
      </a>
    </div>
  );

  return (
    <section style={{ backgroundColor: bg, padding: "80px 24px" }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }}
        className="service-row-grid"
      >
        {flip ? (
          <>
            {text}
            {visual}
          </>
        ) : (
          <>
            {visual}
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
      {/* Responsive rules moved to globals.css to avoid hydration mismatches */}
    </>
  );
}
