import { useState, useEffect } from "react";
import { useEnquiry } from "../context/EnquiryContext";
import { IconX } from "./TablerIcons";

// Paste your Google Apps Script web app URL here after setup
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwoIPal2n6gDDg9mTAXhfpZfVarbDK235TQYt-3RHbUlWHREmd9r2Snsoct6LDoFASadA/exec";

const loanTypes = [
  "First Home Buyer",
  "Refinancing",
  "Investment Property",
  "Business / Commercial",
  "Low Doc Loan",
  "Other",
];

export default function EnquiryModal() {
  const { isOpen, closeModal } = useEnquiry();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(false);

  // Drive enter/exit animation
  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // Reset form state after modal closes
      const t = setTimeout(() => {
        setSubmitted(false);
        setError(false);
        setVisible(false);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const raw = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    raw.forEach((val, key) => params.append(key, val.toString()));

    try {
      // Google Apps Script doesn't support CORS so we use no-cors.
      // The request still goes through — we just can't read the response,
      // so we optimistically show success.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (!visible && !isOpen) return null;

  const overlayOpacity = isOpen ? 1 : 0;
  const cardTransform = isOpen ? "translateY(0) scale(1)" : "translateY(32px) scale(0.97)";
  const mobileCardTransform = isOpen ? "translateY(0)" : "translateY(100%)";

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeModal}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(10,20,40,0.55)",
          backdropFilter: "blur(3px)",
          zIndex: 200,
          opacity: overlayOpacity,
          transition: "opacity 0.25s ease",
        }}
      />

      {/* Desktop modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Quick enquiry"
        className="enquiry-modal-desktop"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) ${cardTransform}`,
          width: "min(560px, calc(100vw - 32px))",
          backgroundColor: "#fff",
          borderRadius: 24,
          boxShadow: "0 24px 80px rgba(10,20,40,0.25)",
          zIndex: 201,
          opacity: overlayOpacity,
          transition: "opacity 0.25s ease, transform 0.25s ease",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <ModalContent
          submitted={submitted}
          loading={loading}
          error={error}
          onSubmit={handleSubmit}
          onClose={closeModal}
        />
      </div>

      {/* Mobile bottom sheet */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Quick enquiry"
        className="enquiry-modal-mobile"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#fff",
          borderRadius: "24px 24px 0 0",
          boxShadow: "0 -8px 40px rgba(10,20,40,0.18)",
          zIndex: 201,
          transform: mobileCardTransform,
          transition: "transform 0.3s cubic-bezier(0.32,0.72,0,1)",
          maxHeight: "92vh",
          overflowY: "auto",
        }}
      >
        <div style={{ width: 40, height: 4, backgroundColor: "#E2E8F0", borderRadius: 2, margin: "12px auto 0" }} />
        <ModalContent
          submitted={submitted}
          loading={loading}
          error={error}
          onSubmit={handleSubmit}
          onClose={closeModal}
        />
      </div>
    </>
  );
}

function ModalContent({
  submitted,
  loading,
  error,
  onSubmit,
  onClose,
}: {
  submitted: boolean;
  loading: boolean;
  error: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onClose: () => void;
}) {
  return (
    <div style={{ padding: "28px 32px 36px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
        <div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-accent)", margin: "0 0 6px" }}>
            FREE ENQUIRY
          </p>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 28px)", margin: 0, lineHeight: 1.2 }}>
            Get a free <em>quote</em>
          </h2>
        </div>
        <button
          onClick={onClose}
          aria-label="Close"
          style={{ background: "#F1F5F9", border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0, marginLeft: 16 }}
        >
          <IconX size={18} style={{ color: "#64748B" }} />
        </button>
      </div>

      {submitted ? (
        <div style={{ textAlign: "center", padding: "32px 0" }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", backgroundColor: "rgba(212,160,23,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 24 }}>✓</div>
          <h3 style={{ color: "#0F2B5B", marginBottom: 8 }}>Thanks! We'll be in touch soon.</h3>
          <p style={{ fontFamily: "'Inter', sans-serif", color: "#64748B", fontSize: 15, lineHeight: 1.7 }}>
            Anita will review your enquiry and reach out within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#64748B", margin: 0, lineHeight: 1.6 }}>
            Tell us a bit about your situation and Anita will be in touch within 24 hours. No cost, no obligation.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="enquiry-form-row">
            <Field label="Full name *">
              <input name="name" required placeholder="Jane Smith" style={inputStyle} />
            </Field>
            <Field label="Phone number *">
              <input name="phone" required type="tel" placeholder="0400 000 000" style={inputStyle} />
            </Field>
          </div>

          <Field label="Email address *">
            <input name="email" required type="email" placeholder="jane@email.com" style={inputStyle} />
          </Field>

          <Field label="What are you looking for?">
            <select name="loan_type" style={inputStyle}>
              <option value="">Select loan type…</option>
              {loanTypes.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </Field>

          <Field label="Anything else? (optional)">
            <textarea
              name="message"
              rows={3}
              placeholder="e.g. Looking to buy in 3 months, budget around $600k…"
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </Field>

          {error && (
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#EF4444", margin: 0 }}>
              Something went wrong — email us at{" "}
              <a href="mailto:anita@aipfinance.com.au" style={{ color: "#EF4444" }}>anita@aipfinance.com.au</a> directly.
            </p>
          )}

          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", marginTop: 4 }}>
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary"
              style={{ opacity: loading ? 0.7 : 1, cursor: loading ? "wait" : "pointer" }}
            >
              {loading ? "Sending…" : "Send enquiry"}
            </button>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#94A3B8", margin: 0 }}>
              No spam. Your details stay with Anita only.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <label style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: "#374151" }}>
        {label}
      </label>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: 14,
  color: "#111827",
  border: "1px solid #E2E8F0",
  borderRadius: 10,
  padding: "11px 13px",
  outline: "none",
  width: "100%",
  backgroundColor: "#FAFAFA",
  boxSizing: "border-box",
};
