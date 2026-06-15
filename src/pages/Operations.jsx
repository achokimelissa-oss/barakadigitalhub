import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Operations() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet bodyAttributes={{ class: "operations-page" }}>
        <title>Operations & Delivery | Baraka Digital Hub</title>
        <meta
          name="description"
          content="Operations and delivery for AI data services — structured capacity, independent QA, certification, and a repeatable workflow."
        />
        <style>{`
          :root{--navy:#07121F;--panel:#0D1E30;--card:#111F30;--line:#1C3248;--cyan:#2DD9C8;--cyand:#1A8C80;--cyang:rgba(45,217,200,.12);--amber:#FFD166;--hi:#ECF3FA;--mid:#A7DDF0;--dim:#98CFE5;--mono:'JetBrains Mono',monospace;--sans:'Space Grotesk',sans-serif;}
          *{margin:0;padding:0;box-sizing:border-box;}
          html{scroll-behavior:smooth;}
          body.operations-page{background:linear-gradient(180deg, #020615 0%, #04101f 28%, #081a2f 62%, #0b213b 100%);color:var(--hi);font-family:var(--sans);line-height:1.65;min-height:100vh;overflow-x:hidden;}
          body.operations-page::before{content:"";position:fixed;inset:0;background:linear-gradient(180deg, rgba(255,255,255,.04), transparent 26%, rgba(0,0,0,.18));opacity:1;pointer-events:none;z-index:0;}
          body.operations-page::after{content:"";position:fixed;top:0;right:0;width:0;height:0;background:none;opacity:0;pointer-events:none;z-index:0;}
          .operations-page .hero::before,
          .operations-page .hero::after,
          .operations-page .hero .hero-tech-grid,
          .operations-page .hero .dot-grid,
          .operations-page .hero .code-panel::before,
          .operations-page .hero .section-tech-bg::before,
          .operations-page .hero .section-tech-bg::after,
          .operations-page .hero .section-tech-bg,
          .operations-page .hero .hero-grid,
          .operations-page .hero .hero-tech-grid {
            background: none !important;
            background-image: none !important;
            opacity: 0 !important;
            display: none !important;
            pointer-events: none !important;
          }
          .operations-page .hero { background: none !important; }
          .operations-page .wrap{width:min(75%,1120px);max-width:1120px;margin:0 auto;padding:0 28px;position:relative;z-index:1;}
          @media(max-width:960px){.operations-page .wrap{width:calc(100% - 56px);}}
          .div{border:none;border-top:1px solid var(--line);}
          .tag{font-family:var(--mono);font-size:11px;color:var(--cyan);letter-spacing:3px;text-transform:uppercase;display:inline-flex;align-items:center;gap:10px;margin-bottom:6px;}
          .tag::before{content:"";width:8px;height:8px;border-radius:50%;background:var(--cyan);box-shadow:0 0 10px var(--cyan);display:inline-block;}
          .hero{padding:120px 0 80px;}
          h1{font-size:clamp(34px,5vw,54px);font-weight:700;line-height:1.1;letter-spacing:-.6px;max-width:820px;background:linear-gradient(90deg,#1d4ed8,#06b6d4,#0f9d68);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;color:transparent !important;}
          /* Ensure operations page headings are bright even if other styles apply */
          body.operations-page h2, body.operations-page .section-h2, body.operations-page .final h2, body.operations-page .font-display { color: var(--hi) !important; -webkit-text-fill-color: initial !important; background: none !important; }
          body.operations-page h1{background:linear-gradient(90deg,#1d4ed8,#06b6d4,#0f9d68);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;color:transparent !important;}
          h1 em{color:var(--cyan);font-style:normal;}
          .hero-sub{margin-top:18px;font-size:17px;color:rgba(236,243,250,0.9);max-width:660px;line-height:1.8;}
          .sec{padding:64px 0;}
          .sec-lbl{font-family:var(--mono);font-size:11px;color:var(--cyan);letter-spacing:2.5px;text-transform:uppercase;margin-bottom:10px;}
          .sec-h{font-size:clamp(22px,3vw,30px);font-weight:700;letter-spacing:-.3px;}
          .sec-d{margin-top:12px;color:var(--mid);font-size:15px;max-width:660px;line-height:1.7;}
          .pillars{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);border:1px solid var(--line);border-radius:14px;overflow:hidden;margin-top:36px;}
          .pillar{background:var(--card);padding:28px 24px;display:flex;flex-direction:column;gap:12px;transition:background .18s;position:relative;}
          .pillar:hover{background:#121F30;}
          .pillar::before{content:"";position:absolute;top:0;left:0;right:0;height:2px;background:var(--line);transition:background .18s;}
          .pillar:hover::before{background:var(--cyan);}
          .p-stat{font-family:var(--mono);font-size:26px;font-weight:700;color:var(--cyan);line-height:1;}
          .p-label{font-size:13px;color:var(--dim);font-family:var(--mono);letter-spacing:.5px;}
          .p-title{font-size:16px;font-weight:600;margin-top:4px;}
          .p-desc{font-size:13.5px;color:var(--mid);line-height:1.65;}
          .p-list{list-style:none;margin-top:4px;display:flex;flex-direction:column;gap:6px;}
          .p-list li{font-size:12.5px;color:var(--dim);display:flex;align-items:flex-start;gap:8px;padding-left:0;}
          .p-list li::before{content:"//";font-family:var(--mono);color:var(--cyan);font-size:10px;flex-shrink:0;margin-top:3px;}
          .transition-banner{margin:0;padding:28px 40px;background:linear-gradient(135deg,rgba(45,217,200,.08),rgba(45,217,200,.02));border-top:1px solid var(--cyand);border-bottom:1px solid var(--cyand);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;}
          .tb-label{font-family:var(--mono);font-size:11px;color:var(--cyan);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;}
          .tb-text{font-size:16px;font-weight:600;}
          .tb-right{font-family:var(--mono);font-size:13px;color:var(--mid);text-align:right;}
          .wf-strip{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--line);border:1px solid var(--line);border-radius:12px;overflow:hidden;margin-top:32px;}
          .wf-step{background:var(--card);padding:20px 18px;display:flex;flex-direction:column;gap:6px;transition:background .18s;cursor:default;}
          .wf-step:hover{background:#121F30;}
          .ws-num{font-family:var(--mono);font-size:11px;color:var(--cyan);letter-spacing:1px;}
          .ws-name{font-weight:600;font-size:14px;line-height:1.3;}
          .ws-short{font-size:12px;color:var(--dim);}
          .pipeline{border:1px solid var(--line);border-radius:12px;overflow:hidden;background:var(--panel);margin-top:28px;}
          .stage{display:grid;grid-template-columns:60px 1fr;border-bottom:1px solid var(--line);position:relative;}
          .stage:last-child{border-bottom:none;}
          .stage::after{content:"";position:absolute;left:29px;top:60px;bottom:-1px;width:1px;background:var(--line);}
          .stage:last-child::after{display:none;}
          .s-num-col{display:flex;align-items:flex-start;justify-content:center;padding-top:24px;}
          .s-num{width:36px;height:36px;border-radius:8px;background:var(--cyan);color:var(--navy);font-family:var(--mono);font-weight:700;font-size:13px;display:flex;align-items:center;justify-content:center;box-shadow:0 0 14px rgba(45,217,200,.28);z-index:1;flex-shrink:0;}
          .s-body{padding:24px 24px 24px 0;}
          .s-head{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;margin-bottom:10px;}
          .s-head h3{font-size:17px;font-weight:600;color:var(--hi);}
          .s-tag{font-family:var(--mono);font-size:10px;color:var(--dim);border:1px solid var(--line);padding:5px 12px;border-radius:20px;white-space:nowrap;letter-spacing:1px;text-transform:uppercase;}
          .s-desc{font-size:14px;color:var(--mid);line-height:1.7;max-width:660px;margin-bottom:16px;}
          .s-tasks{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
          .s-col{background:rgba(7,20,41,.9);border:1px solid var(--line);border-radius:8px;padding:14px 16px;}
          .s-col-h{font-family:var(--mono);font-size:10px;color:var(--dim);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--line);}
          .s-item{display:flex;align-items:flex-start;gap:8px;padding:6px 0;font-size:13px;color:var(--mid);border-bottom:1px solid rgba(255,255,255,.03);}
          .s-item:last-child{border-bottom:none;}
          .s-dot{width:5px;height:5px;border-radius:50%;background:var(--cyan);flex-shrink:0;margin-top:7px;}
          .meaning{margin-top:14px;background:var(--cyang);border:1px solid var(--cyand);border-radius:8px;padding:14px 18px;display:flex;gap:12px;align-items:flex-start;}
          .m-arr{font-family:var(--mono);color:var(--cyan);font-size:14px;flex-shrink:0;margin-top:1px;}
          .m-lbl{font-family:var(--mono);font-size:10px;color:var(--cyan);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px;}
          .m-txt{font-size:13.5px;color:var(--hi);}
          .qa-box{border:1px solid var(--line);border-radius:10px;overflow:hidden;margin-top:16px;}
          .qa-head{background:linear-gradient(135deg,#0B2230,#0D1E30);padding:18px 20px;border-bottom:1px solid var(--line);}
          .qa-head h4{font-size:15px;font-weight:600;margin-bottom:4px;}
          .qa-head p{font-size:13px;color:var(--mid);}
          .qa-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--line);}
          .qa-cell{background:var(--card);padding:14px 18px;}
          .qa-l{font-family:var(--mono);font-size:10px;color:var(--cyan);margin-bottom:4px;letter-spacing:1px;}
          .qa-v{font-size:13.5px;font-weight:600;margin-bottom:2px;}
          .qa-d{font-size:12px;color:var(--dim);}
          .conn{display:flex;align-items:center;justify-content:center;padding:8px 0;gap:12px;position:relative;z-index:1;}
          .conn-line{flex:1;height:1px;background:var(--line);}
          .conn-pill{font-family:var(--mono);font-size:10.5px;color:var(--cyan);border:1px solid var(--line);background:var(--card);border-radius:20px;padding:5px 14px;white-space:nowrap;letter-spacing:1px;}
          .sla{border:1px solid var(--line);border-radius:12px;overflow:hidden;margin-top:28px;}
          .sla-hdr{display:grid;grid-template-columns:1.4fr 1fr 1fr;background:var(--cyan);padding:13px 20px;}
          .sla-hdr span{font-family:var(--mono);font-size:11px;font-weight:600;color:var(--navy);letter-spacing:1px;text-transform:uppercase;}
          .sla-grp{font-family:var(--mono);font-size:10.5px;color:var(--cyan);background:var(--panel);padding:9px 20px;letter-spacing:2px;text-transform:uppercase;border-bottom:1px solid var(--line);}
          .sla-row{display:grid;grid-template-columns:1.4fr 1fr 1fr;padding:13px 20px;border-bottom:1px solid rgba(255,255,255,.04);}
          .sla-row:last-child{border-bottom:none;}
          .sla-row:nth-child(odd){background:var(--card);}
          .sla-row:nth-child(even){background:var(--panel);}
          .sla-row span:first-child{font-size:13.5px;color:var(--mid);}
          .sla-row span:nth-child(2){font-size:13.5px;color:var(--hi);}
          .sla-row span:last-child{font-family:var(--mono);font-size:12.5px;color:var(--cyan);font-weight:600;}
          .final{padding:80px 0;text-align:center;border-top:1px solid var(--line);}
          .final .tag{justify-content:center;}
          .final h2{font-size:clamp(26px,4vw,40px);font-weight:700;letter-spacing:-.5px;margin:0 auto 16px;color:var(--hi);}
          .final p{color:rgba(236,243,250,.88);max-width:540px;margin:0 auto 34px;font-size:15.5px;}
          .btn{font-family:var(--mono);font-size:12.5px;font-weight:600;padding:14px 26px;border-radius:7px;text-decoration:none;letter-spacing:.5px;display:inline-flex;align-items:center;gap:8px;transition:.18s ease;cursor:pointer;border:none;}
          .btn-primary{display:inline-flex;align-items:center;gap:10px;background:linear-gradient(135deg,#0f4fad,#118ab2);color:white;padding:14px 26px;border-radius:16px;font-weight:700;font-size:0.98rem;text-decoration:none;box-shadow:0 16px 36px rgba(15,55,100,.2);transition:transform .22s,box-shadow .22s,background .22s;outline:none;border:none;cursor:pointer;font-family:'Segoe UI', Arial, sans-serif;}
          .btn-primary:hover{transform:translateY(-2px);box-shadow:0 20px 42px rgba(15,55,100,.28);background:linear-gradient(135deg,#145d9e,#0d95b6);}
          .btn-secondary{display:inline-flex;align-items:center;gap:10px;background:linear-gradient(135deg,#0f9d68,#06b6d4);color:white;padding:14px 26px;border-radius:16px;font-weight:700;font-size:0.98rem;text-decoration:none;border:1px solid rgba(94,176,217,.32);transition:transform .22s,box-shadow .22s,background .22s;cursor:pointer;font-family:'Segoe UI', Arial, sans-serif;box-shadow:0 16px 32px rgba(15,75,115,.18);}
          .btn-secondary:hover{background:linear-gradient(135deg,#14b8a6,#0ea5e9);transform:translateY(-2px);box-shadow:0 20px 40px rgba(15,75,115,.26);}
          .cstrip{margin-top:36px;font-family:var(--mono);font-size:12px;color:var(--dim);display:flex;gap:26px;justify-content:center;flex-wrap:wrap;}
          .cstrip a{color:var(--mid);text-decoration:none;display:flex;align-items:center;gap:7px;}
          .cstrip a:hover{color:var(--cyan);}
          a:focus-visible{outline:2px solid var(--cyan);outline-offset:3px;}
          @media(max-width:860px){.pillars{grid-template-columns:repeat(2,1fr);}} 
          @media(max-width:520px){.pillars{grid-template-columns:1fr;}} 
          @media(max-width:700px){.wf-strip{grid-template-columns:repeat(2,1fr);}} 
          @media(max-width:560px){.wf-strip{grid-template-columns:1fr;}} 
          @media(max-width:640px){.s-tasks{grid-template-columns:1fr;}.stage{grid-template-columns:44px 1fr;}.stage::after{left:21px;}} 
          @media(max-width:520px){.stage{grid-template-columns:1fr;}.stage::after{display:none;}} 
          @media(max-width:560px){.qa-grid{grid-template-columns:1fr;}.sla-hdr{grid-template-columns:1fr;}.sla-row{grid-template-columns:1fr;}}
        `}</style>
      </Helmet>

      <div className="operations-page">
        <div className="hero">
          <div className="wrap">
            <div className="tag">operational_infrastructure // delivery_system</div>
            <h1>Built for <em>reliable scale</em>.</h1>
            <p className="hero-sub">
              Six operational pillars that make Baraka Digital Hub a trustworthy long-term AI data partner — combined with a structured four-stage delivery process that runs the same way on every project.
            </p>
          </div>
        </div>

        <hr className="div" />

        <div className="sec">
          <div className="wrap">
            <div className="sec-lbl">01 — operational infrastructure</div>
            <div className="sec-h">Six pillars. One reliable partner.</div>
            <p className="sec-d">
              These are not aspirational commitments — they are the structural elements that make consistent, auditable, enterprise-grade delivery possible at Baraka Digital Hub.
            </p>

            <div className="pillars">
              <div className="pillar">
                <div className="p-stat">100+</div>
                <div className="p-label">certified contractors</div>
                <div className="p-title">Trained, Certified Workforce</div>
                <div className="p-desc">
                  Contractors trained across CV, NLP, audio, transcription, and BPO. Each completes role-specific certification before live project access. Teams scale up or down to match client requirements.
                </div>
                <ul className="p-list">
                  <li>Role-specific onboarding tracks per vertical</li>
                  <li>Certification required before live project access</li>
                  <li>Organized by modality: CV, NLP, audio, BPO</li>
                  <li>Mentorship from senior specialists</li>
                </ul>
              </div>

              <div className="pillar">
                <div className="p-stat">100%</div>
                <div className="p-label">QA review rate</div>
                <div className="p-title">Independent QA System</div>
                <div className="p-desc">
                  Unlike providers who spot-check 10–20%, BDH runs 100% first-pass QA on every project. The QA team is fully independent from production — no shared management, no conflict of interest.
                </div>
                <ul className="p-list">
                  <li>Independent QA team, separate from contractors</li>
                  <li>First-pass error rate tracked per contractor</li>
                  <li>Client-visible daily quality reports</li>
                  <li>IAA scoring available on all projects</li>
                </ul>
              </div>

              <div className="pillar">
                <div className="p-stat">5K+</div>
                <div className="p-label">hours/week capacity</div>
                <div className="p-title">Structured Production Capacity</div>
                <div className="p-desc">
                  Volume scales with project needs via shift-based scheduling and contractor pool expansion. Capacity planning is handled by a dedicated ops team. Onboarding and delivery timelines are scoped per project.
                </div>
                <ul className="p-list">
                  <li>Flexible volume scaling via shift coverage</li>
                  <li>Rush capacity with expanded staffing</li>
                  <li>Capacity planning with dedicated ops team</li>
                  <li>Daily progress and utilization reports</li>
                </ul>
              </div>

              <div className="pillar">
                <div className="p-stat">Cert.</div>
                <div className="p-label">structured onboarding</div>
                <div className="p-title">Structured Onboarding</div>
                <div className="p-desc">
                  Every new engagement begins with task certification, calibration exercises, and pilot delivery before full-scale launch. No contractor enters production without demonstrating understanding of the client's quality bar.
                </div>
                <ul className="p-list">
                  <li>Task-specific certification tests</li>
                  <li>Calibration batch before full launch</li>
                  <li>Ongoing recalibration for long-running projects</li>
                  <li>Documented guidelines and edge-case handling</li>
                </ul>
              </div>

              <div className="pillar">
                <div className="p-stat">24/7</div>
                <div className="p-label">centralized operations</div>
                <div className="p-title">Centralized Operations</div>
                <div className="p-desc">
                  BDH's operations team manages scheduling, escalations, communication, and reporting across all active projects. Every client has a single named point of contact throughout their engagement.
                </div>
                <ul className="p-list">
                  <li>Single client-side point of contact</li>
                  <li>Escalation protocols for edge cases</li>
                  <li>Shift-based scheduling for coverage</li>
                  <li>Consolidated reporting dashboard</li>
                </ul>
              </div>

              <div className="pillar">
                <div className="p-stat">Long</div>
                <div className="p-label">production partnerships</div>
                <div className="p-title">Production-Grade Partnerships</div>
                <div className="p-desc">
                  Built for long-term engagements, not one-off batches. BDH's infrastructure supports ongoing annotation pipelines and multi-month production contracts with consistent quality across every cycle.
                </div>
                <ul className="p-list">
                  <li>Month-over-month consistency tracking</li>
                  <li>Volume ramp plans for growing pipelines</li>
                  <li>SLA-based delivery commitments</li>
                  <li>Dedicated team assignment for continuity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="transition-banner">
          <div className="tb-left">
            <div className="tb-label">infrastructure → delivery</div>
            <div className="tb-text">These six pillars run through every stage of the delivery process below.</div>
          </div>
          <div className="tb-right">PM · Team Lead · Contractors · Independent QA</div>
        </div>

        <div className="sec">
          <div className="wrap">
            <div className="sec-lbl">02 — delivery workflow</div>
            <div className="sec-h">How we deliver — every time.</div>
            <p className="sec-d">
              A structured four-stage delivery process for AI data services, transcription, content moderation, and digital operations. The same framework runs on every project, regardless of size or service type.
            </p>

            <div className="wf-strip">
              <div className="wf-step"><div className="ws-num">// 01</div><div className="ws-name">Discovery &amp; Planning</div><div className="ws-short">Scope, standards, tooling</div></div>
              <div className="wf-step"><div className="ws-num">// 02</div><div className="ws-name">Team Training &amp; Certification</div><div className="ws-short">Before any live work begins</div></div>
              <div className="wf-step"><div className="ws-num">// 03</div><div className="ws-name">Pilot Execution</div><div className="ws-short">Validate quality before scaling</div></div>
              <div className="wf-step"><div className="ws-num">// 04</div><div className="ws-name">Review &amp; Production Roadmap</div><div className="ws-short">Refine, then scale</div></div>
            </div>

            <div className="pipeline">
              <div className="stage">
                <div className="s-num-col"><div className="s-num">01</div></div>
                <div className="s-body">
                  <div className="s-head"><h3>Discovery &amp; Planning</h3><div className="s-tag">sign-off required</div></div>
                  <p className="s-desc">Client requirements reviewed and documented. Success criteria defined. Workflow mapped and quality benchmarks aligned. All documentation signed off before any contractor is assigned.</p>
                  <div className="s-tasks">
                    <div className="s-col">
                      <div className="s-col-h">discovery activities</div>
                      <div className="s-item"><div className="s-dot" /><span>Workflow discovery and process mapping</span></div>
                      <div className="s-item"><div className="s-dot" /><span>Taxonomy and ontology review</span></div>
                      <div className="s-item"><div className="s-dot" /><span>Tool and platform evaluation</span></div>
                      <div className="s-item"><div className="s-dot" /><span>Security and access requirements</span></div>
                      <div className="s-item"><div className="s-dot" /><span>SLA and turnaround alignment</span></div>
                    </div>
                    <div className="s-col">
                      <div className="s-col-h">planning outputs</div>
                      <div className="s-item"><div className="s-dot" /><span>Production plan with milestones</span></div>
                      <div className="s-item"><div className="s-dot" /><span>Dataset scoping and volume estimates</span></div>
                      <div className="s-item"><div className="s-dot" /><span>Labeling guideline definition</span></div>
                      <div className="s-item"><div className="s-dot" /><span>QA criteria and accuracy benchmarks</span></div>
                      <div className="s-item"><div className="s-dot" /><span>Risk assessment and mitigation plan</span></div>
                    </div>
                  </div>
                  <div className="meaning"><div className="m-arr">→</div><div><div className="m-lbl">what this means</div><div className="m-txt">A shared documented plan upfront prevents rework, misalignment, and wasted production cycles. Nothing moves forward until both parties have signed off on the same definition of quality.</div></div></div>
                </div>
              </div>

              <div className="conn"><div className="conn-line" /><div className="conn-pill">training before execution</div><div className="conn-line" /></div>

              <div className="stage">
                <div className="s-num-col"><div className="s-num">02</div></div>
                <div className="s-body">
                  <div className="s-head"><h3>Team Training &amp; Certification</h3><div className="s-tag">complexity-dependent</div></div>
                  <p className="s-desc">The agreed contractor cohort is selected and trained specifically on client requirements, guidelines, and documentation. No contractor touches live work until they have demonstrated understanding of the client's quality bar. Team Lead and QA Reviewers are briefed in parallel.</p>
                  <div className="s-tasks">
                    <div className="s-col">
                      <div className="s-col-h">training activities</div>
                      <div className="s-item"><div className="s-dot" /><span>Role-specific training sessions</span></div>
                      <div className="s-item"><div className="s-dot" /><span>Certification tests against client standards</span></div>
                      <div className="s-item"><div className="s-dot" /><span>Calibration exercises on sample data</span></div>
                      <div className="s-item"><div className="s-dot" /><span>Tool and platform practice</span></div>
                      <div className="s-item"><div className="s-dot" /><span>Quality benchmarking against agreed thresholds</span></div>
                    </div>
                    <div className="s-col">
                      <div className="s-col-h">certification outputs</div>
                      <div className="s-item"><div className="s-dot" /><span>Project-specific onboarding completed</span></div>
                      <div className="s-item"><div className="s-dot" /><span>Guideline drill results reviewed</span></div>
                      <div className="s-item"><div className="s-dot" /><span>Sample review with PM sign-off</span></div>
                      <div className="s-item"><div className="s-dot" /><span>Accuracy standards confirmed per contractor</span></div>
                      <div className="s-item"><div className="s-dot" /><span>Certification report issued</span></div>
                    </div>
                  </div>
                  <div className="meaning"><div className="m-arr">→</div><div><div className="m-lbl">what this means</div><div className="m-txt">Training and certification happen before execution — not after. No contractor enters production without demonstrating they understand the client's quality bar, reducing errors and rework from day one.</div></div></div>
                </div>
              </div>

              <div className="conn"><div className="conn-line" /><div className="conn-pill">validate before scaling</div><div className="conn-line" /></div>

              <div className="stage">
                <div className="s-num-col"><div className="s-num">03</div></div>
                <div className="s-body">
                  <div className="s-head"><h3>Pilot Execution</h3><div className="s-tag">per agreed scope</div></div>
                  <p className="s-desc">The trained team executes the agreed pilot scope under full BDH operational structure: Project Manager overseeing delivery, Team Lead coordinating daily execution, and Independent QA Reviewers validating 100% of output — the same framework used in full production engagements.</p>
                  <div className="s-tasks">
                    <div className="s-col">
                      <div className="s-col-h">execution activities</div>
                      <div className="s-item"><div className="s-dot" /><span>Pilot batch production</span></div>
                      <div className="s-item"><div className="s-dot" /><span>QA benchmarking against agreed criteria</span></div>
                      <div className="s-item"><div className="s-dot" /><span>Edge-case identification and resolution</span></div>
                      <div className="s-item"><div className="s-dot" /><span>Client feedback integration</span></div>
                      <div className="s-item"><div className="s-dot" /><span>Workflow recalibration as needed</span></div>
                    </div>
                    <div className="s-col">
                      <div className="s-col-h">monitoring outputs</div>
                      <div className="s-item"><div className="s-dot" /><span>Live sample review by QA team</span></div>
                      <div className="s-item"><div className="s-dot" /><span>Data quality checks at every stage</span></div>
                      <div className="s-item"><div className="s-dot" /><span>Throughput and pace assessment</span></div>
                      <div className="s-item"><div className="s-dot" /><span>Issue resolution log maintained</span></div>
                      <div className="s-item"><div className="s-dot" /><span>Pilot execution report compiled</span></div>
                    </div>
                  </div>
                  <div className="qa-box">
                    <div className="qa-head"><h4>Independent QA Framework</h4><p>QA team structurally separated from production. No shared management. 100% of all outputs reviewed.</p></div>
                    <div className="qa-grid">
                      <div className="qa-cell"><div className="qa-l">coverage</div><div className="qa-v">100% of all output</div><div className="qa-d">No sampling. Every item reviewed before delivery.</div></div>
                      <div className="qa-cell"><div className="qa-l">error classification</div><div className="qa-v">Critical / Major / Minor</div><div className="qa-d">All errors classified, logged, and root-cause analysed.</div></div>
                      <div className="qa-cell"><div className="qa-l">IAA tracking</div><div className="qa-v">Inter-Annotator Agreement</div><div className="qa-d">Consistency metrics tracked across the contractor cohort.</div></div>
                      <div className="qa-cell"><div className="qa-l">correction cycle</div><div className="qa-v">Within 24 hours</div><div className="qa-d">Errors corrected, contractor feedback applied within 24 hours.</div></div>
                    </div>
                  </div>
                  <div className="meaning"><div className="m-arr">→</div><div><div className="m-lbl">what this means</div><div className="m-txt">Proof the process with real work before scaling into full production. Issues that would surface weeks into a large engagement are identified and resolved during the pilot at low cost and low risk.</div></div></div>
                </div>
              </div>

              <div className="conn"><div className="conn-line" /><div className="conn-pill">results → roadmap</div><div className="conn-line" /></div>

              <div className="stage">
                <div className="s-num-col"><div className="s-num">04</div></div>
                <div className="s-body">
                  <div className="s-head"><h3>Performance Review &amp; Production Roadmap</h3><div className="s-tag">your decision</div></div>
                  <p className="s-desc">Upon completion, BDH reviews results with the client, refines the workflow, and builds a production roadmap for reliable scale. Production begins only on the client's signal — no automatic rollover, no lock-in.</p>
                  <div className="s-tasks">
                    <div className="s-col">
                      <div className="s-col-h">review activities</div>
                      <div className="s-item"><div className="s-dot" /><span>Performance review against success criteria</span></div>
                      <div className="s-item"><div className="s-dot" /><span>Quality and accuracy metrics analysis</span></div>
                      <div className="s-item"><div className="s-dot" /><span>IAA score assessment</span></div>
                      <div className="s-item"><div className="s-dot" /><span>Deliverable analytics review</span></div>
                      <div className="s-item"><div className="s-dot" /><span>Process improvement identification</span></div>
                    </div>
                    <div className="s-col">
                      <div className="s-col-h">client deliverables</div>
                      <div className="s-item"><div className="s-dot" /><span>Completed pilot deliverables</span></div>
                      <div className="s-item"><div className="s-dot" /><span>Full QA and accuracy report</span></div>
                      <div className="s-item"><div className="s-dot" /><span>Throughput and productivity metrics</span></div>
                      <div className="s-item"><div className="s-dot" /><span>Scalability and capacity assessment</span></div>
                      <div className="s-item"><div className="s-dot" /><span>Production engagement roadmap</span></div>
                    </div>
                  </div>
                  <div className="meaning"><div className="m-arr">→</div><div><div className="m-lbl">what this means</div><div className="m-txt">This phase turns pilot learnings into a repeatable, production-ready roadmap. The client has full visibility into performance before deciding to scale — with a documented plan ready to activate on their signal.</div></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="div" />

        <div className="sec">
          <div className="wrap">
            <div className="sec-lbl">03 — commitments</div>
            <div className="sec-h">SLA &amp; Delivery Standards</div>
            <p className="sec-d">The same quality commitments apply to every engagement. Enterprise tier applies to 500+ hours/month or multi-service contracts.</p>
            <div className="sla">
              <div className="sla-hdr"><span>Metric</span><span>Standard</span><span>Enterprise</span></div>
              <div className="sla-grp">pilot phase</div>
              <div className="sla-row"><span>Discovery &amp; Planning</span><span>24 hours</span><span>24 hours</span></div>
              <div className="sla-row"><span>Team Training &amp; Certification</span><span>Depends on complexity</span><span>Depends on complexity</span></div>
              <div className="sla-row"><span>First Deliverables</span><span>Per agreed scope</span><span>Per agreed scope</span></div>
              <div className="sla-grp">production engagement</div>
              <div className="sla-row"><span>Initial Response Time</span><span>&lt; 4 hours</span><span>&lt; 1 hour</span></div>
              <div className="sla-row"><span>QA Coverage</span><span>100%</span><span>100%</span></div>
              <div className="sla-row"><span>Accuracy Target</span><span>90%+</span><span>90%+</span></div>
              <div className="sla-row"><span>Progress Reporting</span><span>Daily summary</span><span>Real-time dashboard</span></div>
              <div className="sla-row"><span>Error Resolution</span><span>&lt; 48 hours</span><span>&lt; 12–24 hours</span></div>
              <div className="sla-row"><span>Onboarding to Production</span><span>Within 1 week</span><span>Within 1 week</span></div>
            </div>
          </div>
        </div>

        <div className="final">
          <div className="wrap">
            <div className="tag" style={{ justifyContent: "center" }}>one_clear_path // always</div>
            <h2>Ready to move forward?</h2>
            <p>One professional delivery path, clearly mapped. Reach out to align on requirements, timing, and the right delivery model for your project.</p>
            <div>
              <button className="btn-primary" onClick={() => navigate("contact")}>Contact us to begin →</button>
              <button className="btn-secondary" onClick={() => navigate("pilot")}>Learn about the pilot</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Operations;
