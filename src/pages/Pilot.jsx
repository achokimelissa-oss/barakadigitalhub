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

      <div style={{ background: "radial-gradient(circle at top, rgba(59,130,246,.18), transparent 28%), radial-gradient(circle at bottom right, rgba(16,185,129,.14), transparent 24%), linear-gradient(180deg, #020617 0%, #08172f 45%, #0b203f 100%)", color: "#e2e8f0", minHeight: "100vh" }}>
      <section className="section-block section-intro" style={{ background: "transparent" }}>
        <div className="text-block">
          <p className="highlight-pill">Pilot Program</p>
          <h1 style={{ color: "#f8fafc" }}>Start a pilot with us</h1>
          <p style={{ color: "rgba(226,232,240,.84)" }}>
            Pilot Execution validates accuracy and throughput under live conditions before full production ramp. Expect sample deliverables (often within 48 hours), full QA reporting, error logs, and clear recommendations for scaling.
          </p>
          <p style={{ color: "rgba(226,232,240,.84)" }}>
            Pilots confirm tooling, SOPs, and performance targets while giving you direct access to the Project Manager and QA insights required to make a confident deployment decision.
          </p>
        </div>
      </section>
      </div>
    </>
  );
}

export default Pilot;
