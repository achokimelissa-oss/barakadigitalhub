import { Helmet } from "react-helmet-async";

function Operations() {
  return (
    <>
      <Helmet>
        <title>Operations | Baraka Digital Hub</title>
        <meta
          name="description"
          content="Enterprise-ready operations infrastructure: 80+ certified taskers, 100% QA review, 48-hour turnaround from Nairobi."
        />
      </Helmet>

      <section className="section-block section-intro">
        <div className="text-block">
          <p className="highlight-pill">Operations</p>
          <h1>Operational excellence</h1>
          <p>
            Our operations combine trained taskers, layered QA, and clear SLAs to deliver enterprise-ready AI data services from Nairobi.
          </p>
        </div>
      </section>
    </>
  );
}

export default Operations;
