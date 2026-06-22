import { useState } from "react";
import { useInView } from "./useInView";

const loanTypes = [
  "First Home Buyer",
  "Refinancing",
  "Investment Property",
  "Business / Commercial",
  "Low Doc Loan",
  "Other",
];

export default function LeadForm() {
  const { ref, inView } = useInView(0.1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Sign up free at formspree.io, create a form, and replace YOUR_FORM_ID below
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="lead-form" style={{ backgroundColor: "#F8FAFB", padding: "80px 24px" }}>
      <div
        ref={ref}
        style={{
          maxWidth: 680,
          margin: "0 auto",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 12 }}>
            NOT READY TO BOOK A CALL?
          </p>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", lineHeight: 1.15, marginBottom: 12 }}>
            Send a quick <em>enquiry</em>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#64748B", lineHeight: 1.7 }}>
            Tell us a bit about your situation and Anita will be in touch within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div style={{ backgroundColor: "#fff", border: "1px solid #E2E8F0", borderRadius: 20, padding: "48px 32px", textAlign: "center", boxShadow: "0 4px 20px rgba(15,43,91,0.06)" }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
            <h3 style={{ color: "#0F2B5B", marginBottom: 8 }}>Thanks! We'll be in touch soon.</h3>
            <p style={{ fontFamily: "'Inter', sans-serif", color: "#64748B", fontSize: 15 }}>
              Anita will review your enquiry and reach out within 24 hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ backgroundColor: "#fff", border: "1px solid #E2E8F0", borderRadius: 20, padding: "40px 36px", boxShadow: "0 4px 20px rgba(15,43,91,0.06)", display: "flex", flexDirection: "column", gap: 20 }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="lead-form-row">
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={labelStyle}>Full name *</label>
                <input name="name" required placeholder="Jane Smith" style={inputStyle} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={labelStyle}>Phone number *</label>
                <input name="phone" required type="tel" placeholder="0400 000 000" style={inputStyle} />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={labelStyle}>Email address *</label>
              <input name="email" required type="email" placeholder="jane@email.com" style={inputStyle} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={labelStyle}>What are you looking for?</label>
              <select name="loan_type" style={inputStyle}>
                <option value="">Select loan type…</option>
                {loanTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={labelStyle}>Anything else you'd like us to know? (optional)</label>
              <textarea
                name="message"
                rows={3}
                placeholder="e.g. I'm looking to buy in 3 months, budget around $600k…"
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>

            {error && (
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#EF4444", margin: 0 }}>
                Something went wrong. Please email us at <a href="mailto:anita@aipfinance.com.au" style={{ color: "#EF4444" }}>anita@aipfinance.com.au</a> directly.
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary"
              style={{ alignSelf: "flex-start", opacity: loading ? 0.7 : 1, cursor: loading ? "wait" : "pointer" }}
            >
              {loading ? "Sending…" : "Send enquiry"}
            </button>

            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#94A3B8", margin: 0 }}>
              No spam. No obligation. Your details are only shared with Anita.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: 13,
  fontWeight: 600,
  color: "#374151",
};

const inputStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: 14,
  color: "#111827",
  border: "1px solid #E2E8F0",
  borderRadius: 10,
  padding: "12px 14px",
  outline: "none",
  width: "100%",
  backgroundColor: "#FAFAFA",
  boxSizing: "border-box",
};
