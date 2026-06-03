import { Helmet } from "react-helmet-async";

function Services() {
  return (
    <>
      <Helmet>
        <title>AI Data Annotation & Training Services | Baraka Digital Hub</title>
        <meta
          name="description"
          content="Expert computer vision annotation, NLP, audio processing, LLM training and BPO services from our Nairobi-based team."
        />
      </Helmet>
      <section className="section-block service-hero section-intro section-tech-bg">
        <div className="text-block">
          <p className="highlight-pill">Our Services</p>
          <h1>What we deliver</h1>
          <p>
            Baraka Digital Hub provides AI data operations, human-in-the-loop AI, and BPO services to clients worldwide. We act as a managed execution layer for AI systems and data-heavy enterprise operations, integrating into client infrastructure with minimal disruption. Every engagement is backed by trained specialists, independent QA, and structured reporting built for production-grade delivery.
          </p>
        </div>
      </section>

      <section className="section-block section-tech-bg">
        <div className="service-grid">
          <article className="service-card accent-cyan">
            <span className="feature-icon">🤖</span>
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

          <article className="service-card accent-purple">
            <span className="feature-icon">🧠</span>
            <h3>Human-in-the-Loop AI</h3>
            <p className="service-highlight">RLHF, evaluation, and model-quality review</p>
            <p>
              We support AI teams with human evaluation and training workflows that improve quality and safety:
            </p>
            <ul className="service-list">
              <li>RLHF and preference ranking</li>
              <li>Prompt evaluation and response review</li>
              <li>Content moderation and policy classification</li>
              <li>Ground-truth creation and benchmark datasets</li>
            </ul>
            <p className="service-note">
              Structured QA and documented workflows make outputs consistent and auditable.
            </p>
          </article>

          <article className="service-card accent-sunset">
            <span className="feature-icon">📊</span>
            <h3>BPO & Back-Office</h3>
            <p className="service-highlight">Reliable operations for high-volume support work</p>
            <p>
              We deliver structured back-office execution for research, data entry, and customer support needs:
            </p>
            <ul className="service-list">
              <li>Data entry and document processing</li>
              <li>Research and lead generation</li>
              <li>CRM updates and virtual assistance</li>
              <li>Customer support and ticket triage</li>
            </ul>
            <p className="service-note">
              Dedicated project management and QA keep every workflow transparent and reliable.
            </p>
          </article>
        </div>
      </section>

      <section className="section-block accent">
        <div className="text-block">
          <h2>Why partner with us?</h2>
          <div className="why-grid">
            <article className="why-card accent-cyan">
              <span className="feature-icon">✔</span>
              <h3>Quality assurance</h3>
              <p>Multiple review layers ensure production-grade quality on every deliverable.</p>
            </article>
            <article className="why-card accent-purple">
              <span className="feature-icon">🌍</span>
              <h3>Global readiness</h3>
              <p>Responsive across time zones, reliable communication, and professional operations.</p>
            </article>
            <article className="why-card accent-sunset">
              <span className="feature-icon">❤️</span>
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
