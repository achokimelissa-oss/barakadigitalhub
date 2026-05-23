function Services() {
  return (
    <>
      <section className="section-block service-hero section-intro">
        <div className="text-block">
          <p className="highlight-pill">Our Services</p>
          <h1>What we deliver</h1>
          <p>
            Baraka Digital Hub provides AI data services, web development, and design solutions to clients worldwide. Each service is backed by trained professionals and quality assurance systems built for global standards.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="service-grid">
          <article className="service-card">
            <h3>AI Data Services</h3>
            <p className="service-highlight">Production-grade data for machine learning</p>
            <p>
              We deliver high-quality datasets for AI training and development:
            </p>
            <ul className="service-list">
              <li>Computer vision annotation and labeling</li>
              <li>Natural language processing datasets</li>
              <li>Audio and speech processing</li>
              <li>Data quality assurance and validation</li>
            </ul>
            <p className="service-note">
              Each project is overseen by quality systems and delivered by trained professionals following global standards.
            </p>
          </article>

          <article className="service-card">
            <h3>Web Development</h3>
            <p className="service-highlight">Modern, performant digital experiences</p>
            <p>
              We build fast, responsive web applications that work seamlessly across devices:
            </p>
            <ul className="service-list">
              <li>React-based single-page applications</li>
              <li>Responsive design for all devices</li>
              <li>Performance optimization</li>
              <li>SEO-ready implementations</li>
            </ul>
            <p className="service-note">
              Built to scale with your business and adapt to changing needs.
            </p>
          </article>

          <article className="service-card">
            <h3>Design & Brand Strategy</h3>
            <p className="service-highlight">Cohesive visual and strategic direction</p>
            <p>
              We create design systems and brand strategies that resonate globally:
            </p>
            <ul className="service-list">
              <li>Brand positioning and messaging</li>
              <li>Design system development</li>
              <li>UI/UX design and prototyping</li>
              <li>Visual identity and guidelines</li>
            </ul>
            <p className="service-note">
              Clear, modern design that communicates your values and attracts your audience.
            </p>
          </article>
        </div>
      </section>

      <section className="section-block accent">
        <div className="text-block">
          <h2>Why partner with us?</h2>
          <div className="why-grid">
            <article className="why-card">
              <h3>Quality assurance</h3>
              <p>Multiple review layers ensure production-grade quality on every deliverable.</p>
            </article>
            <article className="why-card">
              <h3>Global readiness</h3>
              <p>Responsive across time zones, reliable communication, and professional operations.</p>
            </article>
            <article className="why-card">
              <h3>Social impact</h3>
              <p>Your partnership funds youth employment, skills development, and community support in Nairobi.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
