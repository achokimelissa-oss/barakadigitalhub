import { Helmet } from "react-helmet-async";

const steps = [
  { n: 1, title: "Workflow Mapping", desc: "Schema definition, guideline documentation, QA rules, and task specification review." },
  { n: 2, title: "Environment Setup", desc: "Access provisioning, security alignment, SOP configuration, and platform onboarding." },
  { n: 3, title: "Pilot Execution", desc: "Accuracy and throughput validation under live conditions before full production ramp." },
  { n: 4, title: "Production Scaling", desc: "Full deployment with continuous monitoring, reporting, and scaling as volumes grow." },
];

function Workflow() {
  return (
    <>
      <Helmet>
        <title>Our Workflow | Baraka Digital Hub</title>
        <meta
          name="description"
          content="From scoping to delivery — see exactly how Baraka Digital Hub manages AI data projects with structured QA and reporting."
        />
      </Helmet>

      <section className="section-block section-intro">
        <div className="text-block">
          <p className="highlight-pill">Workflow</p>
          <h1>How we deliver</h1>
          <p>
            We follow a structured process from scoping and tooling to QA and delivery, ensuring reproducible results and transparent reporting for every engagement.
          </p>
        </div>
      </section>

      <section className="section-block section-steps" style={{ padding: "40px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gap: 20 }}>
          {steps.map((s) => (
            <div key={s.n} style={{ background: "#fff", padding: 20, borderRadius: 12, boxShadow: "0 6px 18px rgba(15,23,42,0.06)" }}>
              <div>
                <div style={{ fontSize: ".78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".12em", opacity: .85, marginBottom: 6 }}>Stage {s.n}</div>
                <h3 style={{ margin: 0, fontSize: "1.1rem" }}>{s.title}</h3>
                <p style={{ marginTop: 8, marginBottom: 0, color: "#374151" }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Workflow;
