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
      <section className="hero home-page">
        <div className="hero-tech-grid" />
        <div className="hero-tech-overlay" />

        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hero-copy__top">
              <p className="eyebrow">AI Training & Digital Operations</p>
              <p className="hero-badge">Production-grade AI workflows · Secure data intake · Audit-ready delivery</p>
            </div>
            <h1 className="hero-title">Enterprise AI operations built for audit, scale, and model-ready delivery</h1>
            <p className="hero-text">
              Baraka Digital Hub combines Nairobi-based specialists, disciplined data workflows, and transparent QA to turn raw datasets into enterprise-ready AI training assets.
            </p>
            <div className="hero-actions">
              <Link to="/pilot" className="button primary">
                Start Pilot Program
              </Link>
              <Link to="/services" className="button secondary">
                Explore Services
              </Link>
            </div>
            <div className="hero-flow">
              <div className="flow-step">
                <span className="flow-step__number">1</span>
                Secure data intake
              </div>
              <div className="flow-step">
                <span className="flow-step__number">2</span>
                QA, governance, and review
              </div>
              <div className="flow-step">
                <span className="flow-step__number">3</span>
                Deliver model-ready output
              </div>
            </div>
          </div>

          <aside className="hero-panel">
            <span className="panel-tag">Operational strengths</span>
            <h2 className="hero-panel__headline">Structured, secure delivery for AI teams</h2>
            <div className="hero-panel__list">
              <div className="panel-item">
                <span>01</span>
                <div>
                  <strong>Audit-ready workflows</strong>
                  <p className="panel-item__text">Traceable data handling, SLA-backed review, and compliant audit logs.</p>
                </div>
              </div>
              <div className="panel-item">
                <span>02</span>
                <div>
                  <strong>Human-led quality control</strong>
                  <p className="panel-item__text">Expert review, multi-stage verification, and accuracy validation across every task.</p>
                </div>
              </div>
              <div className="panel-item">
                <span>03</span>
                <div>
                  <strong>Production-ready scale</strong>
                  <p className="panel-item__text">Repeatable operations designed to support global AI development and enterprise rollouts.</p>
                </div>
              </div>
            </div>
            <p className="hero-panel__note">Aligned to enterprise governance, secure workflows, and measurable delivery for AI programs.</p>
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

        <div className="hero-note">Aligned to enterprise SLAs, secure controls, and data workflows for reliable model training delivery.</div>

        <div className="scroll-indicator">
          <span className="indicator-arrow">↓</span>
          <span>Explore capabilities</span>
        </div>
      </section>
    </>
  );
}

export default Home;
