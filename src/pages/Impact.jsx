import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Impact() {
  return (
    <>
      <Helmet bodyAttributes={{ class: "impact-page" }}>
        <title>Impact | Baraka Digital Hub</title>
        <meta
          name="description"
          content="Baraka Digital Hub combines enterprise AI services with a proven social impact model from Nairobi."
        />
      </Helmet>

      <div className="impact-page">
        <div className="top-accent" aria-hidden="true" />
        <section className="section-block impact-hero">
          <div className="text-block">
            <p className="highlight-pill">Global AI operations + local impact</p>
            <h1>
              Enterprise-grade data services that scale with integrity, accountability, and measurable social value.
            </h1>
            <p>
              Baraka Digital Hub is a Nairobi-based delivery partner for AI training data, annotation, transcription, and data operations. We combine rigorous quality systems with sustainable employment pathways for underserved youth.
            </p>
            <div className="hero-actions impact-hero-actions">
              <Link to="/services" className="button primary">
                View services
              </Link>
              <Link to="/contact#send-message" className="button secondary">
                Talk to our team
              </Link>
            </div>
          </div>

          <div className="impact-grid impact-hero-grid">
            {[
              {
                value: "80+",
                label: "Certified specialists trained in AI annotation",
                color: "#7dd3fc",
              },
              {
                value: "1.2M+",
                label: "Data records processed for global clients",
                color: "#86efac",
              },
              {
                value: "60–80%",
                label: "Revenue reinvested into youth employment",
                color: "#fbbf24",
              },
            ].map((item, index) => (
              <article key={index} className="impact-card impact-hero-stat">
                <span>{item.label}</span>
                <h4 style={{ color: item.color }}>{item.value}</h4>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block impact-overview">
          <div className="text-block">
            <div className="section-tag">Trusted, measurable delivery</div>
            <h2>We help high-growth technology teams accelerate AI projects without adding risk.</h2>
            <p>
              Our clients rely on Baraka Digital Hub for nearshore capacity, fast turnarounds, and consistent quality across annotation, transcription, and data pipeline workflows.
            </p>
          </div>

          <div className="impact-grid corporate-cards">
            <article className="impact-card accent-cyan">
              <h3>Precision-first workflows</h3>
              <p>
                Structured quality control, repeatable review loops, and compliance-ready documentation for every dataset.
              </p>
            </article>
            <article className="impact-card accent-purple">
              <h3>Scalable talent operations</h3>
              <p>
                A talent ecosystem built for rapid ramp, skills coaching, and verified delivery across high-volume AI workloads.
              </p>
            </article>
            <article className="impact-card accent-sunset">
              <h3>Social value embedded</h3>
              <p>
                Every engagement funds sustainable income, training, and support for Nairobi youth transitioning from care to careers.
              </p>
            </article>
          </div>
        </section>

        <section className="section-block impact-model-block">
          <div className="about-grid">
            <div className="about-panel">
              <h2>Our model</h2>
              <p>
                We deliver data operations with the discipline of a global tech partner and the accountability of a mission-driven organization. Our approach is designed to integrate into enterprise systems while generating meaningful social impact.
              </p>
              <ul>
                <li>End-to-end delivery for annotation, transcription, and validation.</li>
                <li>Data quality assurances with human review and audit trails.</li>
                <li>Continuous upskilling and stable employment for local youth.</li>
                <li>Transparent pricing and reporting for every engagement.</li>
              </ul>
            </div>

            <div className="about-card about-highlight">
              <h3>Why it works</h3>
              <p>
                Baraka Digital Hub was founded to ensure client investment supports both project outcomes and long-term community resilience. This means better retention, higher quality, and a stronger social return on every contract.
              </p>
            </div>
          </div>
        </section>

        <section className="section-block impact-grid results-grid">
          <article className="impact-highlight">
            <strong>70–80%</strong>
            <p>Of project revenue is invested directly in youth earnings and workforce development.</p>
          </article>
          <article className="impact-highlight">
            <strong>10–15%</strong>
            <p>Supports operational systems, quality infrastructure, and training programs.</p>
          </article>
          <article className="impact-highlight">
            <strong>5–10%</strong>
            <p>Funds Baraka Children’s Home support for education, housing, and essential wellbeing.</p>
          </article>
        </section>

        <section className="section-block impact-cta impact-cta-primary">
          <div className="text-block">
            <h3>Deliver on AI outcomes with a partner you can trust.</h3>
            <p>
              Work with Baraka Digital Hub for reliable delivery, intelligent data operations, and social impact that strengthens your brand and supply chain.
            </p>
            <Link to="/contact#send-message" className="button primary">
              Start a partnership
            </Link>
          </div>
        </section>

        <section className="section-block impact-cta impact-cta-secondary">
          <div className="text-block">
            <h3>Interested in a tailored pilot or audit?</h3>
            <p>
              We can help you scope a pilot, validate your dataset strategy, or scale a production-ready annotation workflow with confidence.
            </p>
            <Link to="/contact#send-message" className="button secondary">
              Contact our team
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Impact;
