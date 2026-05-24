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
          <h3>Contact our team</h3>
          <p>
            Choose who fits your needs, or start with either team member and we'll connect you to the right person.
          </p>
        </div>

        <div className="card-grid contact-grid">
          <article className="card contact-card accent-cyan">
            <span className="feature-icon">👑</span>
            <h4>Margrate Kimaru</h4>
            <p className="role">President and Founder</p>
            <p>
              Global partnerships, strategic collaboration, and social impact initiatives.
            </p>
            <p>Contact via the form below.</p>
          </article>

          <article className="card contact-card accent-purple">
            <span className="feature-icon">⚙️</span>
            <h4>Timothy Mwangi</h4>
            <p className="role">Head of Operations</p>
            <p>
              AI data programs, web development, design, and client project delivery.
            </p>
            <p>Contact via the form below.</p>
          </article>
        </div>
      </section>

      <section className="section-block form-block">
        <div className="text-block">
          <h3>Send us a message</h3>
          <p>Use the form below to contact our team directly. We’ll get back to you shortly.</p>
        </div>

        <form action="https://formbold.com/s/oPqrV" method="POST" className="contact-form">
          <label>
            <span>Email</span>
            <input type="email" name="email" placeholder="Email" required />
          </label>

          <label>
            <span>Subject</span>
            <input type="text" name="subject" placeholder="Subject" required />
          </label>

          <label>
            <span>Message</span>
            <textarea name="message" placeholder="Type your message" rows="6" required></textarea>
          </label>

          <button type="submit">Send Message</button>
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
