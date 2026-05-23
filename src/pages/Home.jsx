import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Global digital services with local impact</p>
        <h2 className="gradient-text">Digital strategy, design, and delivery for brands everywhere.</h2>
        <p>
          Build with a partner that combines modern web performance, strong operations,
          and social impact for clients across the globe.
        </p>
        <div className="hero-actions">
          <Link to="/contact" className="button primary">
            Get started
          </Link>
          <Link to="/services" className="button secondary">
            Our services
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
