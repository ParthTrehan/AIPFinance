import type { AppProps } from "next/app";
import "../styles/globals.css";
import { EnquiryProvider } from "../context/EnquiryContext";
import EnquiryModal from "../components/EnquiryModal";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EnquiryProvider>
      <Component {...pageProps} />
      <EnquiryModal />
      <Analytics />
    </EnquiryProvider>
  );
}
