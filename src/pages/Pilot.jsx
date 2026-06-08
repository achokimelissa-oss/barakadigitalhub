import { Helmet } from "react-helmet-async";

function Pilot() {
  return (
    <>
      <Helmet>
        <title>Start a Pilot Program | Baraka Digital Hub</title>
        <meta
          name="description"
          content="Try Baraka Digital Hub with a small batch. Get results in 48 hours with full quality reporting before you commit to scale."
        />
      </Helmet>

      <section className="section-block section-intro">
        <div className="text-block">
          <p className="highlight-pill">Pilot Program</p>
          <h1>Start a pilot with us</h1>
          <p>
            Pilot Execution validates accuracy and throughput under live conditions before full production ramp. Expect sample deliverables (often within 48 hours), full QA reporting, error logs, and clear recommendations for scaling.
          </p>
          <p>
            Pilots confirm tooling, SOPs, and performance targets while giving you direct access to the Project Manager and QA insights required to make a confident deployment decision.
          </p>
        </div>
      </section>
    </>
  );
}

export default Pilot;
