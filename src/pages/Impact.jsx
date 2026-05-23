import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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
      <section className="section-block impact-hero section-intro">
        <div className="text-block">
          <p className="highlight-pill">Social Impact</p>
          <h1>From Charity to Dignity. From Dependency to Opportunity.</h1>
          <p>
            We convert commercial digital work into a consistent support system for youth and Baraka Children’s Home. Every project is designed to create measurable social impact, reliable revenue, and a pathway to lasting independence.
          </p>
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

      <section className="section-block accent">
        <div className="text-block">
          <h3>Ready to build with purpose?</h3>
          <p>
            Partner with us. Get reliable, professional digital services while funding sustainable opportunity for youth from underserved communities.
          </p>
          <Link className="button primary" to="/contact">
            Start a conversation
          </Link>
        </div>
      </section>

      <section className="section-block">
        <div className="about-grid">
          <div className="about-card">
            <h3>From Our Head of Operations</h3>
            <p>
              “Baraka Digital Hub was built on a simple belief: talent is universal, but opportunity is not. Our vision is to create a pathway where young people from underserved communities can access meaningful digital work, develop globally competitive skills, and build sustainable futures for themselves and their families.
            </p>
            <p>
              We are building more than a workforce centre. We are building a model of economic inclusion powered by technology, discipline, and purpose. Every project delivered is an opportunity created, a skill strengthened, and a future made more stable.
            </p>
            <p>
              We are ready to partner with organizations that value both excellence and impact.”
            </p>
            <p style={{ marginTop: 20, fontWeight: 700 }}>Timothy Mwangi<br />Head of Operations</p>
            <p>Email: <a href="mailto:timothy.mwangi@barakadigitalhub.com">timothy.mwangi@barakadigitalhub.com</a></p>
          </div>
          <div className="about-card about-highlight">
            <h3>From Our President and Mama Baraka</h3>
            <p>
              “My life has always been rooted in children — loving them, raising them, and standing beside them through every season of their growth. As Mama Baraka, my deepest calling has been to ensure that no child under our care ever feels forgotten or without a future.
            </p>
            <p>
              Baraka Digital Hub was born from that responsibility and that love. It is an extension of the Children’s Home, built to ensure that our young people step into adulthood with skills, confidence, and opportunity.
            </p>
            <p>
              Care must evolve into empowerment, and charity must grow into dignity. This work is family. It is love translated into opportunity.”
            </p>
            <p style={{ marginTop: 20, fontWeight: 700 }}>Margrate Kimaru<br />President and Mama Baraka</p>
            <p>Email: <a href="mailto:margrate.kimaru@barakadigitalhub.com">margrate.kimaru@barakadigitalhub.com</a></p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Impact;
