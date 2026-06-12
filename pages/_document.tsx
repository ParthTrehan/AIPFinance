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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
