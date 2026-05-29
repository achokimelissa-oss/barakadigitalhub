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
            Validate workflows, measure quality, and receive sample deliverables within 48 hours. Pilots include full QA reporting and recommendations for scaling.
          </p>
        </div>
      </section>
    </>
  );
}

export default Pilot;
