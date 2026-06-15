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
      <div style={{ background: "radial-gradient(circle at 20% 12%, rgba(59,130,246,.06), transparent 24%), radial-gradient(circle at 88% 18%, rgba(16,185,129,.05), transparent 20%), linear-gradient(180deg, #020b17 0%, #08142b 42%, #0c1d33 100%)", color: "#e2e8f0", minHeight: "100vh" }}>
      <section className="section-block service-hero section-intro section-tech-bg" style={{ background: "transparent" }}>
        <div className="text-block">
          <p className="highlight-pill">Our Services</p>
          <h1 style={{ color: "#f8fafc" }}>What we deliver</h1>
          <p style={{ color: "rgba(226,232,240,.84)" }}>
            Baraka Digital Hub provides AI data operations, human-in-the-loop AI, and BPO services to clients worldwide. We act as a managed execution layer for AI systems and data-heavy enterprise operations, integrating into client infrastructure with minimal disruption. Every engagement is backed by trained specialists, independent QA, and structured reporting built for production-grade delivery.
          </p>
        </div>
      </section>

      <section className="section-block section-tech-bg" style={{ background: "transparent" }}>
        <div className="service-grid">
          <article className="service-card accent-cyan" style={{ background: "rgba(1,12,32,.72)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 28, color: "#e2e8f0", padding: "32px 28px" }}>
            <span className="feature-icon">🤖</span>
            <h3 style={{ color: "#f8fafc" }}>AI Data Services</h3>
            <p className="service-highlight" style={{ color: "#7dd3fc" }}>Modality-specialized annotation and data operations</p>
            <p style={{ color: "rgba(226,232,240,.85)" }}>
              We deliver high-quality datasets for computer vision, language, and audio applications:
            </p>
            <ul className="service-list" style={{ color: "rgba(226,232,240,.85)" }}>
              <li><strong>Computer Vision Annotation:</strong> bounding boxes, segmentation, pose estimation, image classification, 3D point cloud annotation, video tracking</li>
              <li><strong>Language AI / NLP:</strong> NER, sentiment & intent labeling, text classification, QA generation, dialogue annotation, document review</li>
              <li><strong>Audio & Speech Processing:</strong> transcription, speaker diarization, audio tagging, phonetic annotation, keyword spotting, captioning, transcription QA</li>
            </ul>
            <p className="service-note" style={{ color: "rgba(226,232,240,.85)" }}>
              Each project is overseen by quality systems and delivered by trained professionals following global standards.
            </p>
          </article>

          <article className="service-card accent-purple" style={{ background: "rgba(1,12,32,.72)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 28, color: "#e2e8f0", padding: "32px 28px" }}>
            <span className="feature-icon">🧠</span>
            <h3 style={{ color: "#f8fafc" }}>Human-in-the-Loop AI</h3>
            <p className="service-highlight" style={{ color: "#e879f9" }}>RLHF, model evaluation, and content safety workflows</p>
            <p style={{ color: "rgba(226,232,240,.85)" }}>
              We support AI teams with human review and evaluation processes that improve model reliability and trust:
            </p>
            <ul className="service-list" style={{ color: "rgba(226,232,240,.85)" }}>
              <li><strong>LLM Training & RLHF:</strong> preference ranking, instruction evaluation, response quality assessment, hallucination review, prompt refinement</li>
              <li><strong>Model Output Review:</strong> accuracy, safety, tone, policy compliance, benchmark dataset creation, data auditing</li>
              <li><strong>Content Moderation:</strong> text, image, and video review, harm classification, multi-category policy enforcement</li>
            </ul>
            <p className="service-note" style={{ color: "rgba(226,232,240,.85)" }}>
              Structured QA and documented workflows make outputs consistent, auditable, and safer.
            </p>
          </article>

          <article className="service-card accent-sunset" style={{ background: "rgba(1,12,32,.72)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 28, color: "#e2e8f0", padding: "32px 28px" }}>
            <span className="feature-icon">📊</span>
            <h3 style={{ color: "#f8fafc" }}>BPO & Back-Office</h3>
            <p className="service-highlight" style={{ color: "#fbbf24" }}>Reliable operations for enterprise workflows and support</p>
            <p style={{ color: "rgba(226,232,240,.85)" }}>
              We deliver structured execution for research, data entry, support, and virtual assistance:
            </p>
            <ul className="service-list" style={{ color: "rgba(226,232,240,.85)" }}>
              <li><strong>Data Entry & Processing:</strong> high-volume entry, document extraction, form completion, CRM updates</li>
              <li><strong>Research & Virtual Assistance:</strong> web research, lead generation, competitive analysis, administrative operations</li>
              <li><strong>Customer & Email Support:</strong> ticket triage, query handling, escalation management, response drafting</li>
            </ul>
            <p className="service-note" style={{ color: "rgba(226,232,240,.85)" }}>
              Dedicated project management and independent QA keep every workflow transparent and reliable.
            </p>
          </article>
        </div>
      </section>

      <section className="section-block accent" style={{ background: "transparent" }}>
        <div className="text-block">
          <h2 style={{ color: "#f8fafc" }}>Why partner with us?</h2>
          <div className="why-grid">
            <article className="why-card accent-cyan" style={{ background: "rgba(1,12,32,.72)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 16, color: "#e2e8f0", padding: "24px 20px" }}>
              <span className="feature-icon">✔</span>
              <h3 style={{ color: "#f8fafc" }}>Quality assurance</h3>
              <p style={{ color: "rgba(226,232,240,.85)" }}>Multiple review layers ensure production-grade quality on every deliverable.</p>
            </article>
            <article className="why-card accent-purple" style={{ background: "rgba(1,12,32,.72)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 16, color: "#e2e8f0", padding: "24px 20px" }}>
              <span className="feature-icon">🌍</span>
              <h3 style={{ color: "#f8fafc" }}>Global readiness</h3>
              <p style={{ color: "rgba(226,232,240,.85)" }}>Responsive across time zones, reliable communication, and professional operations.</p>
            </article>
            <article className="why-card accent-sunset" style={{ background: "rgba(1,12,32,.72)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 16, color: "#e2e8f0", padding: "24px 20px" }}>
              <span className="feature-icon">❤️</span>
              <h3 style={{ color: "#f8fafc" }}>Social impact</h3>
              <p style={{ color: "rgba(226,232,240,.85)" }}>Your partnership funds youth employment, skills development, and community support in Nairobi.</p>
            </article>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

export default Services;
