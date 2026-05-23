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
          <p className="highlight-pill">Our Impact</p>
          <h1>Digital work with purpose</h1>
          <p>
            Every project creates two outcomes: professional delivery for our clients and sustainable opportunity for youth in underserved communities.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="text-block">
          <h2>The dual-impact model</h2>
          <p>
            We don't separate business success from social responsibility. When you partner with us, you get reliable, high-quality work—and you simultaneously fund youth employment, skills development, and support for Baraka Children's Home.
          </p>
        </div>

        <div className="impact-grid">
          <article className="impact-card accent-cyan">
            <h3>For clients</h3>
            <p>
              Professional delivery. Clean workflows. Responsive communication across time zones. Quality assurance systems that ensure production-grade results.
            </p>
          </article>
          <article className="impact-card accent-purple">
            <h3>For youth</h3>
            <p>
              Real employment. Skills training in AI data work, web development, and design. Mentorship pathways. Income that funds education and long-term opportunity.
            </p>
          </article>
          <article className="impact-card accent-sunset">
            <h3>For community</h3>
            <p>
              Revenue supports Baraka Children's Home. Operational costs fund care, protection, and education for vulnerable children in Nairobi.
            </p>
          </article>
        </div>
      </section>

      <div className="impact-stats">
        <StatCard endValue={120} suffix="+" title="Projects delivered" />
        <StatCard endValue={67} suffix="%" title="Youth employed" />
        <StatCard endValue={2006} suffix="" title="Children's Home (since)" />
      </div>

      <section className="section-block">
        <div className="text-block">
          <h2>Measurable outcomes</h2>
          <p>
            We track impact because it matters. Each engagement is designed to create lasting results—both in the work we deliver and the lives we support.
          </p>
        </div>

        <div className="outcome-grid">
          <article className="outcome-card">
            <h3>Workforce development</h3>
            <p>
              Every project includes structured training. Youth develop technical skills, client communication, quality assurance discipline, and leadership capabilities that transfer to long-term careers.
            </p>
          </article>
          <article className="outcome-card">
            <h3>Sustainable operations</h3>
            <p>
              Unlike aid-dependent models, we operate commercially. Revenue from client work funds operations, growth, and expansion—creating a path to scale impact without dependency.
            </p>
          </article>
          <article className="outcome-card">
            <h3>Community stability</h3>
            <p>
              Profits support Baraka Children's Home directly. Children access care, education, and protection. Young people transition from care into dignified employment.
            </p>
          </article>
        </div>
      </section>

      <section className="section-block accent">
        <div className="text-block">
          <h3>Ready to build with purpose?</h3>
          <p>
            Partner with us. Get reliable, professional digital services. Fund sustainable opportunity for youth from underserved communities.
          </p>
          <Link className="button primary" to="/contact">
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}

export default Impact;
