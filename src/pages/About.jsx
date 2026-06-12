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
      <div
        style={{
          background: "radial-gradient(circle at top, rgba(59,130,246,.18), transparent 28%), radial-gradient(circle at bottom right, rgba(16,185,129,.14), transparent 24%), linear-gradient(180deg, #020617 0%, #08172f 45%, #0b203f 100%)",
          color: "#e2e8f0",
          minHeight: "100vh",
        }}
      >
        <section className="section-block about-hero section-intro" style={{ background: "transparent" }}>
          <div className="text-block" style={{ maxWidth: "100%", color: "#f8fafc" }}>
            <p className="highlight-pill">About Baraka</p>
            <h1 className="hero-h1" style={{ color: "#f8fafc" }}>Trusted delivery with meaningful impact</h1>
            <p style={{ color: "rgba(226,232,240,.84)" }}>
              Baraka Digital Hub is a Nairobi-based digital services partner delivering AI data operations, human-in-the-loop workflows, transcription, and back-office support. We combine dependable execution with structured workforce development for clients who need reliable results and measurable social value.
            </p>
          </div>
        </section>

        <section className="section-block" style={{ background: "transparent" }}>
          <div className="page-container">
            <div className="text-block" style={{ color: "#f8fafc" }}>
              <h2>How we work</h2>
              <p style={{ color: "rgba(226,232,240,.84)" }}>
                We operate as a professional partner with clear accountability, consistent processes, and transparent reporting. Our approach is designed to make remote operations simple, dependable, and aligned to client needs.
              </p>
            </div>

            <div className="card-grid" style={{ marginTop: 24 }}>
              <div className="about-card" style={{ color: "#0f172a" }}>
                <h3>Dedicated delivery</h3>
                <p>
                  A named Project Manager, Team Leads, and certified operators keep your engagement aligned from onboarding through execution.
                </p>
              </div>
              <div className="about-card" style={{ color: "#0f172a" }}>
                <h3>Visible performance</h3>
                <p>
                  Regular progress updates, quality metrics, and operational summaries ensure you always know what was delivered and why.
                </p>
              </div>
              <div className="about-card" style={{ color: "#0f172a" }}>
                <h3>Impact built in</h3>
                <p>
                  We deliver commercial quality at Nairobi rates while directing client investment into wages, training, and long-term opportunity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-block" style={{ background: "transparent" }}>
          <div className="page-container">
            <div className="about-grid">
              <div className="about-panel" style={{ color: "#0f172a" }}>
                <h2>Our origin</h2>
                <p>
                  Baraka Digital Hub grew out of Baraka Children’s Home in Kayole, Nairobi. Since 2006, the Home has provided care, education, and support to vulnerable children and families.
                </p>
                <p>
                  As those young people transitioned into adulthood, we saw a gap between care and stable employment. The Hub was created to bridge that gap with training, supervision, and paid digital work.
                </p>
                <p>
                  Today, the Hub delivers professional services to clients worldwide while helping youth build skills, confidence, and long-term economic independence.
                </p>
              </div>

              <div className="about-card about-highlight" style={{ color: "#0f172a" }}>
                <h3>Why it matters</h3>
                <ul>
                  <li>Support must lead to sustainable opportunity.</li>
                  <li>Operational quality and social impact can coexist.</li>
                  <li>Structured training, coaching, and QA make remote work reliable.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section-block accent">
          <div className="page-container">
            <div className="text-block" style={{ color: "#0f172a" }}>
              <h2>Core principles</h2>
              <p>
                Respect, reliability, and accountability are the foundation of our work. These principles keep our services professional and our impact sustainable.
              </p>
            </div>

            <div className="principle-grid" style={{ marginTop: 24 }}>
              <article className="principle-card" style={{ color: "#0f172a" }}>
                <span className="feature-icon">🤝</span>
                <strong>Teamwork</strong>
                <p>Structured collaboration and shared ownership deliver better results.</p>
              </article>
              <article className="principle-card" style={{ color: "#0f172a" }}>
                <span className="feature-icon">👤</span>
                <strong>Dignity</strong>
                <p>We create opportunity that values people and preserves self-respect.</p>
              </article>
              <article className="principle-card" style={{ color: "#0f172a" }}>
                <span className="feature-icon">✓</span>
                <strong>Accountability</strong>
                <p>We take ownership of every outcome, every process, and every improvement.</p>
              </article>
              <article className="principle-card" style={{ color: "#0f172a" }}>
                <span className="feature-icon">⚡</span>
                <strong>Excellence</strong>
                <p>We deliver work that meets professional standards consistently and predictably.</p>
              </article>
              <article className="principle-card" style={{ color: "#0f172a" }}>
                <span className="feature-icon">🚀</span>
                <strong>Opportunity</strong>
                <p>We open pathways for growth, employment, and long-term change.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-block" style={{ background: "transparent" }}>
          <div className="page-container">
            <div className="text-block" style={{ color: "#f8fafc" }}>
              <div style={{ height: 1, background: "#e2e8f0", margin: "0 0 24px" }} />
              <h2>Leadership</h2>
              <p style={{ color: "rgba(226,232,240,.84)" }}>
                Our leadership brings lived experience from the Children’s Home together with operational discipline and client focus.
              </p>
            </div>

            <div className="about-grid" style={{ marginTop: 24 }}>
              <div className="about-card" style={{ color: "#0f172a" }}>
                <h3>From our Head of Operations</h3>
                <p>
                  “Baraka Digital Hub was built on a simple belief: talent is universal, but opportunity is not. We are creating a path where young people can access meaningful digital work and develop globally competitive skills.
                </p>
                <p>
                  Every engagement is designed to improve performance, strengthen capability, and deliver a dependable client experience.
                </p>
                <p style={{ marginTop: 20, fontWeight: 700 }}>Timothy Mwangi<br />Head of Operations</p>
                <p style={{ marginTop: 12 }}>Email: <a href="mailto:timothy.mwangi@barakadigitalhub.com">timothy.mwangi@barakadigitalhub.com</a></p>
              </div>

              <div className="about-card about-highlight" style={{ color: "#0f172a" }}>
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
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
