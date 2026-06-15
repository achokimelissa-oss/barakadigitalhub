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
      <div className="hero-copy">
        <p className="eyebrow">AI Training & Digital Operations</p>
        <p className="hero-badge">Enterprise AI data operations · Audit-ready workflows · Production-ready delivery</p>
        <h2 className="gradient-text">Enterprise-ready AI operations built for global scale</h2>
        <p>
          Baraka Digital Hub delivers disciplined, secure AI data operations from Nairobi. Our certified specialists integrate with client systems to provide human-reviewed datasets, QA governance, and production-grade transparency for enterprise AI workflows.
        </p>
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
            <span className="flow-step__number">01</span>
            <span>Data ops integration</span>
          </div>
          <div className="flow-step">
            <span className="flow-step__number">02</span>
            <span>Human QA & review</span>
          </div>
          <div className="flow-step">
            <span className="flow-step__number">03</span>
            <span>Production-ready delivery</span>
          </div>
        </div>
        <p className="hero-note">Integrated into client workflows with audit-ready reviews and repeatable production delivery.</p>
        <div className="scroll-indicator">
          <span className="indicator-arrow">↓</span>
          <span>Explore capabilities</span>
        </div>
      </div>
    </section>
    </>
  );
}

export default Home;
