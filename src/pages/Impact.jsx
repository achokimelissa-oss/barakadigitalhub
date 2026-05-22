import { Link } from "react-router-dom";

function Impact() {
  return (
    <section className="section-block social-impact-page">
      <div className="impact-hero">
        <div className="text-block">
          <p className="eyebrow">Social Impact</p>
          <h3>Modern digital work with purpose and color</h3>
          <p>
            Baraka Digital Hub blends global delivery, creative execution, and a real social mission. We help clients scale while creating sustainable opportunity for youth in Nairobi.
          </p>
        </div>
      </div>

      <div className="impact-grid">
        <article className="impact-card accent-purple">
          <span>Creative delivery</span>
          <h4>Bold, modern execution</h4>
          <p>
            Branding, web, and digital growth solutions that feel polished, confident, and ready for global markets.
          </p>
        </article>
        <article className="impact-card accent-cyan">
          <span>Impact at scale</span>
          <h4>Business outcomes with social purpose</h4>
          <p>
            Every engagement fuels skills development, income for youth, and dependable support for Baraka Children’s Home.
          </p>
        </article>
        <article className="impact-card accent-sunset">
          <span>Global-ready operations</span>
          <h4>Reliable delivery across time zones</h4>
          <p>
            Responsive communication, clean workflows, and consistent quality for clients anywhere in the world.
          </p>
        </article>
      </div>

      <div className="impact-highlight-grid">
        <article className="impact-highlight">
          <div className="highlight-pill">67% youth opportunity</div>
          <p>Projects are built to create measurable pathways from training to real digital work.</p>
        </article>
        <article className="impact-highlight">
          <div className="highlight-pill">Creative systems</div>
          <p>Design and digital operations that feel modern, reliable, and visually compelling.</p>
        </article>
      </div>

      <div className="impact-cta">
        <div className="text-block">
          <h3>Ready to build work that matters?</h3>
          <p>
            Let’s design a partnership that proves global digital services can be professional, creative, and purpose-driven.
          </p>
          <Link className="button primary" to="/contact">
            Talk to us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Impact;
