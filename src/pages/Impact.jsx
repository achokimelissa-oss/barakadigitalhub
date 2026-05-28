import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function StatCard({ endValue, suffix, title }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    let start = null;
    const duration = 900;

    const step = (timestamp) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.round(endValue * progress));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [visible, endValue]);

  return (
    <article ref={ref} className="stat-card">
      <div className="counter-number">
        {count}
        <span className="counter-suffix">{suffix}</span>
      </div>
      <p>{title}</p>
    </article>
  );
}

function Impact() {
  return (
    <>
      <Helmet>
        <title>Our Impact | Baraka Digital Hub</title>
        <meta
          name="description"
          content="Creating jobs, empowering youth, and driving community impact through technology and digital opportunities."
        />
      </Helmet>
      <section className="section-block impact-hero section-intro" style={{ position: "relative", overflow: "hidden", background: "#f8fafc" }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: .35, pointerEvents: "none", backgroundImage: "radial-gradient(circle, rgba(148,163,184,.13) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="text-block" style={{ position: "relative", zIndex: 1 }}>
          <p className="highlight-pill">Community Impact</p>
          <h1>From Charity to Dignity. From Dependency to Opportunity.</h1>
          <p>
            We convert commercial digital work into a consistent support system for youth and Baraka Children’s Home. Every project is designed to create measurable social impact, reliable revenue, and a pathway to lasting independence.
          </p>
          <div className="impact-grid" style={{ marginTop: 28 }}>
            {[
              { value: "67%", label: "Youth unemployment in informal settlements", color: "#1d4ed8" },
              { value: "1 in 3", label: "Young people without formal employment", color: "#0f9d68" },
              { value: "<5%", label: "Children’s home youths in sustainable careers", color: "#d97706" },
            ].map((item, index) => (
              <article key={index} className="impact-card" style={{ minHeight: 0, padding: "28px 24px", border: "1px solid rgba(148,163,184,.12)", background: "white" }}>
                <div className="stat-value" style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.value}</div>
                <div className="stat-label" style={{ fontSize: "0.94rem", color: "#475569", lineHeight: 1.7 }}>{item.label}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="about-grid">
          <div className="about-panel">
            <h2>Our Origin: Why We Exist</h2>
            <p>
              Baraka Digital Hub was born out of Baraka Children’s Home. For nearly two decades, the Children’s Home has been a place of refuge, care, and hope for vulnerable children in Kayole, Nairobi.
            </p>
            <p>
              As those children grew, a difficult reality became clear. Many faced an uncertain transition into adulthood, where access to opportunity, employment, and sustainable livelihoods was limited.
            </p>
            <p>
              <strong>Baraka Digital Hub was created to close that gap. It is the bridge between care and independence.</strong>
            </p>
          </div>
          <div className="about-card about-highlight">
            <h3>The Problem We Address</h3>
            <ul>
              <li>Traditional charity systems often lack a clear pathway from care to employment.</li>
              <li>Donations are unpredictable and cannot sustain long-term growth.</li>
              <li>Youth aging out of care frequently lack market-ready skills and professional experience.</li>
              <li>There is no reliable structure linking community support to dignified work.</li>
            </ul>
            <p>
              <strong>Baraka Digital Hub exists to change this outcome.</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="text-block">
          <h2>The Dual Impact Model</h2>
          <p>
            Every client engagement generates two distinct, measurable outcomes: professional delivery for clients and sustainable opportunity for young people and Baraka Children’s Home.
          </p>
        </div>

        <div className="impact-grid">
          <article className="impact-card accent-cyan">
            <span>Impact One</span>
            <h4>Youth Employment &amp; Income</h4>
            <p>
              Youth gain access to real digital work, earning fair income and building professional experience that transfers to global opportunities and long-term careers.
            </p>
          </article>
          <article className="impact-card accent-purple">
            <span>Impact Two</span>
            <h4>Children’s Home Support</h4>
            <p>
              Baraka Children’s Home receives consistent support for education, food, and care — funded directly through commercial activity, not donations.
            </p>
          </article>
        </div>

        <div className="about-card about-highlight" style={{ marginTop: 24 }}>
          <p>
            <strong>Your invoice is also a school fees receipt.</strong>
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="impact-highlight-grid">
          <div className="impact-highlight">
            <strong>70–80%</strong>
            <p>Goes directly to youth earnings so young people can build independence and dignity through fair, consistent income.</p>
          </div>
          <div className="impact-highlight">
            <strong>10–15%</strong>
            <p>Supports hub operations including internet access, training, quality assurance, and operational management.</p>
          </div>
          <div className="impact-highlight">
            <strong>5–10%</strong>
            <p>Supports Baraka Children’s Home with school fees, daily meals, and essential care.</p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="about-grid">
          <div className="about-card">
            <h3>Who We Serve</h3>
            <p>
              From the Children’s Home: young people who grew up in care and are now transitioning into independence through structured digital skills training and paid work.
            </p>
            <p>
              From the wider community: out-of-school youth, orphans, and young women from marginalized backgrounds across Kayole and surrounding neighborhoods.
            </p>
            <p>
              <strong>We do not define people by where they come from. We define them by what they are ready to build.</strong>
            </p>
          </div>
          <div className="about-card about-highlight">
            <h3>The Ripple Effect</h3>
            <ul>
              <li>Client work generates income for youth.</li>
              <li>Youth support their families and gain independence.</li>
              <li>Operations sustain training, quality systems, and professional growth.</li>
              <li>The Children’s Home receives predictable, ongoing support.</li>
            </ul>
            <p>
              <strong>As young people grow, they return as mentors and trainers, creating a self-sustaining cycle of opportunity.</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="section-block accent impact-cta">
        <div className="text-block">
          <h3>Ready to build with purpose?</h3>
          <p>
            Partner with us. Get reliable, professional digital services while funding sustainable opportunity for youth from underserved communities.
          </p>
          <Link className="button primary impact-button-primary" to="/contact">
            Start a conversation
          </Link>
        </div>
      </section>

      <section className="section-block accent impact-cta" style={{ marginTop: 18 }}>
        <div className="text-block">
          <h3>Bring impact into your next digital project</h3>
          <p>
            Collaborate with Baraka Digital Hub to get dependable delivery while helping create real social value for youth and Baraka Children’s Home.
          </p>
          <Link className="button secondary impact-button-secondary" to="/contact">
            Contact us to get started
          </Link>
        </div>
      </section>
    </>
  );
}

export default Impact;
