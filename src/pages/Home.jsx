import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>AI Training & Digital Operations | Empowering Futures through Technology</title>
        <meta
          name="description"
          content="High-quality AI training, data annotation, transcription, and outsourced digital operations powered by Africa-based teams, designed for scale and clarity."
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
          AI data services, web development, and design for clients worldwide—built by talented youth from underserved communities in Nairobi.
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
