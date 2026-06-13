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
            <h1>Baraka Digital Hub</h1>
            <p>
              We convert commercial digital work into a consistent support system for youth and Baraka Children’s Home. Every engagement is structured for reliable delivery, measurable outcomes, and enterprise accountability.
            </p>
            <div className="impact-hero-actions">
              <Link to="/services" className="button primary">
                Explore our services
              </Link>
              <Link to="/contact#send-message" className="button secondary">
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
                Our team delivers scalable annotation, transcription, and data pipeline operations with audit-ready processes and strong governance.
              </p>
            </div>
          </div>
        </section>

        <section className="section-block impact-split">
          <div className="about-grid">
            <div className="about-panel">
              <h2>Our Origin: Why We Exist</h2>
              <p>
                Baraka Digital Hub was born out of <strong>Baraka Children’s Home</strong>. For nearly two decades, the Home has been a place of refuge, care, and hope for vulnerable children in Kayole, Nairobi.
              </p>
              <p>
                As those children grew, a clear gap emerged: young people leaving care often lacked market-ready skills, stable opportunity, and a reliable pathway to independence.
              </p>
              <p>
                <strong>Baraka Digital Hub was created to close that gap. It is the bridge between care and independence.</strong>
              </p>
            </div>
            <article className="impact-card impact-cta-card accent-cyan">
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
                Traditional charity systems are disconnected from the economic realities of youth transition. That creates an unreliable support model and missed commercial opportunity.
              </p>
              <p>
                Baraka Digital Hub makes client spend part of the solution, not just the expense.
              </p>
            </div>
            <article className="impact-card impact-cta-card accent-purple">
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
                Every client engagement generates two measurable outcomes: professional delivery for clients, and sustainable opportunity for young people and Baraka Children’s Home.
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
            <p><strong>Your invoice is also a school fees receipt.</strong></p>
          </div>
        </section>

        <section className="section-block impact-cta-grid">
          <article className="impact-card impact-cta-card">
            <h3>Turn delivery into impact</h3>
            <p>
              Engage with a partner that scales data services while embedding measurable social value at every phase.
            </p>
            <div className="impact-hero-actions">
              <Link to="/contact#send-message" className="button primary">
                Start a project conversation
              </Link>
            </div>
          </article>
          <article className="impact-card impact-cta-card accent-sunset">
            <h3>Strengthen your AI supply chain</h3>
            <p>
              Build a dependable annotation and transcription pipeline backed by documented quality processes and ethical employment.
            </p>
            <div className="impact-hero-actions">
              <Link to="/services" className="button secondary">
                Review delivery capabilities
              </Link>
            </div>
          </article>
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
                From the Children’s Home: young people who grew up in care and are now transitioning into independence through skills and digital work.
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
      </div>
    </>
  );
}

export default Impact;
