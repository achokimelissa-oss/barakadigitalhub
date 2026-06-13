import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Impact() {
  return (
    <>
      <Helmet bodyAttributes={{ class: "impact-page" }}>
        <title>Social Impact | Baraka Digital Hub</title>
        <meta
          name="description"
          content="We convert commercial digital work into a consistent support system for youth and Baraka Children’s Home."
        />
        <style>{`
          :root{
            --navy:#041b45;
            --dark-navy:#07142a;
            --deepest:#010810;
            --green:#2fc4c4;
            --teal:#4dd7ff;
            --amber:#7dcfff;
            --text:#ffffff;
            --text-dim:#d4e3ff;
            --line:rgba(255,255,255,0.12);
          }

          *{margin:0;padding:0;box-sizing:border-box;}

          body{
            background:
              radial-gradient(circle at 15% 10%, rgba(14,165,233,0.12), transparent 32%),
              radial-gradient(circle at 85% 18%, rgba(56,189,248,0.08), transparent 28%),
              linear-gradient(180deg, #020617 0%, #07111f 45%, #040b16 100%);
            color:var(--text);
            font-family:'Inter', 'Segoe UI', system-ui, sans-serif;
            line-height:1.65;
            background-attachment:fixed;
            overflow-x:hidden;
          }

          .wrap{ max-width:1400px; margin:0 auto; padding:0 4vw; }

          /* CTA styles copied from About page */
          .cta-section{ position:relative; display:grid; grid-template-columns:1fr; gap:24px; background: linear-gradient(145deg, rgba(8, 23, 47, 0.98), rgba(4, 14, 29, 0.98)); border:1px solid rgba(125, 207, 255, 0.16); border-radius:28px; padding:42px 38px; margin-bottom:24px; }
          .cta-section > * { position:relative; z-index:1; }
          .cta-copy{ max-width:100%; color:#d6fbff; margin:16px 0 24px; line-height:1.9; font-size:1rem; }
          .cta-highlight{ display:flex; justify-content:center; gap:24px; align-items:stretch; }
          .cta-main{ background:rgba(9, 32, 64, 0.96); border:1px solid rgba(125, 207, 255, 0.12); border-radius:24px; padding:32px 30px 32px; box-shadow:0 24px 64px rgba(0, 0, 0, 0.14); display:flex; flex-direction:column; gap:20px; max-width:980px; width:100%; }
          .cta-label{ display:inline-flex; align-items:center; gap:8px; color:#9be8ff; font-family:'JetBrains Mono','Courier New',monospace; font-size:0.72rem; letter-spacing:0.18em; text-transform:uppercase; }
          .cta-main h3{ margin:0 0 16px; color:#eff7ff; font-size:1.32rem; line-height:1.35; text-align:left; }
          .cta-main p{ margin:0; color:#d3f2ff; line-height:1.8; }
          .cta-actions{ display:flex; flex-wrap:wrap; gap:14px; justify-content:center; }
          .cta-actions a, .cta-actions button{ display:inline-flex; align-items:center; justify-content:center; gap:10px; border-radius:14px; padding:14px 18px; font-weight:700; font-size:0.95rem; text-decoration:none; border:none; cursor:pointer; transition:transform .2s,box-shadow .2s,background .2s; min-height:48px; }
          .cta-actions button{ background:linear-gradient(135deg, #1d4ed8 0%, #38bdf8 100%); color:#fff; border:1px solid rgba(125, 211, 252, 0.25); box-shadow:0 18px 32px rgba(56, 189, 248, 0.18); }
          .cta-actions a{ background:rgba(255,255,255,0.08); color:#eff7ff; border:1px solid rgba(148, 163, 184, 0.24); }
          .cta-actions button:hover, .cta-actions a:hover{ transform:translateY(-1px); box-shadow:0 18px 34px rgba(13, 76, 130, 0.18); }

          /* allow Link elements styled as primary */
          .cta-actions a.primary{ background:linear-gradient(135deg, #1d4ed8 0%, #38bdf8 100%); color:#fff; border:1px solid rgba(125, 211, 252, 0.25); box-shadow:0 18px 32px rgba(56, 189, 248, 0.18); }
          .cta-actions a.primary:hover{ transform:translateY(-1px); box-shadow:0 18px 34px rgba(13, 76, 130, 0.18); }
        `}</style>
      </Helmet>

      <div className="impact-page">
        <div className="top-accent" aria-hidden="true">
          <svg viewBox="0 0 1200 160" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
            <defs>
              <linearGradient id="g1" x1="0%" x2="100%" y1="0%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.18" />
                <stop offset="50%" stopColor="#7dd3fc" stopOpacity="0.14" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.12" />
              </linearGradient>
            </defs>
            <g fill="none" stroke="url(#g1)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M40 110 C140 20, 360 20, 460 110 S780 200, 980 110" opacity="0.9" />
              <path d="M120 90 C220 10, 420 10, 520 90 S820 180, 1020 90" opacity="0.7" />
            </g>
            <g fill="#a7f3d0" opacity="0.9">
              <circle cx="80" cy="112" r="3.6" />
              <circle cx="460" cy="112" r="3.6" />
              <circle cx="980" cy="112" r="3.6" />
            </g>
          </svg>
        </div>

        <section className="section-block impact-hero">
          <div className="impact-hero-left">
            <p className="highlight-pill">Social Impact</p>
            <h1>From charity to dignity. From dependency to opportunity.</h1>
            <p>
              We convert commercial digital work into a consistent support system for youth and Baraka Children’s Home. Every engagement is designed for measurable outcomes, reliable delivery, and enterprise accountability.
            </p>
            <div className="impact-hero-actions cta-actions">
              <Link to="/services" className="primary">
                Explore services
              </Link>
              <Link to="/contact#send-message" className="">
                Schedule a briefing
              </Link>
            </div>
          </div>

          <div className="impact-hero-right">
            <div className="impact-hero-grid">
              <article className="impact-card impact-hero-stat">
                <span>67%</span>
                <h4>of youth in informal settlements are unemployed</h4>
              </article>
              <article className="impact-card impact-hero-stat">
                <span>1 in 3</span>
                <h4>young people lack formal employment</h4>
              </article>
              <article className="impact-card impact-hero-stat">
                <span>&lt;5%</span>
                <h4>of Baraka children are pursuing sustainable careers</h4>
              </article>
            </div>
            <div className="impact-hero-panel">
              <h3>Enterprise-ready impact</h3>
              <p>
                Scalable annotation, transcription, and data operations delivered with audit-ready processes and clear performance measures.
              </p>
            </div>
          </div>
        </section>

        <section className="section-block impact-split">
          <div className="about-grid">
            <div className="about-panel">
              <h2>Our Origin: Why We Exist</h2>
              <p>
                Baraka Digital Hub was born out of Baraka Children’s Home. For nearly two decades, the Home has been a place of refuge, care, and hope for vulnerable children in Kayole, Nairobi.
              </p>
              <p>
                As those children grew, a difficult gap emerged: opportunity, employment pathways, and professional experience were missing for youth leaving care.
              </p>
              <p>
                <strong>Baraka Digital Hub was created to close that gap. It is the bridge between care and independence.</strong>
              </p>
            </div>
            <article className="impact-card accent-cyan">
              <h3>Professional delivery with purpose</h3>
              <ul>
                <li>Structured talent development</li>
                <li>Measured quality and compliance</li>
                <li>Sustainable revenue for community support</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section-block impact-split">
          <div className="about-grid">
            <div className="about-panel">
              <h2>The Problem We Address</h2>
              <p>
                Traditional charity systems are disconnected from the economic realities of youth transition, creating unreliable support models and missed long-term impact.
              </p>
              <p>
                Baraka Digital Hub makes client spend part of the solution, not just the expense.
              </p>
            </div>
            <article className="impact-card accent-purple">
              <h3>Where the gap appears</h3>
              <ul>
                <li>Unpredictable donations</li>
                <li>Lack of employment pathways</li>
                <li>No clear transition from care to career</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section-block impact-model-block">
          <div className="about-grid">
            <div className="about-panel">
              <h2>The Dual Impact Model</h2>
              <p>
                Every client engagement generates two measurable outcomes: professional delivery for clients and sustainable opportunity for youth and Baraka Children’s Home.
              </p>
            </div>
            <div className="impact-grid">
              <article className="impact-card accent-cyan">
                <h3>Impact 1</h3>
                <p>Youth gain access to real digital work, earning fair income and building professional experience.</p>
              </article>
              <article className="impact-card accent-purple">
                <h3>Impact 2</h3>
                <p>The Children’s Home receives consistent support for education, food, and care from client-funded operations.</p>
              </article>
            </div>
          </div>
          <div className="about-card about-highlight impact-block-quote">
            <p>
              <strong>Your invoice is also a school fees receipt.</strong>
            </p>
          </div>
        </section>

        <section className="section-block">
          <div className="text-block">
            <h2>How Every Dollar Is Used</h2>
          </div>
          <div className="impact-highlight-grid">
            <div className="impact-highlight">
              <strong>70–80%</strong>
              <p>Goes to youth earnings so they can build independence and dignity.</p>
            </div>
            <div className="impact-highlight">
              <strong>10–15%</strong>
              <p>Supports operations including internet, training, quality assurance, and infrastructure.</p>
            </div>
            <div className="impact-highlight">
              <strong>5–10%</strong>
              <p>Supports Baraka Children’s Home including school fees, meals, and essential care.</p>
            </div>
          </div>
        </section>

        <section className="section-block impact-split">
          <div className="about-grid">
            <article className="about-card">
              <h3>Who We Serve</h3>
              <p>
                From the Children’s Home: young people who grew up in care and are now transitioning into independence through structured digital skills training and paid work.
              </p>
              <p>
                From the wider community: out-of-school youth, orphans, and young women from marginalized backgrounds.
              </p>
              <p>
                <strong>We define people by what they are ready to build, not by where they come from.</strong>
              </p>
            </article>
            <article className="about-card about-highlight">
              <h3>The Ripple Effect</h3>
              <ul>
                <li>Client work generates income for youth.</li>
                <li>Youth support their families and gain independence.</li>
                <li>Operations sustain training and quality systems.</li>
                <li>The Children’s Home receives continuous support for education and care.</li>
              </ul>
              <p>
                <strong>This is not charity. This is structured economic inclusion.</strong>
              </p>
            </article>
          </div>
        </section>

        <section className="section-block accent">
          <div className="text-block">
            <h3>Ready to build with purpose?</h3>
            <p>
              Partner with us for dependable AI delivery that also creates sustainable opportunity and reliable revenue for underserved Nairobi youth.
            </p>
            <div className="impact-hero-actions cta-actions">
              <Link to="/contact#send-message" className="primary">
                Start a conversation
              </Link>
              <Link to="/services" className="">
                Review services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Impact;
