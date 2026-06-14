import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Impact() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let W = 0;
    let H = 0;
    let nodes = [];
    let animationFrame = 0;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      init();
    };

    const init = () => {
      nodes = [];
      const count = Math.floor((W * H) / 18000);
      for (let i = 0; i < count; i += 1) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 1.5 + 0.5,
          pulse: Math.random() * Math.PI * 2,
          bright: Math.random() > 0.85,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      const gridSize = 48;
      for (let x = gridSize; x < W; x += gridSize) {
        for (let y = gridSize; y < H; y += gridSize) {
          ctx.beginPath();
          ctx.arc(x, y, 0.8, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(46,158,68,0.08)";
          ctx.fill();
        }
      }

      const t = Date.now() * 0.001;

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.12;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(46,158,68,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;

        const pulse = Math.sin(t * 1.2 + n.pulse) * 0.3 + 0.7;
        const alpha = n.bright ? 0.8 * pulse : 0.25 * pulse;
        const color = n.bright ? `rgba(46,158,68,${alpha})` : `rgba(27,80,180,${alpha})`;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * (n.bright ? 1.5 : 1), 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <Helmet bodyAttributes={{ class: "impact-page" }}>
        <title>Social Impact | Baraka Digital Hub</title>
        <meta
          name="description"
          content="We convert commercial digital work into a consistent support system for youth and Baraka Children’s Home."
        />
        <style>{`
          :root {
            --navy: #031627;
            --dark-navy: #020e19;
            --deepest: #01050d;
            --green: #2e9e44;
            --teal: #4dd7ff;
            --amber: #7dcfff;
            --text: #f7fbff;
            --text-dim: #bfd4ee;
            --line: rgba(255,255,255,0.16);
          }

          * { margin: 0; padding: 0; box-sizing: border-box; }

          html, body, #root {
            background: #041528 !important;
            margin: 0;
            padding: 0;
          }

          body,
          body.impact-page {
            background: #041528 !important;
            font-family: 'Inter', sans-serif;
            color: #f3f7ff !important;
            min-height: 100vh;
            overflow-x: hidden;
            position: relative;
          }

          .impact-page,
          .impact-page .page,
          .impact-page .impact-bg,
          .impact-page .tag,
          .impact-page h1,
          .impact-page h2,
          .impact-page h3,
          .impact-page h4,
          .impact-page p,
          .impact-page span,
          .impact-page .hero-sub,
          .impact-page .stat-label,
          .impact-page .section-sub,
          .impact-page .origin-text p,
          .impact-page .impact-card h3,
          .impact-page .impact-card p,
          .impact-page .alloc-desc,
          .impact-page .cta-block p,
          .impact-page .pillar span,
          .impact-page .btn-ghost {
            color: #f3f7ff !important;
          }

          body.impact-page .impact-page {
            background: #041528 !important;
          }

          body.impact-page .impact-card {
            background: rgba(255,255,255,0.08) !important;
          }

          .impact-page {
            position: relative;
            min-height: 100vh;
            background: #041528 !important;
          }

          .impact-bg {
            position: fixed;
            inset: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            pointer-events: none;
          }

          .page {
            position: relative;
            z-index: 1;
            max-width: 1160px;
            width: 100%;
            margin: 0 auto;
            padding: 72px 40px 100px;
          }

          .tag {
            display: inline-block;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: var(--green);
            border: 1px solid rgba(46, 158, 68, 0.4);
            border-radius: 20px;
            padding: 5px 14px;
            margin-bottom: 28px;
          }

          h1 {
            font-size: clamp(32px, 5vw, 52px);
            font-weight: 700;
            line-height: 1.15;
            color: #ffffff;
            max-width: 700px;
            margin-bottom: 20px;
          }

          h1 span {
            color: var(--green);
          }

          .hero-sub {
            font-size: 17px;
            color: var(--text);
            line-height: 1.7;
            max-width: 560px;
            margin-bottom: 48px;
          }

          .cta-row {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            margin-bottom: 80px;
          }

          .impact-page .button.primary {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: linear-gradient(135deg, #0f4fad, #118ab2);
            color: white;
            border: none;
            border-radius: 16px;
            padding: 14px 26px;
            font-size: 0.98rem;
            font-weight: 700;
            text-decoration: none;
            box-shadow: 0 18px 42px rgba(15,55,100,0.2);
            transition: transform .22s, box-shadow .22s, background .22s;
            cursor: pointer;
            font-family: inherit;
          }

          .impact-page .button.primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 20px 42px rgba(15,55,100,0.28);
          }

          .impact-page .button.secondary {
            background: rgba(255,255,255,0.08);
            color: #e2e8f0;
            border: 1px solid rgba(255,255,255,0.14);
            border-radius: 16px;
            padding: 14px 26px;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-size: 0.98rem;
            font-weight: 700;
            transition: transform .22s, box-shadow .22s, background .22s;
            cursor: pointer;
            font-family: inherit;
          }

          .impact-page .button.secondary:hover {
            transform: translateY(-2px);
            background: rgba(255,255,255,0.12);
          }

          .stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
            margin-bottom: 80px;
          }

          .stat-card {
            background: rgba(255,255,255,0.08);
            border: 1px solid rgba(255,255,255,0.16);
            border-radius: 12px;
            padding: 28px 24px;
            position: relative;
            overflow: hidden;
          }

          .stat-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 2px;
            background: var(--green);
            opacity: 0.6;
          }

          .stat-num {
            font-size: 36px;
            font-weight: 700;
            color: #ffffff;
            line-height: 1;
            margin-bottom: 8px;
          }

          .stat-num span { color: var(--green); }

          .stat-label {
            font-size: 13px;
            color: #f3f7ff;
            line-height: 1.5;
          }

          .section-label {
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: var(--green);
            margin-bottom: 12px;
          }

          h2 {
            font-size: clamp(24px, 3.5vw, 36px);
            font-weight: 700;
            color: #ffffff;
            line-height: 1.25;
            margin-bottom: 16px;
          }

          .section-sub {
            font-size: 15px;
            color: #dde8ff;
            line-height: 1.7;
            max-width: 520px;
            margin-bottom: 48px;
          }

          .origin-block {
            margin-bottom: 80px;
          }

          .origin-card {
            background: rgba(2, 18, 38, 0.90);
            border: 1px solid rgba(46, 158, 68, 0.30);
            border-radius: 14px;
            padding: 40px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: start;
          }

          .origin-text p {
            font-size: 15px;
            color: var(--text);
            line-height: 1.8;
            margin-bottom: 16px;
          }

          .origin-text p:last-child { margin-bottom: 0; }

          .origin-bridge {
            font-size: 17px;
            font-weight: 600;
            color: var(--green);
            border-top: 1px solid rgba(46, 158, 68, 0.25);
            padding-top: 20px;
            margin-top: 4px;
          }

          .origin-pillars {
            display: flex;
            flex-direction: column;
            gap: 14px;
          }

          .pillar {
            background: rgba(255,255,255,0.06);
            border: 1px solid rgba(255,255,255,0.12);
            border-radius: 10px;
            padding: 18px 20px;
            display: flex;
            align-items: center;
            gap: 14px;
          }

          .pillar-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--green);
            flex-shrink: 0;
          }

          .pillar span {
            font-size: 14px;
            color: var(--text);
            font-weight: 500;
          }

          .dual-block {
            margin-bottom: 80px;
          }

          .impact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            margin-bottom: 24px;
          }

          .impact-card {
            background: rgba(255,255,255,0.08);
            border: 1px solid rgba(255,255,255,0.14);
            border-radius: 12px;
            padding: 32px 28px;
            position: relative;
          }

          .impact-num {
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: var(--green);
            margin-bottom: 16px;
          }

          .impact-card h3 {
            font-size: 16px;
            font-weight: 600;
            color: var(--text);
            margin-bottom: 10px;
            line-height: 1.4;
          }

          .impact-card p {
            font-size: 14px;
            color: #f4f8ff;
            line-height: 1.7;
          }

          .invoice-callout {
            background: rgba(46,158,68,0.08);
            border: 1px solid rgba(46,158,68,0.25);
            border-radius: 10px;
            padding: 20px 28px;
            text-align: center;
            font-size: 15px;
            font-weight: 500;
            color: #85d49a;
            letter-spacing: 0.01em;
          }

          .alloc-block { margin-bottom: 80px; }

          .alloc-bars { display: flex; flex-direction: column; gap: 20px; }

          .alloc-row {
            display: grid;
            grid-template-columns: 100px 1fr 80px;
            align-items: center;
            gap: 20px;
          }

          .alloc-pct {
            font-size: 26px;
            font-weight: 700;
            color: #ffffff;
            text-align: right;
          }

          .alloc-track {
            background: rgba(255,255,255,0.07);
            border-radius: 4px;
            height: 8px;
            overflow: hidden;
          }

          .alloc-fill {
            height: 100%;
            border-radius: 4px;
            background: var(--green);
          }

          .alloc-fill.mid { background: #1b6c8a; }
          .alloc-fill.low { background: #1b3a6b; border: 1px solid rgba(46,158,68,0.5); }

          .alloc-desc {
            font-size: 13px;
            color: #f3f7ff;
            line-height: 1.5;
          }

          .ripple-block { margin-bottom: 80px; }

          .ripple-chain { display: flex; flex-direction: column; gap: 0; }

          .ripple-step { display: flex; gap: 24px; align-items: stretch; }

          .ripple-connector {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-shrink: 0;
            width: 20px;
          }

          .ripple-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: var(--green);
            border: 2px solid #0b1f3a;
            outline: 2px solid rgba(46,158,68,0.3);
            flex-shrink: 0;
          }

          .ripple-line {
            width: 2px;
            flex: 1;
            background: rgba(46,158,68,0.2);
            min-height: 32px;
          }

          .ripple-content { padding: 0 0 32px; }

          .ripple-content p {
            font-size: 15px;
            color: #f3f7ff;
            line-height: 1.6;
            padding-top: 0;
            margin-top: -2px;
          }

          .cta-block {
            background: rgba(2,16,35,0.92);
            border: 1px solid rgba(46,158,68,0.30);
            border-radius: 16px;
            padding: 56px 48px;
            text-align: center;
          }

          .cta-block h2 { margin-bottom: 14px; }

          .cta-block p {
            font-size: 16px;
            color: var(--text);
            margin-bottom: 36px;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
          }

          .cta-block .cta-row {
            justify-content: center;
            margin-bottom: 0;
          }

          @media (max-width: 640px) {
            .stats-grid { grid-template-columns: 1fr; }
            .origin-card { grid-template-columns: 1fr; }
            .impact-grid { grid-template-columns: 1fr; }
            .alloc-row { grid-template-columns: 70px 1fr 60px; gap: 12px; }
            .cta-block { padding: 40px 24px; }
            .page { padding: 60px 24px 80px; }
          }
        `}</style>
      </Helmet>

      <div className="impact-page">
        <canvas ref={canvasRef} className="impact-bg" />

        <div className="page">
          <div className="tag">Social Impact</div>
          <h1>
            From charity to dignity.<br />From dependency to <span>opportunity.</span>
          </h1>
          <p className="hero-sub">
            We convert commercial digital work into a consistent support system for youth and Baraka Children’s Home. Every engagement is designed for measurable outcomes, reliable delivery, and enterprise accountability.
          </p>
          <div className="cta-row">
            <Link className="button primary" to="/services">
              Explore services
            </Link>
            <Link className="button secondary" to="/contact#send-message">
              Schedule a briefing
            </Link>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-num">
                <span>67%</span>
              </div>
              <div className="stat-label">of youth in informal settlements are unemployed</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">
                1 in <span>3</span>
              </div>
              <div className="stat-label">young people lack formal employment</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">
                <span>&lt;5%</span>
              </div>
              <div className="stat-label">of Baraka children pursuing sustainable careers</div>
            </div>
          </div>

          <div className="origin-block">
            <div className="section-label">Our Origin</div>
            <h2>Why We Exist</h2>
            <p className="section-sub">
              Baraka Digital Hub was born out of Baraka Children’s Home — a place of refuge for vulnerable children in Kayole, Nairobi for nearly two decades.
            </p>

            <div className="origin-card">
              <div className="origin-text">
                <p>
                  As those children grew, a difficult gap emerged: opportunity, employment pathways, and professional experience were missing for youth leaving care.
                </p>
                <p>Baraka Digital Hub was created to close that gap.</p>
                <div className="origin-bridge">It is the bridge between care and independence.</div>
              </div>
              <div className="origin-pillars">
                <div className="pillar">
                  <div className="pillar-dot" />
                  <span>Structured talent development</span>
                </div>
                <div className="pillar">
                  <div className="pillar-dot" />
                  <span>Measured quality and compliance</span>
                </div>
                <div className="pillar">
                  <div className="pillar-dot" />
                  <span>Sustainable revenue for community support</span>
                </div>
                <div className="pillar" style={{ borderColor: "rgba(46,158,68,0.25)", background: "rgba(46,158,68,0.06)" }}>
                  <div className="pillar-dot" />
                  <span style={{ color: "#85d49a" }}>Enterprise-ready impact</span>
                </div>
              </div>
            </div>
          </div>

          <div className="dual-block">
            <div className="section-label">The Dual Impact Model</div>
            <h2>Two Outcomes. One Engagement.</h2>
            <p className="section-sub">
              Every client engagement generates two measurable outcomes: professional delivery for clients and sustainable opportunity for youth and Baraka Children’s Home.
            </p>

            <div className="impact-grid">
              <div className="impact-card">
                <div className="impact-num">Impact 01</div>
                <h3>Youth earn. Youth grow.</h3>
                <p>
                  Youth gain access to real digital work, earning fair income and building professional experience that compounds over time.
                </p>
              </div>
              <div className="impact-card">
                <div className="impact-num">Impact 02</div>
                <h3>The Home stays supported.</h3>
                <p>
                  Baraka Children’s Home receives consistent funding for education, food, and essential care — directly from client-funded operations.
                </p>
              </div>
            </div>

            <div className="invoice-callout">Your invoice is also a school fees receipt.</div>
          </div>

          <div className="alloc-block">
            <div className="section-label">How Every Dollar Is Used</div>
            <h2>Transparent Allocation</h2>
            <p className="section-sub">
              Every client payment flows through a clear, purpose-built model designed for dignity and long-term sustainability.
            </p>

            <div className="alloc-bars">
              <div className="alloc-row">
                <div className="alloc-pct">70–80%</div>
                <div>
                  <div className="alloc-track">
                    <div className="alloc-fill" style={{ width: "75%" }} />
                  </div>
                  <div className="alloc-desc" style={{ marginTop: "8px" }}>
                    Youth earnings — building independence and dignity
                  </div>
                </div>
              </div>
              <div className="alloc-row">
                <div className="alloc-pct">10–15%</div>
                <div>
                  <div className="alloc-track">
                    <div className="alloc-fill mid" style={{ width: "15%" }} />
                  </div>
                  <div className="alloc-desc" style={{ marginTop: "8px" }}>
                    Operations — internet, training, QA, infrastructure
                  </div>
                </div>
              </div>
              <div className="alloc-row">
                <div className="alloc-pct">5–10%</div>
                <div>
                  <div className="alloc-track">
                    <div className="alloc-fill low" style={{ width: "8%" }} />
                  </div>
                  <div className="alloc-desc" style={{ marginTop: "8px" }}>
                    Baraka Children’s Home — school fees, meals, care
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ripple-block">
            <div className="section-label">The Ripple Effect</div>
            <h2>Structured Economic Inclusion</h2>
            <p className="section-sub">
              This is not charity. This is a self-reinforcing system where each layer sustains the next.
            </p>

            <div className="ripple-chain">
              <div className="ripple-step">
                <div className="ripple-connector">
                  <div className="ripple-dot" />
                  <div className="ripple-line" />
                </div>
                <div className="ripple-content">
                  <p>Client work generates income for youth.</p>
                </div>
              </div>
              <div className="ripple-step">
                <div className="ripple-connector">
                  <div className="ripple-dot" />
                  <div className="ripple-line" />
                </div>
                <div className="ripple-content">
                  <p>Youth support their families and gain independence.</p>
                </div>
              </div>
              <div className="ripple-step">
                <div className="ripple-connector">
                  <div className="ripple-dot" />
                  <div className="ripple-line" />
                </div>
                <div className="ripple-content">
                  <p>Operations sustain training and quality systems.</p>
                </div>
              </div>
              <div className="ripple-step">
                <div className="ripple-connector">
                  <div
                    className="ripple-dot"
                    style={{ background: "#1b3a6b", outlineColor: "rgba(27,58,107,0.5)", borderColor: "#2e9e44", borderWidth: "2px" }}
                  />
                  <div className="ripple-line" style={{ opacity: 0 }} />
                </div>
                <div className="ripple-content">
                  <p>The Children’s Home receives continuous support for education and care.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-block">
            <div className="section-label" style={{ textAlign: "center" }}>
              Ready to build with purpose?
            </div>
            <h2>Partner with us for dependable AI delivery.</h2>
            <p>
              Reliable annotation, transcription, and data operations — with measurable social impact built in from Nairobi to global teams.
            </p>
            <div className="cta-row">
              <Link className="button primary" to="/contact#send-message">
                Start a conversation
              </Link>
              <Link className="button secondary" to="/services">
                Review services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Impact;
