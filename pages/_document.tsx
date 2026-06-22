import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="canonical" href="https://aipfinance.com.au" />
        <meta
          name="description"
          content="AIP Finance is a Melbourne mortgage broker comparing 40+ lenders to find your best home loan, refinance, or business loan. Free consultation with Anita Parker Sareen."
        />
        <meta name="theme-color" content="#0A6CFF" />
        <meta property="og:title" content="AIP Finance — Melbourne Mortgage Broker" />
        <meta property="og:description" content="Compare 40+ lenders and get a free consultation to find a lower home loan rate." />
        <meta property="og:image" content="/AIPFinance/hero-illustration.svg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
