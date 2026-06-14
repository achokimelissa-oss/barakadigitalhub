import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function InsightsPage({ goBack }) {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Insights — Baraka Digital Hub</title>
        <meta name="description" content="Beyond Bulk Labeling: How Baraka Digital Hub Powers the Next Generation of AI with Ethical Sourcing and Tool Proficiency" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        :root {
          --navy:      #02346A;
          --navy-d:    #0D2B4E;
          --green:     #33911C;
          --teal:      #0D7377;
          --amber:     #E8A020;
          --off-white: #F5F7FA;
          --muted:     #6B7A91;
          --border:    #DDE3EC;
        }

        body {
          font-family: 'Inter', sans-serif;
          background: var(--off-white);
          color: var(--navy-d);
          line-height: 1.7;
        }

        .article-wrap {
          max-width: 740px;
          margin: 0 auto;
          padding: 64px 5% 100px;
        }

        .article-category {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--teal);
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .article-category::before {
          content: '';
          display: block;
          width: 28px;
          height: 2px;
          background: var(--teal);
          border-radius: 2px;
        }

        h1 {
          font-family: 'Sora', sans-serif;
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 800;
          color: var(--navy);
          line-height: 1.16;
          letter-spacing: -0.025em;
          margin-bottom: 28px;
        }

        .article-divider {
          width: 48px;
          height: 3px;
          background: var(--green);
          border-radius: 3px;
          margin-bottom: 36px;
        }

        .article-body p {
          font-size: 1.05rem;
          line-height: 1.88;
          color: #2C3A52;
          margin-bottom: 24px;
        }

        .article-body h2 {
          font-family: 'Sora', sans-serif;
          font-size: 1.22rem;
          font-weight: 700;
          color: var(--navy);
          margin: 48px 0 14px;
          letter-spacing: -0.015em;
        }

        .platform-block {
          border-left: 3px solid var(--green);
          padding: 16px 20px;
          background: #fff;
          border-radius: 0 8px 8px 0;
          margin: 18px 0;
        }

        .platform-block .platform-name {
          font-family: 'Sora', sans-serif;
          font-weight: 700;
          font-size: 0.88rem;
          color: var(--navy);
          margin-bottom: 6px;
        }

        .platform-block p {
          margin: 0 !important;
          font-size: 0.9rem !important;
          color: var(--muted) !important;
          line-height: 1.65 !important;
        }

        .service-item {
          margin: 40px 0;
        }

        .service-num {
          font-family: 'Sora', sans-serif;
          font-size: 0.62rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--amber);
          margin-bottom: 4px;
        }

        .service-item h2 {
          margin-top: 0;
        }

        .service-item ul {
          list-style: none;
          padding: 0;
          margin: 12px 0 0;
        }

        .service-item ul li {
          font-size: 0.95rem;
          color: #2C3A52;
          padding: 10px 0 10px 20px;
          border-bottom: 1px solid var(--border);
          position: relative;
          line-height: 1.65;
        }

        .service-item ul li:last-child {
          border-bottom: none;
        }

        .service-item ul li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 19px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--green);
        }

        .service-item ul li strong {
          color: var(--navy);
          font-weight: 600;
        }

        .bias-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 16px;
          margin: 24px 0;
        }

        .bias-card {
          background: #fff;
          border: 1px solid var(--border);
          border-top: 3px solid var(--navy);
          border-radius: 8px;
          padding: 18px 16px;
        }

        .bias-card:nth-child(2) {
          border-top-color: var(--teal);
        }

        .bias-card:nth-child(3) {
          border-top-color: var(--green);
        }

        .bias-label {
          font-family: 'Sora', sans-serif;
          font-weight: 700;
          font-size: 0.78rem;
          color: var(--navy);
          margin-bottom: 8px;
        }

        .bias-card p {
          margin: 0 !important;
          font-size: 0.81rem !important;
          color: var(--muted) !important;
          line-height: 1.6 !important;
        }

        .pull-quote {
          border-left: 4px solid var(--amber);
          padding: 18px 24px;
          margin: 40px 0;
          background: #fff;
          border-radius: 0 10px 10px 0;
        }

        .pull-quote p {
          font-family: 'Sora', sans-serif;
          font-size: 1.08rem !important;
          font-weight: 600 !important;
          color: var(--navy) !important;
          line-height: 1.55 !important;
          margin: 0 !important;
          font-style: italic;
        }

        footer {
          background: var(--navy-d);
          color: rgba(255,255,255,0.38);
          text-align: center;
          padding: 32px 5%;
          font-size: 0.76rem;
          letter-spacing: 0.02em;
        }

        footer span {
          color: var(--amber);
        }

        @media (max-width: 600px) {
          .bias-grid {
            grid-template-columns: 1fr;
          }
          h1 {
            font-size: 1.65rem;
          }
        }
      `}</style>

      <div className="article-wrap">
        <div className="article-category">AI Data Services</div>

        <h1>Beyond Bulk Labeling: How Baraka Digital Hub Powers the Next Generation of AI with Ethical Sourcing and Tool Proficiency</h1>

        <div className="article-divider"></div>

        <div className="article-body">
          <p>The era of low-cost, unmanaged crowdsourcing is hitting a wall. As machine learning models advance toward complex reasoning, agentic behaviors, and multimodal physical AI, the bottleneck is no longer just raw data — it is the quality, security, and governance of the human decisions training those models.</p>

          <p>The industry is undergoing a structural transition. Modern AI teams are moving away from legacy, single-vendor outsourcing packages. Instead, they are utilizing advanced, decoupled SaaS annotation engines to retain total control over their data pipelines, and partnering with highly specialized, managed Human-in-the-Loop (HITL) teams to execute the work.</p>

          <p>This is where Baraka Digital Hub (BDH) steps in. Based in Nairobi, Kenya, we provide premium, secure, and ethically sourced data operations designed to integrate seamlessly into your preferred technology stacks.</p>

          <div className="pull-quote">
            <p>"Ethical sourcing is not a marketing checkbox — it is our core competitive advantage."</p>
          </div>

          <h2>Technical Mastery: Your Software, Our Specialized Execution</h2>

          <p>At Baraka Digital Hub, we believe that software and labor must work in perfect harmony. Rather than locking you into a proprietary, rigid database, our teams are fully trained and certified across the world's leading data engines. We adapt to your workflows, working directly within your environments:</p>

          <div className="platform-block">
            <div className="platform-name">Encord</div>
            <p>We leverage this zero-data-migration platform to manage, curate, and annotate complex multimodal datasets directly within your cloud infrastructure — including 3D LiDAR segmentation, DICOM medical imaging labeling, and detailed agentic evaluation via Encord Index.</p>
          </div>

          <div className="platform-block">
            <div className="platform-name">SuperAnnotate</div>
            <p>Our team is proficient in custom drag-and-drop interface builders tailored to unique ontologies, managing complex pipelines with automated task assignments via the Python SDK, multi-layer consensus reviews, and granular annotator metric tracking.</p>
          </div>

          <div className="platform-block">
            <div className="platform-name">Labelbox</div>
            <p>We establish robust quality governance using built-in automated quality tools — setting up gold-standard benchmarks and real-time consensus scoring to continually monitor annotator precision and deliver clean, audit-ready training sets.</p>
          </div>

          <div className="platform-block">
            <div className="platform-name">Label Studio</div>
            <p>For custom, open-source pipeline architectures, our engineers configure and scale tailored labeling environments that connect directly with your existing machine learning and database infrastructures.</p>
          </div>

          <h2>Our Specialized AI Services</h2>

          <p>Our workforce does not just label data; we act as an extension of your machine learning engineering team — delivering end-to-end data and model operations across five core areas.</p>

          <div className="service-item">
            <div className="service-num">Service 01</div>
            <h2>Generative AI, SFT, and RLHF Alignment</h2>
            <p>We help foundation model builders and enterprise AI teams align, fine-tune, and validate large language models.</p>
            <ul>
              <li><strong>Supervised Fine-Tuning (SFT):</strong> Sourcing and managing subject-matter experts to draft high-quality custom prompts, responses, and instructional datasets.</li>
              <li><strong>RLHF:</strong> Designing robust human preference environments, conducting pairwise comparisons, and generating critical scalar reward signals.</li>
              <li><strong>Chain-of-Thought (CoT) Reasoning:</strong> Guiding models through logical, step-by-step problem-solving paths to improve complex reasoning, math, and coding capabilities.</li>
            </ul>
          </div>

          <div className="service-item">
            <div className="service-num">Service 02</div>
            <h2>Advanced Computer Vision &amp; Spatial AI</h2>
            <p>We deliver pixel-perfect annotation across diverse spatial datasets to train highly accurate predictive and physical AI models.</p>
            <ul>
              <li><strong>Standard Vision Labeling:</strong> High-throughput bounding boxes, polygons, polylines, keypoints, and semantic segmentation across high-resolution image and video files.</li>
              <li><strong>3D Point Cloud &amp; LiDAR Annotation:</strong> Meticulous object detection, tracking, and segmentation across synchronized LiDAR, camera, and radar frames for autonomous vehicles and industrial robotics.</li>
              <li><strong>Specialized Formatting:</strong> Seamlessly handling medical-grade formats (DICOM, NIfTI) and long-form video files spanning up to 100K+ frames.</li>
            </ul>
          </div>

          <div className="service-item">
            <div className="service-num">Service 03</div>
            <h2>AI Agent Evaluation &amp; Scenario Testing</h2>
            <p>As AI systems shift from passive assistants to autonomous agents, we provide the vital human oversight required to evaluate agentic choices in real-world contexts.</p>
            <ul>
              <li><strong>Intent and Path Scoring:</strong> Evaluating multi-step planning, tool use, and decision-making logic of AI agents in simulated environments.</li>
              <li><strong>Output Quality Grading:</strong> Scoring agent responses based on strict rubrics evaluating factual accuracy, contextual relevance, semantic clarity, and situational consistency.</li>
              <li><strong>Subtle Bug &amp; Hallucination Spotting:</strong> Catching logical gaps, systemic biases, or misleading statements that automated metrics fail to detect.</li>
            </ul>
          </div>

          <div className="service-item">
            <div className="service-num">Service 04</div>
            <h2>Multimodal Audio &amp; NLP Operations</h2>
            <p>We bridge the gap between unstructured sensory data and structured linguistic models.</p>
            <ul>
              <li><strong>Text Processing:</strong> Comprehensive named-entity recognition (NER), sentiment analysis, intent classification, and metadata tagging.</li>
              <li><strong>Audio Transcription &amp; Translation:</strong> Translating and transcribing audio files across diverse regional accents, dialects, and noisy backdrops.</li>
              <li><strong>Data Curation &amp; Validation:</strong> Removing duplicates, standardization, and extracting key data points from complex unstructured documents such as invoices, KYC, and contracts.</li>
            </ul>
          </div>

          <div className="service-item">
            <div className="service-num">Service 05</div>
            <h2>Content Moderation, Trust &amp; Safety</h2>
            <p>We protect your brand, users, and compliance posture through proactive model and platform safety monitoring.</p>
            <ul>
              <li><strong>Red Teaming:</strong> Actively simulating adversarial attacks on LLMs to identify safety vulnerabilities and prevent toxic or harmful outputs.</li>
              <li><strong>Data Classification:</strong> Tagging and filtering sensitive personal data (PII), hate speech, and violent content across visual and textual data streams.</li>
            </ul>
          </div>

          <h2>Powered by Nairobi's Pre-Vetted, Elite AI Talent Pool</h2>

          <p>Our delivery center is strategically located in Nairobi, Kenya — a premier global hub for machine learning and digital services. BDH operates as a managed, full-time delivery node staffed by highly skilled data professionals recruited from the top tier of local digital talent, drawing from pre-vetted annotators and content specialists with years of experience training models for Fortune 50 enterprises and global technology giants.</p>

          <p>This pre-trained, technically fluent workforce allows BDH to skip lengthy ramp-up periods. Whether you need expert SFT, RLHF, or complex multi-agent evaluations, our teams are ready to deliver highly accurate outputs from day one.</p>

          <h2>Ethical Sourcing: Doing Good is Good for Your Models</h2>

          <p>Grounded in our social mission, we focus on providing dignified, fair-wage digital employment to talented individuals from underserved regional backgrounds. This model has been validated by independent academic research — structured, ethical hiring practices significantly improve socio-economic mobility while delivering superior operational results. By investing in our team's long-term growth, health, and fair compensation, we maintain near-zero workforce turnover, which translates directly into consistency, deep edge-case familiarity, and a team that takes personal ownership of your data's quality.</p>

          <h2>Mitigating Systemic Bias Through Human-in-the-Loop Governance</h2>

          <p>Biased training data inevitably leads to biased predictions. BDH implements rigorous active bias mitigation workflows within our partner platforms:</p>

          <div className="bias-grid">
            <div className="bias-card">
              <div className="bias-label">Sample Bias</div>
              <p>Advanced curation and similarity search tools identify and filter redundant samples, ensuring training data is structurally representative of real-world environments.</p>
            </div>
            <div className="bias-card">
              <div className="bias-label">Prejudiced Bias</div>
              <p>Demographically balanced annotator cohorts and standardized labeling rubrics eliminate cultural, regional, or subjective stereotypes from the dataset.</p>
            </div>
            <div className="bias-card">
              <div className="bias-label">Internal Bias</div>
              <p>Independent blind consensus labeling — where multiple specialists annotate the same asset without seeing peer outputs — systematically neutralizes subjective expectations.</p>
            </div>
          </div>

          <h2>Accelerate Your Time-to-Model</h2>

          <p>By combining high-end platform proficiency with a dedicated, ethically sourced workforce, Baraka Digital Hub helps machine learning teams cut their annotation cycle times in half while achieving up to a 10% improvement in model F₁ precision. Let us handle the operational overhead of managing, scaling, and securing your human-in-the-loop pipelines — so your engineers can return to doing what they do best: innovating.</p>

          <p>Contact Baraka Digital Hub to schedule a pilot project and discover how our certified Nairobi workforce can elevate your AI development: <strong>projects@barakadigitalhub.com</strong></p>
        </div>
      </div>

      <footer>
        © 2026 <span>Baraka Digital Hub</span> · Nairobi, Kenya · projects@barakadigitalhub.com
      </footer>
    </>
  );
}
