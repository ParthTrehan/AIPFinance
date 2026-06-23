import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,600;1,600&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href="https://aipfinance.com.au" />
        <meta
          name="description"
          content="AIP Finance is a Melbourne mortgage broker comparing 40+ lenders to find your best home loan, refinance, or business loan. Free consultation with Anita Parker Sareen."
        />
        <meta name="theme-color" content="#0F2B5B" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AIP Finance — Melbourne Mortgage Broker" />
        <meta property="og:description" content="Compare 40+ lenders and get a free consultation to find a lower home loan rate. No cost to you." />
        <meta property="og:url" content="https://aipfinance.com.au" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AIP Finance — Melbourne Mortgage Broker" />
        <meta name="twitter:description" content="Compare 40+ lenders. No broker fee. Free consultation with Anita Parker Sareen." />
        <link rel="icon" href="/AIPFinance/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/AIPFinance/favicon.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
