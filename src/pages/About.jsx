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
              radial-gradient(circle at 15% 10%, rgba(14,165,233,0.12), transparent 32%),
              radial-gradient(circle at 85% 18%, rgba(56,189,248,0.08), transparent 28%),
              linear-gradient(180deg, #020617 0%, #07111f 45%, #040b16 100%);
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
            width:100%;
            max-width:1400px;
            margin:0 auto;
            padding:0 4vw;
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
            width:100%;
            max-width:none;
            padding:150px 0 70px;
            border-radius:0 0 32px 32px;
            border-bottom:1px solid var(--line);
            position:relative;
            text-align:center;
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
            justify-content:center;
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
            font-size:clamp(2.8rem, 7vw, 4.4rem);
            font-weight:800;
            line-height:1.02;
            letter-spacing:-0.04em;
            text-align:center;
            background:linear-gradient(135deg,#ffffff 0%, #d6f5ff 45%, #7dd3fc 100%);
            -webkit-background-clip:text;
            background-clip:text;
            -webkit-text-fill-color:transparent;
            max-width:none;
          }
          .hero p{
            margin:24px auto 0;
            font-size:1.08rem;
            color:#eaf6ff;
            max-width:980px;
            line-height:1.9;
            text-align:center;
          }
          .hero-badges{
            display:flex;
            flex-wrap:wrap;
            justify-content:center;
            gap:10px;
            margin-top:28px;
          }
          .hero-badge{
            display:inline-flex;
            align-items:center;
            gap:8px;
            padding:10px 14px;
            border-radius:999px;
            background:linear-gradient(135deg, rgba(15,23,42,0.92), rgba(8,47,73,0.92));
            border:1px solid rgba(125,207,255,0.18);
            color:#eaf7ff;
            font-size:0.78rem;
            letter-spacing:0.18em;
            text-transform:uppercase;
            font-family:'JetBrains Mono','Courier New',monospace;
            box-shadow:0 10px 24px rgba(8,15,35,0.25);
          }
          .hero-metrics{
            display:grid;
            grid-template-columns:repeat(3, minmax(0, 1fr));
            gap:18px;
            margin-top:32px;
          }
          .metric-card{
            border-radius:24px;
            padding:22px;
            background:
              linear-gradient(180deg, rgba(7, 20, 41, 0.98), rgba(3, 12, 27, 0.99));
            border:1px solid rgba(125,207,255,0.16);
            box-shadow:
              0 18px 36px rgba(2, 6, 23, 0.28),
              inset 0 1px 0 rgba(255,255,255,0.04);
            text-align:left;
          }
          .metric-card strong{
            display:block;
            font-size:1.55rem;
            color:#fff;
            margin-bottom:6px;
            letter-spacing:-0.03em;
          }
          .metric-card span{
            color:#d7efff;
            font-size:0.95rem;
            line-height:1.6;
          }

          section{
            padding:78px 0;
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
            text-align:center;
          }
          h2{
            font-size:clamp(1.45rem, 4vw, 2.25rem);
            font-weight:700;
            color:#fff;
            margin:0 auto 36px;
            letter-spacing:-0.02em;
            text-align:center;
            max-width:980px;
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

          .story-grid{
            display:grid;
            grid-template-columns:1.1fr 0.9fr;
            gap:22px;
            align-items:start;
          }
          .story-grid::before{
            content:"";
            position:absolute;
            inset:0;
            border-radius:28px;
            background:linear-gradient(135deg, rgba(56,189,248,0.06), transparent 40%);
            pointer-events:none;
          }
          .story-card,
          .story-stack > div{
            border-radius:24px;
            padding:24px;
            background:
              linear-gradient(180deg, rgba(7, 20, 42, 0.96), rgba(4, 12, 27, 0.98));
            border:1px solid rgba(125,207,255,0.14);
            box-shadow:
              0 14px 30px rgba(2, 6, 23, 0.35),
              inset 0 1px 0 rgba(255,255,255,0.04);
            transition:transform .2s ease, border-color .2s ease;
          }
          .story-card:hover,
          .story-stack > div:hover{
            transform:translateY(-2px);
            border-color:rgba(125,207,255,0.26);
          }
          .story-card h3,
          .story-stack h3{
            color:#f7fbff;
            font-size:1.12rem;
            margin-bottom:10px;
            letter-spacing:-0.02em;
          }
          .story-card p,
          .story-stack p{
            color:#d9efff;
            font-size:0.98rem;
            line-height:1.8;
            margin-bottom:14px;
          }
          .story-list{
            display:grid;
            gap:10px;
            margin-top:12px;
          }
          .story-list li{
            list-style:none;
            display:flex;
            gap:10px;
            color:#e8f6ff;
            font-size:0.95rem;
            line-height:1.7;
          }
          .story-list li::before{
            content:"▹";
            color:#7dd3fc;
            font-weight:700;
          }
          .story-note{
            margin-top:10px;
            padding:12px 14px;
            border-radius:16px;
            background:linear-gradient(135deg, rgba(125,211,252,0.12), rgba(14,165,233,0.08));
            border:1px solid rgba(125,207,255,0.18);
            color:#eff8ff;
            font-size:0.92rem;
          }
          .origin-body{
            max-width:100%;
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
            border-radius:22px;
            padding:28px 22px;
            background:linear-gradient(180deg, rgba(8, 24, 54, 0.96), rgba(4, 14, 30, 0.98));
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
            font-size:1.04rem;
            margin-bottom:10px;
            font-weight:700;
            z-index:1;
            letter-spacing:-0.02em;
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
            background:linear-gradient(135deg, rgba(7, 22, 50, 0.98), rgba(7, 33, 68, 0.95));
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
            position:relative;
            display:grid;
            grid-template-columns:1fr;
            gap:24px;
            background:
              linear-gradient(145deg, rgba(8, 23, 47, 0.98), rgba(4, 14, 29, 0.98));
            border:1px solid rgba(125, 207, 255, 0.16);
            border-radius:28px;
            padding:42px 38px;
            margin-bottom:24px;
          }
          .cta-section::before,
          .cta-section::after{
            display:none;
          }
          .cta-section > * {
            position:relative;
            z-index:1;
          }
          .cta-copy{
            max-width:100%;
            color:#d6fbff;
            margin:16px 0 24px;
            line-height:1.9;
            font-size:1rem;
          }
          .cta-highlight{
            display:grid;
            grid-template-columns:1.15fr 0.85fr;
            gap:24px;
            align-items:stretch;
          }
          .cta-main{
            background:rgba(9, 32, 64, 0.96);
            border:1px solid rgba(125, 207, 255, 0.12);
            border-radius:24px;
            padding:32px 30px 32px;
            box-shadow:0 24px 64px rgba(0, 0, 0, 0.14);
            display:flex;
            flex-direction:column;
            gap:20px;
          }
          .cta-label{
            display:inline-flex;
            align-items:center;
            gap:8px;
            color:#9be8ff;
            font-family:'JetBrains Mono','Courier New',monospace;
            font-size:0.72rem;
            letter-spacing:0.18em;
            text-transform:uppercase;
          }
          .cta-main h3{
            margin:0;
            color:#eff7ff;
            font-size:1.32rem;
            line-height:1.35;
            text-align:left;
            letter-spacing:-0.02em;
          }
          .cta-main p{
            margin:0;
            color:#d3f2ff;
            line-height:1.8;
          }
          .cta-main ul{
            list-style:none;
            padding:0;
            margin:0;
            display:grid;
            gap:14px;
          }
          .cta-main li{
            display:flex;
            align-items:flex-start;
            gap:12px;
            color:#d6eefc;
            line-height:1.8;
          }
          .cta-main li::before{
            content:"•";
            color:var(--teal);
            font-size:1rem;
            line-height:1;
            margin-top:4px;
          }
          .cta-actions{
            display:flex;
            flex-wrap:wrap;
            gap:14px;
          }
          .cta-actions button,
          .cta-actions a{
            display:inline-flex;
            align-items:center;
            justify-content:center;
            gap:10px;
            border-radius:14px;
            padding:14px 18px;
            font-weight:700;
            font-size:0.95rem;
            text-decoration:none;
            border:none;
            cursor:pointer;
            transition:transform .2s,box-shadow .2s,background .2s;
            min-height:48px;
          }
          .cta-actions button{
            background:linear-gradient(135deg, #1d4ed8 0%, #38bdf8 100%);
            color:#fff;
            border:1px solid rgba(125, 211, 252, 0.25);
            box-shadow:0 18px 32px rgba(56, 189, 248, 0.18);
          }
          .cta-actions a{
            background:rgba(255,255,255,0.08);
            color:#eff7ff;
            border:1px solid rgba(148, 163, 184, 0.24);
          }
          .cta-actions button:hover,
          .cta-actions a:hover{
            transform:translateY(-1px);
            box-shadow:0 18px 34px rgba(13, 76, 130, 0.18);
          }
          .cta-support{
            background:rgba(3, 14, 32, 0.96);
            border:1px solid rgba(125, 207, 255, 0.12);
            border-radius:22px;
            padding:28px 26px;
            display:grid;
            gap:18px;
          }
          .cta-support .stat{
            display:flex;
            gap:14px;
            align-items:flex-start;
          }
          .cta-support .stat span{
            display:inline-flex;
            min-width:54px;
            height:54px;
            align-items:center;
            justify-content:center;
            border-radius:18px;
            background:linear-gradient(135deg, rgba(125,211,252,0.28), rgba(56,189,248,0.18));
            color:#e6fbff;
            font-weight:700;
            font-size:1.02rem;
            border:1px solid rgba(125,211,252,0.18);
          }
          .cta-support .stat p{
            margin:0;
            color:#d1ecff;
            line-height:1.75;
            font-size:0.95rem;
          }
          .cta-support .stat:hover{
            transform:translateY(-1px);
          }
          .cta-chip-row{
            display:flex;
            flex-wrap:wrap;
            gap:10px;
          }
          .cta-chip{
            display:inline-flex;
            align-items:center;
            border-radius:999px;
            padding:8px 12px;
            background:rgba(125, 211, 252, 0.12);
            border:1px solid rgba(125, 211, 252, 0.18);
            color:#d6f3ff;
            font-family:'JetBrains Mono','Courier New',monospace;
            font-size:0.72rem;
            letter-spacing:0.18em;
            text-transform:uppercase;
          }
          .cta-note{
            margin-top:20px;
            padding:18px 20px;
            border-radius:18px;
            background:rgba(152, 255, 255, 0.08);
            border:1px dashed rgba(173, 255, 255, 0.18);
            color:#e4fbff;
            font-size:0.95rem;
            line-height:1.7;
          }

          .identity-panel{
            display:grid;
            grid-template-columns:minmax(320px, 1fr) minmax(360px, 1.15fr);
            gap:26px;
            margin-top:28px;
            align-items:start;
          }
          .identity-summary{
            position:relative;
            border-radius:26px;
            background:linear-gradient(180deg, rgba(8, 22, 46, 0.95), rgba(4, 12, 27, 0.98));
            border:1px solid rgba(125,207,255,0.14);
            padding:34px 32px;
            box-shadow:0 28px 72px rgba(2, 18, 45, 0.18);
          }
          .identity-summary::before{
            content:"";
            position:absolute;
            top:-20px;
            left:-20px;
            width:112px;
            height:112px;
            border-radius:30px;
            background:rgba(158,255,255,0.16);
            z-index:0;
          }
          .identity-summary > *{
            position:relative;
            z-index:1;
          }
          .identity-summary h3{
            margin-top:0;
            color:#f8fbff;
            font-size:1.35rem;
            line-height:1.4;
            margin-bottom:18px;
          }
          .identity-summary p{
            color:#e8f3ff;
            line-height:1.85;
            margin-bottom:20px;
            font-size:1rem;
          }
          .identity-summary ul{
            list-style:none;
            padding:0;
            margin:0;
            display:grid;
            gap:12px;
          }
          .identity-summary li{
            display:flex;
            align-items:flex-start;
            gap:12px;
            color:#d9f0ff;
            line-height:1.8;
          }
          .identity-summary li::before{
            content:"•";
            color:#7de4ff;
            font-size:1.2rem;
            line-height:1;
            margin-top:4px;
          }
          .identity-details{
            display:grid;
            gap:18px;
          }
          .identity-card-grid{
            display:grid;
            grid-template-columns:repeat(2,minmax(0,1fr));
            gap:18px;
          }
          .identity-card{
            position:relative;
            overflow:hidden;
            border-radius:22px;
            padding:28px 24px;
            background:linear-gradient(180deg, rgba(7, 21, 46, 0.95), rgba(4, 12, 27, 0.98));
            border:1px solid rgba(163, 255, 255, 0.14);
            box-shadow:0 24px 60px rgba(1, 16, 44, 0.22);
            min-height:180px;
          }
          .identity-highlight{
            border-radius:22px;
            padding:28px 24px;
            background:linear-gradient(180deg, rgba(10, 32, 64, 0.94), rgba(7, 21, 43, 0.98));
            border:1px solid rgba(125, 207, 255, 0.16);
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
            margin:0 0 12px;
            line-height:1.45;
            letter-spacing:-0.02em;
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
            padding:24px 26px;
            background:linear-gradient(180deg, rgba(9, 28, 56, 0.95), rgba(7, 20, 41, 0.98));
            border:1px solid rgba(149,255,255,0.12);
          }
          .identity-cta h3{
            margin:0 0 12px;
            color:#f6fdff;
            font-size:1.12rem;
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
            .identity-card-grid{ grid-template-columns:1fr; }
            .story-grid{ grid-template-columns:1fr; }
            .hero-metrics{ grid-template-columns:1fr; }
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
          <p>Each engagement is structured to generate dual impact: fair income for underserved talent, and long-term support for the children and community around Baraka Children’s Home.</p>
          <div className="hero-badges">
            <span className="hero-badge">AI Data Operations</span>
            <span className="hero-badge">BPO & QA</span>
            <span className="hero-badge">Social Impact</span>
            <span className="hero-badge">Global Delivery</span>
          </div>
          <div className="hero-metrics">
            <div className="metric-card"><strong>100+</strong><span>Young professionals trained in digital operations, QA, and AI data workflows.</span></div>
            <div className="metric-card"><strong>4x</strong><span>Faster onboarding through documented SOPs, structured systems, and quality oversight.</span></div>
            <div className="metric-card"><strong>24/7</strong><span>Delivery support designed for global clients that need reliable, consistent execution.</span></div>
          </div>
        </section>

        <section>
          <div className="section-tag">How We Started</div>
          <h2>A community-led idea evolved into a professional digital services company.</h2>
          <div className="story-grid">
            <article className="story-card">
              <h3>From care to opportunity</h3>
              <p>Baraka Children’s Home has served the Kayole community since 2006. As the children under care grew older, the need for sustainable work pathways became clear. What began as informal support for remote work turned into a structured model for fair, professional digital employment.</p>
              <p>We saw that individual placements could create impact, but a central hub could create consistency, accountability, and scalable growth for both talent and clients. That insight became the foundation of Baraka Digital Hub.</p>
              <div className="story-note">Today, the model combines commercial discipline with measurable social return.</div>
            </article>
            <aside className="story-stack">
              <div>
                <h3>Why this model works</h3>
                <ul className="story-list">
                  <li>Shared infrastructure for training, communication, and delivery.</li>
                  <li>Operational oversight and QA to meet professional client standards.</li>
                  <li>Structured pathways that create employment and confidence for underserved youth.</li>
                </ul>
              </div>
              <div>
                <h3>What changed</h3>
                <p>We moved from one-off freelance support to a scalable, governance-ready digital operations partner. The result is a business that is both commercially capable and community-centered.</p>
              </div>
            </aside>
          </div>
        </section>

        <section>
          <div className="section-tag">Our Identity</div>
          <h2>Baraka Digital Hub is built on a core belief: talent is universal, but opportunity is not.</h2>
          <div className="identity-panel">
            <div className="identity-summary">
              <h3>Corporate focus, community purpose.</h3>
              <p>Our mission is to close this gap by connecting underserved young people to structured digital employment and global work opportunities.</p>
              <p>We operate as a professional services organization with a strong social impact mandate, combining commercial discipline with measurable community outcomes.</p>
              <p>We are not a charity. We are a business built for sustainable impact.</p>
              <ul>
                <li>Structured digital employment for underserved talent.</li>
                <li>Quality-driven delivery that meets client expectations.</li>
                <li>Impact that is measurable, sustainable, and scalable.</li>
              </ul>
              <div className="identity-cta">
                <h3>Corporate performance with social purpose.</h3>
                <p>We deliver disciplined digital services under a model that prioritizes reliability, ethical delivery, and long-term impact.</p>
              </div>
            </div>
            <div className="identity-details">
              <div className="identity-card-grid">
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
              </div>
              <div className="identity-highlight">
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
          <div className="section-tag">Strategic Partner</div>
          <h2>Partner with Baraka Digital Hub for disciplined delivery, measurable quality, and real community impact.</h2>
          <p className="cta-copy">Our delivery model is built for organizations that need reliable digital operations, clear governance, and a social-impact partner that can move from pilot to production without friction.</p>
          <div className="cta-highlight">
            <div className="cta-main">
              <div className="cta-label">Delivery model</div>
              <h3>Launch a pilot, validate the workflow, and scale with confidence.</h3>
              <p>Our team combines structured onboarding, QA, and reporting so your programs can move from setup to production with clear ownership and measurable output.</p>
              <ul>
                <li>Secure workflows, documented SOPs, and quality checkpoints for every engagement.</li>
                <li>Fast onboarding for AI training, transcription, annotation, and BPO-style operations.</li>
                <li>Executive-ready reporting so teams can track progress, quality, and delivery milestones.</li>
              </ul>
              <div className="cta-actions">
                <button type="button" onClick={() => navigate("pilot")}>Start a Pilot</button>
                <button type="button" onClick={() => navigate("contact")}>Book a Discovery Call</button>
                <a href="/services" onClick={(e) => { e.preventDefault(); navigate("services"); }}>Review Delivery Stack</a>
              </div>
              <div className="cta-chip-row">
                <span className="cta-chip">QA-led</span>
                <span className="cta-chip">Secure Ops</span>
                <span className="cta-chip">Impact model</span>
              </div>
              <div className="cta-note">Built for AI data work, digital operations, and partner teams that need dependable execution.</div>
            </div>
            <div className="cta-support">
              <div className="stat">
                <span>01</span>
                <p>Rapid setup with documented workflows, team onboarding, and clear delivery checkpoints.</p>
              </div>
              <div className="stat">
                <span>02</span>
                <p>Structured quality assurance that keeps output consistent, reviewable, and production-ready.</p>
              </div>
              <div className="stat">
                <span>03</span>
                <p>Measured community impact, with talent development and long-term employment pathways built in.</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default About;
