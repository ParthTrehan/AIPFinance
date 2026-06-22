import { useEffect } from "react";

export default function Booking() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    const win = window as any;
    const el = document.getElementById('calendly-embed');

    const initCalendly = () => {
      if (win.Calendly && el) {
        win.Calendly.initInlineWidget({
          url: 'https://calendly.com/aipfinance/consultation?hide_gdpr_banner=1',
          parentElement: el,
        });
      }
    };

    script.addEventListener('load', initCalendly);
    // Try to init in case Calendly already loaded
    initCalendly();

    const onMessage = (e: MessageEvent) => {
      if (e.data?.event === 'calendly.event_scheduled') {
        console.log('Calendly event scheduled', e.data);
      }
    };
    window.addEventListener('message', onMessage);

    return () => {
      script.removeEventListener('load', initCalendly);
      window.removeEventListener('message', onMessage);
    };
  }, []);

  return (
    <section id="booking" style={{ backgroundColor: "#ffffff", padding: "96px 24px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#D4A017",
              marginBottom: 16,
            }}
          >
            GET STARTED
          </p>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", lineHeight: 1.15, marginBottom: 14 }}>
            Book your free <em>consultation</em>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#64748B", lineHeight: 1.8 }}>
            No cost. No obligation. Just a 30-minute call to explore your options.
          </p>
        </div>

        <div style={{ border: "1px solid #E2E8F0", borderRadius: 24, overflow: "hidden" }}>
          <div
            id="calendly-embed"
            className="calendly-inline-widget"
            data-url="https://calendly.com/aipfinance/consultation?hide_gdpr_banner=1"
            style={{ minWidth: 320, height: 700 }}
          />
        </div>
      </div>
    </section>
  );
}
