import { Helmet } from "react-helmet-async";

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
    </>
  );
}

export default Workflow;
