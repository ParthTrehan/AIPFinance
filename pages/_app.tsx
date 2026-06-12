import type { AppProps } from "next/app";
import Script from "next/script";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      {/* Google Analytics 4 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>

      {/* Calendly embed script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      {/* Calendly booking conversion event */}
      <Script id="calendly-tracking" strategy="afterInteractive">
        {`
          window.addEventListener('message', function(e) {
            if (e.data.event && e.data.event === 'calendly.event_scheduled') {
              if (typeof gtag !== 'undefined') {
                gtag('event', 'conversion', {
                  'event_category': 'Booking',
                  'event_label': 'Calendly Consultation Booked',
                  'value': 1
                });
              }
            }
          });
        `}
      </Script>
    </>
  );
}
