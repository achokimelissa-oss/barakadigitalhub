import { Helmet } from "react-helmet-async";

function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Baraka Digital Hub</title>
        <meta
          name="description"
          content="Learn about Baraka Digital Hub — a Nairobi-based AI training and digital operations company built on social impact."
        />
      </Helmet>
      <main>
        <section className="section-block about-hero section-intro">
          <div className="text-block">
            <p className="highlight-pill">About Baraka</p>
            <h1>Who we are</h1>
            <p>
              Baraka Digital Hub is a Nairobi-based delivery partner for AI data operations, human-in-the-loop workflows, transcription, and back-office support. We deliver reliable execution and measurable results while creating sustainable employment pathways for young people from underserved communities.
            </p>
          </div>
        </section>

        <section className="section-block">
          <div className="text-block">
            <h2>Our operational promise</h2>
            <p>
              We operate as an accountable partner with dedicated teams, transparent reporting, and repeatable processes. Our model is designed to give clients clarity, predictability, and performance.
            </p>
          </div>
          <div className="card-grid" style={{ marginTop: 24 }}>
            <div className="about-card">
              <h3>Structured delivery</h3>
              <p>
                A named Project Manager and team leads own your engagement end-to-end, keeping work aligned, responsive, and scalable.
              </p>
            </div>
            <div className="about-card">
              <h3>Transparent reporting</h3>
              <p>
                Progress insights, performance metrics, and quality summaries keep every engagement clear, actionable, and accountable.
              </p>
            </div>
            <div className="about-card">
              <h3>Professional impact</h3>
              <p>
                We deliver enterprise-level standards at Nairobi cost levels while directing client investment into wages, training, and community opportunity.
              </p>
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="about-card">
            <h2>How we started</h2>
            <p>
              Baraka Digital Hub grew out of Baraka Children’s Home in Kayole, Nairobi. Since 2006, the Home has supported vulnerable children with care, education, and protection.
            </p>
            <p>
              As young people matured, we identified a gap between care and stable employment. We built a digital services hub to provide training, supervision, and paid work in a structured operational environment.
            </p>
            <p>
              Today, the Hub serves clients globally while helping youth build skills, confidence, and long-term economic independence.
            </p>
          </div>
        </section>

        <section className="section-block accent">
          <div className="text-block">
            <h2>Core principles</h2>
            <p>
              Our work is guided by respect, reliability, and measurable impact. These principles keep our service professional and our impact sustainable.
            </p>
            <div className="principle-grid">
              <article className="principle-card">
                <span className="feature-icon">🤝</span>
                <strong>Teamwork</strong>
                <p>Collaboration and shared responsibility create stronger outcomes.</p>
              </article>
              <article className="principle-card">
                <span className="feature-icon">👤</span>
                <strong>Dignity</strong>
                <p>We respect people, value their contribution, and promote self-worth.</p>
              </article>
              <article className="principle-card">
                <span className="feature-icon">✓</span>
                <strong>Accountability</strong>
                <p>We own our work, our standards, and the impact we deliver.</p>
              </article>
              <article className="principle-card">
                <span className="feature-icon">⚡</span>
                <strong>Excellence</strong>
                <p>We deliver reliable work that meets professional client expectations.</p>
              </article>
              <article className="principle-card">
                <span className="feature-icon">🚀</span>
                <strong>Opportunity</strong>
                <p>We create pathways for growth, employment, and long-term transformation.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="text-block">
            <div style={{ height: 1, background: "#e2e8f0", margin: "0 0 24px" }} />
            <h2>Leadership</h2>
            <p>
              Our leadership combines lived experience from the Children’s Home with deep operational focus. That perspective shapes how we train teams, manage delivery, and support client outcomes.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <h3>From our Head of Operations</h3>
              <p>
                “Baraka Digital Hub was built on a simple belief: talent is universal, but opportunity is not. We are creating a path where young people from underserved communities can access meaningful digital work, develop globally competitive skills, and build sustainable futures.
              </p>
              <p>
                Every engagement is designed to improve performance, strengthen capability, and create a dependable client experience.
              </p>
              <p style={{ marginTop: 20, fontWeight: 700 }}>Timothy Mwangi<br />Head of Operations</p>
              <p style={{ marginTop: 12 }}>Email: <a href="mailto:timothy.mwangi@barakadigitalhub.com">timothy.mwangi@barakadigitalhub.com</a></p>
            </div>

            <div className="about-card about-highlight">
              <h3>From our President and Mama Baraka</h3>
              <p>
                “My work has always been about children — loving them, supporting them, and ensuring they have a future. Baraka Digital Hub extends that care into economic opportunity for young people as they grow.
              </p>
              <p>
                Care should lead to empowerment, and support should lead to dignity. This work is the next step in giving our young people a stable and meaningful future.”
              </p>
              <p style={{ marginTop: 20, fontWeight: 700 }}>Margrate Kimaru<br />President and Mama Baraka</p>
              <p style={{ marginTop: 12 }}>Email: <a href="mailto:margrate.kimaru@barakadigitalhub.com">margrate.kimaru@barakadigitalhub.com</a></p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
