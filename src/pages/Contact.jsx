import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us | Baraka Digital Hub</title>
        <meta
          name="description"
          content="Get in touch with the Baraka Digital Hub team for AI training data, annotation services, or partnership enquiries."
        />
      </Helmet>
      <div style={{ background: "radial-gradient(circle at 12% 12%, rgba(59,130,246,.07), transparent 22%), radial-gradient(circle at 88% 18%, rgba(16,185,129,.06), transparent 18%), linear-gradient(180deg, #020613 0%, #05101d 42%, #081429 100%)", color: "#e2e8f0", minHeight: "100vh" }}>
      <section className="section-block contact-hero section-intro" style={{ background: "transparent" }}>
        <div className="text-block">
          <p className="highlight-pill">Get in touch</p>
          <h1 style={{ color: "#f8fafc" }}>Let's work together</h1>
          <p style={{ color: "rgba(226,232,240,.84)" }}>
            Whether you need AI data operations, human-in-the-loop AI, transcription, or BPO support—or you're curious about our impact model—reach out. We'd love to start a conversation.
          </p>
          <div className="hero-actions" style={{ marginTop: '2rem' }}>
            <a href="#send-message" className="button primary">Send a message</a>
            <Link to="/services" className="button secondary">Explore services</Link>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="text-block">
          <h3 className="section-title soft">Contact our team</h3>
          <p className="section-copy">
            Pick the right lane, then share the essentials in the form below.
          </p>
          <address className="section-copy" style={{ marginTop: '1.5rem', color: '#334155', lineHeight: 1.8 }}>
            Email: <a href="mailto:projects@barakadigitalhub.com" style={{ color: '#1d4ed8', textDecoration: 'none' }}>projects@barakadigitalhub.com</a><br />
            Phone: <a href="tel:+254793842347" style={{ color: '#1d4ed8', textDecoration: 'none' }}>+254793842347</a><br />
            Location: Nairobi, Kenya
          </address>
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

        <p className="contact-note">We reply quickly to direct email and phone inquiries, and our team is ready to support your next AI or digital operations project.</p>
      </section>

      <section className="section-block form-block form-block--compact" id="send-message" style={{ scrollMarginTop: 120 }}>
        <div className="text-block">
          <h3 className="section-title soft">Send a message</h3>
          <p className="section-copy">
            Tell us what you need in a few lines and we’ll follow up with the next steps.
          </p>
        </div>

        <div style={{ width: "100%", marginTop: 24 }}>
          <iframe
            title="Baraka Digital Hub contact form"
            src="https://form.jotform.com/261576400274556"
            style={{ width: "100%", minHeight: "920px", border: "1px solid rgba(226,232,240,0.12)", borderRadius: 24, overflow: "hidden" }}
            loading="lazy"
            sandbox="allow-forms allow-popups allow-scripts allow-same-origin allow-top-navigation"
          />
          <p style={{ marginTop: 16, color: "rgba(226,232,240,.72)", fontSize: "0.95rem" }}>
            If the form does not load quickly, you can open it directly in a new tab: <a href="https://form.jotform.com/261576400274556" target="_blank" rel="noreferrer" style={{ color: "#7dd3fc" }}>Open the contact form</a>.
          </p>
        </div>
      </section>

      <section className="section-block accent">
        <div className="text-block">
          <h3>Why reach out?</h3>
          <ul className="reason-list">
            <li>Discuss a project or partnership opportunity</li>
            <li>Learn more about our AI data operations, human-in-the-loop AI, and BPO capabilities</li>
            <li>Understand how the dual-impact model works</li>
            <li>Explore how your partnership funds youth employment and community support</li>
          </ul>
        </div>
      </section>
      </div>
    </>
  );
}

export default Contact;
