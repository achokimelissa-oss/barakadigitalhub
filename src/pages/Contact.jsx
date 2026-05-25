function Contact() {
  return (
    <>
      <section className="section-block contact-hero section-intro">
        <div className="text-block">
          <p className="highlight-pill">Get in touch</p>
          <h1>Let's work together</h1>
          <p>
            Whether you need AI data services, web development, or design—or you're curious about our impact model—reach out. We'd love to start a conversation.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="text-block">
          <h3 className="section-title soft">Contact our team</h3>
          <p className="section-copy">
            Pick the right lane, then share the essentials in the form below.
          </p>
        </div>

        <div className="card-grid contact-grid contact-grid--compact">
          <article className="card contact-card contact-card--small accent-cyan">
            <div className="contact-card__top">
              <div className="contact-photo contact-photo--a" aria-hidden="true" />
              <div>
                <p className="contact-role">Founder</p>
                <h4>Margrate Kimaru</h4>
              </div>
            </div>
            <p className="contact-copy">Strategy, partnerships, and community-led digital growth.</p>
            <p style={{ marginTop: 12, fontSize: "0.9rem" }}>
              <a href="mailto:margrate.kimaru@barakadigitalhub.com" style={{ color: "#1d4ed8", textDecoration: "none" }}>margrate.kimaru@barakadigitalhub.com</a>
            </p>
          </article>

          <article className="card contact-card contact-card--small accent-purple">
            <div className="contact-card__top">
              <div className="contact-photo contact-photo--b" aria-hidden="true" />
              <div>
                <p className="contact-role">Operations</p>
                <h4>Timothy Mwangi</h4>
              </div>
            </div>
            <p className="contact-copy">Delivery, AI tooling, and creative product support.</p>
            <p style={{ marginTop: 12, fontSize: "0.9rem" }}>
              <a href="mailto:timothy.mwangi@barakadigitalhub.com" style={{ color: "#1d4ed8", textDecoration: "none" }}>timothy.mwangi@barakadigitalhub.com</a>
            </p>
          </article>
        </div>

        <p className="contact-note">No emails. No phones. Just a clean form and a quick reply.</p>
      </section>

      <section className="section-block form-block form-block--compact">
        <div className="text-block">
          <h3 className="section-title soft">Send a message</h3>
          <p className="section-copy">
            Tell us what you need in a few lines and we’ll follow up with the next steps.
          </p>
        </div>

        <form action="https://formbold.com/s/oPqrV" method="POST" className="contact-form contact-form--compact">
          <label className="input-group">
            <span>Email</span>
            <input type="email" name="email" placeholder="Email" required />
          </label>

          <label className="input-group">
            <span>Subject</span>
            <input type="text" name="subject" placeholder="Subject" required />
          </label>

          <label className="input-group">
            <span>Message</span>
            <textarea name="message" placeholder="Type your message" rows="5" required></textarea>
          </label>

          <button type="submit">Message us</button>
        </form>
      </section>

      <section className="section-block accent">
        <div className="text-block">
          <h3>Why reach out?</h3>
          <ul className="reason-list">
            <li>Discuss a project or partnership opportunity</li>
            <li>Learn more about our AI data services, web development, or design capabilities</li>
            <li>Understand how the dual-impact model works</li>
            <li>Explore how your partnership funds youth employment and community support</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Contact;
