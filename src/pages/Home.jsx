import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>Baraka Digital Hub | AI Data Operations & Training Services</title>
        <meta
          name="description"
          content="Enterprise-ready AI data operations, human-in-the-loop AI, transcription, and BPO services from Nairobi—designed for global clients and measurable social impact."
        />
        <meta
          name="keywords"
          content="AI data labeling, transcription, annotation, AI training data, outsourcing Africa"
        />
      </Helmet>
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hero-copy__top">
              <p className="eyebrow">AI Training & Digital Operations</p>
              <p className="hero-badge">Enterprise AI data operations · Audit-ready workflows · Production-ready delivery</p>
            </div>
            <h1 className="hero-title">Enterprise-grade AI operations for global model delivery</h1>
            <p className="hero-text">
              Baraka Digital Hub delivers disciplined, secure AI data operations from Nairobi. Our certified specialists integrate with client systems to provide human-reviewed datasets, QA governance, and production-grade transparency for enterprise AI workflows.
            </p>
            <div className="hero-actions">
              <Link to="/pilot" className="button primary">
                Start Pilot Program
              </Link>
              <Link to="/services" className="button secondary">
                Explore Services
              </Link>
            </div>
          </div>

          <aside className="hero-panel">
            <span className="panel-tag">Operational strengths</span>
            <h2 className="hero-panel__headline">Structured delivery for enterprise AI teams</h2>
            <div className="hero-panel__list">
              <div className="panel-item">
                <span>01</span>
                <div>
                  <strong>Data ops integration</strong>
                  <p className="panel-item__text">Seamless integration with client systems, tooling, and governance layers.</p>
                </div>
              </div>
              <div className="panel-item">
                <span>02</span>
                <div>
                  <strong>Human QA & review</strong>
                  <p className="panel-item__text">Multi-stage quality checks, human verification, and audit-ready traceability.</p>
                </div>
              </div>
              <div className="panel-item">
                <span>03</span>
                <div>
                  <strong>Production-ready delivery</strong>
                  <p className="panel-item__text">Reliable, repeatable execution designed for enterprise deployment.</p>
                </div>
              </div>
            </div>
            <p className="hero-panel__note">Integrated into client workflows with audit-ready reviews and repeatable production delivery.</p>
          </aside>
        </div>

        <div className="hero-metrics">
          <article className="metric-card">
            <div className="metric-value">100+</div>
            <div className="metric-label">Certified specialists</div>
          </article>
          <article className="metric-card">
            <div className="metric-value">100%</div>
            <div className="metric-label">QA coverage</div>
          </article>
          <article className="metric-card">
            <div className="metric-value">90%+</div>
            <div className="metric-label">Accuracy target</div>
          </article>
          <article className="metric-card">
            <div className="metric-value">40–70%</div>
            <div className="metric-label">Cost vs US/EU</div>
          </article>
        </div>

        <div className="scroll-indicator">
          <span className="indicator-arrow">↓</span>
          <span>Explore capabilities</span>
        </div>
      </section>
    </>
  );
}

export default Home;
