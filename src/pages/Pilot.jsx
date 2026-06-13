import { Helmet } from "react-helmet-async";

function Pilot(props) {
  return (
    <>
      <Helmet bodyAttributes={{ class: "pilot-page" }}>
        <title>The BDH Pilot — Baraka Digital Hub</title>
        <meta name="description" content="Structured pilots: real work, QA reports, and a clear path to production." />
        <style>{`
  :root{
    --navy-deep:   #050b14;
    --navy-panel:  #081426;
    --navy-line:   rgba(255,255,255,0.08);
    --cyan:        #2DD9C8;
    --cyan-dim:    #1A8C80;
    --amber:       #FBBF63;
    --violet:      #8B5CF6;
    --teal:        #38BDF8;
    --text-hi:     #EAF1F8;
    --text-mid:    #9FB4CC;
    --text-dim:    #7A92B0;
    --mono: 'JetBrains Mono', monospace;
    --disp: 'Space Grotesk', sans-serif;
  }

  .pilot-page *{ margin:0; padding:0; box-sizing:border-box; }

  html{ scroll-behavior:smooth; }

  body.pilot-page{ background: linear-gradient(180deg, #050b14 0%, #071826 42%, #061020 100%); color: var(--text-hi); font-family: var(--disp); line-height:1.65; background-attachment: fixed; }

  body.pilot-page::before{
    content:"";
    position:fixed;
    inset:0;
    background-image:
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 72px 72px;
    opacity: 0.16;
    pointer-events:none;
    z-index:0;
  }

  body.pilot-page::after{
    content:"";
    position:fixed;
    inset:0;
    background:
      radial-gradient(circle at 15% 12%, rgba(45,217,200,0.16), transparent 16%),
      radial-gradient(circle at 88% 22%, rgba(139,92,246,0.14), transparent 18%),
      radial-gradient(circle at 48% 78%, rgba(251,191,99,0.12), transparent 20%);
    opacity: 0.78;
    pointer-events:none;
    mix-blend-mode: screen;
    z-index:0;
  }

  .pilot-page .page-shell{
    position:relative;
    min-height:100vh;
    z-index:1;
    overflow:hidden;
    padding-bottom:80px;
  }

  .pilot-page .wrap,
  .pilot-page .hero,
  .pilot-page .topbar,
  .pilot-page .section-block,
  .pilot-page .section-intro,
  .pilot-page .card,
  .pilot-page .about-panel,
  .pilot-page .pipeline,
  .pilot-page .deliver-grid,
  .pilot-page .compare,
  .pilot-page .pricing-box {
    background: transparent !important;
    border-color: rgba(255,255,255,0.04) !important;
    box-shadow: none !important;
  }

  .pilot-page .section{ padding:64px 0; border:1px solid rgba(255,255,255,0.08); background: rgba(8,16,30,0.82); border-radius:28px; position:relative; overflow:hidden; }
  .pilot-page .section::before{ content:''; position:absolute; inset:0; background-image:
      radial-gradient(circle at 20% 20%, rgba(45,217,200,0.08), transparent 20%),
      radial-gradient(circle at 80% 15%, rgba(139,92,246,0.06), transparent 18%),
      linear-gradient(180deg, rgba(255,255,255,0.02), transparent 35%);
    pointer-events:none; }
  .pilot-page .section-head{ position:relative; z-index:2; }
  .pilot-page .section-cta{ display:flex; flex-wrap:wrap; gap:12px; margin-top:28px; position:relative; z-index:2; }
  .pilot-page .section-subtle{ color: rgba(234,241,248,0.72); }

  .pilot-page .wrap{ max-width:1080px; margin:0 auto; padding:0 24px; position:relative; z-index:1; }
  .pilot-page .topbar{ border-bottom:1px solid rgba(255,255,255,0.04); padding:18px 0; background:transparent; position:relative; z-index:25; }
  .pilot-page .topbar .wrap{ display:flex; align-items:center; justify-content:space-between; }
  .pilot-page .brand{ display:flex; align-items:center; gap:10px; }
  .pilot-page .brand-mark{ width:34px; height:34px; border:1.5px solid var(--cyan); border-radius:7px; display:flex; align-items:center; justify-content:center; font-family:var(--mono); font-weight:700; color:var(--cyan); font-size:14px; }
  .pilot-page .brand-name{ font-weight:700; font-size:15px; letter-spacing:0.5px; }
  .pilot-page .brand-tag{ font-family:var(--mono); font-size:11px; color:var(--text-dim); }
  .pilot-page .navlinks{ display:flex; gap:18px; align-items:center; }
  .pilot-page .navlinks a{ color:var(--text-mid); text-decoration:none; font-family:var(--mono); font-size:13px; }
  .pilot-page .navlinks a:hover{ color:var(--cyan); }
  .pilot-page .topbar-meta{ font-family:var(--mono); font-size:11px; color:var(--text-dim); text-align:right; }

  .pilot-page .hero{ padding:160px 0 56px; position:relative; overflow:hidden; }
  .pilot-page .hero::after{ content:''; position:absolute; inset:0; background-image:
      linear-gradient(135deg, rgba(56,189,248,0.08), transparent 30%),
      radial-gradient(circle at 18% 22%, rgba(45,217,200,0.2), transparent 24%),
      radial-gradient(circle at 84% 24%, rgba(139,92,246,0.14), transparent 20%),
      radial-gradient(circle at 60% 82%, rgba(251,191,99,0.12), transparent 20%);
    pointer-events:none; opacity:.72; mix-blend-mode:screen; }
  .pilot-page .hero::before{ content:''; position:absolute; inset:0; background-image:
      repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0) 1px, rgba(255,255,255,0) 32px),
      repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0) 1px, rgba(255,255,255,0) 32px);
    pointer-events:none; opacity:.34; mix-blend-mode:overlay; }
  .pilot-page .eyebrow{ font-family:var(--mono); font-size:12px; color:var(--cyan); letter-spacing:3px; text-transform:uppercase; margin-bottom:18px; display:flex; align-items:center; gap:10px; }
  .pilot-page h1{ font-size:clamp(36px, 5.4vw, 62px); font-weight:800; line-height:1.08; letter-spacing:-0.5px; max-width:760px; }
  .pilot-page .accent{ background: linear-gradient(90deg, var(--cyan), var(--teal), var(--violet)); -webkit-background-clip: text; color: transparent; }
  .pilot-page .hero-sub{ margin-top:24px; font-size:17.5px; color:var(--text-mid); max-width:680px; line-height:1.75; }
  .pilot-page .hero-badges{ display:flex; flex-wrap:wrap; gap:12px; margin-top:28px; }
  .pilot-page .hero-badge{ display:inline-flex; align-items:center; gap:8px; padding:12px 16px; border-radius:999px; background: rgba(52, 62, 97, 0.7); border:1px solid rgba(255,255,255,0.08); color: var(--text-hi); font-size:0.82rem; letter-spacing:0.14em; text-transform:uppercase; }
  .pilot-page .hero-metrics{ display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:16px; margin-top:28px; }
  .pilot-page .metric-card{ background: rgba(10,18,34,0.9); border:1px solid rgba(255,255,255,0.08); border-radius:20px; padding:20px 22px; display:flex; flex-direction:column; gap:10px; }
  .pilot-page .metric-card strong{ font-size:1.55rem; color:#fff; letter-spacing:-0.02em; }
  .pilot-page .metric-card span{ color: var(--text-mid); font-size:0.95rem; line-height:1.6; }
  .pilot-page .hero-cta{ margin-top:34px; display:flex; gap:14px; flex-wrap:wrap; }
  .pilot-page .btn{ font-family:var(--mono); font-size:13px; font-weight:600; padding:14px 26px; border-radius:12px; text-decoration:none; letter-spacing:0.08em; display:inline-flex; align-items:center; gap:10px; transition: all .22s ease; }
  .pilot-page .btn-primary{ background: linear-gradient(135deg, #0f4fad, #118ab2); color:white; padding:14px 26px; border-radius:16px; border:none; box-shadow:0 16px 36px rgba(15,55,100,0.2); transition: transform .22s, box-shadow .22s, background .22s; }
  .pilot-page .btn-secondary{ background: rgba(15,75,115,0.95); color:white; padding:14px 26px; border-radius:16px; border:1px solid rgba(94,176,217,0.32); box-shadow:0 16px 32px rgba(15,75,115,0.18); transition: transform .22s, box-shadow .22s, background .22s; }
  .pilot-page .btn-secondary:hover{ background: rgba(21,97,142,0.96); }
  .pilot-page .btn-warm{ background: linear-gradient(135deg, #FBBF63, #F97316); color:#07141d; padding:14px 26px; border:none; box-shadow:0 20px 48px rgba(251,191,99,0.18); }
  .pilot-page .btn-ghost{ border:1px solid rgba(255,255,255,0.18); color:var(--text-hi); background: rgba(255,255,255,0.05); padding:14px 26px; border-radius:16px; }

  .pilot-page .section-head{ margin-bottom:36px; }
  .pilot-page .section-num{ font-family:var(--mono); font-size:12px; color:var(--cyan); letter-spacing:2px; margin-bottom:10px; }
  .pilot-page .section-title{ font-size:clamp(24px,3vw,32px); font-weight:700; letter-spacing:-0.3px; }
  .pilot-page .section-desc{ margin-top:12px; color:var(--text-mid); max-width:640px; font-size:15px; }

  .pilot-page .eval-grid{ display:grid; grid-template-columns:repeat(4,1fr); gap:16px; border:none; background:transparent; }
  .pilot-page .eval-cell{ background: linear-gradient(180deg, rgba(8,16,34,0.95), rgba(11,24,44,0.95)); padding:24px 20px; min-height:160px; display:flex; flex-direction:column; gap:12px; border:1px solid rgba(255,255,255,0.08); border-radius:18px; box-shadow:0 18px 40px rgba(0,0,0,0.19); }
  .pilot-page .eval-idx{ font-family:var(--mono); font-size:11px; color:var(--cyan); letter-spacing:1px; }
  .pilot-page .eval-name{ font-weight:700; font-size:15px; line-height:1.35; color:#f8fbff; }
  .pilot-page .eval-desc{ font-size:13px; color:var(--text-mid); }

  .pilot-page .pipeline{ border:1px solid rgba(255,255,255,0.08); border-radius:18px; overflow:hidden; background: rgba(7,16,30,0.9); }
  .pilot-page .phase{ display:grid; grid-template-columns:64px 1fr auto; gap:20px; padding:26px 24px; align-items:start; border-bottom:1px solid var(--navy-line); position:relative; }
  .pilot-page .phase-num{ font-family:var(--mono); font-size:13px; color:var(--navy-deep); background:var(--cyan); width:36px; height:36px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-weight:700; z-index:1; }

  .pilot-page .deliver-grid{ display:grid; grid-template-columns:repeat(2,1fr); gap:14px; }
  .pilot-page .deliver-item{ display:flex; gap:14px; padding:20px; border:1px solid var(--navy-line); border-radius:10px; background:var(--navy-panel); }

  .pilot-page .compare{ display:grid; grid-template-columns:1fr 1fr; gap:1px; border:1px solid var(--navy-line); border-radius:10px; overflow:hidden; }
  .pilot-page .compare-col{ background:var(--navy-panel); padding:28px; }
  .pilot-page .compare-col.highlight{ background:#0F2A30; }

  .pilot-page .pricing-box{ border:1px solid var(--navy-line); border-radius:10px; padding:36px; background: linear-gradient(135deg, var(--navy-panel), #0E1F36); display:flex; flex-wrap:wrap; gap:32px; align-items:center; justify-content:space-between; }

  .pilot-page .final-cta{ text-align:center; padding:80px 0; border-top:1px solid var(--navy-line); }
  .pilot-page .final-cta .eyebrow{ justify-content:center; }
  .pilot-page .final-cta h2{ font-size:clamp(28px,4vw,42px); font-weight:700; letter-spacing:-0.5px; max-width:680px; margin:0 auto 18px; }
  .pilot-page .final-cta p{ color:var(--text-mid); max-width:540px; margin:0 auto 36px; font-size:15.5px; }
  .pilot-page .final-cta .hero-cta{ justify-content:center; }

  @media (max-width:860px){ .pilot-page .eval-grid{ grid-template-columns:repeat(2,1fr); } }
  @media (max-width:520px){ .pilot-page .eval-grid{ grid-template-columns:1fr; } }
    /* Strong overrides to neutralize site-wide white panels on this page */
    .pilot-page, .pilot-page body { background: var(--navy-deep) !important; }
    .pilot-page *:not(.btn):not(.btn-primary):not(.btn-secondary):not(.btn-warm):not(.btn-ghost):not(.btn-steel) { background: transparent !important; color: inherit !important; border-color: rgba(255,255,255,0.04) !important; box-shadow: none !important; }
    .pilot-page .eval-cell, .pilot-page .deliver-item, .pilot-page .pipeline, .pilot-page .phase, .pilot-page .compare-col, .pilot-page .pricing-box { background: var(--navy-panel) !important; box-shadow: none !important; }
    .pilot-page .card, .pilot-page .about-panel, .pilot-page .section-block, .pilot-page .section-intro { background: transparent !important; border: none !important; box-shadow: none !important; }
`}</style>
      </Helmet>

      <div className="page-shell">
        <div className="hero">
          <div className="wrap">
            <div className="eyebrow">pilot_engagement // status: open</div>
            <h1>A trial <span className="accent">partnership</span>, not a trial task.</h1>
            <p className="hero-sub">
              Before any production engagement, BDH runs a structured pilot — real work, on your data,
              under your quality bar, executed by the same team and QA framework used at full scale.
              Low cost. Zero obligation. A clear path to production if it fits.
            </p>
            <div className="hero-badges">
              <span className="hero-badge">Pilot-first process</span>
              <span className="hero-badge">QA-backed output</span>
              <span className="hero-badge">Data-ready deliverables</span>
            </div>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#start">Start a pilot →</a>
              <a className="btn btn-secondary" href="#structure">Explore pilot scope</a>
              <a className="btn btn-secondary" href="/contact">Contact Sales</a>
            </div>
            <div className="hero-metrics">
              <div className="metric-card">
                <strong>100% QA review</strong>
                <span>Every pilot batch includes full independent quality validation for reliability.</span>
              </div>
              <div className="metric-card">
                <strong>48h turn</strong>
                <span>Early deliverables and pilot scope are scoped and shared within 48 hours.</span>
              </div>
              <div className="metric-card">
                <strong>Zero obligation</strong>
                <span>Run the pilot, validate the approach, and decide before moving into production.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="wrap">
            <div className="section-head">
              <div className="section-num">01 — EVALUATION SCOPE</div>
              <div className="section-title">What the pilot evaluates</div>
              <p className="section-desc">The pilot isn't a quality test in isolation — it's a working model of the full
                partnership. Eight dimensions are assessed before any production decision is made.</p>
            </div>

            <div className="eval-grid">
              <div className="eval-cell">
                <div className="eval-idx">// 01</div>
                <div className="eval-name">Quality &amp; Accuracy</div>
                <div className="eval-desc">Output measured against your defined benchmarks and quality standards.</div>
              </div>
              <div className="eval-cell">
                <div className="eval-idx">// 02</div>
                <div className="eval-name">Communication</div>
                <div className="eval-desc">Response time, clarity of updates, and proactive issue flagging.</div>
              </div>
              <div className="eval-cell">
                <div className="eval-idx">// 03</div>
                <div className="eval-name">Workflow Fit</div>
                <div className="eval-desc">How smoothly BDH integrates into your tools, processes, and systems.</div>
              </div>
              <div className="eval-cell">
                <div className="eval-idx">// 04</div>
                <div className="eval-name">Scalability</div>
                <div className="eval-desc">Whether the team absorbs increased volume without quality loss.</div>
              </div>
              <div className="eval-cell">
                <div className="eval-idx">// 05</div>
                <div className="eval-name">Reporting</div>
                <div className="eval-desc">Completeness and clarity of daily updates, QA reports, and metrics.</div>
              </div>
              <div className="eval-cell">
                <div className="eval-idx">// 06</div>
                <div className="eval-name">Security &amp; Compliance</div>
                <div className="eval-desc">Adherence to your data handling policies and access requirements.</div>
              </div>
              <div className="eval-cell">
                <div className="eval-idx">// 07</div>
                <div className="eval-name">Platform Integration</div>
                <div className="eval-desc">Ability to work within your proprietary tools and environments.</div>
              </div>
              <div className="eval-cell">
                <div className="eval-idx">// 08</div>
                <div className="eval-name">Adaptability</div>
                <div className="eval-desc">How effectively the team adjusts to evolving requirements mid-run.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="section" id="structure">
          <div className="wrap">
            <div className="section-head">
              <div className="section-num">02 — PILOT STRUCTURE</div>
              <div className="section-title">Four phases. Same framework as production.</div>
              <p className="section-desc">Training happens before execution — not after. Every phase runs under the same
                PM-led, QA-independent structure used in full-scale engagements.</p>
            </div>

            <div className="pipeline">
              <div className="phase">
                <div className="phase-num">01</div>
                <div className="phase-body">
                  <h3>Discovery &amp; Planning</h3>
                  <p>Requirements reviewed and documented. Success criteria defined. Workflow mapped
                     and quality benchmarks agreed in writing before any contractor is assigned.</p>
                </div>
                <div className="phase-tag">sign-off required</div>
              </div>

              <div className="phase">
                <div className="phase-num">02</div>
                <div className="phase-body">
                  <h3>Team Training &amp; Certification</h3>
                  <p>The agreed contractor cohort is trained specifically on your documentation and
                     guidelines. No one touches live work until certified against your quality bar.</p>
                </div>
                <div className="phase-tag">complexity-dependent</div>
              </div>

              <div className="phase">
                <div className="phase-num">03</div>
                <div className="phase-body">
                  <h3>Pilot Execution</h3>
                  <p>The trained team executes the agreed scope under full BDH structure — Project
                     Manager, Team Lead, and Independent QA reviewing 100% of output.</p>
                </div>
                <div className="phase-tag">per agreed scope</div>
              </div>

              <div className="phase">
                <div className="phase-num">04</div>
                <div className="phase-body">
                  <h3>Performance Review &amp; Roadmap</h3>
                  <p>Deliverables, QA report, IAA scores, and a production roadmap are handed over —
                     ready to activate only when you give the signal.</p>
                </div>
                <div className="phase-tag">your decision</div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="wrap">
            <div className="section-head">
              <div className="section-num">03 — DELIVERABLES</div>
              <div className="section-title">What you receive at the end</div>
            </div>
            <div className="section-cta">
              <a className="btn btn-secondary" href="#start">Review deliverables</a>
              <a className="btn btn-secondary" href="/contact">Schedule QA review</a>
            </div>

            <div className="deliver-grid">
              <div className="deliver-item">
                <div className="deliver-icon">▣</div>
                <div className="deliver-text">
                  <h4>Completed Pilot Deliverables</h4>
                  <p>The agreed scope of work, fully executed and ready for review.</p>
                </div>
              </div>
              <div className="deliver-item">
                <div className="deliver-icon">✓</div>
                <div className="deliver-text">
                  <h4>Independent QA Report</h4>
                  <p>100% output review with error classification and accuracy scoring.</p>
                </div>
              </div>
              <div className="deliver-item">
                <div className="deliver-icon">∑</div>
                <div className="deliver-text">
                  <h4>IAA Scores</h4>
                  <p>Inter-Annotator Agreement — consistency metrics across the contractor cohort.</p>
                </div>
              </div>
              <div className="deliver-item">
                <div className="deliver-icon">→</div>
                <div className="deliver-text">
                  <h4>Production Roadmap</h4>
                  <p>Staffing, QA structure, and scaling plan — ready to activate on your signal.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="wrap">
            <div className="section-head">
              <div className="section-num">04 — WHY START HERE</div>
              <div className="section-title">Pilot vs. jumping straight to production</div>
            </div>

            <div className="compare">
              <div className="compare-col">
                <div className="compare-head">Without a pilot</div>
                <div className="compare-row"><span className="compare-mark">×</span> Vendor selected on promises and sales decks</div>
                <div className="compare-row"><span className="compare-mark">×</span> Quality issues surface weeks into production</div>
                <div className="compare-row"><span className="compare-mark">×</span> Rework costs discovered after volume scales</div>
                <div className="compare-row"><span className="compare-mark">×</span> Weeks of onboarding before any output exists</div>
              </div>
              <div className="compare-col highlight">
                <div className="compare-head">With the BDH pilot</div>
                <div className="compare-row"><span className="compare-mark">✓</span> Vendor selected on delivered, QA-verified results</div>
                <div className="compare-row"><span className="compare-mark">✓</span> Quality validated on real data before commitment</div>
                <div className="compare-row"><span className="compare-mark">✓</span> Issues surface in the pilot — before they scale</div>
                <div className="compare-row"><span className="compare-mark">✓</span> A working relationship, tested and proven</div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="wrap">
            <div className="section-head">
              <div className="section-num">05 — PRICING</div>
              <div className="section-title">Scoped to your project</div>
            </div>

            <div className="pricing-box">
              <div className="pricing-text">
                <h3>No fixed pilot fee — scoped to what you need</h3>
                <p>
                  Pilot pricing depends on task type, complexity, and required contractor count.
                  A scope and cost estimate are returned within 24 hours of the discovery call —
                  with no obligation to proceed. All production rates are all-inclusive: project
                  management, independent QA, reporting, and contractor training.
                </p>
              </div>
              <div className="pricing-stamp">
                <div className="num">24 hrs</div>
                <div className="lbl">scope &amp; estimate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="final-cta" id="start">
          <div className="wrap">
            <div className="eyebrow">ready_when_you_are</div>
            <h2>The next step takes 30 minutes.</h2>
            <p>
              We'll confirm your requirements, scope the pilot, and issue an agreement within
              24 hours. No commitment required until you've seen the results.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#start">Book a discovery call →</a>
              <a className="btn btn-secondary" href="#structure">Explore pilot scope</a>
              <a className="btn btn-secondary" href="#pricing">See pilot pricing</a>
              <a className="btn btn-secondary" href="/contact">Visit Contact page</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pilot;
