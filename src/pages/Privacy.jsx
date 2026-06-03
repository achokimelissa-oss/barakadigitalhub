import { Helmet } from "react-helmet-async";

function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Baraka Digital Hub</title>
        <meta
          name="description"
          content="Baraka Digital Hub privacy policy — how we handle data, protect client information, and maintain compliance."
        />
      </Helmet>
      <section className="section-block contact-hero section-intro">
        <div className="text-block">
          <p className="highlight-pill">Compliance & privacy</p>
          <h1>Privacy and data protection</h1>
          <p>
            Baraka Digital Hub respects your privacy. We collect and process only the information required to deliver services, integrate into client systems, and maintain secure, auditable operations. We treat tooling as a deployment layer, not a dependency — working within client infrastructure when requested and maintaining strict controls over access, storage, and reporting.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="text-block">
          <h3 className="section-title soft">How we handle your information</h3>
          <p className="section-copy">
            Your contact details are used solely to respond to inquiries and manage engagements. We do not sell personal information or use it for unsolicited outreach. For client projects we process data strictly for the purpose of delivering contracted services and in accordance with any signed data processing agreements.
          </p>

          <h4 style={{ marginTop: 18 }}>Processing & access</h4>
          <ul className="section-copy">
            <li>Data is accessed only by authorized team members on a need-to-know basis and is partitioned per project.</li>
            <li>We support integration into client-owned tools and pipelines, or operate within our secure environment depending on security requirements.</li>
            <li>Access is logged and monitored; Project Managers and independent QA teams have separate controls to ensure objective review.</li>
          </ul>

          <h4 style={{ marginTop: 18 }}>Security measures</h4>
          <ul className="section-copy">
            <li>Encrypted storage and transport for sensitive data where required.</li>
            <li>Role-based access control, partitioned workspaces, and minimum-privilege provisioning.</li>
            <li>Operational SOPs for data handling, incident response, and secure disposal.</li>
          </ul>

          <h4 style={{ marginTop: 18 }}>Onboarding & environment setup</h4>
          <p className="section-copy">
            Our platform onboarding follows a four-step process to align security, workflows, and quality expectations before production:
          </p>
          <ol className="section-copy">
            <li><strong>Workflow Mapping:</strong> Schema definition, guideline documentation, and QA rules.</li>
            <li><strong>Environment Setup:</strong> Access provisioning, security alignment, and SOP configuration.</li>
            <li><strong>Pilot Execution:</strong> Live validation of accuracy and throughput with full QA reporting.</li>
            <li><strong>Production Scaling:</strong> Continuous monitoring, reporting, and scaling as volumes grow.</li>
          </ol>

          <h4 style={{ marginTop: 18 }}>Quality, reporting & transparency</h4>
          <p className="section-copy">
            We apply independent QA to outputs and provide daily progress reports, error logs, IAA/accuracy scores, and direct access to your Project Manager. QA is structurally separated from production and can review 100% of outputs depending on project requirements.
          </p>

          <h4 style={{ marginTop: 18 }}>Retention, deletion & legal requests</h4>
          <ul className="section-copy">
            <li>Data retention periods are defined per engagement and documented in the project agreement.</li>
            <li>On request we will securely delete client data according to agreed procedures, subject to contractual and regulatory obligations.</li>
            <li>We respond to lawful access requests and will notify clients when we receive legal process affecting their data, unless prohibited by law.</li>
          </ul>

          <h4 style={{ marginTop: 18 }}>Questions and data agreements</h4>
          <p className="section-copy">
            For detailed privacy statements, Data Processing Agreements (DPA), or project-specific security arrangements, contact: <a href="mailto:projects@barakadigitalhub.com" style={{ color: '#1d4ed8', textDecoration: 'none' }}>projects@barakadigitalhub.com</a>.
          </p>
        </div>
      </section>

      <section className="section-block accent">
        <div className="text-block">
          <h3 className="section-title soft">Questions?</h3>
          <p className="section-copy">
            Use the contact page to ask for a detailed privacy statement or data handling overview for your project.
          </p>
        </div>
      </section>
    </>
  );
}

export default Privacy;
