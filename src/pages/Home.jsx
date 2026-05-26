import { Link } from "react-router-dom";

function Home() {
  return (
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
  );
}

export default Home;
