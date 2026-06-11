import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function BackOfficePage({ goBack }) {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Back Office Services — Baraka Digital Hub Insights</title>
        <meta name="description" content="The Back Office Is Where Growth Goes to Stall — Unless You Outsource It Right" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        :root {
          --navy:      #f8fafc;
          --navy-d:    #020617;
          --green:     #86efac;
          --teal:      #7dd3fc;
          --amber:     #fbbf24;
          --off-white: #e2e8f0;
          --muted:     #94a3b8;
          --border:    rgba(255,255,255,.08);
        }

        body {
          font-family: 'Inter', sans-serif;
          background: radial-gradient(circle at top, rgba(59,130,246,.18), transparent 28%), radial-gradient(circle at bottom right, rgba(16,185,129,.14), transparent 24%), linear-gradient(180deg, #020617 0%, #08172f 45%, #0b203f 100%);
          color: #e2e8f0;
          line-height: 1.7;
        }

        nav {
          background: rgba(1,12,32,.72);
          padding: 0 6%;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 1px solid rgba(255,255,255,.08);
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          cursor: pointer;
        }

        .nav-logo {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--green);
        }

        .nav-name {
          font-family: 'Sora', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          color: #fff;
        }

        .nav-name span {
          color: var(--amber);
        }

        .nav-tag {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.38);
        }

        .article-wrap {
          max-width: 740px;
          margin: 0 auto;
          padding: 64px 5% 100px;
        }

        .article-category {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--teal);
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .article-category::before {
          content: '';
          display: block;
          width: 28px;
          height: 2px;
          background: var(--teal);
          border-radius: 2px;
        }

        h1 {
          font-family: 'Sora', sans-serif;
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 800;
          color: var(--navy);
          line-height: 1.16;
          letter-spacing: -0.025em;
          margin-bottom: 28px;
        }

        .article-divider {
          width: 48px;
          height: 3px;
          background: var(--green);
          border-radius: 3px;
          margin-bottom: 36px;
        }

        .article-body p {
          font-size: 1.05rem;
          line-height: 1.88;
          color: rgba(226,232,240,.85);
          margin-bottom: 24px;
        }

        .article-body h2 {
          font-family: 'Sora', sans-serif;
          font-size: 1.22rem;
          font-weight: 700;
          color: var(--navy);
          margin: 48px 0 14px;
          letter-spacing: -0.015em;
        }

        .pull-quote {
          border-left: 4px solid var(--amber);
          padding: 18px 24px;
          margin: 40px 0;
          background: #fff;
          border-radius: 0 10px 10px 0;
        }

        .pull-quote p {
          font-family: 'Sora', sans-serif;
          font-size: 1.08rem !important;
          font-weight: 600 !important;
          color: var(--navy) !important;
          line-height: 1.55 !important;
          margin: 0 !important;
          font-style: italic;
        }

        .service-block {
          background: #fff;
          border: 1px solid var(--border);
          border-left: 3px solid var(--green);
          border-radius: 0 10px 10px 0;
          padding: 22px 22px 18px;
          margin: 20px 0;
        }

        .service-block:nth-child(2n) {
          border-left-color: var(--teal);
        }

        .service-block:nth-child(3n) {
          border-left-color: var(--amber);
        }

        .service-block:nth-child(4n) {
          border-left-color: var(--navy);
        }

        .service-block .service-name {
          font-family: 'Sora', sans-serif;
          font-weight: 700;
          font-size: 0.92rem;
          color: var(--navy);
          margin-bottom: 8px;
        }

        .service-block p {
          font-size: 0.9rem !important;
          color: var(--muted) !important;
          line-height: 1.68 !important;
          margin: 0 !important;
        }

        .industry-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin: 24px 0 36px;
        }

        .industry-card {
          background: #fff;
          border: 1px solid var(--border);
          border-top: 3px solid var(--navy);
          border-radius: 8px;
          padding: 18px 18px 16px;
        }

        .industry-card:nth-child(2n) {
          border-top-color: var(--teal);
        }

        .industry-card:nth-child(3n) {
          border-top-color: var(--green);
        }

        .industry-card:nth-child(4n) {
          border-top-color: var(--amber);
        }

        .industry-title {
          font-family: 'Sora', sans-serif;
          font-weight: 700;
          font-size: 0.88rem;
          color: var(--navy);
          margin-bottom: 7px;
        }

        .industry-card p {
          font-size: 0.85rem !important;
          color: var(--muted) !important;
          line-height: 1.62 !important;
          margin: 0 !important;
        }

        .stat-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin: 32px 0;
        }

        .stat-box {
          background: var(--navy);
          border-radius: 10px;
          padding: 22px 16px;
          text-align: center;
        }

        .stat-value {
          font-family: 'Sora', sans-serif;
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--amber);
          display: block;
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 6px;
        }

        .stat-label {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.4;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .process-steps {
          margin: 24px 0 36px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .step {
          display: flex;
          gap: 20px;
          padding: 20px 0;
          border-bottom: 1px solid var(--border);
          align-items: flex-start;
        }

        .step:last-child {
          border-bottom: none;
        }

        .step-num {
          font-family: 'Sora', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--border);
          line-height: 1;
          flex-shrink: 0;
          width: 36px;
          padding-top: 2px;
        }

        .step-title {
          font-family: 'Sora', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--navy);
          margin-bottom: 5px;
        }

        .step-desc {
          font-size: 0.88rem;
          color: var(--muted);
          line-height: 1.65;
        }

        footer {
          background: var(--navy-d);
          color: rgba(255,255,255,0.38);
          text-align: center;
          padding: 32px 5%;
          font-size: 0.76rem;
          letter-spacing: 0.02em;
        }

        footer span {
          color: var(--amber);
        }

        @media (max-width: 600px) {
          .industry-grid {
            grid-template-columns: 1fr;
          }
          .stat-row {
            grid-template-columns: 1fr;
          }
          h1 {
            font-size: 1.65rem;
          }
        }
      `}</style>

      <nav>
        <a className="nav-brand" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          <img className="nav-logo" src="/favicon-512.png" alt="BDH" />
          <span className="nav-name">Baraka <span>Digital Hub</span></span>
        </a>
        <span className="nav-tag">Insights</span>
      </nav>

      <div className="article-wrap">
        <div className="article-category">BPO &amp; Back-Office Services</div>

        <h1>The Back Office Is Where Growth Goes to Stall — Unless You Outsource It Right</h1>

        <div className="article-divider"></div>

        <div className="article-body">
          <p>Every growing company eventually hits the same ceiling. The product is working. The customers are coming. But somewhere between the deal being signed and the value being delivered, a quiet backlog is building — invoices unprocessed, records unverified, data sitting in inboxes rather than systems, support tickets aging past SLA. The front of the house is thriving. The back office is drowning.</p>

          <p>For most businesses, the instinct is to hire. But hiring takes time, and back-office roles are expensive to recruit, train, and retain at the pace that a scaling operation demands. The smarter path — the one that fast-growing companies across fintech, healthcare, logistics, and e-commerce are increasingly taking — is a managed outsourcing partnership with a team that is already trained, already staffed, and already accountable for outcomes.</p>

          <p>That is what Baraka Digital Hub offers. From our delivery center in Nairobi, Kenya, we operate as a seamless extension of your internal teams — handling the high-volume, process-dependent work that your skilled staff should not be spending their time on, with the accuracy, turnaround times, and governance that enterprise operations demand.</p>

          <div className="pull-quote">
            <p>"Back-office outsourcing is not about cutting costs. It is about reclaiming the operational bandwidth your best people need to do the work only they can do."</p>
          </div>

          <h2>What We Handle</h2>

          <p>BDH back-office services are built around the functions that create the most operational drag at scale — high-volume, accuracy-sensitive, and time-critical work that sits at the intersection of data, documents, and process.</p>

          <div className="service-block">
            <div className="service-name">Document Processing &amp; Data Entry</div>
            <p>Extraction, indexing, and structured entry of data from invoices, purchase orders, contracts, application forms, onboarding documents, and scanned records. We handle both digital-native documents and physical document digitization pipelines, with accuracy benchmarks agreed upfront and verified through independent QA review.</p>
          </div>

          <div className="service-block">
            <div className="service-name">KYC &amp; Identity Verification Support</div>
            <p>Manual review and verification of customer identity documents — national IDs, passports, utility bills, and business registration certificates — as part of regulated onboarding workflows. Our teams work within your compliance framework, flagging exceptions and edge cases for escalation while processing high-volume standard cases to agreed SLAs.</p>
          </div>

          <div className="service-block">
            <div className="service-name">Finance &amp; Accounts Processing</div>
            <p>Invoice validation, accounts payable and receivable data entry, expense report processing, and reconciliation support. We integrate with your ERP or accounting systems to ensure structured, audit-ready outputs — not just processed files, but records that are immediately usable by your finance team.</p>
          </div>

          <div className="service-block">
            <div className="service-name">Data Cleansing &amp; Database Management</div>
            <p>Deduplication, normalization, enrichment, and validation of customer records, product catalogues, supplier databases, and CRM data. Poor data quality is one of the most underestimated costs in any operation — bad records propagate errors downstream into reporting, billing, and customer communications. We stop that at the source.</p>
          </div>

          <div className="service-block">
            <div className="service-name">Customer Support &amp; Email Management</div>
            <p>Tier-1 customer support handling, ticket triage, and email queue management across standard customer service workflows. Our teams are trained to your brand voice, escalation procedures, and product knowledge base — operating as a genuine extension of your support function, not a generic answering service.</p>
          </div>

          <div className="service-block">
            <div className="service-name">Research &amp; Data Collection</div>
            <p>Web research, competitor monitoring, contact list building, market data collection, and structured intelligence gathering. Whether you need a clean database of target accounts, a sector landscape mapped, or product information aggregated from multiple sources, we deliver structured outputs on defined timelines.</p>
          </div>

          <div className="service-block">
            <div className="service-name">Content Moderation &amp; Compliance Review</div>
            <p>Human review of user-generated content, listings, profiles, and submissions against defined policy frameworks. Particularly critical for marketplace platforms, social products, and regulated industries where automated moderation alone creates unacceptable risk exposure.</p>
          </div>

          <h2>The Industries We Serve</h2>

          <p>Back-office bottlenecks take different shapes in different industries, but the underlying problem is always the same: high-value people doing low-complexity work because there is no reliable alternative. BDH provides that alternative across sectors:</p>

          <div className="industry-grid">
            <div className="industry-card">
              <div className="industry-title">Financial Services &amp; Fintech</div>
              <p>KYC document review, loan application processing, transaction monitoring support, and reconciliation are among the highest-volume back-office functions in the sector. Regulated timelines and audit requirements make accuracy non-negotiable — BDH operates with the governance structure those environments demand.</p>
            </div>

            <div className="industry-card">
              <div className="industry-title">Healthcare &amp; Insurance</div>
              <p>Claims processing, patient record indexing, prior authorization support, and medical billing data entry require both precision and confidentiality. Our teams work within defined data handling protocols and are trained on the document types specific to healthcare administration workflows.</p>
            </div>

            <div className="industry-card">
              <div className="industry-title">E-Commerce &amp; Retail</div>
              <p>Product catalogue management, listing enrichment, order processing support, returns handling, and customer query management at the scale that marketplaces and D2C brands require during growth periods and seasonal peaks — without the overhead of a permanently expanded headcount.</p>
            </div>

            <div className="industry-card">
              <div className="industry-title">Logistics &amp; Supply Chain</div>
              <p>Freight document processing, customs declaration support, shipment tracking data entry, supplier database management, and invoice reconciliation across multi-party logistics chains. Accuracy here is operational — a data entry error in a shipment record creates real-world delays.</p>
            </div>

            <div className="industry-card">
              <div className="industry-title">Legal &amp; Professional Services</div>
              <p>Contract data extraction, due diligence document review support, case file indexing, and research assistance. Law firms and professional services practices increasingly leverage managed back-office teams to handle document-heavy workstreams that do not require qualified professional judgment.</p>
            </div>

            <div className="industry-card">
              <div className="industry-title">Real Estate &amp; PropTech</div>
              <p>Property listing management, lease document processing, tenant onboarding support, and transaction data entry. Property operations generate significant document and data volume that scales with portfolio size — BDH scales with it.</p>
            </div>

            <div className="industry-card">
              <div className="industry-title">Startups &amp; Scale-Ups</div>
              <p>Early-stage companies often lack the internal capacity to build back-office functions before they are needed at scale. BDH provides an immediately available, fully managed team that can absorb operational volume from day one — without the lead time of a hiring cycle.</p>
            </div>

            <div className="industry-card">
              <div className="industry-title">NGOs &amp; Development Organizations</div>
              <p>Beneficiary data management, grant reporting support, field data processing, and programme documentation for organizations operating with lean administrative teams across multiple geographies. BDH's Nairobi base and familiarity with East African operational contexts is a direct advantage here.</p>
            </div>
          </div>

          <div className="stat-row">
            <div className="stat-box">
              <span className="stat-value">48h</span>
              <span className="stat-label">Typical pilot onboarding turnaround</span>
            </div>
            <div className="stat-box">
              <span className="stat-value">~0%</span>
              <span className="stat-label">Workforce turnover — no retraining cycles</span>
            </div>
            <div className="stat-box">
              <span className="stat-value">99%+</span>
              <span className="stat-label">Target accuracy on document processing tasks</span>
            </div>
          </div>

          <h2>How a BDH Back-Office Engagement Works</h2>

          <p>We do not sell seats. We deliver outcomes. Every BDH back-office engagement is structured around a defined scope of work, agreed quality benchmarks, and a governance framework that keeps your team in control without burying them in management overhead.</p>

          <div className="process-steps">
            <div className="step">
              <div className="step-num">01</div>
              <div className="step-content">
                <div className="step-title">Discovery &amp; Process Mapping</div>
                <div className="step-desc">We document your existing workflow, identify the inputs, outputs, decision rules, exception paths, and quality standards for each function. No assumptions — we learn your process before we run it.</div>
              </div>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <div className="step-content">
                <div className="step-title">Team Training &amp; SOP Development</div>
                <div className="step-desc">We build a tailored standard operating procedure library and train a dedicated team on your specific documents, systems, and quality requirements — including edge cases and escalation paths.</div>
              </div>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <div className="step-content">
                <div className="step-title">Pilot Execution</div>
                <div className="step-desc">A controlled pilot run on a defined volume of real work, with close-loop QA and daily accuracy reporting. This is where we prove the model works before scaling it.</div>
              </div>
            </div>
            <div className="step">
              <div className="step-num">04</div>
              <div className="step-content">
                <div className="step-title">Steady-State Operations &amp; Reporting</div>
                <div className="step-desc">Full-volume operations with regular performance reporting against agreed SLAs — throughput, accuracy, turnaround time, and exception rates. You see the numbers; we own them.</div>
              </div>
            </div>
          </div>

          <h2>The BDH Difference: Managed, Not Crowdsourced</h2>

          <p>There is an important distinction between a managed back-office partner and a task marketplace. Platforms that route work to anonymous gig workers can offer low unit costs — but they cannot offer consistency, institutional knowledge, or accountability. When your KYC reviewer changes every week, every document type needs to be relearned. When your invoice processor has no continuity with your ERP setup, errors compound.</p>

          <p>BDH operates as a managed delivery node. Your dedicated team builds deep familiarity with your workflows, your document formats, your exception patterns, and your quality standards over time. Near-zero workforce turnover means the person processing your hundredth invoice understands your business in a way that no anonymous crowdsourced worker ever will.</p>

          <p>That continuity is not a soft benefit — it is the mechanism through which accuracy improves, throughput increases, and the management burden on your side shrinks to the oversight level it should always have been.</p>

          <div className="pull-quote">
            <p>"Consistency is the compounding advantage of a stable team. It is invisible on day one and indispensable by month six."</p>
          </div>

          <h2>Start With a Pilot</h2>

          <p>The lowest-risk way to evaluate a back-office partnership is to run a scoped pilot on a real workstream — a defined document type, a specific queue, a contained process — with agreed quality benchmarks and a clear decision point at the end. BDH is designed for exactly that kind of engagement. We can be operational within days, not months.</p>

          <p>To discuss your back-office requirements and scope a pilot project, reach out to our team: <strong>projects@barakadigitalhub.com</strong></p>
        </div>
      </div>

      <footer>
        © 2026 <span>Baraka Digital Hub</span> · Nairobi, Kenya · projects@barakadigitalhub.com
      </footer>
    </>
  );
}
