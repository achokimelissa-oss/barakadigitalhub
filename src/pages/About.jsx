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
      <div style={{ background: "radial-gradient(circle at top, rgba(59,130,246,.18), transparent 28%), radial-gradient(circle at bottom right, rgba(16,185,129,.14), transparent 24%), linear-gradient(180deg, #020617 0%, #08172f 45%, #0b203f 100%)", color: "#e2e8f0", minHeight: "100vh" }}>
      <section className="section-block about-hero section-intro" style={{ background: "transparent" }}>
        <div className="text-block">
          <p className="highlight-pill">About Baraka</p>
          <h1 style={{ color: "#f8fafc", fontSize: "3.8rem", fontWeight: 900, letterSpacing: "-.04em", marginBottom: 16 }}>Who we are</h1>
          <p style={{ maxWidth: 720, margin: "0 auto 24px", color: "rgba(226,232,240,.84)", fontSize: "1.02rem" }}>
            We build reliable digital services and sustainable employment pathways for young people from underserved communities.
          </p>
          <p style={{ color: "rgba(226,232,240,.84)" }}>
            Baraka Digital Hub is a Nairobi-based AI data operations and BPO partner. We deliver AI data services, human-in-the-loop AI, transcription, and back-office operations to clients worldwide—built and delivered by talented youth from underserved communities.
          </p>
        </div>
      </section>

      <section className="section-block" style={{ background: "transparent" }}>
        <div className="text-block">
          <h2 style={{ color: "#f8fafc" }}>Our operational promise</h2>
          <p style={{ color: "rgba(226,232,240,.84)" }}>
            A partner, not a platform — you receive a named Project Manager, dedicated Team Leads, and a fixed workforce cohort trained specifically on your requirements. The same people, the same standards, every engagement.
          </p>
          <div style={{ display: 'grid', gap: 12, marginTop: 12, maxWidth: 880 }}>
            <article className="about-card" style={{ background: "rgba(1,12,32,.72)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 28, color: "#e2e8f0", padding: "32px 28px" }}>
              <h3 style={{ color: "#f8fafc", marginBottom: 12 }}>100% independent QA on every output</h3>
              <p style={{ color: "rgba(226,232,240,.85)" }}>
                We review everything — not a sample, not a spot-check. Our QA team is structurally separated from production with no shared management, ensuring objectivity and consistent, auditable results.
              </p>
            </article>

            <article className="about-card" style={{ background: "rgba(1,12,32,.72)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 28, color: "#e2e8f0", padding: "32px 28px" }}>
              <h3 style={{ color: "#f8fafc", marginBottom: 12 }}>Transparent operations</h3>
              <p style={{ color: "rgba(226,232,240,.85)" }}>
                Daily progress reports, error logs, IAA scores, and direct access to your Project Manager keep operations visible and accountable. You always know what was reviewed and what was corrected.
              </p>
            </article>

            <article className="about-card" style={{ background: "rgba(1,12,32,.72)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 28, color: "#e2e8f0", padding: "32px 28px" }}>
              <h3 style={{ color: "#f8fafc", marginBottom: 12 }}>Cost advantage and impact</h3>
              <p style={{ color: "rgba(226,232,240,.85)" }}>
                We deliver enterprise-grade operational quality at Nairobi rates with a documented cost advantage compared to many US and EU providers. Social impact is built into every contract — a large portion of client spend flows directly to youth wages and community programmes.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-block" style={{ background: "transparent" }}>
        <article className="about-card accent-cyan" style={{ background: "rgba(1,12,32,.72)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 28, color: "#e2e8f0", padding: "32px 28px" }}>
          <h2 style={{ color: "#f8fafc" }}>How we started</h2>
          <p style={{ color: "rgba(226,232,240,.85)" }}>
            Baraka Digital Hub was established from the foundation of Baraka Children’s Home, which has served the Kayole community in Nairobi, Kenya since 2006 as a centre for care, protection, and education for vulnerable children.
          </p>
          <p style={{ color: "rgba(226,232,240,.85)" }}>
            As the children under care matured, a clear gap emerged between access to support and access to sustainable economic opportunity. This transition highlighted the need for a structured pathway that extends beyond care into skills development and meaningful employment.
          </p>
          <p style={{ color: "rgba(226,232,240,.85)" }}>
            Before the Hub was formally established, we began by helping young people apply for remote work opportunities individually. We trained them in digital work, guided them through onboarding processes, and supported them in accessing online earning platforms and freelance opportunities.
          </p>
          <p style={{ color: "rgba(226,232,240,.85)" }}>
            Through this experience, we recognized a larger opportunity. Individual placements created impact, but a centralized model could create greater stability, accountability, scalability, and employability. By building a structured hub, we could provide shared infrastructure, organized training, quality assurance systems, operational oversight, and a professional working environment that strengthened both consistency and long-term growth.
          </p>
          <p style={{ color: "rgba(226,232,240,.85)" }}>
            In response, Baraka Digital Hub was created to bridge the gap between potential and opportunity. What began as grassroots support for remote work evolved into a structured digital workforce model capable of delivering professional services to global clients.
          </p>
          <p style={{ color: "rgba(226,232,240,.85)" }}>
            Today, Baraka Digital Hub operates as a quality-driven digital services organization focused on delivery excellence, workforce development, and long-term economic inclusion.
          </p>
        </article>
      </section>

      <section className="section-block" style={{ background: "transparent" }}>
        <article className="about-card accent-purple" style={{ background: "rgba(1,12,32,.72)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 28, color: "#e2e8f0", padding: "32px 28px" }}>
          <h2 style={{ color: "#f8fafc" }}>Our identity</h2>
          <p style={{ color: "rgba(226,232,240,.85)" }}>
            Baraka Digital Hub is built on a core belief: talent is universal, but opportunity is not. Our mission is to close this gap by connecting underserved young people to structured digital employment and global work opportunities.
          </p>
          <p style={{ color: "rgba(226,232,240,.85)" }}>
            We operate as a professional services organization with a strong social impact mandate, combining commercial discipline with measurable community outcomes.
          </p>
          <p style={{ color: "rgba(226,232,240,.85)" }}>
            We are not a charity. We are a business built for sustainable impact.
          </p>
        </article>
      </section>

      <section className="section-block accent" style={{ background: "transparent" }}>
        <div className="text-block">
          <h2 style={{ color: "#f8fafc" }}>Core principles</h2>
          <div className="principle-grid">
            <article className="principle-card accent-cyan" style={{ background: "rgba(1,12,32,.72)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 16, color: "#e2e8f0", padding: "24px 20px" }}>
              <span className="feature-icon">🤝</span>
              <strong style={{ color: "#f8fafc" }}>Teamwork</strong>
              <p style={{ color: "rgba(226,232,240,.85)" }}>Strong results come from collaboration, shared responsibility, and mutual support.</p>
            </article>
            <article className="principle-card accent-purple" style={{ background: "rgba(1,12,32,.72)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 16, color: "#e2e8f0", padding: "24px 20px" }}>
              <span className="feature-icon">👤</span>
              <strong style={{ color: "#f8fafc" }}>Dignity</strong>
              <p style={{ color: "rgba(226,232,240,.85)" }}>We create opportunities that respect people, value their contribution, and promote self-worth.</p>
            </article>
            <article className="principle-card accent-sunset" style={{ background: "rgba(1,12,32,.72)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 16, color: "#e2e8f0", padding: "24px 20px" }}>
              <span className="feature-icon">✓</span>
              <strong style={{ color: "#f8fafc" }}>Accountability</strong>
              <p style={{ color: "rgba(226,232,240,.85)" }}>We take ownership of our work, our standards, and the impact we create.</p>
            </article>
            <article className="principle-card accent-cyan" style={{ background: "rgba(1,12,32,.72)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 16, color: "#e2e8f0", padding: "24px 20px" }}>
              <span className="feature-icon">⚡</span>
              <strong style={{ color: "#f8fafc" }}>Excellence</strong>
              <p style={{ color: "rgba(226,232,240,.85)" }}>We are committed to reliable, high-quality work that meets professional standards.</p>
            </article>
            <article className="principle-card accent-purple" style={{ background: "rgba(1,12,32,.72)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 16, color: "#e2e8f0", padding: "24px 20px" }}>
              <span className="feature-icon">🚀</span>
              <strong style={{ color: "#f8fafc" }}>Opportunity</strong>
              <p style={{ color: "rgba(226,232,240,.85)" }}>We exist to open pathways for growth, employment, and long-term transformation.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-block" style={{ background: "transparent" }}>
        <div className="text-block">
          <div style={{ height: 1, background: "#e2e8f0", margin: "0 0 24px" }} />
          <h2 style={{ color: "#f8fafc" }}>Leadership</h2>
          <p style={{ color: "rgba(226,232,240,.84)" }}>
            Baraka Digital Hub is led by individuals who grew up in the Children's Home and understand firsthand the power of opportunity. This lived experience shapes how we operate, who we hire, and what we build.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card" style={{ background: "rgba(1,12,32,.72)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 28, color: "#e2e8f0", padding: "32px 28px" }}>
            <h3 style={{ color: "#f8fafc" }}>From Our Head of Operations</h3>
            <p style={{ color: "rgba(226,232,240,.85)" }}>
              “Baraka Digital Hub was built on a simple belief: talent is universal, but opportunity is not. Our vision is to create a pathway where young people from underserved communities can access meaningful digital work, develop globally competitive skills, and build sustainable futures for themselves and their families.
            </p>
            <p style={{ color: "rgba(226,232,240,.85)" }}>
              We are building more than a workforce centre. We are building a model of economic inclusion powered by technology, discipline, and purpose. Every project delivered is an opportunity created, a skill strengthened, and a future made more stable.
            </p>
            <p style={{ color: "rgba(226,232,240,.85)" }}>
              We are ready to partner with organizations that value both excellence and impact.”
            </p>
            <p style={{ marginTop: 20, fontWeight: 700, color: "#f8fafc" }}>Timothy Mwangi<br />Head of Operations</p>
            <p style={{ color: "rgba(226,232,240,.85)", marginTop: 12 }}>Email: <a href="mailto:timothy.mwangi@barakadigitalhub.com" style={{ color: "#7dd3fc", textDecoration: "none" }}>timothy.mwangi@barakadigitalhub.com</a></p>
          </div>
          <div className="about-card about-highlight" style={{ background: "rgba(1,12,32,.72)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 28, color: "#e2e8f0", padding: "32px 28px" }}>
            <h3 style={{ color: "#f8fafc" }}>From Our President and Mama Baraka</h3>
            <p style={{ color: "rgba(226,232,240,.85)" }}>
              “My life has always been rooted in children — loving them, raising them, and standing beside them through every season of their growth. As Mama Baraka, my deepest calling has been to ensure that no child under our care ever feels forgotten or without a future.
            </p>
            <p style={{ color: "rgba(226,232,240,.85)" }}>
              Baraka Digital Hub was born from that responsibility and that love. It is an extension of the Children’s Home, built to ensure that our young people step into adulthood with skills, confidence, and opportunity.
            </p>
            <p style={{ color: "rgba(226,232,240,.85)" }}>
              Care must evolve into empowerment, and charity must grow into dignity. This work is family. It is love translated into opportunity.”
            </p>
            <p style={{ marginTop: 20, fontWeight: 700, color: "#f8fafc" }}>Margrate Kimaru<br />President and Mama Baraka</p>
            <p style={{ color: "rgba(226,232,240,.85)", marginTop: 12 }}>Email: <a href="mailto:margrate.kimaru@barakadigitalhub.com" style={{ color: "#7dd3fc", textDecoration: "none" }}>margrate.kimaru@barakadigitalhub.com</a></p>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

export default About;
