import { Helmet } from "react-helmet-async";

function About() {
  return (
    <>
      <Helmet>
        <title>About Baraka Digital Hub</title>
        <style>{`
          :root{
            --navy:#041b45;
            --dark-navy:#07142a;
            --deepest:#010810;
            --green:#2fc4c4;
            --teal:#4dd7ff;
            --amber:#7dcfff;
            --text:#f3f8ff;
            --text-dim:#b8d1e6;
            --line:rgba(255,255,255,0.09);
          }

          *{margin:0;padding:0;box-sizing:border-box;}

          body{
            background:
              radial-gradient(circle at 15% 10%, rgba(13,115,119,0.18), transparent 40%),
              radial-gradient(circle at 85% 30%, rgba(232,160,32,0.07), transparent 35%),
              linear-gradient(180deg, var(--deepest) 0%, var(--dark-navy) 100%);
            color:var(--text);
            font-family:'Inter', 'Segoe UI', system-ui, sans-serif;
            line-height:1.65;
            background-attachment:fixed;
            overflow-x:hidden;
          }

          body::before{
            content:"";
            position:fixed;
            top:0;left:0;right:0;bottom:0;
            background-image:
              linear-gradient(var(--line) 1px, transparent 1px),
              linear-gradient(90deg, var(--line) 1px, transparent 1px);
            background-size:48px 48px;
            mask-image: radial-gradient(circle at 50% 0%, rgba(0,0,0,0.6), transparent 70%);
            pointer-events:none;
            z-index:0;
          }

          .wrap{
            position:relative;
            z-index:1;
            max-width:980px;
            margin:0 auto;
            padding:0 28px;
          }

          .hero{
            padding:100px 0 70px;
            border-bottom:1px solid var(--line);
            position:relative;
          }
          .eyebrow{
            font-family:'JetBrains Mono', 'Courier New', monospace;
            font-size:0.78rem;
            letter-spacing:0.35em;
            color:var(--teal);
            text-transform:uppercase;
            margin-bottom:18px;
            display:flex;
            align-items:center;
            gap:12px;
          }
          .eyebrow::before{
            content:"";
            width:10px;height:10px;
            background:var(--teal);
            border-radius:1px;
            box-shadow:0 0 12px var(--teal);
            display:inline-block;
          }
          h1{
            font-size:3.4rem;
            font-weight:800;
            line-height:1.08;
            letter-spacing:-0.02em;
            background:linear-gradient(120deg,#FFFFFF 40%, var(--teal) 100%);
            -webkit-background-clip:text;
            background-clip:text;
            -webkit-text-fill-color:transparent;
            max-width:760px;
          }
          .hero p{
            margin-top:24px;
            font-size:1.15rem;
            color:var(--text-dim);
            max-width:720px;
            line-height:1.8;
          }

          section{
            padding:70px 0;
            border-bottom:1px solid var(--line);
          }
          section:last-child{border-bottom:none;}

          .section-tag{
            font-family:'JetBrains Mono','Courier New',monospace;
            font-size:0.72rem;
            letter-spacing:0.3em;
            text-transform:uppercase;
            color:var(--teal);
            margin-bottom:14px;
          }
          h2{
            font-size:2rem;
            font-weight:700;
            color:#fff;
            margin-bottom:36px;
            letter-spacing:-0.01em;
          }

          .grid3{
            display:grid;
            grid-template-columns:repeat(3,1fr);
            gap:1px;
            background:rgba(255,255,255,0.06);
            border:1px solid rgba(255,255,255,0.08);
            border-radius:10px;
            overflow:hidden;
          }
          .card{
            background:rgba(3,22,58,0.82);
            padding:36px 28px;
            transition:background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
            border:1px solid rgba(255,255,255,0.12);
            box-shadow: 0 26px 70px rgba(12, 47, 95, 0.18);
          }
          .card:hover{
            background:rgba(19,63,106,0.92);
            transform: translateY(-3px);
            box-shadow: 0 32px 90px rgba(29, 99, 168, 0.26);
          }
          .card .label{
            font-family:'JetBrains Mono','Courier New',monospace;
            font-size:0.7rem;
            letter-spacing:0.25em;
            color:var(--teal);
            text-transform:uppercase;
            margin-bottom:12px;
          }
          .card h3{
            font-size:1.18rem;
            color:#f8fafc;
            margin-bottom:12px;
            font-weight:600;
          }
          .card p{
            color:rgba(243,248,255,0.87);
            font-size:0.95rem;
          }

          .origin-body{
            max-width:760px;
            color:var(--text-dim);
            font-size:1.02rem;
            margin-top:16px;
          }
          .origin-body p{ margin-bottom:22px; }
          .origin-body strong{ color:#fff; font-weight:600; }

          .why-list{
            margin-top:34px;
            border-left:2px solid var(--green);
            padding-left:24px;
            display:flex;
            flex-direction:column;
            gap:14px;
          }
          .why-list div{
            color:var(--text);
            font-size:0.98rem;
          }
          .why-list div::before{
            content:"// ";
            font-family:'JetBrains Mono','Courier New',monospace;
            color:var(--green);
          }

          .principles{
            display:grid;
            grid-template-columns:repeat(5,1fr);
            gap:18px;
          }
          .principle{
            text-align:left;
            border:1px solid rgba(77,147,205,0.18);
            border-radius:10px;
            padding:24px 18px;
            background:rgba(32,58,92,0.16);
          }
          .principle .icon{
            font-size:1.5rem;
            margin-bottom:14px;
            display:block;
          }
          .principle h4{
            color:#fff;
            font-size:1rem;
            margin-bottom:8px;
            font-weight:600;
          }
          .principle p{
            color:var(--text-dim);
            font-size:0.86rem;
          }

          .leaders{
            display:grid;
            grid-template-columns:1fr 1fr;
            gap:28px;
          }
          .leader{
            border:1px solid var(--line);
            border-radius:10px;
            padding:32px;
            background:linear-gradient(160deg, rgba(13,115,119,0.06), rgba(255,255,255,0.01));
            position:relative;
          }
          .leader::before{
            content:"“";
            position:absolute;
            top:18px; right:24px;
            font-size:3rem;
            font-family:Georgia, serif;
            color:rgba(232,160,32,0.18);
            line-height:1;
          }
          .leader p.quote{
            color:var(--text);
            font-size:1.02rem;
            font-style:italic;
            margin-bottom:24px;
            position:relative;
            z-index:1;
          }
          .leader .name{
            color:#fff;
            font-weight:700;
            font-size:1.05rem;
          }
          .leader .role{
            color:var(--amber);
            font-family:'JetBrains Mono','Courier New',monospace;
            font-size:0.75rem;
            letter-spacing:0.15em;
            text-transform:uppercase;
            margin:4px 0 10px;
          }
          .leader .email{
            color:var(--text-dim);
            font-size:0.85rem;
            font-family:'JetBrains Mono','Courier New',monospace;
          }

          footer{
            padding:50px 0 70px;
            text-align:center;
            color:var(--text-dim);
            font-family:'JetBrains Mono','Courier New',monospace;
            font-size:0.78rem;
            letter-spacing:0.25em;
            text-transform:uppercase;
          }
          footer span{ color:var(--teal); }

          @media (max-width: 800px){
            h1{ font-size:2.2rem; }
            .grid3{ grid-template-columns:1fr; }
            .principles{ grid-template-columns:repeat(2,1fr); }
            .leaders{ grid-template-columns:1fr; }
            .hero{ padding:72px 0 56px; }
            section{ padding:50px 0; }
            .hero p, .origin-body{ max-width:100%; }
          }
          @media (max-width: 500px){
            .principles{ grid-template-columns:1fr; }
            .hero{ padding:60px 0 48px; }
            h1{ font-size:2rem; }
            .origin-body{ font-size:1rem; }
          }

          @media (prefers-reduced-motion: reduce){
            .card{ transition:none; }
          }
        `}</style>
      </Helmet>
      <div className="wrap">
        <section className="hero">
          <div className="eyebrow">About Us</div>
          <h1>Baraka Digital Hub is a social impact digital services centre based in Nairobi, Kenya.</h1>
          <p>We deliver reliable, measurable digital solutions to international clients across AI training, transcription, BPO services, and specialized data operations, including computer vision annotation, natural language processing datasets, and audio and speech processing.</p>
          <p>Each engagement is structured to generate dual impact. It provides fair and consistent income opportunities for young people from underserved communities while simultaneously supporting the education and welfare of children at Baraka Children’s Home and the surrounding community. This dual-impact model is embedded in our operations.</p>
        </section>

        <section>
          <div className="section-tag">How We Started</div>
          <h2>Baraka Digital Hub was established from the foundation of Baraka Children’s Home, which has served the Kayole community in Nairobi, Kenya since 2006 as a centre for care, protection, and education for vulnerable children.</h2>
          <div className="origin-body">
            <p>As the children under care matured, a clear gap emerged between access to support and access to sustainable economic opportunity. This transition highlighted the need for a structured pathway that extends beyond care into skills development and meaningful employment.</p>
            <p>Before the Hub was formally established, we began by helping young people apply for remote work opportunities individually. We trained them in digital work, guided them through onboarding processes, and supported them in accessing online earning platforms and freelance opportunities.</p>
            <p>Through this experience, we recognized a larger opportunity. Individual placements created impact, but a centralized model could create greater stability, accountability, scalability, and employability. By building a structured hub, we could provide shared infrastructure, organized training, quality assurance systems, operational oversight, and a professional working environment that strengthened both consistency and long-term growth.</p>
            <p>In response, Baraka Digital Hub was created to bridge the gap between potential and opportunity. What began as grassroots support for remote work evolved into a structured digital workforce model capable of delivering professional services to global clients.</p>
            <p>Today, Baraka Digital Hub operates as a quality-driven digital services organization focused on delivery excellence, workforce development, and long-term economic inclusion.</p>
          </div>
        </section>

        <section>
          <div className="section-tag">Our Identity</div>
          <h2>Baraka Digital Hub is built on a core belief: talent is universal, but opportunity is not.</h2>
          <div className="origin-body">
            <p>Our mission is to close this gap by connecting underserved young people to structured digital employment and global work opportunities.</p>
            <p>We operate as a professional services organization with a strong social impact mandate, combining commercial discipline with measurable community outcomes.</p>
            <p>We are not a charity. We are a business built for sustainable impact.</p>
          </div>

          <div className="origin-body" style={{ marginTop: 24 }}>
            <h3>Vision</h3>
            <p>To become Africa's leading impact-driven digital workforce company, connecting global businesses with world-class AI data and digital services while creating sustainable employment opportunities for underserved youth.</p>
          </div>

          <div className="origin-body" style={{ marginTop: 24 }}>
            <h3>Mission</h3>
            <p>BDH exists to prove that geography is not a limitation to excellence. We empower underserved youth to deliver world-class AI data and digital services, creating value for global businesses while transforming lives and communities.</p>
          </div>

          <div className="origin-body" style={{ marginTop: 24 }}>
            <h3>Sustainable Impact Model</h3>
            <p>BDH operates on a sustainable, revenue-driven model rather than relying on donations or charity. Income generated through AI data services and digital operations supports business growth, workforce development, and the long-term mission of Baraka Children's Home. Every project delivered creates both commercial value and measurable social impact.</p>
          </div>

          <div className="origin-body" style={{ marginTop: 24 }}>
            <h3>Youth Employment & Economic Empowerment</h3>
            <p>BDH intentionally creates employment opportunities for youth from underserved communities across Africa. Through structured onboarding, practical training, mentorship, and hands-on project experience, participants gain access to meaningful work in the global digital economy while building confidence, professional discipline, and financial independence.</p>
          </div>

          <div className="origin-body" style={{ marginTop: 24 }}>
            <h3>Future-Ready Skills Development</h3>
            <p>At BDH, our focus extends beyond task completion. Team members develop valuable, transferable skills in AI data annotation, quality assurance, data management, client communication, problem-solving, and digital operations. These capabilities prepare them for long-term career growth and emerging opportunities in the rapidly evolving AI and technology sectors.</p>
          </div>
        </section>

        <section>
          <div className="section-tag">Core Principles</div>
          <h2>Our operating values shape every engagement.</h2>
          <div className="origin-body">
            <p><strong>Teamwork</strong> We believe strong results come from collaboration, shared responsibility, and mutual support.</p>
            <p><strong>Dignity</strong> We create opportunities that respect people, value their contribution, and promote self-worth.</p>
            <p><strong>Accountability</strong> We take ownership of our work, our standards, and the impact we create.</p>
            <p><strong>Excellence</strong> We are committed to delivering reliable, high-quality work that meets professional standards.</p>
            <p><strong>Opportunity</strong> We exist to open pathways for growth, employment, and long-term transformation.</p>
          </div>
        </section>

        <section>
          <div className="section-tag">Leadership</div>
          <h2>From our Head of Operations</h2>
          <div className="leaders">
            <div className="leader">
              <p className="quote">Baraka Digital Hub was built on a simple belief: talent is universal, but opportunity is not.</p>
              <p className="quote">Our vision is to create a pathway where young people from underserved communities can access meaningful digital work, develop globally competitive skills, and build sustainable futures for themselves and their families.</p>
              <p className="quote">We are building more than a workforce centre. We are building a model of economic inclusion powered by technology, discipline, and purpose.</p>
              <p className="quote">Every project delivered is an opportunity created, a skill strengthened, and a future made more stable.</p>
              <p className="quote">We are ready to partner with organizations that value both excellence and impact.</p>
              <div className="name">Timothy Mwangi</div>
              <div className="role">Head of Operations</div>
            </div>
          </div>
        </section>

        <section>
          <div className="section-tag">Leadership</div>
          <h2>From our President and Mama Baraka</h2>
          <div className="leaders">
            <div className="leader">
              <p className="quote">My life has always been rooted in children — loving them, raising them, and standing beside them through every season of their growth. As Mama Baraka, my deepest calling has been to ensure that no child under our care ever feels forgotten or without a future.</p>
              <p className="quote">Baraka Digital Hub was born from that responsibility and that love. It is an extension of the Children’s Home, built to ensure that our young people step into adulthood with skills, confidence, and opportunity.</p>
              <p className="quote">Care must evolve into empowerment, and charity must grow into dignity.</p>
              <p className="quote">This work is family. It is love translated into opportunity.</p>
              <div className="name">Margrate Kimaru</div>
              <div className="role">President &amp; Mama Baraka</div>
            </div>
          </div>
        </section>

        <footer>
          Baraka Digital Hub <span>·</span> Nairobi, Kenya
        </footer>
      </div>
    </>
  );
}

export default About;
