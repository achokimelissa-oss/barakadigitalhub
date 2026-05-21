import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Build your brand online</p>
        <h2>Creative strategy, web design, and digital acceleration.</h2>
        <p>
          Launch faster with a Vite + React site built for high performance,
          accessibility, and modern deployment.
        </p>
        <div className="hero-actions">
          <Link to="/contact" className="button primary">
            Get started
          </Link>
          <Link to="/services" className="button secondary">
            Our services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
