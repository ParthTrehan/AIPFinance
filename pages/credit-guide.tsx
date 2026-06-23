import LegalLayout from "../components/LegalLayout";

export default function CreditGuide() {
  return (
    <LegalLayout
      title="Credit Guide"
      description="AIP Finance Credit Guide — information about our services, fees, commissions and how to make a complaint, as required by the National Consumer Credit Protection Act 2009."
    >
      <p className="legal-updated">Last updated: June 2025</p>
      <p>
        This Credit Guide is provided by AIP Finance Pty Ltd in accordance with section 113 of the <em>National Consumer Credit Protection Act 2009</em> (Cth) (<strong>NCCP Act</strong>). Please read it carefully before engaging our services.
      </p>

      <h2>1. Our details</h2>
      <table className="legal-table">
        <tbody>
          <tr><td>Business name</td><td>AIP Finance Pty Ltd</td></tr>
          <tr><td>ABN</td><td>24 687 349 387</td></tr>
          <tr><td>Credit representative number</td><td>483455</td></tr>
          <tr><td>Authorised by</td><td>Connective Credit Services Pty Ltd ABN 51 143 651 496, ACL #389328</td></tr>
          <tr><td>Broker</td><td>Anita Parker Sareen</td></tr>
          <tr><td>Phone</td><td><a href="tel:+61498241696">0498 241 696</a></td></tr>
          <tr><td>Email</td><td><a href="mailto:anita@aipfinance.com.au">anita@aipfinance.com.au</a></td></tr>
        </tbody>
      </table>

      <h2>2. Services we provide</h2>
      <p>We provide credit assistance in relation to:</p>
      <ul>
        <li>Home loans (including first home buyer loans)</li>
        <li>Refinancing of existing home loans</li>
        <li>Investment property loans</li>
        <li>Low documentation (low doc) loans</li>
        <li>Business and commercial loans</li>
        <li>Construction loans</li>
      </ul>
      <p>We are a credit representative, not a credit provider. This means we assist you in obtaining credit from a lender — we do not lend money directly to you.</p>

      <h2>3. Our fees</h2>
      <p>
        <strong>Our service is free to you.</strong> We do not charge you a fee for our credit assistance services in most circumstances. If a fee is applicable in your situation, we will discuss this with you and obtain your consent before proceeding.
      </p>

      <h2>4. How we are paid — commissions</h2>
      <p>
        We receive commissions from lenders when a loan we have recommended settles. These commissions are paid by the lender, not by you, and do not change the interest rate or fees on your loan.
      </p>
      <p>Typical commission structures include:</p>
      <ul>
        <li><strong>Upfront commission:</strong> a one-off payment paid by the lender on settlement, usually between 0.55% and 0.77% of the loan amount (inclusive of GST)</li>
        <li><strong>Trail commission:</strong> an ongoing payment based on the outstanding loan balance, usually between 0.1% and 0.35% per annum (inclusive of GST)</li>
      </ul>
      <p>
        The amount of commission varies between lenders. We will disclose the specific commission amount for any loan we recommend before you proceed. Our remuneration does not influence the recommendations we make — our obligation is to recommend a loan that is not unsuitable for you.
      </p>

      <h2>5. What we will do for you</h2>
      <p>Before recommending a credit product, we will:</p>
      <ul>
        <li>Make reasonable enquiries about your financial situation, requirements and objectives</li>
        <li>Take reasonable steps to verify your financial situation</li>
        <li>Assess whether the proposed credit contract is not unsuitable for you</li>
        <li>Provide you with a Credit Proposal Disclosure document before we provide credit assistance</li>
      </ul>

      <h2>6. Our lender panel</h2>
      <p>
        We access a panel of over 40 lenders through our aggregator, Connective. While we compare a wide range of products, we do not have access to every lender or product in the market. The loans we recommend will come from this panel.
      </p>

      <h2>7. Complaints</h2>
      <p>
        If you have a complaint about our services, please contact us first:
      </p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:anita@aipfinance.com.au">anita@aipfinance.com.au</a></li>
        <li><strong>Phone:</strong> <a href="tel:+61498241696">0498 241 696</a></li>
      </ul>
      <p>
        We will acknowledge your complaint within 5 business days and work to resolve it within 30 days. If you are not satisfied with our response, you may contact the <strong>Australian Financial Complaints Authority (AFCA)</strong>:
      </p>
      <ul>
        <li><strong>Website:</strong> <a href="https://www.afca.org.au" target="_blank" rel="noreferrer noopener">afca.org.au</a></li>
        <li><strong>Phone:</strong> 1800 931 678 (free call)</li>
        <li><strong>Email:</strong> <a href="mailto:info@afca.org.au">info@afca.org.au</a></li>
        <li><strong>Post:</strong> GPO Box 3, Melbourne VIC 3001</li>
      </ul>
      <p>AFCA provides free and independent dispute resolution for financial complaints. You may also contact <strong>ASIC</strong> on 1300 300 630 or at <a href="https://www.asic.gov.au" target="_blank" rel="noreferrer noopener">asic.gov.au</a>.</p>

      <h2>8. Your privacy</h2>
      <p>
        We collect your personal information for the purpose of providing credit assistance. Please refer to our <a href="/privacy-policy">Privacy Policy</a> for details on how we handle your information.
      </p>
    </LegalLayout>
  );
}
