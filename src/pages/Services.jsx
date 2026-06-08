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
            <p className="service-highlight">Modality-specialized annotation and data operations</p>
            <p>
              We deliver high-quality datasets for computer vision, language, and audio applications:
            </p>
            <ul className="service-list">
              <li><strong>Computer Vision Annotation:</strong> bounding boxes, segmentation, pose estimation, image classification, 3D point cloud annotation, video tracking</li>
              <li><strong>Language AI / NLP:</strong> NER, sentiment & intent labeling, text classification, QA generation, dialogue annotation, document review</li>
              <li><strong>Audio & Speech Processing:</strong> transcription, speaker diarization, audio tagging, phonetic annotation, keyword spotting, captioning, transcription QA</li>
            </ul>
            <p className="service-note">
              Each project is overseen by quality systems and delivered by trained professionals following global standards.
            </p>
          </article>

          <article className="service-card accent-purple">
            <span className="feature-icon">🧠</span>
            <h3>Human-in-the-Loop AI</h3>
            <p className="service-highlight">RLHF, model evaluation, and content safety workflows</p>
            <p>
              We support AI teams with human review and evaluation processes that improve model reliability and trust:
            </p>
            <ul className="service-list">
              <li><strong>LLM Training & RLHF:</strong> preference ranking, instruction evaluation, response quality assessment, hallucination review, prompt refinement</li>
              <li><strong>Model Output Review:</strong> accuracy, safety, tone, policy compliance, benchmark dataset creation, data auditing</li>
              <li><strong>Content Moderation:</strong> text, image, and video review, harm classification, multi-category policy enforcement</li>
            </ul>
            <p className="service-note">
              Structured QA and documented workflows make outputs consistent, auditable, and safer.
            </p>
          </article>

          <article className="service-card accent-sunset">
            <span className="feature-icon">📊</span>
            <h3>BPO & Back-Office</h3>
            <p className="service-highlight">Reliable operations for enterprise workflows and support</p>
            <p>
              We deliver structured execution for research, data entry, support, and virtual assistance:
            </p>
            <ul className="service-list">
              <li><strong>Data Entry & Processing:</strong> high-volume entry, document extraction, form completion, CRM updates</li>
              <li><strong>Research & Virtual Assistance:</strong> web research, lead generation, competitive analysis, administrative operations</li>
              <li><strong>Customer & Email Support:</strong> ticket triage, query handling, escalation management, response drafting</li>
            </ul>
            <p className="service-note">
              Dedicated project management and independent QA keep every workflow transparent and reliable.
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
