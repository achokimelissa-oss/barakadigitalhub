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
      <section className="section-block about-hero section-intro">
        <div className="text-block">
          <p className="highlight-pill">About Baraka</p>
          <h1>Who we are</h1>
          <p style={{ maxWidth: 720, margin: "0 auto 24px", color: "#334155", fontSize: "1.02rem" }}>
            We build reliable digital services and sustainable employment pathways for young people from underserved communities.
          </p>
          <p>
            Baraka Digital Hub is a digital services organization based in Nairobi, Kenya. We deliver AI data services, web development, and design to clients worldwide—built and delivered by talented youth from underserved communities.
          </p>
        </div>
      </section>

      <section className="section-block">
        <article className="about-card accent-cyan">
          <h2>How we started</h2>
          <p>
            Baraka Digital Hub was established from the foundation of Baraka Children’s Home, which has served the Kayole community in Nairobi, Kenya since 2006 as a centre for care, protection, and education for vulnerable children.
          </p>
          <p>
            As the children under care matured, a clear gap emerged between access to support and access to sustainable economic opportunity. This transition highlighted the need for a structured pathway that extends beyond care into skills development and meaningful employment.
          </p>
          <p>
            Before the Hub was formally established, we began by helping young people apply for remote work opportunities individually. We trained them in digital work, guided them through onboarding processes, and supported them in accessing online earning platforms and freelance opportunities.
          </p>
          <p>
            Through this experience, we recognized a larger opportunity. Individual placements created impact, but a centralized model could create greater stability, accountability, scalability, and employability. By building a structured hub, we could provide shared infrastructure, organized training, quality assurance systems, operational oversight, and a professional working environment that strengthened both consistency and long-term growth.
          </p>
          <p>
            In response, Baraka Digital Hub was created to bridge the gap between potential and opportunity. What began as grassroots support for remote work evolved into a structured digital workforce model capable of delivering professional services to global clients.
          </p>
          <p>
            Today, Baraka Digital Hub operates as a quality-driven digital services organization focused on delivery excellence, workforce development, and long-term economic inclusion.
          </p>
        </article>
      </section>

      <section className="section-block">
        <article className="about-card accent-purple">
          <h2>Our identity</h2>
          <p>
            Baraka Digital Hub is built on a core belief: talent is universal, but opportunity is not. Our mission is to close this gap by connecting underserved young people to structured digital employment and global work opportunities.
          </p>
          <p>
            We operate as a professional services organization with a strong social impact mandate, combining commercial discipline with measurable community outcomes.
          </p>
          <p>
            We are not a charity. We are a business built for sustainable impact.
          </p>
        </article>
      </section>

      <section className="section-block accent">
        <div className="text-block">
          <h2>Core principles</h2>
          <div className="principle-grid">
            <article className="principle-card accent-cyan">
              <span className="feature-icon">🤝</span>
              <strong>Teamwork</strong>
              <p>Strong results come from collaboration, shared responsibility, and mutual support.</p>
            </article>
            <article className="principle-card accent-purple">
              <span className="feature-icon">👤</span>
              <strong>Dignity</strong>
              <p>We create opportunities that respect people, value their contribution, and promote self-worth.</p>
            </article>
            <article className="principle-card accent-sunset">
              <span className="feature-icon">✓</span>
              <strong>Accountability</strong>
              <p>We take ownership of our work, our standards, and the impact we create.</p>
            </article>
            <article className="principle-card accent-cyan">
              <span className="feature-icon">⚡</span>
              <strong>Excellence</strong>
              <p>We are committed to reliable, high-quality work that meets professional standards.</p>
            </article>
            <article className="principle-card accent-purple">
              <span className="feature-icon">🚀</span>
              <strong>Opportunity</strong>
              <p>We exist to open pathways for growth, employment, and long-term transformation.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="text-block">
          <div style={{ height: 1, background: "#e2e8f0", margin: "0 0 24px" }} />
          <h2>Leadership</h2>
          <p>
            Baraka Digital Hub is led by individuals who grew up in the Children's Home and understand firsthand the power of opportunity. This lived experience shapes how we operate, who we hire, and what we build.
          </p>
        </div>

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
            <p style={{ color: "#475569", marginTop: 12 }}>Email: <a href="mailto:timothy.mwangi@barakadigitalhub.com" style={{ color: "#1d4ed8", textDecoration: "none" }}>timothy.mwangi@barakadigitalhub.com</a></p>
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
            <p style={{ color: "#475569", marginTop: 12 }}>Email: <a href="mailto:margrate.kimaru@barakadigitalhub.com" style={{ color: "#1d4ed8", textDecoration: "none" }}>margrate.kimaru@barakadigitalhub.com</a></p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
