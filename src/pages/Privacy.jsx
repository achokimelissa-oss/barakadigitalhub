function Privacy() {
  return (
    <>
      <section className="section-block contact-hero section-intro">
        <div className="text-block">
          <p className="highlight-pill">Compliance & privacy</p>
          <h1>Privacy and data protection</h1>
          <p>
            Baraka Digital Hub respects your privacy. We collect only the information we need to deliver services and keep your data secure.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="text-block">
          <h3 className="section-title soft">How we handle your information</h3>
          <p className="section-copy">
            Your contact details are used solely to respond to inquiries and share service updates. We do not sell personal information or use it for unsolicited outreach.
          </p>
        </div>

        <div className="card-grid contact-grid contact-grid--compact">
          <article className="card contact-card contact-card--small accent-cyan">
            <h4>Data we collect</h4>
            <p className="contact-copy">Email and message details to reply, plus optional project information for faster follow-up.</p>
          </article>

          <article className="card contact-card contact-card--small accent-purple">
            <h4>How we protect it</h4>
            <p className="contact-copy">Information is stored securely and only shared internally with the team required to manage your request.</p>
          </article>
        </div>
      </section>

      <section className="section-block accent">
        <div className="text-block">
          <h3 className="section-title soft">Questions?</h3>
          <p className="section-copy">
            Use the contact page to ask for a detailed privacy statement or data handling overview for your project.
          </p>
        </div>
      </section>
    </>
  );
}

export default Privacy;
