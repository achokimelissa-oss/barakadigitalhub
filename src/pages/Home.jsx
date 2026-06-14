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
        <p className="eyebrow">Social Impact</p>
        <h2 className="gradient-text">Work That Creates Real Change</h2>
        <p>
          Baraka Digital Hub is a tool-agnostic AI data operations and business process outsourcing partner. We function as a managed execution layer for AI systems and data-heavy enterprise operations, integrating directly into client infrastructure without requiring workflow redesign. Our focus is repeatable, auditable, and scalable production systems for AI and data operations.
        </p>
        <div className="metrics-strip" style={{display: 'flex', gap: 18, marginTop: 20, flexWrap: 'wrap'}}>
          <div className="metric" style={{minWidth: 140}}>
            <div className="metric-value">100+</div>
            <div className="metric-label">Certified specialists</div>
          </div>
          <div className="metric" style={{minWidth: 140}}>
            <div className="metric-value">100%</div>
            <div className="metric-label">QA coverage</div>
          </div>
          <div className="metric" style={{minWidth: 140}}>
            <div className="metric-value">90%+</div>
            <div className="metric-label">Accuracy target</div>
          </div>
          <div className="metric" style={{minWidth: 140}}>
            <div className="metric-value">40–70%</div>
            <div className="metric-label">Cost vs US/EU</div>
          </div>
        </div>
        <div className="hero-actions">
          <Link to="/services" className="button primary">
            Our services
          </Link>
          <Link to="/impact" className="button secondary">
            Learn more
          </Link>
        </div>
        <div className="scroll-indicator">
          <span className="indicator-arrow">↓</span>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
    </>
  );
}

export default Home;
