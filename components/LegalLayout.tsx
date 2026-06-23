import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, description, children }: Props) {
  return (
    <>
      <Head>
        <title>{title} — AIP Finance</title>
        <meta name="description" content={description} />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Header />
      <main style={{ paddingTop: 72 }}>
        <div style={{ backgroundColor: "#0F2B5B", padding: "56px 24px 48px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-accent)", margin: "0 0 12px" }}>
              Legal
            </p>
            <h1 style={{ color: "#fff", fontSize: "clamp(28px, 4vw, 42px)", margin: 0, lineHeight: 1.1 }}>{title}</h1>
          </div>
        </div>
        <div style={{ backgroundColor: "#F8FAFB", padding: "56px 24px 80px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", backgroundColor: "#fff", borderRadius: 16, border: "1px solid #E2E8F0", padding: "48px 56px" }} className="legal-content">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
