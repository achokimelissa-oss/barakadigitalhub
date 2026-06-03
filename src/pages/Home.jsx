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
          AI data operations, human-in-the-loop AI, transcription, and BPO services for clients worldwide—delivered by trained youth from underserved communities in Nairobi.
        </p>
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
