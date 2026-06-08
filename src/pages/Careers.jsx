import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function Careers() {
  return (
    <>
      <Helmet>
        <title>Careers | Baraka Digital Hub</title>
        <meta
          name="description"
          content="Join our growing team of AI data annotators and digital operations specialists in Nairobi, Kenya."
        />
      </Helmet>
      <section className="section-block careers-hero section-intro">
        <div className="text-block">
          <p className="highlight-pill">Careers</p>
          <h1>Join Our Team</h1>
          <p>
            We're building the future of digital services and social impact in Africa. If you're passionate about technology, innovation, and making a difference, we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="page-container">
          <h2>Why Work With Us?</h2>
          <div className="careers-grid">
            <div className="career-card">
              <h3>Growth & Development</h3>
              <p>
                Continuous learning opportunities and mentorship from industry experts as we grow together.
              </p>
            </div>

            <div className="career-card">
              <h3>Social Impact</h3>
              <p>
                Your work directly contributes to creating opportunities for underserved youth in Nairobi.
              </p>
            </div>

            <div className="career-card">
              <h3>Competitive Compensation</h3>
              <p>
                Fair, competitive salaries and benefits that reflect the value you bring to our team.
              </p>
            </div>

            <div className="career-card">
              <h3>Collaborative Culture</h3>
              <p>
                Work with talented, passionate people who believe in using technology for good.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-intro">
        <div className="text-block">
          <h2>Open Positions</h2>
          <p style={{ marginBottom: 24 }}>
            Currently, we're looking for talented individuals to join our growing team. Send your resume and cover letter to careers@barakadigitalhub.com with the position title in the subject line.
          </p>
          <Link to="/contact#send-message" className="button primary">
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}

export default Careers;
