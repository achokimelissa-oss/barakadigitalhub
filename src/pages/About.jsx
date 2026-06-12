import { Helmet } from "react-helmet-async";

function About({ navigate }) {
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
            --text:#ffffff;
            --text-dim:#d4e3ff;
            --line:rgba(255,255,255,0.12);
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
            color:#f8fbff;
          }
          .wrap,
          .wrap * {
            color:#f8fbff !important;
          }
          .wrap a {
            color:#7dd3fc !important;
            text-decoration:none;
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
            color:#ffffff;
            max-width:720px;
            line-height:1.9;
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
            color:#edf7ff;
            font-size:0.95rem;
          }

          .origin-body{
            max-width:760px;
            color:#fbfdff;
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
            color:#ffffff;
            font-size:0.98rem;
          }
          .why-list div::before{
            content:"// ";
            font-family:'JetBrains Mono','Courier New',monospace;
            color:var(--green);
          }

          .principles{
            display:grid;
            grid-template-columns:repeat(3,minmax(0,1fr));
            gap:18px;
          }
          .principle{
            position:relative;
            overflow:hidden;
            text-align:left;
            border:1px solid rgba(77,147,205,0.18);
            border-radius:20px;
            padding:28px 22px;
            background:rgba(9, 25, 58, 0.76);
            box-shadow:0 24px 54px rgba(2, 22, 54, 0.18);
          }
          .principle::before{
            content:"";
            position:absolute;
            top:-20px;
            right:-18px;
            width:126px;
            height:126px;
            border-radius:50%;
            background:rgba(61, 210, 255, 0.12);
            z-index:0;
          }
          .principle .icon{
            position:relative;
            display:inline-flex;
            align-items:center;
            justify-content:center;
            width:42px;
            height:42px;
            margin-bottom:18px;
            border-radius:14px;
            background:rgba(125, 207, 255, 0.14);
            color:var(--teal);
            font-size:1.25rem;
            z-index:1;
          }
          .principle h4{
            position:relative;
            color:#f8fbff;
            font-size:1.02rem;
            margin-bottom:10px;
            font-weight:700;
            z-index:1;
          }
          .principle p{
            position:relative;
            color:#dde7fb;
            font-size:0.94rem;
            line-height:1.75;
            z-index:1;
          }

          .principles-cta{
            display:grid;
            grid-template-columns:1.4fr 1fr;
            gap:18px;
            margin-top:28px;
          }
          .principles-cta-card{
            position:relative;
            overflow:hidden;
            border-radius:22px;
            padding:30px;
            background:linear-gradient(180deg, rgba(3,24,62,0.82), rgba(7,35,81,0.9));
            border:1px solid rgba(125,207,255,0.16);
            box-shadow:0 28px 72px rgba(6, 21, 56, 0.2);
          }
          .principles-cta-card::after{
            content:"";
            position:absolute;
            right:-22px;
            top:-22px;
            width:96px;
            height:96px;
            border-radius:26px;
            background:rgba(125,207,255,0.12);
            z-index:0;
          }
          .principles-cta-card h3{
            margin:0 0 16px;
            color:#eff7ff;
            font-size:1.2rem;
            line-height:1.35;
            z-index:1;
            position:relative;
          }
          .principles-cta-card p{
            margin:0 0 20px;
            color:#e4ecfc;
            line-height:1.75;
            position:relative;
            z-index:1;
          }
          .principles-cta-card .cta-badge{
            display:inline-flex;
            align-items:center;
            gap:10px;
            padding:10px 14px;
            border-radius:9999px;
            background:rgba(61,210,255,0.14);
            color:#bdf0ff;
            font-family:'JetBrains Mono','Courier New',monospace;
            font-size:0.75rem;
            letter-spacing:0.18em;
            text-transform:uppercase;
            position:relative;
            z-index:1;
          }
          .principles-cta-card .cta-badge::before{
            content:"➜";
            display:inline-block;
            transform:rotate(-20deg);
          }

          @media (max-width: 980px){
            .principles{
              grid-template-columns:repeat(2,minmax(0,1fr));
            }
            .principles-cta{
              grid-template-columns:1fr;
            }
          }
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
            color:#f3f8ff;
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
            color:#f4fbff;
            font-size:0.85rem;
            font-family:'JetBrains Mono','Courier New',monospace;
          }

          .cta-section{
            background:rgba(178, 255, 255, 0.08);
            border:1px solid rgba(148, 255, 255, 0.24);
            border-radius:24px;
            padding:36px 34px;
            margin-bottom:24px;
            overflow:hidden;
          }
          .cta-section::before{
            content:"";
            position:absolute;
            top:-20px;
            right:-26px;
            width:180px;
            height:180px;
            border-radius:60px;
            background:rgba(153, 255, 255, 0.18);
            z-index:0;
          }
          .cta-section::after{
            content:"";
            position:absolute;
            bottom:-18px;
            left:-18px;
            width:120px;
            height:120px;
            border-radius:24px;
            background:rgba(197, 255, 255, 0.12);
            z-index:0;
          }
          .cta-section > * {
            position:relative;
            z-index:1;
          }
          .cta-copy{
            max-width:760px;
            color:#d6fbff;
            margin:18px 0 28px;
            line-height:1.8;
          }
          .cta-grid{
            display:grid;
            grid-template-columns:repeat(2,minmax(0,1fr));
            gap:18px;
          }
          .cta-card{
            background:rgba(4, 32, 66, 0.84);
            border:1px solid rgba(173, 255, 255, 0.16);
            border-radius:20px;
            padding:26px 24px;
            box-shadow:0 26px 60px rgba(3, 18, 53, 0.18);
            min-height:220px;
          }
          .cta-card::before{
            content:"";
            position:absolute;
            top:16px;
            right:16px;
            width:48px;
            height:48px;
            border-radius:14px;
            background:rgba(158, 255, 255, 0.2);
            z-index:0;
          }
          .cta-card > * {
            position:relative;
            z-index:1;
          }
          .cta-label{
            display:inline-flex;
            padding:6px 12px;
            border-radius:9999px;
            font-family:'JetBrains Mono','Courier New',monospace;
            font-size:0.72rem;
            letter-spacing:0.2em;
            text-transform:uppercase;
            color:var(--teal);
            background:rgba(166, 255, 255, 0.18);
            margin-bottom:16px;
          }
          .cta-card h3{
            margin:0 0 14px;
            font-size:1.1rem;
            line-height:1.4;
            color:#f8fbff;
          }
          .cta-card p{
            margin:0;
            color:#dce9ff;
            line-height:1.75;
          }

          .identity-panel{
            display:grid;
            grid-template-columns:1.05fr 0.95fr;
            gap:26px;
            margin-top:28px;
          }
          .identity-summary{
            position:relative;
            border-radius:24px;
            background:rgba(255,255,255,0.06);
            border:1px solid rgba(255,255,255,0.14);
            padding:32px 30px;
            box-shadow:0 28px 70px rgba(2, 18, 45, 0.18);
          }
          .identity-summary::before{
            content:"";
            position:absolute;
            top:-18px;
            left:-18px;
            width:100px;
            height:100px;
            border-radius:28px;
            background:rgba(158,255,255,0.14);
            z-index:0;
          }
          .identity-summary > *{
            position:relative;
            z-index:1;
          }
          .identity-summary p{
            color:#e8f3ff;
            line-height:1.85;
            margin-bottom:20px;
            font-size:1rem;
          }
          .identity-summary strong{
            color:#fff;
          }
          .identity-highlight{
            display:grid;
            gap:18px;
          }
          .identity-card{
            position:relative;
            overflow:hidden;
            border-radius:22px;
            padding:28px 24px;
            background:rgba(6, 24, 58, 0.88);
            border:1px solid rgba(163, 255, 255, 0.12);
            box-shadow:0 24px 60px rgba(1, 16, 44, 0.22);
          }
          .identity-card::before{
            content:"";
            position:absolute;
            top:-18px;
            right:-18px;
            width:92px;
            height:92px;
            border-radius:26px;
            background:rgba(152,255,255,0.16);
            z-index:0;
          }
          .identity-label{
            display:inline-flex;
            align-items:center;
            gap:8px;
            padding:8px 12px;
            border-radius:9999px;
            font-family:'JetBrains Mono','Courier New',monospace;
            font-size:0.72rem;
            letter-spacing:0.18em;
            text-transform:uppercase;
            background:rgba(166,255,255,0.14);
            color:var(--teal);
            margin-bottom:16px;
            position:relative;
            z-index:1;
          }
          .identity-card h3{
            position:relative;
            z-index:1;
            color:#f8fbff;
            font-size:1.1rem;
            margin:0 0 14px;
            line-height:1.4;
          }
          .identity-card p{
            position:relative;
            z-index:1;
            color:#d8efff;
            line-height:1.75;
            margin:0;
          }
          .identity-cta{
            margin-top:24px;
            border-radius:22px;
            padding:28px 26px;
            background:linear-gradient(180deg, rgba(9, 28, 56, 0.9), rgba(7, 20, 41, 0.95));
            border:1px solid rgba(149,255,255,0.12);
          }
          .identity-cta h3{
            margin:0 0 12px;
            color:#f6fdff;
            font-size:1.15rem;
            line-height:1.4;
          }
          .identity-cta p{
            margin:0;
            color:#cdecff;
            line-height:1.75;
          }

          @media (max-width: 800px){
            h1{ font-size:2.2rem; }
            .grid3{ grid-template-columns:1fr; }
            .principles{ grid-template-columns:repeat(2,1fr); }
            .leaders{ grid-template-columns:1fr; }
            .identity-panel{ grid-template-columns:1fr; }
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
          <div className="identity-panel">
            <div className="identity-summary">
              <p>Our mission is to close this gap by connecting underserved young people to structured digital employment and global work opportunities.</p>
              <p>We operate as a professional services organization with a strong social impact mandate, combining commercial discipline with measurable community outcomes.</p>
              <p>We are not a charity. We are a business built for sustainable impact.</p>
              <div className="identity-cta">
                <h3>Corporate performance with social purpose.</h3>
                <p>We deliver disciplined digital services under a model that prioritizes reliability, ethical delivery, and long-term impact.</p>
              </div>
            </div>
            <div className="identity-highlight">
              <div className="identity-card">
                <div className="identity-label">Vision</div>
                <h3>Lead Africa’s next wave of impact-driven digital workforce services.</h3>
                <p>We connect global businesses with world-class AI data and digital services while creating sustainable employment opportunities for underserved youth.</p>
              </div>
              <div className="identity-card">
                <div className="identity-label">Mission</div>
                <h3>Prove that geography is not a limitation to excellence.</h3>
                <p>BDH empowers underserved youth to deliver world-class AI data and digital services, creating value for global businesses while transforming lives and communities.</p>
              </div>
              <div className="identity-card">
                <div className="identity-label">Sustainable Impact Model</div>
                <h3>Revenue-driven delivery that fuels growth and social value.</h3>
                <p>Income from AI data services and digital operations supports business expansion, workforce development, and the long-term mission of Baraka Children’s Home.</p>
              </div>
              <div className="identity-card">
                <div className="identity-label">Youth Employment</div>
                <h3>Structured opportunities for meaningful digital work.</h3>
                <p>Through onboarding, mentorship, and practical project experience, we help young people access purposeful work, professional confidence, and economic independence.</p>
              </div>
              <div className="identity-card">
                <div className="identity-label">Future-Ready Skills</div>
                <h3>Developing talent for AI, data operations, and digital excellence.</h3>
                <p>Team members gain transferable skills in annotation, QA, data management, communication, and problem-solving for long-term career readiness.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="section-tag">Core Principles</div>
          <h2>Our operating values shape every engagement.</h2>
          <div className="principles">
            <div className="principle">
              <span className="icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 8C6 6.89543 6.89543 6 8 6H10C11.1046 6 12 6.89543 12 8V10C12 11.1046 11.1046 12 10 12H8C6.89543 12 6 11.1046 6 10V8Z" fill="currentColor"/>
                  <path d="M12 12L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16 8C16 6.89543 16.8954 6 18 6H20C21.1046 6 22 6.89543 22 8V10C22 11.1046 21.1046 12 20 12H18C16.8954 12 16 11.1046 16 10V8Z" fill="currentColor"/>
                  <path d="M8 12L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
              <h4>Teamwork</h4>
              <p>We believe strong results come from collaboration, shared responsibility, and mutual support.</p>
            </div>
            <div className="principle">
              <span className="icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3L13.9021 8.69786L19.5106 9.23528L15.2553 12.8021L16.3371 18.4647L12 15.8L7.66286 18.4647L8.74469 12.8021L4.48934 9.23528L10.0979 8.69786L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <h4>Dignity</h4>
              <p>We create opportunities that respect people, value their contribution, and promote self-worth.</p>
            </div>
            <div className="principle">
              <span className="icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3L4 6V11C4 16.5 7.5 20.75 12 22C16.5 20.75 20 16.5 20 11V6L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
              <h4>Accountability</h4>
              <p>We take ownership of our work, our standards, and the impact we create.</p>
            </div>
            <div className="principle">
              <span className="icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 17L10 3L14 14L20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
              <h4>Excellence</h4>
              <p>We are committed to delivering reliable, high-quality work that meets professional standards.</p>
            </div>
            <div className="principle">
              <span className="icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 17L9 12L13 16L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 21H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
              <h4>Opportunity</h4>
              <p>We exist to open pathways for growth, employment, and long-term transformation.</p>
            </div>
            <div className="principle">
              <span className="icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 7L14.5 14.5L7 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <h4>Integrity</h4>
              <p>We maintain transparency, ethical decisions, and consistency across every team, partner, and project.</p>
            </div>
          </div>
          <div className="principles-cta">
            <div className="principles-cta-card">
              <div className="cta-badge">Strategic Value</div>
              <h3>Drive business outcomes with a partner built on professional impact.</h3>
              <p>Our model blends enterprise-grade delivery with purposeful community investment, so every engagement supports growth and social return.</p>
            </div>
            <div className="principles-cta-card">
              <div className="cta-badge">Future Ready</div>
              <h3>Turn digital transformation into sustainable opportunity.</h3>
              <p>From AI data operations to quality assurance, we deliver services that scale with your goals while strengthening local talent and resilience.</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="section-tag">Get Involved</div>
          <h2>Partner with Baraka Digital Hub to build digital solutions that create measurable impact.</h2>
          <p className="cta-copy">Every engagement is designed to support meaningful work, skill growth, and sustainable community outcomes. Explore how our hub combines corporate discipline with social impact.</p>
          <div className="cta-grid">
            <div className="cta-card">
              <div className="cta-label">Corporate Services</div>
              <h3>Reliable delivery for enterprise AI, annotation, and data operations.</h3>
              <p>We set structured workflows, strong quality controls, and secure handling protocols so global clients can scale with confidence.</p>
            </div>
            <div className="cta-card">
              <div className="cta-label">Impact Partnership</div>
              <h3>Align procurement with purpose through a professionally run social enterprise.</h3>
              <p>Partnering with Baraka Digital Hub means your project delivers measurable business value and real opportunity for underserved youth in Nairobi.</p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default About;
