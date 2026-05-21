import { Link } from "react-router-dom";

function Impact() {
  return (
    <section className="section-block accent">
      <div className="text-block">
        <h3>Global growth with measurable impact</h3>
        <p>
          Baraka Digital Hub delivers world-class digital services while creating economic opportunity for young people in Nairobi. We combine global delivery, local purpose, and sustainable outcomes so every engagement supports growth and social impact.
        </p>
      </div>

      <div className="card-grid">
        <article className="card">
          <h4>Inclusive digital work</h4>
          <p>
            Our clients receive high-quality web, AI, and growth solutions from a team that is building market-ready skills for youth in East Africa.
          </p>
        </article>
        <article className="card">
          <h4>Reliable global delivery</h4>
          <p>
            We support businesses around the world with responsive project delivery, transparent communication, and dependable results.
          </p>
        </article>
        <article className="card">
          <h4>Impact that scales</h4>
          <p>
            Every project helps fund training, drive income for young professionals, and strengthen Baraka Children’s Home through a sustainable revenue model.
          </p>
        </article>
      </div>

      <div className="section-block">
        <div className="text-block">
          <h3>Why our work matters</h3>
          <p>
            Baraka Digital Hub is more than a service provider. We build systems that transform client budgets into opportunity, skills, and future independence. By choosing us, partners invest in digital excellence and long-term community impact.
          </p>
          <p>
            Interested in a global partnership? <Link to="/contact">Contact our leadership team</Link> to discuss collaborations, AI programs, or digital transformation work.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Impact;
