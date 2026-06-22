import { useState } from "react";
import { useInView } from "./useInView";

export const faqs = [
  {
    q: "How much does a mortgage broker cost?",
    a: "Nothing — AIP Finance is completely free to you. Mortgage brokers are paid a commission by the lender after your loan settles, so you receive expert advice and access to 40+ lenders at zero cost.",
  },
  {
    q: "How much can I borrow?",
    a: "Most borrowers can access 4–6× their gross annual income, but it depends on your expenses, existing debts, credit history, and each lender's policies. Contact Anita for a personalised borrowing assessment at no obligation.",
  },
  {
    q: "How quickly can I get pre-approval?",
    a: "AIP Finance achieves conditional pre-approval in as little as 48 hours in most cases, depending on the lender and how quickly supporting documents are provided.",
  },
  {
    q: "Can I get a home loan if I'm self-employed?",
    a: "Yes. Anita specialises in low doc loans for self-employed Australians. If you've been ABN-registered for 6+ months and have bank statements or BAS statements, you may qualify — even without traditional payslips or tax returns.",
  },
  {
    q: "What's the difference between going direct to a bank vs. using a broker?",
    a: "A bank can only offer their own products. AIP Finance compares 40+ lenders — including banks, credit unions, and non-bank lenders — to find the most competitive rate and loan structure for your specific situation. Clients often save thousands over the life of their loan.",
  },
  {
    q: "What areas of Melbourne do you service?",
    a: "We service all of Melbourne and Victoria — including Richmond, South Yarra, Carlton, Fitzroy, Hawthorn, Box Hill, Doncaster, Glen Waverley, Coburg, Preston, Bundoora, Werribee, Point Cook, and Hoppers Crossing. We can also assist regional Victorian borrowers.",
  },
  {
    q: "Do I qualify for the First Home Owner Grant?",
    a: "The Victorian FHOG provides $10,000 for eligible first home buyers purchasing or building a new home valued up to $750,000. Anita can assess your eligibility and guide you through the application as part of your loan process.",
  },
  {
    q: "Can you help with investment property loans?",
    a: "Absolutely. Anita works with investors at all stages — from first investment property to growing portfolios. She specialises in tax-effective loan structures, equity release, and SMSF property finance.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: "1px solid #E2E8F0",
        transition: "background 0.15s ease",
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{
          width: "100%",
          textAlign: "left",
          background: "none",
          border: "none",
          padding: "20px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          cursor: "pointer",
          fontFamily: "'Inter', sans-serif",
          fontSize: 15,
          fontWeight: 600,
          color: open ? "var(--color-primary)" : "#1E293B",
          transition: "color 0.15s ease",
        }}
      >
        <span>{q}</span>
        <span style={{
          flexShrink: 0,
          width: 28,
          height: 28,
          borderRadius: "50%",
          backgroundColor: open ? "var(--color-primary)" : "#F1F5F9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 16,
          color: open ? "#fff" : "#64748B",
          transition: "all 0.2s ease",
          fontWeight: 400,
        }}>
          {open ? "−" : "+"}
        </span>
      </button>
      <div style={{
        overflow: "hidden",
        maxHeight: open ? 300 : 0,
        transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
      }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 15,
          color: "#64748B",
          lineHeight: 1.75,
          padding: "0 0 20px",
          margin: 0,
        }}>
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { ref, inView } = useInView(0.08);
  const half = Math.ceil(faqs.length / 2);

  return (
    <section id="faq" style={{ backgroundColor: "#F8FAFB", padding: "88px 24px" }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          textAlign: "center",
          marginBottom: 52,
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 12 }}>
            FAQ
          </p>
          <h2 style={{ fontSize: "clamp(26px, 3.2vw, 38px)", lineHeight: 1.15, margin: "0 0 12px" }}>
            Common questions <em>answered</em>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#64748B", maxWidth: 560, margin: "0 auto" }}>
            Everything you need to know before getting started.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0 64px",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.6s 0.2s ease",
          }}
          className="faq-grid"
        >
          <div>
            {faqs.slice(0, half).map((item, i) => (
              <FAQItem key={i} {...item} index={i} />
            ))}
          </div>
          <div>
            {faqs.slice(half).map((item, i) => (
              <FAQItem key={i} {...item} index={i + half} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
