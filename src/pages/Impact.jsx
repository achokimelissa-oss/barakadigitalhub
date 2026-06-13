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
          <div className="text-block">
            <p className="highlight-pill">Social Impact</p>
            <h1>Baraka Digital Hub</h1>
            <p>
              <strong>From Charity to Dignity. From Dependency to Opportunity.</strong>
            </p>
            <p>
              We convert commercial digital work into a consistent support system for youth and Baraka Children’s Home. Every project is designed to create measurable social impact, reliable revenue, and a pathway to lasting independence.
            </p>
          </div>

          <div className="impact-grid impact-hero-grid">
            <article className="impact-card impact-hero-stat">
              <span>67%</span>
              <h4>of youth in informal settlements are unemployed</h4>
            </article>
            <article className="impact-card impact-hero-stat">
              <span>One in three</span>
              <h4>of young people lack formal employment</h4>
            </article>
            <article className="impact-card impact-hero-stat">
              <span>&lt;5%</span>
              <h4>of Baraka children are pursuing sustainable careers</h4>
            </article>
          </div>
        </section>

        <section className="section-block">
          <div className="text-block">
            <h2>Our Origin: Why We Exist</h2>
            <p>
              Baraka Digital Hub was born out of <strong>Baraka Children’s Home</strong>.
            </p>
            <p>
              For nearly two decades, the Children’s Home has been a place of refuge, care, and hope for vulnerable children in Kayole, Nairobi. It provided what every child deserves: safety, food, education, and love.
            </p>
            <p>
              But as those children grew, a difficult reality became clear. Many faced an uncertain transition into adulthood, where access to opportunity, employment, and sustainable livelihoods was limited.
            </p>
            <p>
              <strong>Baraka Digital Hub was created to close that gap. It is the bridge between care and independence.</strong>
            </p>
          </div>
        </section>

        <section className="section-block">
          <div className="text-block">
            <h2>The Problem We Address</h2>
            <p>
              Traditional charity systems face structural limits that leave young people without a real pathway to economic independence.
            </p>
            <ul>
              <li>Donations are unpredictable</li>
              <li>Youth age out of care without market-ready skills</li>
              <li>There is no clear pathway from protection to employment</li>
            </ul>
            <p>
              <strong>Baraka Digital Hub exists to change this outcome.</strong>
            </p>
          </div>
        </section>

        <section className="section-block">
          <div className="text-block">
            <h2>Our Dual Impact Model</h2>
          </div>
          <div className="impact-grid">
            <article className="impact-card accent-cyan">
              <h3>Impact 1</h3>
              <p>Youth gain access to real digital work, earning fair income and building professional experience.</p>
            </article>
            <article className="impact-card accent-purple">
              <h3>Impact 2</h3>
              <p>Baraka Children’s Home receives consistent support for education, food, and care.</p>
            </article>
          </div>
          <div className="about-card about-highlight impact-block-quote">
            <p><strong>Your invoice is also a school fees receipt.</strong></p>
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

        <section className="section-block">
          <div className="text-block">
            <h2>Who We Serve</h2>
            <p>From the Children’s Home: young people who grew up in care and are now transitioning into independence through skills and digital work.</p>
            <p>From the wider community: out-of-school youth, orphans, and young women from marginalized backgrounds.</p>
            <p><strong>We do not define people by where they come from. We define them by what they are ready to build.</strong></p>
          </div>
        </section>

        <section className="section-block">
          <div className="text-block">
            <h2>The Ripple Effect</h2>
            <ul>
              <li>Client work generates income for youth.</li>
              <li>Youth support their families and gain independence.</li>
              <li>Operations sustain training and quality systems.</li>
              <li>The Children’s Home receives continuous support for education and care.</li>
            </ul>
            <p>As young people grow, they return as mentors and trainers, strengthening the next generation.</p>
            <p><strong>This is not charity. This is structured economic inclusion.</strong></p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Impact;
