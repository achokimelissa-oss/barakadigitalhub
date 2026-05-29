import { Helmet } from "react-helmet-async";

const steps = [
  { n: 1, title: "Scoping & Discovery", desc: "Understand objectives, datasets and success metrics." },
  { n: 2, title: "Tooling & Pilot", desc: "Set up annotation tools, run a pilot and iterate." },
  { n: 3, title: "Annotation & QA", desc: "Deliver high-quality labeled data with layered QA." },
  { n: 4, title: "Reporting & Handover", desc: "Provide reports, exports, and handover assets." },
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
