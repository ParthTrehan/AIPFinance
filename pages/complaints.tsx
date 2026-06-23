import LegalLayout from "../components/LegalLayout";

export default function ComplaintsPolicy() {
  return (
    <LegalLayout
      title="Complaints Policy"
      description="AIP Finance complaints policy — how to make a complaint and what happens next, including escalation to AFCA."
    >
      <p className="legal-updated">Last updated: June 2025</p>
      <p>
        AIP Finance Pty Ltd is committed to providing high-quality credit assistance services. If you have a concern or complaint, we want to hear from you so we can make it right. This policy outlines our internal dispute resolution (IDR) process in accordance with ASIC's <em>Regulatory Guide 271</em>.
      </p>

      <h2>1. How to make a complaint</h2>
      <p>You can submit a complaint by any of the following methods:</p>
      <table className="legal-table">
        <tbody>
          <tr><td>Email</td><td><a href="mailto:anita@aipfinance.com.au">anita@aipfinance.com.au</a></td></tr>
          <tr><td>Phone</td><td><a href="tel:+61498241696">0498 241 696</a></td></tr>
          <tr><td>Post</td><td>AIP Finance Pty Ltd, Melbourne VIC</td></tr>
        </tbody>
      </table>
      <p>Please include your name, contact details, a description of your concern, and any relevant documentation to help us investigate promptly.</p>

      <h2>2. What happens next</h2>
      <ol>
        <li><strong>Acknowledgement:</strong> We will acknowledge receipt of your complaint within <strong>5 business days</strong>.</li>
        <li><strong>Investigation:</strong> Anita Parker Sareen will personally review your complaint and investigate the circumstances.</li>
        <li><strong>Response:</strong> We will provide you with a written response outlining our findings and any proposed resolution within <strong>30 calendar days</strong>. For complaints about hardship, we aim to respond within 21 days.</li>
        <li><strong>Resolution:</strong> If we are able to resolve your complaint to your satisfaction, we will confirm the outcome in writing.</li>
      </ol>

      <h2>3. If you are not satisfied</h2>
      <p>
        If you are not satisfied with our response, or if we have not resolved your complaint within 30 days, you may refer your complaint to the <strong>Australian Financial Complaints Authority (AFCA)</strong> — a free and independent external dispute resolution (EDR) scheme.
      </p>
      <div style={{ backgroundColor: "#F0F7FF", border: "1px solid #BFDBFE", borderRadius: 12, padding: "24px 28px", margin: "8px 0 16px" }}>
        <p style={{ fontWeight: 700, color: "#0F2B5B", margin: "0 0 12px" }}>Australian Financial Complaints Authority (AFCA)</p>
        <p style={{ margin: "0 0 6px" }}><strong>Website:</strong> <a href="https://www.afca.org.au" target="_blank" rel="noreferrer noopener">afca.org.au</a></p>
        <p style={{ margin: "0 0 6px" }}><strong>Phone:</strong> 1800 931 678 (free call)</p>
        <p style={{ margin: "0 0 6px" }}><strong>Email:</strong> <a href="mailto:info@afca.org.au">info@afca.org.au</a></p>
        <p style={{ margin: 0 }}><strong>Post:</strong> GPO Box 3, Melbourne VIC 3001</p>
      </div>
      <p>
        Time limits apply for lodging a complaint with AFCA. Generally, you must lodge within 2 years of receiving our final response.
      </p>

      <h2>4. ASIC</h2>
      <p>
        You may also contact the <strong>Australian Securities and Investments Commission (ASIC)</strong>, which regulates the credit industry, for information or to report misconduct:
      </p>
      <ul>
        <li><strong>Phone:</strong> 1300 300 630</li>
        <li><strong>Website:</strong> <a href="https://www.asic.gov.au" target="_blank" rel="noreferrer noopener">asic.gov.au</a></li>
      </ul>

      <h2>5. Our commitment</h2>
      <p>
        Every complaint is taken seriously. We use feedback to continually improve our service. If you have a general question rather than a complaint, please contact us at <a href="mailto:anita@aipfinance.com.au">anita@aipfinance.com.au</a> or call <a href="tel:+61498241696">0498 241 696</a>.
      </p>
    </LegalLayout>
  );
}
