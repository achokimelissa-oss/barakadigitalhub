import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    // Load jotform CSS
    const stylesheets = [
      "https://cdn.jotfor.ms/stylebuilder/static/form-common.css?v=aa2d234",
      "https://cdn.jotfor.ms/themes/CSS/5e6b428acc8c4e222d1beb91.css?v=4.1.67550&themeRevisionID=65660e4b326633110492e01a",
      "https://cdn.jotfor.ms/s/static/f3be05c1446/css/styles/payment/payment_styles.css?4.1.67550",
      "https://cdn.jotfor.ms/s/static/f3be05c1446/css/styles/payment/payment_feature.css?4.1.67550"
    ];

    stylesheets.forEach(href => {
      if (!document.querySelector(`link[href*="${href.split('?')[0]}"]`)) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = href;
        document.head.appendChild(link);
      }
    });

    // Load all jotform scripts
    const scripts = [
      "https://cdn.jotfor.ms/s/static/f3be05c1446/static/prototype.forms.js",
      "https://cdn.jotfor.ms/s/static/f3be05c1446/static/jotform.forms.js",
      "https://cdn.jotfor.ms/s/umd/f3be05c1446/for-aria-notify-polyfill.js",
      "https://cdn.jotfor.ms/s/umd/f3be05c1446/for-form-branding-footer.js",
      "https://cdn.jotfor.ms/s/static/f3be05c1446/js/vendor/smoothscroll.min.js",
      "https://cdn.jotfor.ms/s/static/f3be05c1446/js/errorNavigation.js"
    ];

    scripts.forEach(src => {
      if (!document.querySelector(`script[src="${src}"]`)) {
        const script = document.createElement("script");
        script.src = src;
        script.type = "text/javascript";
        script.async = true;
        if (src.includes("branding-footer")) {
          script.defer = true;
        }
        document.head.appendChild(script);
      }
    });

    // Set up jotform config
    window.enableEventObserver = true;
    window.enableRenameUploadFile = false;
    window.enableDateFieldSelectInputs = false;
    window.CDN = "https://cdn.jotfor.ms/";
    window.umdRootPath = "https://cdn.jotfor.ms/s/umd/f3be05c1446/";
    window.staticRootPath = "https://cdn.jotfor.ms/s/static/f3be05c1446/";

    // Initialize jotform
    if (window.JotForm) {
      window.JotForm.showJotFormPowered = "new_footer";
      window.JotForm.poweredByText = "Powered by Jotform";
    }
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

      <section className="section-block form-block form-block--compact" id="send-message">
        <div className="text-block">
          <h3 className="section-title soft">Send a message</h3>
          <p className="section-copy">
            Tell us what you need in a few lines and we’ll follow up with the next steps.
          </p>
        </div>

        <div 
          id="jotform-container"
          dangerouslySetInnerHTML={{
            __html: `<form class="jotform-form" onsubmit="return typeof testSubmitFunction !== 'undefined' && testSubmitFunction();" action="https://submit.jotform.com/submit/261576400274556" method="post" name="form_261576400274556" id="261576400274556" accept-charset="utf-8" autocomplete="on"><input type="hidden" name="formID" value="261576400274556" /><input type="hidden" id="JWTContainer" value="" /><input type="hidden" id="cardinalOrderNumber" value="" /><input type="hidden" id="jsExecutionTracker" name="jsExecutionTracker" value="build-date-1780902490605" /><input type="hidden" id="submitSource" name="submitSource" value="unknown" /><input type="hidden" id="submitDate" name="submitDate" value="undefined" /><input type="hidden" id="buildDate" name="buildDate" value="1780902490605" /><input type="hidden" name="uploadServerUrl" value="https://upload.jotform.com/upload" /><input type="hidden" name="eventObserver" value="1" /> <div id="formCoverLogo" style="margin-bottom:32px" class="form-cover-wrapper form-has-cover form-page-cover-image-align-center"> <div class="form-page-cover-image-wrapper" style="max-width:520px"><img src="https://www.jotform.com/uploads/timnjeri32/form_files/475458.6a25d312ab12b5.61904003.png" class="form-page-cover-image" width="140" height="140" alt="Blue Sky Contact Form" style="aspect-ratio:1" /></div> </div> <div role="main" class="form-all"> <ul class="form-section page-section" role="presentation"> <li id="cid_8" class="form-input-wide" data-type="control_head"> <div class="form-header-group header-large"> <div class="header-text httac htvam"> <h1 id="header_8" class="form-header" data-component="header">Contact Us</h1> </div> </div> </li> <li class="form-line fixed-width jf-required" data-type="control_textbox" id="id_3"><label class="form-label form-label-top form-label-auto" id="label_3" for="input_3"> Name<span class="form-required" aria-hidden="true">*</span> </label> <div id="cid_3" class="form-input-wide jf-required" data-layout="half"> <input type="text" id="input_3" name="q3_name" data-type="input-textbox" class="form-textbox validate[required]" data-defaultvalue="" style="width:416px" size="416" placeholder=" " data-component="textbox" aria-labelledby="label_3" required="" value="" /> </div> </li> <li class="form-line fixed-width jf-required" data-type="control_textbox" id="id_4"><label class="form-label form-label-top form-label-auto" id="label_4" for="input_4"> E-mail<span class="form-required" aria-hidden="true">*</span> </label> <div id="cid_4" class="form-input-wide jf-required" data-layout="half"> <input type="text" id="input_4" name="q4_email" data-type="input-textbox" class="form-textbox validate[required]" data-defaultvalue="" style="width:416px" size="416" placeholder=" " data-component="textbox" aria-labelledby="label_4" required="" value="" /> </div> </li> <li class="form-line fixed-width jf-required" data-type="control_textbox" id="id_5"><label class="form-label form-label-top form-label-auto" id="label_5" for="input_5"> Contact Number<span class="form-required" aria-hidden="true">*</span> </label> <div id="cid_5" class="form-input-wide jf-required" data-layout="half"> <input type="text" id="input_5" name="q5_contactNumber5" data-type="input-textbox" class="form-textbox validate[required]" data-defaultvalue="" style="width:416px" size="416" placeholder=" " data-component="textbox" aria-labelledby="label_5" required="" value="" /> </div> </li> <li class="form-line jf-required" data-type="control_textbox" id="id_12"><label class="form-label form-label-top form-label-auto" id="label_12" for="input_12"> Subject<span class="form-required" aria-hidden="true">*</span> </label> <div id="cid_12" class="form-input-wide jf-required" data-layout="half"> <input type="text" id="input_12" name="q12_subject" data-type="input-textbox" class="form-textbox validate[required]" data-defaultvalue="" style="width:310px" size="310" placeholder="Partnership, Job opportunity, General inquiry....." data-component="textbox" aria-labelledby="label_12" required="" value="" /> </div> </li> <li class="form-line fixed-width jf-required" data-type="control_textarea" id="id_6"><label class="form-label form-label-top form-label-auto" id="label_6" for="input_6"> Message<span class="form-required" aria-hidden="true">*</span> </label> <div id="cid_6" class="form-input-wide jf-required" data-layout="full"> <div class="form-textarea-limit"><span><textarea id="input_6" class="form-textarea validate[required]" name="q6_message" data-component="textarea" required="" aria-labelledby="label_6"></textarea> <div class="form-textarea-limit-indicator"><span data-limit="300" type="Words" data-minimum="20" data-typeminimum="Words" id="input_6-limit">0/300</span></div> </span></div> </div> </li> <li class="form-line" data-type="control_button" id="id_7"> <div id="cid_7" class="form-input-wide" data-layout="full"> <div data-align="auto" class="form-buttons-wrapper form-buttons-auto jsTest-button-wrapperField"><button id="input_7" type="submit" class="form-submit-button submit-button jf-form-buttons jsTest-submitField legacy-submit" data-component="button" data-content="">Submit</button></div> </div> </li> <li style="display:none">Should be Empty: <input type="text" name="website" value="" type="hidden" /></li> </ul> </div><input type="hidden" class="simple_spc" id="simple_spc" name="simple_spc" value="261576400274556" /></form>`
          }}
        />
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
