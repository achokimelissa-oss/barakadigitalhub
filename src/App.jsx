import { useState, useEffect, useRef } from "react";


const ArrowRight = ({size=16}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>);
const ChevronRight = ({size=15}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>);
const ChevronLeft = ({size=18}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>);
const CheckCircle2 = ({size=28, style}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>);
const Menu = ({size=24}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>);
const X = ({size=24}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>);
const Globe = ({size=28}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>);
const Cpu = ({size=28}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>);
const Mic = ({size=28}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>);
const Brain = ({size=28}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/></svg>);
const Headphones = ({size=28}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>);
const Users = ({size=18}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>);
const Clock = ({size=18}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>);
const Zap = ({size=18}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>);
const Shield = ({size=18}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>);
const TrendingUp = ({size=18}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>);
const ArrowUpRight = ({size=16}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>);

const LOGO = [
  "data:image/png;base64,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.",
].join("");

const NAV_LOGO = [
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAADMCAIAAAAkr+c7AAABhGlDQ1BJQ0",
  "MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TpSIVBzuIOGSoThZERRy1CkWoEGqFVh1MLv2CJg1Jiouj4Fpw8G",
  "Ox6uDirKuDqyAIfoA4OjkpukiJ/0sKLWI8OO7Hu3uPu3eA0Kgw1eyaAFTNMlKJuJjNrYrBVwQxghBiiJ",
  "iZqidTqTQ8x9c9fHy9i/Is73N/jp6cbzDAJxLPMt2wiDeIZzYtnfM+cZiVJIX4nHjCoAsSP3JddvmNc9",
  "FhgWeGjUxqnjhMLBY7WO5gVjJU4hniuKJqlC9kXVY4b3FWKzXWuid/YTivrayyne UghoQSSIIRQoqqA",
  "EixWiMVGikyKEh/38EcdPkMumVwGGDsuoAIVsuP/ge/e2sXJCTcpFAe6X2z7YxgI7gLNum0fR7bdnAD+",
  "Z+DKbvPXGsDMJ+m1phY5gr5t4OK6qSl7wOUOMPLcEVQ5LkshSCgv5+RpeVAH9bjN2zu/X8D8CNS1avwE",
  "ODoGxImXXvfwu7uxr3/OtP93cBYHBvKz2+pAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH6AESD",
  "AsXmlwcUQAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAdSURBVHja7cEBDQAAA",
  "MKg909tDjdhAAAAAAAAAADgbQQAAQ==",
].join("");

// Note: LOGO continues but truncated for readability — full base64 included in src

const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
};

const Counter = ({ target, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView(0.5);
  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(target);
    const isFloat = target.includes(".");
    const steps = 60;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const eased = 1 - Math.pow(1 - step / steps, 3);
      const val = num * eased;
      setCount(isFloat ? val.toFixed(1) : Math.floor(val));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return (
    <span
      ref={ref}
      style={{
        display: "inline-block",
        maxWidth: "100%",
        wordBreak: "break-word",
        overflowWrap: "break-word",
      }}
    >
      {count}{suffix}
    </span>
  );
};

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`
    }}>{children}</div>
  );
};

const ServicesPage = ({ goBack, isMobile }) => {
  const services = [
    { icon: <Globe size={28} />, title: "Computer Vision Annotation", color: "#1d4ed8", accent: "#eff6ff", items: ["Bounding box annotation for object detection", "Semantic & instance segmentation", "Keypoint / pose estimation", "Image classification & tagging", "3D point cloud annotation", "Video object tracking"] },
    { icon: <Brain size={28} />, title: "NLP & Text Processing", color: "#7c3aed", accent: "#f5f3ff", items: ["Named entity recognition (NER)", "Sentiment & intent labeling", "Text classification & categorization", "Question-answer pair generation", "Dialogue annotation", "Language model evaluation"] },
    { icon: <Mic size={28} />, title: "Audio & Speech Processing", color: "#0891b2", accent: "#ecfeff", items: ["Verbatim & clean-read transcription", "Speaker diarization & identification", "Audio classification & tagging", "Phonetic & accent annotation", "Keyword spotting", "Quality assurance review"] },
    { icon: <Cpu size={28} />, title: "LLM Training & RLHF", color: "#059669", accent: "#ecfdf5", items: ["Human preference ranking (RLHF)", "Instruction following evaluation", "Response quality assessment", "Factuality & hallucination review", "Red-teaming & safety evaluation", "Multilingual prompt refinement"] },
    { icon: <CheckCircle2 size={28} />, title: "Transcription & QA", color: "#dc2626", accent: "#fef2f2", items: ["Medical & legal transcription", "Multi-pass QA review pipelines", "Timestamping & speaker tagging", "Proofreading & copy editing", "Subtitle & caption generation", "Verbatim vs. edited style options"] },
    { icon: <Headphones size={28} />, title: "BPO & Virtual Assistance", color: "#d97706", accent: "#fffbeb", items: ["Back-office data processing", "Web research & data extraction", "Email & customer support handling", "Lead generation & list building", "CRM data entry & enrichment", "Document review & indexing"] },
  ];
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(160deg,#f8fbff 0%,#eef9ff 50%,#f0fdf4 100%)", paddingTop: 80 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px" }}>
        <button onClick={goBack} style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", color: "#1d4ed8", fontWeight: 600, fontSize: "0.9rem", marginBottom: 32, fontFamily: "inherit" }}>
          <ChevronLeft size={18} /> Back to Home
        </button>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(29,78,216,0.07)", border: "1px solid rgba(29,78,216,0.12)", borderRadius: 100, padding: "6px 16px", marginBottom: 20 }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#1d4ed8", letterSpacing: "0.07em", textTransform: "uppercase" }}>Full Service Catalog</span>
            </div>
            <h1 className="font-display" style={{ fontSize: "2.4rem", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: 14 }}>Our AI Services in Detail</h1>
            <p style={{ color: "#64748b", fontSize: "1.05rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>Every service is backed by dedicated QA specialists, structured delivery pipelines, and a trained workforce ready to scale.</p>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(340px, 1fr))", gap: 20 }}>
          {services.map((s, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div style={{ background: "white", border: "1px solid #f1f5f9", borderRadius: 20, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div style={{ background: s.accent, padding: "24px 28px", borderBottom: "1px solid #f1f5f9", display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: s.color, display: "flex", alignItems: "center", justifyContent: "center", color: "white", flexShrink: 0 }}>{s.icon}</div>
                  <h2 className="font-display" style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", lineHeight: 1.3 }}>{s.title}</h2>
                </div>
                <div style={{ padding: "20px 28px" }}>
                  {s.items.map((item, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: j < s.items.length - 1 ? 12 : 0 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: s.color, flexShrink: 0, marginTop: 6 }} />
                      <span style={{ fontSize: "0.87rem", color: "#475569", lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.2}>
          <div style={{ marginTop: 48, background: "linear-gradient(135deg, #1d4ed8, #0f9d68)", borderRadius: 24, padding: "40px 36px", textAlign: "center" }}>
            <h3 className="font-display" style={{ fontSize: "1.4rem", fontWeight: 800, color: "white", marginBottom: 12 }}>Need a custom workflow?</h3>
            <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 24, fontSize: "1rem" }}>We tailor annotation pipelines to your exact tooling, formats, and quality thresholds.</p>
            <button onClick={goBack} style={{ background: "white", color: "#0f172a", border: "none", borderRadius: 12, padding: "14px 28px", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer", fontFamily: "inherit" }}>
              Start a Pilot →
            </button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

const OperationsPage = ({ goBack, isMobile }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const pillars = [
    { n: "80+", label: "Trained Taskers", color: "#1d4ed8", desc: "Our workforce is trained across multiple annotation verticals including computer vision, NLP, audio, transcription, and BPO. Each tasker completes role-specific certification before working on client projects. Teams are flexible: our pool of 80+ taskers can be scaled up or reduced to match client requirements.", bullets: ["Role-specific onboarding tracks", "Certification before live project access", "Organized by vertical (CV, NLP, audio, etc.)", "Mentorship from senior annotators"] },
    { n: "100%", label: "QA Review Rate", color: "#0f9d68", desc: "Unlike many providers who spot-check 10–20%, Baraka runs 100% first-pass QA on standard projects. Our QA team is completely independent from annotation.", bullets: ["Independent QA team, not the same annotators", "First-pass error rate tracked per tasker", "Client-visible daily quality reports", "Inter-annotator agreement scoring available"] },
    { n: "48hr", label: "Turnaround Guarantee", color: "#0ea5e9", desc: "Most standard batches (up to 25K items) are delivered within 48 hours of task assignment. Rush timelines are supported with expanded shift coverage.", bullets: ["25K image batches in 48 hours", "Rush delivery with expanded coverage", "Proactive delay communication", "Daily progress updates to clients"] },
    { n: "Cert.", label: "Structured Onboarding", color: "#7c3aed", desc: "Every new engagement begins with a structured onboarding phase: task certification, calibration exercises, and pilot delivery before full-scale launch.", bullets: ["Task-specific certification tests", "Calibration batch before full launch", "Ongoing recalibration for long-running projects", "Documentation of guidelines and edge cases"] },
    { n: "24/7", label: "Centralized Operations", color: "#d97706", desc: "Baraka's operations team manages scheduling, escalations, communication, and reporting across all active projects. Clients have a single point of contact.", bullets: ["Single client-side point of contact", "Escalation protocols for complex edge cases", "Shift-based scheduling for coverage", "Consolidated reporting dashboard"] },
    { n: "Long", label: "Production-Grade Partnerships", color: "#dc2626", desc: "We are built for long-term engagements, not one-off batches. Our infrastructure supports ongoing annotation pipelines and multi-month production contracts.", bullets: ["Month-over-month consistency tracking", "Volume ramp plans for growing pipelines", "SLA-based delivery commitments", "Dedicated team assignment for continuity"] },
  ];
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(160deg,#f8fbff 0%,#eef9ff 50%,#f0fdf4 100%)", paddingTop: 80 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
        <button onClick={goBack} style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", color: "#1d4ed8", fontWeight: 600, fontSize: "0.9rem", marginBottom: 32, fontFamily: "inherit" }}>
          <ChevronLeft size={18} /> Back to Home
        </button>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(15,157,104,0.07)", border: "1px solid rgba(15,157,104,0.12)", borderRadius: 100, padding: "6px 16px", marginBottom: 20 }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#0f9d68", letterSpacing: "0.07em", textTransform: "uppercase" }}>Operational Infrastructure</span>
            </div>
            <h1 className="font-display" style={{ fontSize: "2.4rem", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: 14 }}>Built for Reliable Scale</h1>
            <p style={{ color: "#64748b", fontSize: "1.05rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>Six pillars that make Baraka Digital Hub a trustworthy long-term AI data partner.</p>
          </div>
        </FadeIn>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {pillars.map((p, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div style={{ background: "white", border: "1px solid #f1f5f9", borderRadius: 20, padding: "28px 32px", boxShadow: "0 2px 12px rgba(0,0,0,0.04)", display: "flex", gap: 28, alignItems: "flex-start", flexWrap: "wrap" }}>
                <div style={{ flexShrink: 0 }}>
                  <div className="font-display" style={{ fontSize: "2.4rem", fontWeight: 800, color: p.color, letterSpacing: "-0.03em", lineHeight: 1 }}>{p.n}</div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.07em", marginTop: 4 }}>{p.label}</div>
                </div>
                <div style={{ flex: 1, minWidth: 240 }}>
                  <p style={{ color: "#475569", fontSize: "0.92rem", lineHeight: 1.8, marginBottom: 16 }}>{p.desc}</p>
                  <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 8 }}>
                    {p.bullets.map((b, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                        <CheckCircle2 size={13} style={{ color: p.color, flexShrink: 0, marginTop: 2 }} />
                        <span style={{ fontSize: "0.82rem", color: "#64748b", lineHeight: 1.5 }}>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

const WorkflowPage = ({ goBack, setPage, isMobile }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const steps = [
    { n: 1, title: "Project Intake", desc: "Client shares dataset specs, quality requirements, tooling preferences, and timeline. We review and confirm feasibility within 24 hours.", color: "#1d4ed8" },
    { n: 2, title: "Tasker Onboarding", desc: "We assign a specialized team and run task-specific certification. Team leaders are trained first and then train their teams. Taskers complete training to understand client requirements and must pass a calibration test before accessing the live dataset.", color: "#7c3aed" },
    { n: 3, title: "Dataset Segmentation", desc: "The dataset is divided into manageable batches and assigned across the team. Load is balanced to maintain throughput and reduce bottlenecks.", color: "#0891b2" },
    { n: 4, title: "Annotation Execution", desc: "Taskers work in the client's chosen environment (CVAT, Label Studio, Scale, or custom tooling). All work is tracked in real-time.", color: "#059669" },
    { n: 5, title: "100% QA Review", desc: "An independent QA team reviews every annotation before delivery. Errors are logged, corrected, and fed back into the calibration system.", color: "#d97706" },
    { n: 6, title: "Final Delivery", desc: "Completed, QA-verified data is exported in the client's required format. A quality report and summary metrics are included with every delivery.", color: "#dc2626" },
  ];
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(160deg,#f8fbff 0%,#eef9ff 50%,#f0fdf4 100%)", paddingTop: 80 }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "48px 24px" }}>
        <button onClick={goBack} style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", color: "#1d4ed8", fontWeight: 600, fontSize: "0.9rem", marginBottom: 32, fontFamily: "inherit" }}>
          <ChevronLeft size={18} /> Back to Home
        </button>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h1 className="font-display" style={{ fontSize: "2.4rem", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: 14 }}>How We Deliver</h1>
            <p style={{ color: "#64748b", fontSize: "1.05rem", maxWidth: 520, margin: "0 auto", lineHeight: 1.75 }}>A transparent, six-stage delivery pipeline designed for production-grade AI data annotation.</p>
          </div>
        </FadeIn>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: 27, top: 48, bottom: 48, width: 2, background: "linear-gradient(to bottom, #1d4ed8, #dc2626)", borderRadius: 2 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {steps.map((s, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div style={{ display: "flex", gap: 24, paddingBottom: i < steps.length - 1 ? 32 : 0 }}>
                  <div style={{ flexShrink: 0, width: 56, height: 56, borderRadius: "50%", background: s.color, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 18, position: "relative", zIndex: 1, boxShadow: `0 0 0 4px #f8fafc` }}>{s.n}</div>
                  <div style={{ background: "white", flex: 1, borderRadius: 16, padding: "20px 24px", border: "1px solid #f1f5f9", boxShadow: "0 2px 12px rgba(0,0,0,0.04)", marginTop: 4 }}>
                    <h3 className="font-display" style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", marginBottom: 8 }}>{s.title}</h3>
                    <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.7 }}>{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <FadeIn delay={0.2}>
          <div style={{ marginTop: 48, background: "#020617", borderRadius: 24, padding: "40px 36px", display: "flex", gap: 32, alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 240 }}>
              <h3 className="font-display" style={{ fontSize: "1.35rem", fontWeight: 800, color: "white", marginBottom: 8 }}>Ready to run a pilot?</h3>
              <p style={{ color: "#64748b", fontSize: "0.92rem", lineHeight: 1.7 }}>Send us your dataset specs and we'll return a delivery plan within 24 hours.</p>
            </div>
            <button onClick={() => setPage("pilot")} style={{ flexShrink: 0, background: "linear-gradient(135deg, #1d4ed8, #0f9d68)", color: "white", border: "none", borderRadius: 12, padding: "14px 28px", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", gap: 8 }}>
              Start Pilot <ArrowRight size={16} />
            </button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

const AboutPage = ({ goBack, isMobile }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(160deg,#f8fbff 0%,#eef9ff 50%,#f0fdf4 100%)", paddingTop: 80 }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "48px 24px" }}>
        <button onClick={goBack} style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", color: "#1d4ed8", fontWeight: 600, fontSize: "0.9rem", marginBottom: 32, fontFamily: "inherit" }}>
          <ChevronLeft size={18} /> Back to Home
        </button>
        <FadeIn>
          <div style={{ marginBottom: 48 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.15)", borderRadius: 100, padding: "6px 16px", marginBottom: 20 }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#d97706", letterSpacing: "0.07em", textTransform: "uppercase" }}>About Baraka Digital Hub</span>
            </div>
            <h1 className="font-display" style={{ fontSize: "2.4rem", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: 14 }}>About Us</h1>
            <p style={{ color: "#64748b", fontSize: "1.05rem", maxWidth: 680, lineHeight: 1.75, marginBottom: 14 }}>
              Baraka Digital Hub is a social impact digital services centre based in Nairobi, Kenya. We deliver reliable, measurable digital solutions to international clients across AI training, transcription, BPO services, and specialized data operations, including computer vision annotation, natural language processing datasets, and audio and speech processing.
            </p>
            <p style={{ color: "#64748b", fontSize: "1.05rem", maxWidth: 680, lineHeight: 1.75 }}>
              Each engagement is structured to generate dual impact. It provides fair and consistent income opportunities for young people from underserved communities while simultaneously supporting the education and welfare of children at Baraka Children’s Home and the surrounding community. This dual-impact model is embedded in our operations.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="about-grid" style={{ gap: 24, marginBottom: 40 }}>
            <div className="about-card" style={{ padding: "32px", border: "1px solid #e2e8f0" }}>
              <h2 className="section-h2" style={{ marginBottom: 18 }}>How We Started</h2>
              <p style={{ color: "#475569", fontSize: "0.97rem", lineHeight: 1.8, marginBottom: 16 }}>
                Baraka Digital Hub was established from the foundation of Baraka Children’s Home, which has served the Kayole community in Nairobi, Kenya since 2006 as a centre for care, protection, and education for vulnerable children.
              </p>
              <p style={{ color: "#475569", fontSize: "0.97rem", lineHeight: 1.8, marginBottom: 16 }}>
                As the children under care matured, a clear gap emerged between access to support and access to sustainable economic opportunity. This transition highlighted the need for a structured pathway that extends beyond care into skills development and meaningful employment.
              </p>
              <p style={{ color: "#475569", fontSize: "0.97rem", lineHeight: 1.8, marginBottom: 16 }}>
                Before the Hub was formally established, we began by helping young people apply for remote work opportunities individually. We trained them in digital work, guided them through onboarding processes, and supported them in accessing online earning platforms and freelance opportunities.
              </p>
              <p style={{ color: "#475569", fontSize: "0.97rem", lineHeight: 1.8, marginBottom: 16 }}>
                Through this experience, we recognized a larger opportunity. Individual placements created impact, but a centralized model could create greater stability, accountability, scalability, and employability. By building a structured hub, we could provide shared infrastructure, organized training, quality assurance systems, operational oversight, and a professional working environment that strengthened both consistency and long-term growth.
              </p>
              <p style={{ color: "#475569", fontSize: "0.97rem", lineHeight: 1.8, marginBottom: 16 }}>
                In response, Baraka Digital Hub was created to bridge the gap between potential and opportunity. What began as grassroots support for remote work evolved into a structured digital workforce model capable of delivering professional services to global clients.
              </p>
              <p style={{ color: "#475569", fontSize: "0.97rem", lineHeight: 1.8 }}>
                Today, Baraka Digital Hub operates as a quality-driven digital services organization focused on delivery excellence, workforce development, and long-term economic inclusion.
              </p>
            </div>
            <div className="about-panel accent-cyan" style={{ padding: "32px", border: "1px solid #dbeafe" }}>
              <h2 className="section-h2" style={{ marginBottom: 18 }}>Our Identity</h2>
              <p style={{ color: "#475569", fontSize: "0.97rem", lineHeight: 1.8, marginBottom: 16 }}>
                Baraka Digital Hub is built on a core belief: talent is universal, but opportunity is not. Our mission is to close this gap by connecting underserved young people to structured digital employment and global work opportunities.
              </p>
              <p style={{ color: "#475569", fontSize: "0.97rem", lineHeight: 1.8, marginBottom: 16 }}>
                We operate as a professional services organization with a strong social impact mandate, combining commercial discipline with measurable community outcomes.
              </p>
              <p style={{ color: "#475569", fontSize: "0.97rem", lineHeight: 1.8 }}>
                We are not a charity. We are a business built for sustainable impact.
              </p>
            </div>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 20, marginBottom: 32 }}>
          {[
            { title: "The Mission", icon: "🎯", text: "Baraka Digital Hub exists to demonstrate that communities in Africa can produce production-grade AI training data at global standards. Every successful delivery builds the case that geography is not a limitation." },
            { title: "The Model", icon: "♻️", text: "Unlike charity-dependent organizations, Baraka is built as a commercial sustainability model. Revenue from AI data services directly funds operations, workforce development, and the broader mission of Baraka Children's Home." },
            { title: "Youth Employment", icon: "👥", text: "We prioritize hiring youth from underserved communities in Africa, providing structured training, mentorship, and real-world experience in AI data production — skills that transfer to global opportunities." },
            { title: "Skills for the Future", icon: "📈", text: "Our training programs go beyond task completion. Taskers develop transferable skills in quality assurance, data analysis, client communication, and AI fundamentals — building long-term career foundations." },
          ].map((card, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div className="about-card" style={{ padding: "28px 24px", border: "1px solid #f1f5f9", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div style={{ fontSize: "2rem", marginBottom: 14 }}>{card.icon}</div>
                <h3 className="font-display" style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", marginBottom: 10 }}>{card.title}</h3>
                <p style={{ color: "#64748b", fontSize: "0.88rem", lineHeight: 1.75 }}>{card.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.18}>
          <div style={{ background: "white", borderRadius: 24, padding: "36px 32px", border: "1px solid #e2e8f0", boxShadow: "0 18px 48px rgba(15,23,42,0.06)" }}>
            <h2 className="section-h2" style={{ marginBottom: 24 }}>Core Principles</h2>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
              <div style={{ background: "#f8fafc", borderRadius: 20, padding: "24px", border: "1px solid #e2e8f0" }}>
                <strong>Teamwork</strong>
                <p style={{ marginTop: 10, color: "#475569", lineHeight: 1.7 }}>We believe strong results come from collaboration, shared responsibility, and mutual support.</p>
              </div>
              <div style={{ background: "#f8fafc", borderRadius: 20, padding: "24px", border: "1px solid #e2e8f0" }}>
                <strong>Dignity</strong>
                <p style={{ marginTop: 10, color: "#475569", lineHeight: 1.7 }}>We create opportunities that respect people, value their contribution, and promote self-worth.</p>
              </div>
              <div style={{ background: "#f8fafc", borderRadius: 20, padding: "24px", border: "1px solid #e2e8f0" }}>
                <strong>Accountability</strong>
                <p style={{ marginTop: 10, color: "#475569", lineHeight: 1.7 }}>We take ownership of our work, our standards, and the impact we create.</p>
              </div>
              <div style={{ background: "#f8fafc", borderRadius: 20, padding: "24px", border: "1px solid #e2e8f0" }}>
                <strong>Excellence</strong>
                <p style={{ marginTop: 10, color: "#475569", lineHeight: 1.7 }}>We are committed to delivering reliable, high-quality work that meets professional standards.</p>
              </div>
              <div style={{ background: "#f8fafc", borderRadius: 20, padding: "24px", border: "1px solid #e2e8f0" }}>
                <strong>Opportunity</strong>
                <p style={{ marginTop: 10, color: "#475569", lineHeight: 1.7 }}>We exist to open pathways for growth, employment, and long-term transformation.</p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.22}>
          <div style={{ display: "grid", gap: 24, marginBottom: 40 }}>
            <div style={{ background: "white", borderRadius: 24, padding: "32px", border: "1px solid #e2e8f0", boxShadow: "0 18px 48px rgba(15,23,42,0.06)" }}>
              <h2 className="section-h2" style={{ marginBottom: 18 }}>From Our Head of Operations</h2>
              <div style={{ color: "#475569", lineHeight: 1.9, marginBottom: 18 }}>
                <p>“Baraka Digital Hub was built on a simple belief: talent is universal, but opportunity is not.</p>
                <p>Our vision is to create a pathway where young people from underserved communities can access meaningful digital work, develop globally competitive skills, and build sustainable futures for themselves and their families.</p>
                <p>We are building more than a workforce centre. We are building a model of economic inclusion powered by technology, discipline, and purpose.</p>
                <p>Every project delivered is an opportunity created, a skill strengthened, and a future made more stable.</p>
                <p>We are ready to partner with organizations that value both excellence and impact.”</p>
              </div>
              <p style={{ color: "#0f172a", fontWeight: 700, marginTop: 12 }}>Timothy Mwangi<br />Head of Operations</p>
              <p style={{ color: "#475569", marginTop: 12 }}>Reach out via the Contact page to send your inquiry directly to our team.</p>
            </div>
            <div style={{ background: "white", borderRadius: 24, padding: "32px", border: "1px solid #e2e8f0", boxShadow: "0 18px 48px rgba(15,23,42,0.06)" }}>
              <h2 className="section-h2" style={{ marginBottom: 18 }}>From Our President and Mama Baraka</h2>
              <div style={{ color: "#475569", lineHeight: 1.9, marginBottom: 18 }}>
                <p>“My life has always been rooted in children — loving them, raising them, and standing beside them through every season of their growth. As Mama Baraka, my deepest calling has been to ensure that no child under our care ever feels forgotten or without a future.</p>
                <p>Baraka Digital Hub was born from that responsibility and that love. It is an extension of the Children’s Home, built to ensure that our young people step into adulthood with skills, confidence, and opportunity.</p>
                <p>Care must evolve into empowerment, and charity must grow into dignity.</p>
                <p>This work is family. It is love translated into opportunity.”</p>
              </div>
              <p style={{ color: "#0f172a", fontWeight: 700, marginTop: 12 }}>Margrate Kimaru<br />President and Mama Baraka</p>
              <p style={{ color: "#475569", marginTop: 12 }}>Reach out via the Contact page to send your inquiry directly to our team.</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

const CareersPage = ({ goBack, setPage, isMobile }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(160deg,#f8fbff 0%,#eef9ff 50%,#f0fdf4 100%)", paddingTop: 80 }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "48px 24px" }}>
        <button onClick={goBack} style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", color: "#1d4ed8", fontWeight: 600, fontSize: "0.9rem", marginBottom: 32, fontFamily: "inherit" }}>
          <ChevronLeft size={18} /> Back to Home
        </button>
        <FadeIn>
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(29,78,216,0.08)", border: "1px solid rgba(29,78,216,0.15)", borderRadius: 100, padding: "6px 16px", marginBottom: 20 }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#1d4ed8", letterSpacing: "0.07em", textTransform: "uppercase" }}>Careers</span>
            </div>
            <h1 className="font-display" style={{ fontSize: "2.4rem", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: 14 }}>Join our growing team</h1>
            <p style={{ color: "#64748b", fontSize: "1.05rem", maxWidth: 720, lineHeight: 1.75, marginBottom: 24 }}>
              Explore career opportunities at Baraka Digital Hub. We build dependable AI data services while creating sustainable income and training pathways for young people in Nairobi.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ background: "white", borderRadius: 24, padding: "40px 32px", border: "1px solid #e2e8f0", boxShadow: "0 18px 48px rgba(15,23,42,0.06)", textAlign: "center" }}>
            <h2 className="section-h2" style={{ marginBottom: 18 }}>No open roles right now</h2>
            <p style={{ color: "#475569", fontSize: "1rem", lineHeight: 1.8, maxWidth: 660, margin: "0 auto 24px" }}>
              We are not actively hiring at the moment, but we still welcome inquiries from talented people who want to join our mission. If you'd like to connect, send us a note and we’ll let you know when the next opportunities become available.
            </p>
            <button onClick={() => setPage("contact")} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "14px 24px", borderRadius: 12, background: "#1d4ed8", color: "white", fontWeight: 700, border: "none", cursor: "pointer" }}>
              Use the Contact page to reach us <ArrowRight size={16} />
            </button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

const PrivacyPage = ({ goBack, isMobile }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const sectionGrid = isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))";
  const rightsGrid = isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))";

  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fb", paddingTop: 80 }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "32px 20px 48px" }}>
        <button onClick={goBack} style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", color: "#0d2b4e", fontWeight: 700, fontSize: "0.95rem", marginBottom: 28, fontFamily: "inherit" }}>
          <ChevronLeft size={18} /> Back to Home
        </button>

        <FadeIn>
          <div style={{ marginBottom: 24, padding: "26px 24px", borderRadius: 24, background: "#0d2b4e", color: "white" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#0d7377", borderRadius: 999, padding: "6px 14px", marginBottom: 18 }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase" }}>Compliance & Privacy</span>
            </div>
            <h1 className="font-display" style={{ fontSize: isMobile ? "2rem" : "2.8rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: 18 }}>Our commitment to data security and privacy</h1>
            <p style={{ color: "#d1d5db", fontSize: isMobile ? "1rem" : "1.05rem", lineHeight: 1.8, maxWidth: 760 }}>
              Baraka Digital Hub operates in alignment with ISO 27001 and ISO 9001 frameworks. Every client engagement is governed by strict data handling protocols, signed NDAs, and full transparency over how information is stored, processed, and protected.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 18 }}>
              {["ISO 27001 Aligned", "ISO 9001 Aligned", "GDPR Principles", "Kenya Data Protection Act 2019"].map((label, index) => (
                <span key={index} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(13,115,119,0.15)", border: "1px solid rgba(13,115,119,0.22)", borderRadius: 999, padding: "7px 14px", fontSize: "0.82rem", color: "#d1f2f2" }}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div style={{ display: "grid", gap: 12, gridTemplateColumns: sectionGrid, marginBottom: 16 }}>
            <div style={{ background: "white", borderRadius: 24, padding: "24px 22px", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 16px 40px rgba(15,23,42,0.05)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div style={{ width: 36, height: 36, borderRadius: 12, background: "#e6f4f4", display: "grid", placeItems: "center", color: "#0d7377", fontSize: 16 }}>
                  🔒
                </div>
                <h2 className="section-h2" style={{ margin: 0, fontSize: "1.1rem" }}>ISO 27001</h2>
              </div>
              <p style={{ color: "#475569", lineHeight: 1.75 }}>
                Our information security practices are structured around ISO 27001 principles — the international standard for managing information security risks.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "18px 0 0", display: "grid", gap: 10, color: "#475569" }}>
                {[
                  "All staff sign NDAs before accessing any client data",
                  "Locked workstations during all client work sessions",
                  "No personal devices permitted in project areas",
                  "Managed company email accounts for all taskers",
                  "Role-based access controls — only assigned personnel access project data",
                  "Client data deleted upon project completion"
                ].map((item, index) => (
                  <li key={index} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <span style={{ color: "#0d7377", marginTop: 2 }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ background: "white", borderRadius: 24, padding: "24px 22px", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 16px 40px rgba(15,23,42,0.05)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div style={{ width: 36, height: 36, borderRadius: 12, background: "#fef3dc", display: "grid", placeItems: "center", color: "#a0660d", fontSize: 16 }}>
                  🏆
                </div>
                <h2 className="section-h2" style={{ margin: 0, fontSize: "1.1rem" }}>ISO 9001</h2>
              </div>
              <p style={{ color: "#475569", lineHeight: 1.75 }}>
                Our quality procedures follow ISO 9001 principles — ensuring consistent, measurable, and continuously improving service delivery.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "18px 0 0", display: "grid", gap: 10, color: "#475569" }}>
                {[
                  "Documented procedures for every service type",
                  "Minimum 95% certification pass before any live project",
                  "100% QA review after first pass — not spot-checking",
                  "Error logging with root-cause categorisation",
                  "Weekly accuracy and performance reports to clients",
                  "Continuous improvement through targeted retraining"
                ].map((item, index) => (
                  <li key={index} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <span style={{ color: "#a0660d", marginTop: 2 }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ background: "white", borderRadius: 24, border: "1px solid rgba(0,0,0,0.08)", padding: "26px 24px", marginBottom: 16 }}>
            <div style={{ display: "grid", gap: 18, gridTemplateColumns: sectionGrid }}>
              <div>
                <p style={{ fontSize: "0.82rem", fontWeight: 700, color: "#0d2b4e", marginBottom: 10 }}>Client-provided data</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10, color: "#475569" }}>
                  {[
                    "Project files and task materials shared for annotation, transcription, or processing",
                    "Contact information for communication and invoicing",
                    "Platform credentials if operating within your environment"
                  ].map((item, index) => (
                    <li key={index} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <span style={{ color: "#0d7377", marginTop: 2 }}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p style={{ fontSize: "0.82rem", fontWeight: 700, color: "#0d2b4e", marginBottom: 10 }}>Website visitor data</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10, color: "#475569" }}>
                  {[
                    "Name and email address submitted via contact or enquiry forms",
                    "General analytics data (page visits, device type) — no personal identifiers",
                    "No advertising cookies or tracking pixels used"
                  ].map((item, index) => (
                    <li key={index} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <span style={{ color: "#0d7377", marginTop: 2 }}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div style={{ display: "grid", gap: 12, gridTemplateColumns: sectionGrid, marginBottom: 16 }}>
            {[
              { label: "Project data", title: "Deleted at completion", text: "All client files and task materials are securely deleted upon project sign-off. No retention." },
              { label: "Contact records", title: "Up to 24 months", text: "Business contact details retained for ongoing client relationship management. Erasable on request." },
              { label: "Invoicing & billing", title: "7 years", text: "Financial records retained in compliance with Kenyan tax regulations (Income Tax Act)." },
              { label: "NDAs & agreements", title: "Duration + 5 years", text: "Contractual documents retained for legal compliance and audit purposes." }
            ].map((card, index) => (
              <div key={index} style={{ background: "#eff6ff", borderRadius: 20, padding: "22px 20px", border: "1px solid #dbeafe" }}>
                <span style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>{card.label}</span>
                <strong style={{ display: "block", fontSize: "1rem", color: "#0d2b4e", marginBottom: 10 }}>{card.title}</strong>
                <p style={{ color: "#475569", lineHeight: 1.65, margin: 0 }}>{card.text}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div style={{ background: "white", borderRadius: 24, border: "1px solid rgba(0,0,0,0.08)", padding: "26px 24px", marginBottom: 16 }}>
            <div style={{ display: "grid", gap: 18, marginBottom: 16 }}>
              <h2 className="section-h2" style={{ margin: 0, fontSize: "1.35rem", color: "#0d2b4e" }}>Your rights under our privacy framework</h2>
              <p style={{ color: "#475569", lineHeight: 1.75, margin: 0 }}>
                In alignment with GDPR principles and the Kenya Data Protection Act 2019, you have the following rights over any personal data we hold:
              </p>
            </div>
            <div style={{ display: "grid", gap: 12, gridTemplateColumns: rightsGrid }}>
              {[
                { title: "Access", text: "Request a copy of any personal data we hold about you" },
                { title: "Rectification", text: "Ask us to correct inaccurate or incomplete data" },
                { title: "Erasure", text: "Request deletion of your personal data at any time" },
                { title: "Portability", text: "Receive your data in a structured, machine-readable format" },
                { title: "Restriction", text: "Ask us to limit how we process your data" },
                { title: "Objection", text: "Object to processing where legitimate interest applies" }
              ].map((item, index) => (
                <div key={index} style={{ background: "#f1f5f9", borderRadius: 18, padding: "18px 16px" }}>
                  <span style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "#0d7377", marginBottom: 6 }}>{item.title}</span>
                  <p style={{ color: "#475569", lineHeight: 1.6, margin: 0 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div style={{ background: "white", borderRadius: 24, border: "1px solid rgba(0,0,0,0.08)", padding: "26px 24px", marginBottom: 16 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 42, height: 42, borderRadius: 14, background: "#e6f4f4", display: "grid", placeItems: "center", color: "#0d7377", fontSize: 18 }}>🏛️</div>
                <h2 className="section-h2" style={{ margin: 0, fontSize: "1.25rem", color: "#0d2b4e" }}>Regulatory basis & frameworks</h2>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 14, color: "#475569" }}>
                {[
                  { title: "Kenya Data Protection Act 2019", text: "Our primary regulatory obligation. We are committed to registration with the Office of the Data Protection Commissioner (ODPC) as we formalise operations." },
                  { title: "GDPR Principles (EU)", text: "Applied voluntarily to all international client engagements — including lawfulness, data minimisation, purpose limitation, and accountability." },
                  { title: "ISO 27001 Framework", text: "Our information security controls are structured in alignment with ISO 27001. We are working toward formal third-party certification." },
                  { title: "ISO 9001 Framework", text: "Our quality management system follows ISO 9001 principles, with documented procedures, QA checkpoints, and continuous improvement cycles." }
                ].map((item, index) => (
                  <li key={index} style={{ display: "grid", gap: 6 }}>
                    <strong style={{ color: "#0d2b4e", fontSize: "1rem" }}>{item.title}</strong>
                    <span style={{ color: "#475569", lineHeight: 1.7 }}>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>

        <p style={{ marginTop: 24, color: "#64748b", fontSize: "0.95rem", textAlign: "center" }}>
          Last reviewed: May 2026 · Baraka Digital Hub, Nairobi, Kenya
        </p>
      </div>
    </div>
  );
};

const ImpactPage = ({ goBack, isMobile }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(160deg,#f8fbff 0%,#eef9ff 50%,#f0fdf4 100%)", paddingTop: 80 }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "48px 24px" }}>
        <button onClick={goBack} style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", color: "#1d4ed8", fontWeight: 600, fontSize: "0.9rem", marginBottom: 32, fontFamily: "inherit" }}>
          <ChevronLeft size={18} /> Back to Home
        </button>

        <FadeIn>
          <div style={{ marginBottom: 40, padding: "36px 28px", borderRadius: 24, background: "white", boxShadow: "0 24px 80px rgba(15,23,42,0.08)", border: "1px solid #e2e8f0" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 18px", borderRadius: 100, background: "rgba(29,78,216,0.04)", border: "1px solid rgba(29,78,216,0.08)", marginBottom: 20 }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#0f9d68", letterSpacing: "0.08em", textTransform: "uppercase", display: "inline-block", transform: "translateY(-3px)", textShadow: "0 8px 24px rgba(15,157,104,0.06)" }}>Social Impact</span>
            </div>
            <h1 className="font-display" style={{ fontSize: "2.4rem", fontWeight: 900, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: 18 }}>Baraka Digital Hub</h1>
            <p style={{ color: "#475569", fontSize: "1.08rem", lineHeight: 1.85, maxWidth: 760, marginBottom: 20 }}><strong>From Charity to Dignity. From Dependency to Opportunity.</strong></p>
            <p style={{ color: "#64748b", fontSize: "0.97rem", lineHeight: 1.85, maxWidth: 760 }}>We convert commercial digital work into a consistent support system for youth and Baraka Children’s Home. Every project is designed to create measurable social impact, reliable revenue, and a pathway to lasting independence.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="impact-grid" style={{ gap: 18, marginBottom: 40 }}>
            {[
              { label: "of youth in informal settlements are unemployed", value: "67%" },
              { label: "of young people lack formal employment", value: "One in three" },
              { label: "of Baraka children are pursuing sustainable careers", value: "<5%" },
            ].map((item, index) => (
              <div key={index} className="impact-card" style={{ padding: "26px 24px", border: "1px solid #e2e8f0", boxShadow: "0 12px 30px rgba(15,23,42,0.06)" }}>
                <div style={{ color: "#1d4ed8", fontSize: "2rem", fontWeight: 800, fontFamily: "Syne, 'Inter', sans-serif", marginBottom: 10 }}>{item.value}</div>
                <p style={{ color: "#475569", fontSize: "0.94rem", lineHeight: 1.7 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 24, marginBottom: 40 }}>
            <div style={{ background: "white", borderRadius: 24, padding: "32px", border: "1px solid #e2e8f0", boxShadow: "0 18px 48px rgba(15,23,42,0.06)" }}>
              <h2 className="section-h2" style={{ marginBottom: 18 }}>Our Origin: Why We Exist</h2>
              <p style={{ color: "#475569", fontSize: "1rem", lineHeight: 1.8, marginBottom: 16 }}>Baraka Digital Hub was born out of <strong>Baraka Children’s Home</strong>.</p>
              <p style={{ color: "#64748b", fontSize: "0.97rem", lineHeight: 1.8, marginBottom: 16 }}>For nearly two decades, the Children’s Home has been a place of refuge, care, and hope for vulnerable children in Kayole, Nairobi. It provided what every child deserves: safety, food, education, and love.</p>
              <p style={{ color: "#64748b", fontSize: "0.97rem", lineHeight: 1.8 }}>But as those children grew, a difficult reality became clear. Many faced an uncertain transition into adulthood, where access to opportunity, employment, and sustainable livelihoods was limited.</p>
              <p style={{ color: "#0f172a", fontWeight: 700, lineHeight: 1.8, marginTop: 18 }}><strong>Baraka Digital Hub was created to close that gap. It is the bridge between care and independence.</strong></p>
            </div>
            <div style={{ background: "#eff6ff", borderRadius: 24, padding: "32px", border: "1px solid #dbeafe" }}>
              <h2 className="section-h2" style={{ marginBottom: 18 }}>The Problem We Address</h2>
              <p style={{ color: "#475569", fontSize: "0.97rem", lineHeight: 1.8, marginBottom: 16 }}>Traditional charity systems face structural limits that leave young people without a real pathway to economic independence.</p>
              <ul style={{ color: "#475569", fontSize: "0.97rem", lineHeight: 1.8, paddingLeft: 20, marginBottom: 16 }}>
                <li>Donations are unpredictable</li>
                <li>Youth age out of care without market-ready skills</li>
                <li>There is no clear pathway from protection to employment</li>
              </ul>
              <p style={{ color: "#0f172a", fontWeight: 700, lineHeight: 1.8 }}><strong>Baraka Digital Hub exists to change this outcome.</strong></p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 24, marginBottom: 40 }}>
            <div style={{ background: "white", borderRadius: 24, padding: "32px", border: "1px solid #e2e8f0", boxShadow: "0 18px 48px rgba(15,23,42,0.06)" }}>
              <h2 className="section-h2" style={{ marginBottom: 18 }}>Our Dual Impact Model</h2>
              <div style={{ display: "grid", gap: 16 }}>
                {[{ title: "Impact 1", text: "Youth gain access to real digital work, earning fair income and building professional experience." }, { title: "Impact 2", text: "Baraka Children’s Home receives consistent support for education, food, and care." }].map((item, index) => (
                  <div key={index} style={{ background: "#f8fafc", borderRadius: 20, padding: "22px", border: "1px solid #e2e8f0" }}>
                    <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#0f172a", marginBottom: 10 }}>{item.title}</h3>
                    <p style={{ color: "#475569", lineHeight: 1.8 }}>{item.text}</p>
                  </div>
                ))}
              </div>
              <p style={{ color: "#0f172a", fontWeight: 700, lineHeight: 1.8, marginTop: 20 }}>Your invoice is also a school fees receipt.</p>
            </div>
            <div style={{ background: "#f8fafc", borderRadius: 24, padding: "32px", border: "1px solid #e2e8f0" }}>
              <h2 className="section-h2" style={{ marginBottom: 18 }}>How Every Dollar Is Used</h2>
              {[
                { title: "70–80%", text: "Goes to youth earnings so they can build independence and dignity." },
                { title: "10–15%", text: "Supports operations including internet, training, quality assurance, and infrastructure." },
                { title: "5–10%", text: "Supports Baraka Children’s Home including school fees, meals, and essential care." },
              ].map((item, index) => (
                <div key={index} style={{ background: "white", borderRadius: 20, padding: "20px 22px", border: "1px solid #e2e8f0", marginBottom: index < 2 ? 16 : 0 }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#0f172a", marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: "#475569", lineHeight: 1.8 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 24, marginBottom: 40 }}>
            <div style={{ background: "white", borderRadius: 24, padding: "32px", border: "1px solid #e2e8f0", boxShadow: "0 18px 48px rgba(15,23,42,0.06)" }}>
              <h2 className="section-h2" style={{ marginBottom: 18 }}>Who We Serve</h2>
              <p style={{ color: "#475569", fontSize: "0.97rem", lineHeight: 1.8, marginBottom: 16 }}>From the Children’s Home: young people who grew up in care and are now transitioning into independence through skills and digital work.</p>
              <p style={{ color: "#475569", fontSize: "0.97rem", lineHeight: 1.8 }}>From the wider community: out-of-school youth, orphans, and young women from marginalized backgrounds.</p>
              <p style={{ color: "#0f172a", fontWeight: 700, lineHeight: 1.8, marginTop: 18 }}>We do not define people by where they come from. We define them by what they are ready to build.</p>
            </div>
            <div style={{ background: "#eff6ff", borderRadius: 24, padding: "32px", border: "1px solid #dbeafe" }}>
              <h2 className="section-h2" style={{ marginBottom: 18 }}>The Ripple Effect</h2>
              <ul style={{ color: "#475569", fontSize: "0.97rem", lineHeight: 1.8, paddingLeft: 20, marginBottom: 16 }}>
                <li>Client work generates income for youth.</li>
                <li>Youth support their families and gain independence.</li>
                <li>Operations sustain training and quality systems.</li>
                <li>The Children’s Home receives continuous support for education and care.</li>
              </ul>
              <p style={{ color: "#64748b", lineHeight: 1.8, marginBottom: 18 }}>As young people grow, they return as mentors and trainers, strengthening the next generation.</p>
              <p style={{ color: "#0f172a", fontWeight: 700, lineHeight: 1.8 }}>This is not charity. This is structured economic inclusion.</p>
            </div>
          </div>
        </FadeIn>

        {/* Leadership contact section removed per site update */}
      </div>
    </div>
  );
};

const PilotPage = ({ goBack, setPage, isMobile }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(160deg, #f8fafc, #eff6ff)", paddingTop: 80 }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "48px 24px" }}>
        <button onClick={goBack} style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", color: "#1d4ed8", fontWeight: 600, fontSize: "0.9rem", marginBottom: 40, fontFamily: "inherit" }}>
          <ChevronLeft size={18} /> Back to Home
        </button>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(29,78,216,0.07)", border: "1px solid rgba(29,78,216,0.12)", borderRadius: 100, padding: "6px 16px", marginBottom: 20 }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#1d4ed8", letterSpacing: "0.07em", textTransform: "uppercase" }}>Zero Risk Start</span>
            </div>
            <h1 className="font-display" style={{ fontSize: "2.4rem", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: 14 }}>Start a Pilot Program</h1>
            <p style={{ color: "#64748b", fontSize: "1.05rem", lineHeight: 1.75 }}>Send us a small batch. We annotate it, deliver results with full quality reporting, and show you exactly how we operate — no commitment required to scale.</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: 12, marginBottom: 36 }}>
            {[
              { icon: "⚡", title: "Fast Turnaround", desc: "Results returned within 48 hours of project kickoff" },
              { icon: "🔍", title: "Full QA Report", desc: "100% reviewed with per-task accuracy metrics included" },
              { icon: "🤝", title: "No Commitment", desc: "Pilot deliverables have no obligation to continue at scale" },
            ].map((c, i) => (
              <div key={i} style={{ background: "white", borderRadius: 16, padding: "20px 18px", textAlign: "center", border: "1px solid #f1f5f9", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div style={{ fontSize: "1.6rem", marginBottom: 8 }}>{c.icon}</div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0f172a", marginBottom: 6 }}>{c.title}</div>
                <div style={{ fontSize: "0.78rem", color: "#94a3b8", lineHeight: 1.6 }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.12}>
          <div style={{ background: "white", borderRadius: 24, padding: "36px 32px", border: "1px solid #f1f5f9", boxShadow: "0 8px 40px rgba(0,0,0,0.06)", marginBottom: 24 }}>
            <h3 className="font-display" style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0f172a", marginBottom: 20 }}>What to include in your inquiry</h3>
            {["Your dataset type (images, text, audio, video)", "Approximate volume and target timeline", "Annotation tool preference (or we can suggest one)", "Quality threshold and format requirements", "Whether you need a recurring or one-time engagement"].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: i < 4 ? 14 : 0 }}>
                <div style={{ width: 22, height: 22, borderRadius: "50%", background: "linear-gradient(135deg, #1d4ed8, #0f9d68)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 11, fontWeight: 800, flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                <span style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.65 }}>{item}</span>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.16}>
          <div style={{ background: "linear-gradient(135deg, #1d4ed8, #0f9d68)", borderRadius: 20, padding: "36px 32px", textAlign: "center" }}>
            <h3 className="font-display" style={{ fontSize: "1.35rem", fontWeight: 800, color: "white", marginBottom: 10 }}>Get in touch</h3>
            <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 20, fontSize: "0.95rem", maxWidth: "42rem", margin: "0 auto" }}>Contact our team to discuss pilots, custom annotation workflows, or enterprise AI data programs. We reply quickly and can adapt to your tooling and compliance requirements.</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
              <button onClick={() => setPage("contact")} className="btn-primary">Send a message <ArrowRight size={16} /></button>
              <button onClick={() => setPage("services")} className="btn-secondary">Explore services</button>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

// Floating start pilot button (visible when not on pilot page)
// Rendered from parent component using its `setPage` state.

const ContactPage = ({ goBack, isMobile }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(160deg,#f8fbff 0%,#eef9ff 50%,#f0fdf4 100%)", paddingTop: 80 }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "48px 24px" }}>
        <button onClick={goBack} style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", color: "#0d2b4e", fontWeight: 700, fontSize: "0.95rem", marginBottom: 28, fontFamily: "inherit" }}>
          <ChevronLeft size={18} /> Back to Home
        </button>
        <FadeIn>
          <div style={{ marginBottom: 24, padding: "28px 26px", borderRadius: 24, background: "white", border: "1px solid #e2e8f0", boxShadow: "0 18px 48px rgba(15,23,42,0.06)" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(29,78,216,0.08)", borderRadius: 999, padding: "6px 16px", marginBottom: 18 }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#1d4ed8", letterSpacing: "0.07em", textTransform: "uppercase" }}>Contact</span>
            </div>
            <h1 className="font-display" style={{ fontSize: isMobile ? "2rem" : "2.8rem", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: 18 }}>Get in touch with Baraka Digital Hub</h1>
            <p style={{ color: "#64748b", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: 760, marginBottom: 24 }}>
              Use the form below to share a project inquiry, pilot request, or general partnership question. We’ll respond quickly with details on next steps.
            </p>
            <form action="https://formbold.com/s/oPqrV" method="POST" style={{ display: "grid", gap: 18 }}>
              <div style={{ display: "grid", gap: 14, gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr" }}>
                <label style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: "0.95rem", color: "#334155" }}>
                  Your name
                  <input type="text" name="name" required style={{ width: "100%", padding: "14px 16px", borderRadius: 14, border: "1px solid #cbd5e1", background: "#f8fafc", fontSize: "0.95rem" }} />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: "0.95rem", color: "#334155" }}>
                  Your email
                  <input type="email" name="email" required style={{ width: "100%", padding: "14px 16px", borderRadius: 14, border: "1px solid #cbd5e1", background: "#f8fafc", fontSize: "0.95rem" }} />
                </label>
              </div>
              <label style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: "0.95rem", color: "#334155" }}>
                Subject
                <input type="text" name="subject" required style={{ width: "100%", padding: "14px 16px", borderRadius: 14, border: "1px solid #cbd5e1", background: "#f8fafc", fontSize: "0.95rem" }} />
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: "0.95rem", color: "#334155" }}>
                Message
                <textarea name="message" required rows={8} style={{ width: "100%", padding: "14px 16px", borderRadius: 14, border: "1px solid #cbd5e1", background: "#f8fafc", fontSize: "0.95rem", minHeight: 180 }} />
              </label>
              <button type="submit" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "16px 24px", borderRadius: 14, border: "none", background: "#1d4ed8", color: "white", fontWeight: 700, cursor: "pointer" }}>
                Send message
              </button>
            </form>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

function BarakaDigitalHub() {
  const [page, setPage] = useState("home");
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 720 : false);
  useEffect(()=>{
    const onResize = () => setIsMobile(window.innerWidth <= 720);
    window.addEventListener('resize', onResize);
    onResize();
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const goBack = () => { setPage("home"); setNav(false); };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const services = [
    { icon: <Globe size={20} />, title: "Computer Vision Annotation", color: "#1d4ed8" },
    { icon: <Brain size={20} />, title: "NLP & Text Processing", color: "#7c3aed" },
    { icon: <Mic size={20} />, title: "Audio & Speech Processing", color: "#0891b2" },
    { icon: <Cpu size={20} />, title: "LLM Training & RLHF", color: "#059669" },
    { icon: <CheckCircle2 size={20} />, title: "Transcription & QA", color: "#dc2626" },
    { icon: <Headphones size={20} />, title: "BPO & Virtual Assistance", color: "#d97706" },
  ];

  const navLinks = [
    { label: "Home", page: "home" },
    { label: "Services", page: "services" },
    { label: "About", page: "about" },
    { label: "Social Impact", page: "impact" },
    { label: "Operations", page: "operations" },
    { label: "Workflow", page: "workflow" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "white", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .font-display { font-family: 'Inter', 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important; }
        .hero-h1 { font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important; font-size: clamp(3rem, 5vw, 4.2rem) !important; }
        .page-container { width: min(100%, 1200px); margin: 0 auto; padding: 0 24px; }
        .section-h2 { font-size: clamp(1.6rem, 2vw, 2rem) !important; color: #0f172a; font-weight: 700; letter-spacing: -0.02em; line-height: 1.16; }
        .section-copy, .hero-copy, .body-copy { font-size: clamp(1rem, 1vw, 1.05rem); line-height: 1.75; max-width: 64rem; margin: 0 auto; font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important; color: #475569; }
        .text-wrap { word-wrap: break-word; overflow-wrap: break-word; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0) rotate(-2deg)} 50%{transform:translateY(-8px) rotate(2deg)} }
        @keyframes pulse-slow { 0%,100%{opacity:1} 50%{opacity:.4} }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .ani-float { animation: float 5s ease-in-out infinite; }
        .ani-floatb { animation: floatB 6s ease-in-out 1.5s infinite; }
        .ani-pulse { animation: pulse-slow 3s ease-in-out infinite; }
        .ani-marquee { animation: marquee 24s linear infinite; }
        .dot-grid { background-image: radial-gradient(circle, #94a3b820 1px, transparent 1px); background-size: 28px 28px; }
        .section-tech-bg { position: relative; overflow: hidden; background: linear-gradient(180deg, #f8fafc 0%, #ecf5ff 100%); }
        .section-tech-bg::before { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at 14% 22%, rgba(155,109,255,0.22) 0%, transparent 36%), radial-gradient(circle at 86% 18%, rgba(16,185,129,0.18) 0%, transparent 34%), radial-gradient(circle at 52% 54%, rgba(59,130,246,0.14) 0%, transparent 38%); background-repeat: no-repeat; pointer-events: none; animation: tech-bg-glow 18s ease-in-out infinite; }
        .section-tech-bg::after { content: ""; position: absolute; inset: 0; background: repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(0,0,0,0.012) 3px, rgba(0,0,0,0.012) 4px); opacity: 0; pointer-events: none; animation: tech-bg-stripes 12s ease-in-out infinite; }
        .section-tech-bg > * { position: relative; z-index: 1; }
        @keyframes tech-bg-glow { 0%,100% { background-position: 12% 18%, 88% 24%, 52% 58%; } 50% { background-position: 18% 12%, 82% 28%, 48% 62%; } }
        @keyframes tech-bg-stripes { 0%,100% { transform: translateY(0); opacity: 0; } 50% { transform: translateY(8px); opacity: 0; } }
        .btn-primary { display:inline-flex;align-items:center;gap:8px;background:linear-gradient(135deg,#1d4ed8,#06b6d4);color:white;padding:14px 28px;border-radius:12px;font-weight:600;font-size:.95rem;text-decoration:none;box-shadow:0 8px 32px rgba(29,78,216,.3);transition:transform .2s,box-shadow .2s;border:none;cursor:pointer;font-family:inherit; }
        .btn-primary:hover { transform:translateY(-2px);box-shadow:0 12px 40px rgba(29,78,216,.4); }
        .btn-secondary { display:inline-flex;align-items:center;gap:8px;background:white;color:#1e293b;padding:14px 28px;border-radius:12px;font-weight:600;font-size:.95rem;text-decoration:none;border:1.5px solid #e2e8f0;transition:border-color .2s,color .2s,transform .2s;cursor:pointer;font-family:inherit; }
        .btn-secondary:hover { border-color:#1d4ed8;color:#1d4ed8;transform:translateY(-2px); }
        h1:not(.hero-h1) { color: #0f172a; font-family: 'Inter', 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important; font-size: clamp(2rem, 2.3vw, 2.4rem) !important; font-weight: 700 !important; letter-spacing: -0.02em; line-height: 1.25; margin-bottom: 0.6em; }
        h2 { color: #0f172a; font-family: 'Inter', 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important; font-size: clamp(1.55rem, 1.9vw, 2rem) !important; font-weight: 700 !important; letter-spacing: -0.02em; line-height: 1.2; margin-bottom: 0.55em; }
        h3 { color: #0f172a; font-family: 'Inter', 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important; font-size: clamp(1.15rem, 1.4vw, 1.4rem) !important; font-weight: 700 !important; letter-spacing: -0.01em; line-height: 1.3; margin-bottom: 0.5em; }
        .section-h2 { font-size: clamp(1.6rem, 2vw, 2rem) !important; color: #0f172a; font-weight: 700 !important; letter-spacing: -0.02em; line-height: 1.2; margin-bottom: 0.55em; }
        .font-display { font-family: 'Inter', 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important; }
        .svc-card:hover { box-shadow:0 12px 40px rgba(0,0,0,.08);transform:translateY(-4px); }
        .about-card, .about-panel, .impact-card, .stat-card, .card {
          background:white;
          border-radius:24px;
          border:1px solid rgba(15,23,42,.08);
          box-shadow:0 20px 50px rgba(15,23,42,.06);
          transition:transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }
        .about-card:hover, .about-panel:hover, .impact-card:hover, .card:hover, .stat-card:hover {
          transform:translateY(-4px);
          box-shadow:0 26px 70px rgba(15,23,42,.09);
          border-color: rgba(37,99,235,.15);
        }
        .about-panel h2, .about-card h3, .impact-card h4 {
          color:#0f172a;
        }
        .about-panel.accent-cyan { background: linear-gradient(180deg, #f0f9ff, #bae6fd); }
        .about-panel.accent-purple { background: linear-gradient(180deg, #ede9fe, #e0e7ff); }
        .about-panel.accent-sunset { background: linear-gradient(180deg, #fff7ed, #fee2e2); }
        .about-highlight { background: linear-gradient(180deg, #eef2ff, #f8fafc); }
        .about-grid { display:grid; gap:32px; grid-template-columns: 1.2fr 0.8fr; align-items:start; width:100%; }
        .principle-grid { display:grid; gap:20px; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); width:100%; }
        .impact-grid { display:grid; gap:24px; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); width:100%; }
        .impact-highlight-grid { display:grid; gap:20px; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); width:100%; }
        .highlight-pill { display: inline-flex; align-items: center; justify-content: center; width: fit-content; padding: 10px 16px; border-radius: 9999px; background: #2563eb; color: white; font-size: 0.88rem; font-weight: 700; }
        .about-grid, .impact-grid, .impact-highlight-grid { width: 100%; }
        .nav-link { color:#475569;font-weight:500;font-size:.88rem;text-decoration:none;cursor:pointer;transition:color .2s;background:none;border:none;font-family:inherit; }
        .nav-link:hover { color:#1d4ed8; }
        @media(max-width:1024px) {
          .hero-grid { grid-template-columns:1fr !important; }
          .hero-right { display:none !important; }
          .stat-grid { grid-template-columns:repeat(2,1fr) !important; }
          .svc-grid { grid-template-columns:1fr 1fr !important; }
          .stats-band { grid-template-columns:repeat(2,1fr) !important; }
          .hero-h1 { font-size:3rem !important; }
        }
        @media(max-width:560px) {
          .svc-grid { grid-template-columns:1fr !important; }
          .stat-grid { grid-template-columns:1fr 1fr !important; }
          .hero-h1 { font-size:2.4rem !important; }
          .section-h2 { font-size:2rem !important; }
        }
        @media(max-width:768px) {
          .hidden-mobile { display:none !important; }
          .mobile-menu-btn { display:flex !important; }
        }
        .mobile-menu-btn { display:none; }
        .hidden-mobile { display:flex; }
      `}</style>

      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, transition:"all .3s", background: scrolled||page!=="home" ? "rgba(255,255,255,.95)" : "transparent", backdropFilter: scrolled||page!=="home" ? "blur(20px)" : "none", borderBottom: scrolled||page!=="home" ? "1px solid rgba(0,0,0,.06)" : "none", padding:"0 24px" }}>
        <div className="page-container" style={{ display:"flex", alignItems:"center", justifyContent:"space-between", height:68 }}>
          <button onClick={() => setPage("home")} style={{ display:"flex", alignItems:"center", gap:10, background:"none", border:"none", cursor:"pointer", padding:0 }}>
            <img src="/logo.png" alt="Baraka Digital Hub logo" style={{ height:44, width:"auto", objectFit:"contain" }} />
          </button>
          <div className="hidden-mobile" style={{ display: isMobile ? "none" : "flex", gap:28, alignItems:"center" }}>
            {navLinks.map(l => (
              <button key={l.page} onClick={() => setPage(l.page)} className="nav-link">{l.label}</button>
            ))}
          </div>
          <button onClick={() => setNav(!nav)} className="mobile-menu-btn" style={{ background:"none", border:"none", cursor:"pointer", color:"#0f172a" }}>
            {nav ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {nav && (
          <div style={{ background:"white", borderTop:"1px solid #f1f5f9", padding:"12px 0" }}>
            {navLinks.map(l => (
              <button key={l.page} onClick={() => { setPage(l.page); setNav(false); }} style={{ display:"block", width:"100%", textAlign:"left", padding:"13px 24px", color:"#475569", fontWeight:500, background:"none", border:"none", cursor:"pointer", fontSize:".95rem", fontFamily:"inherit" }}>{l.label}</button>
            ))}
          </div>
        )}
      </nav>

      {page === "services" && <ServicesPage goBack={goBack} isMobile={isMobile} />}
      {page === "about" && <AboutPage goBack={goBack} isMobile={isMobile} />}
      {page === "careers" && <CareersPage goBack={goBack} setPage={setPage} isMobile={isMobile} />}
      {page === "privacy" && <PrivacyPage goBack={goBack} isMobile={isMobile} />}
      {page === "impact" && <ImpactPage goBack={goBack} isMobile={isMobile} />}
      {page === "operations" && <OperationsPage goBack={goBack} isMobile={isMobile} />}
      {page === "workflow" && <WorkflowPage goBack={goBack} setPage={setPage} isMobile={isMobile} />}
      {page === "contact" && <ContactPage goBack={goBack} isMobile={isMobile} />}
      {page === "pilot" && <PilotPage goBack={goBack} setPage={setPage} isMobile={isMobile} />}

      {page === "home" && (
        <>
          <section style={{ paddingTop:120, paddingBottom:80, paddingLeft:24, paddingRight:24, position:"relative", overflow:"visible", background:"linear-gradient(160deg,#f8fafc 0%,#eff6ff 50%,#ecfdf5 100%)" }}>
            <div className="dot-grid" style={{ position:"absolute", inset:0, opacity:.6 }} />
            <div style={{ position:"absolute", top:"-10%", right: isMobile ? "-20%" : "-5%", width: isMobile ? 320 : 600, height: isMobile ? 320 : 600, borderRadius:"50%", background:"radial-gradient(circle,rgba(29,78,216,.07) 0%,transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position:"absolute", bottom: isMobile ? "10%" : "-10%", left: isMobile ? "-20%" : "-5%", width: isMobile ? 280 : 500, height: isMobile ? 280 : 500, borderRadius:"50%", background:"radial-gradient(circle,rgba(15,157,104,.07) 0%,transparent 70%)", pointerEvents: "none" }} />
            <div className="page-container" style={{ position:"relative", zIndex:1 }}>
              <div className="hero-grid" style={{ display:"grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap:56, alignItems:"center" }}>
                <div>
                  <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(29,78,216,.08)", border:"1px solid rgba(29,78,216,.15)", borderRadius:100, padding:"7px 16px", marginBottom:18 }}>
                    <span className="ani-pulse" style={{ width:7, height:7, borderRadius:"50%", background:"#0f9d68", display:"inline-block" }} />
                    <span style={{ fontSize:".75rem", fontWeight:700, color:"#1d4ed8", letterSpacing:".05em", textTransform:"uppercase" }}>Empowering Futures Through Technology</span>
                  </div>
                  <h1 className="hero-h1 font-display" style={{ fontSize:"4.2rem", fontWeight:900, lineHeight:1.02, letterSpacing:"-.02em", color:"#0f172a", marginBottom:18 }}>
                    AI Training & Digital Operations
                    <br />
                    <span style={{ background:"linear-gradient(90deg,#1d4ed8,#06b6d4,#0f9d68)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", fontWeight:900 }}>Built for Scale</span>
                  </h1>
                  <p style={{ fontSize:"1.02rem", color:"#475569", lineHeight:1.75, marginBottom:32, maxWidth:680 }}>
                    We deliver high-quality AI training, data annotation, transcription, and digital outsourcing services. We help AI companies, startups, and global organizations scale reliable data operations with rigorous quality control, transparent performance metrics, and competitive pricing.
                  </p>
                  <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:36 }}>
                    <button onClick={() => setPage("pilot")} className="btn-primary">Start Pilot Program <ArrowRight size={17} /></button>
                    <button onClick={() => setPage("services")} className="btn-secondary">Explore Services</button>
                  </div>
                  <div className="stat-grid" style={{ display:"grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap:10 }}>
                    {[{v:"80+",l:"Taskers"},{v:"<4hr",l:"Response"},{v:"48 hours",l:"Turnaround"}].map((s,i)=>(
                      <div key={i} style={{ background:"rgba(255,255,255,.8)", backdropFilter:"blur(12px)", border:"1px solid rgba(255,255,255,.9)", borderRadius:14, padding:"13px 10px", boxShadow:"0 2px 12px rgba(0,0,0,.04)", textAlign:"center" }}>
                        <div className="font-display" style={{ fontSize:"1.5rem", fontWeight:800, color:"#0f172a" }}>{s.v}</div>
                        <div style={{ fontSize:".72rem", color:"#94a3b8", marginTop:2, fontWeight:500 }}>{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hero-right" style={{ position:"relative" }}>
                  {/* removed floating stat cards for clarity */}
                  <div style={{ background:"rgba(255,255,255,.72)", backdropFilter:"blur(20px)", border:"1px solid rgba(255,255,255,.9)", borderRadius:28, boxShadow:"0 24px 80px rgba(0,0,0,.1)", overflow:"visible" }}>
                    <div style={{ height:3, background:"linear-gradient(90deg,#1d4ed8,#06b6d4,#0f9d68)" }} />
                    <div style={{ padding:28 }}>
                      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:22 }}>
                        <div>
                          <div style={{ fontSize:".7rem", color:"#94a3b8", fontWeight:600, textTransform:"uppercase", letterSpacing:".06em", marginBottom:3 }}>Operational Capacity</div>
                          <div className="font-display" style={{ fontSize:"1.1rem", fontWeight:800, color:"#0f172a" }}>AI Workforce Infrastructure</div>
                        </div>
                      </div>
                      {["Computer Vision Annotation","Natural Language Processing","Audio & Speech Processing","LLM Training & RLHF","Transcription & QA","Virtual Assistance & BPO"].map((item,i)=>(
                        <div key={i} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", border:"1px solid #f1f5f9", borderRadius:10, padding:"10px 14px", background:"rgba(255,255,255,.7)", marginBottom: i<5?8:0 }}>
                          <div style={{ display:"flex", alignItems:"center", gap:9 }}>
                            <div style={{ width:7, height:7, borderRadius:"50%", background:"linear-gradient(135deg,#0f9d68,#06b6d4)", flexShrink:0 }} />
                            <span style={{ fontSize:".83rem", fontWeight:500, color:"#334155" }}>{item}</span>
                          </div>
                          <CheckCircle2 size={14} style={{ color:"#1d4ed8", flexShrink:0 }} />
                        </div>
                      ))}
                      <button onClick={() => setPage("workflow")} style={{ marginTop:16, display:"inline-flex", alignItems:"center", gap:6, color:"#1d4ed8", fontWeight:600, fontSize:".85rem", background:"none", border:"none", cursor:"pointer", fontFamily:"inherit" }}>
                        View Workflow Process <ChevronRight size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div style={{ background:"#020617", padding:"12px 0", overflow:"visible" }}>
            <div className="ani-marquee" style={{ display:"flex", gap:0, whiteSpace:"nowrap", width:"max-content" }}>
              {["Computer Vision","NLP & Text Processing","Audio Annotation","LLM Training","RLHF","Transcription","BPO Services","Quality Assurance","Data Annotation","AI Workforce",
                "Computer Vision","NLP & Text Processing","Audio Annotation","LLM Training","RLHF","Transcription","BPO Services","Quality Assurance","Data Annotation","AI Workforce"].map((t,i)=>(
                <span key={i} style={{ display:"inline-flex", alignItems:"center", gap:14, paddingRight:44 }}>
                  <span style={{ fontSize:".72rem", fontWeight:600, color:"#64748b", letterSpacing:".08em", textTransform:"uppercase" }}>{t}</span>
                  <span style={{ width:4, height:4, borderRadius:"50%", background:"#0f9d68", display:"inline-block" }} />
                </span>
              ))}
            </div>
          </div>

          <section className="section-tech-bg" style={{ padding:"88px 24px" }}>
            <div style={{ maxWidth:1280, margin:"0 auto" }}>
              <FadeIn>
                <div style={{ textAlign:"center", marginBottom:52 }}>
                  <h2 className="section-h2 font-display" style={{ fontSize:"2.6rem", fontWeight:800, color:"#0f172a", letterSpacing:"-.03em", marginBottom:12 }}>Precision AI Services</h2>
                  <p style={{ color:"#64748b", fontSize:"1rem", maxWidth:480, margin:"0 auto", lineHeight:1.75 }}>End-to-end data labeling and AI training built for production scale.</p>
                </div>
              </FadeIn>
              <div className="svc-grid" style={{ display:"grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap:16 }}>
                {services.map((s,i)=>(
                  <FadeIn key={i} delay={i*.06}>
                    <div className="svc-card" style={{ background:"white", border:"1px solid #f1f5f9", borderRadius:18, padding:"24px 22px", transition:"box-shadow .3s,transform .3s", cursor:"pointer", height:"100%" }} onClick={() => setPage("services")}>
                      <div style={{ width:44, height:44, borderRadius:12, background:s.color, display:"flex", alignItems:"center", justifyContent:"center", color:"white", marginBottom:16 }}>{s.icon}</div>
                      <h3 className="font-display" style={{ fontSize:"1rem", fontWeight:800, color:"#0f172a", marginBottom:8 }}>{s.title}</h3>
                      <p style={{ fontSize:".84rem", color:"#64748b", lineHeight:1.7, marginBottom:14 }}>{s.desc}</p>
                      <div style={{ display:"flex", alignItems:"center", gap:5, color:s.color, fontSize:".8rem", fontWeight:600 }}>Learn more <ChevronRight size={14} /></div>
                    </div>
                  </FadeIn>
                ))}
              </div>
              <FadeIn delay={0.1}>
                <div style={{ textAlign:"center", marginTop:36 }}>
                  <button onClick={() => setPage("services")} className="btn-secondary">View all service details <ArrowRight size={16} /></button>
                </div>
              </FadeIn>
            </div>
          </section>

          <section style={{ padding:"72px 24px", background:"linear-gradient(135deg,#1d4ed8 0%,#0ea5e9 50%,#0f9d68 100%)", position:"relative", overflow:"visible" }}>
            <div style={{ position:"absolute", inset:0, opacity:.07, backgroundImage:"linear-gradient(to right,white 1px,transparent 1px),linear-gradient(to bottom,white 1px,transparent 1px)", backgroundSize:"40px 40px" }} />
            <div className="stats-band" style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(4,1fr)", gap:24, position:"relative", zIndex:1 }}>
              {[{val:"98",suf:"%",l:"Avg Accuracy"},{val:"10",suf:"K+ hrs",l:"Weekly Throughput"},{val:"80",suf:"+",l:"Trained Taskers"},{val:"4",suf:"hr",l:"Avg Response Time"}].map((s,i)=>(
                <div key={i} style={{ textAlign:"center" }}>
                  <div className="font-display" style={{ fontSize:"3.2rem", fontWeight:800, color:"white", letterSpacing:"-.03em", lineHeight:1, whiteSpace:"normal", overflowWrap:"break-word", wordBreak:"break-word" }}>
                    <Counter target={s.val} suffix={s.suf} />
                  </div>
                  <div style={{ color:"rgba(255,255,255,.7)", fontSize:".8rem", fontWeight:600, marginTop:8, letterSpacing:".04em", textTransform:"uppercase" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </section>

          <section style={{ padding:"88px 24px", position:"relative", overflow:"hidden", backgroundImage:"url('background1.png')", backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"center center" }}>
            <div style={{ maxWidth:1100, margin:"0 auto", position:"relative", zIndex:1 }}>
              <FadeIn>
                <div style={{ textAlign:"center", marginBottom:52 }}>
                  <h2 className="section-h2 font-display" style={{ fontSize:"2.6rem", fontWeight:800, color:"white", letterSpacing:"-.03em", marginBottom:12 }}>Built for Reliable Scale</h2>
                  <p style={{ color:"#64748b", fontSize:"1rem", maxWidth:500, margin:"0 auto", lineHeight:1.75 }}>Structured infrastructure for production AI workflows and enterprise delivery.</p>
                </div>
              </FadeIn>
              <div style={{ display:"grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap:14 }}>
                {[
                  { icon:<Users size={18}/>, n:"80+", l:"Trained Taskers", d:"Workforce certified across annotation, NLP, audio, and BPO workflows." },
                  { icon:<Shield size={18}/>, n:"100%", l:"QA Review", d:"Independent QA team reviews every deliverable before client submission." },
                  { icon:<Zap size={18}/>, n:"48 hours", l:"Rapid Turnaround", d:"Standard batches of 25K items delivered within 48 hours." },
                  { icon:<CheckCircle2 size={18}/>, n:"Cert.", l:"Structured Onboarding", d:"Task certification and calibration before any live project access." },
                  { icon:<TrendingUp size={18}/>, n:"24/7", l:"Centralized Ops", d:"Managed operations, escalation handling, and daily progress reporting." },
                  { icon:<Clock size={18}/>, n:"Long", l:"Production Support", d:"Built for enduring partnerships, not one-off batches." },
                ].map((o,i)=>(
                  <FadeIn key={i} delay={i*.06}>
                    <div onClick={() => setPage("operations")} style={{ background:"rgba(255,255,255,.08)", border:"1px solid rgba(255,255,255,.12)", borderRadius:18, padding:"22px 20px", transition:"all .3s", cursor:"pointer" }}
                      onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(29,78,216,.5)";e.currentTarget.style.background="rgba(255,255,255,.12)";}}
                      onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,.12)";e.currentTarget.style.background="rgba(255,255,255,.08)";}}>
                      <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
                        <div style={{ width:36, height:36, borderRadius:10, background:"linear-gradient(135deg,#1d4ed8,#0f9d68)", display:"flex", alignItems:"center", justifyContent:"center", color:"white" }}>{o.icon}</div>
                        <div className="font-display" style={{ fontSize:"1.4rem", fontWeight:800, color:"white" }}>{o.n}</div>
                      </div>
                      <div style={{ fontSize:".88rem", fontWeight:700, color:"white", marginBottom:6 }}>{o.l}</div>
                      <p style={{ fontSize:".8rem", color:"#64748b", lineHeight:1.65 }}>{o.d}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
              <FadeIn delay={0.15}>
                <div style={{ textAlign:"center", marginTop:36 }}>
                  <button onClick={() => setPage("operations")} style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,.07)", border:"1px solid rgba(255,255,255,.12)", borderRadius:12, padding:"13px 24px", color:"white", fontWeight:600, fontSize:".88rem", cursor:"pointer", fontFamily:"inherit" }}>
                    View full operations detail <ArrowRight size={15} />
                  </button>
                </div>
              </FadeIn>
            </div>
          </section>

          <section style={{ padding:"88px 24px", background:"white" }}>
            <div style={{ maxWidth:1000, margin:"0 auto" }}>
              <FadeIn>
                <div style={{ textAlign:"center", marginBottom:52 }}>
                  <h2 className="section-h2 font-display" style={{ fontSize:"2.6rem", fontWeight:800, color:"#0f172a", letterSpacing:"-.03em", marginBottom:12 }}>How Delivery Works</h2>
                  <p style={{ color:"#64748b", fontSize:"1rem", maxWidth:480, margin:"0 auto", lineHeight:1.75 }}>A six-stage pipeline from intake to delivery — transparent, measurable, consistent.</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.08}>
                <div style={{ background:"white", borderRadius:24, border:"1px solid #f1f5f9", boxShadow:"0 12px 48px rgba(0,0,0,.07)", overflow:"hidden" }}>
                  <div style={{ display:"grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr" }}>
                    <div style={{ padding:"36px 32px", borderRight:"1px solid #f1f5f9" }}>
                      <div style={{ display:"inline-block", background:"rgba(29,78,216,.08)", color:"#1d4ed8", padding:"5px 13px", borderRadius:100, fontSize:".72rem", fontWeight:700, letterSpacing:".05em", textTransform:"uppercase", marginBottom:20 }}>Example Project</div>
                      <h3 className="font-display" style={{ fontSize:"1.6rem", fontWeight:800, color:"#0f172a", marginBottom:24, lineHeight:1.2 }}>Object Detection Annotation Pipeline</h3>
                      {[["Task Type","Bounding Box Annotation"],["Dataset Volume","25,000 Images"],["Timeline","48 Hours"],["QA Method","100% First-Pass Review"],["Reporting","Daily Progress Updates"]].map(([k,v],i)=>(
                        <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 0", borderBottom:"1px solid #f8fafc" }}>
                          <span style={{ fontSize:".82rem", color:"#94a3b8", fontWeight:500 }}>{k}</span>
                          <span style={{ fontSize:".87rem", fontWeight:700, color:"#0f172a" }}>{v}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ background:"#020617", padding:"36px 32px" }}>
                      <h3 className="font-display" style={{ fontSize:"1.4rem", fontWeight:800, color:"white", marginBottom:28 }}>Delivery Stages</h3>
                      {["Tasker onboarding & certification","Dataset segmentation & assignment","Annotation in client environment","100% QA review & validation","Error logging & recalibration","Final export, report & handoff"].map((step,i)=>(
                        <div key={i} style={{ display:"flex", gap:14, paddingBottom: i<5?22:0, position:"relative" }}>
                          {i<5 && <div style={{ position:"absolute", left:19, top:38, width:2, bottom:0, background:"rgba(255,255,255,.06)" }} />}
                          <div style={{ flexShrink:0, width:38, height:38, borderRadius:"50%", background:"linear-gradient(135deg,#1d4ed8,#0f9d68)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"Syne,sans-serif", fontWeight:800, fontSize:13, color:"white", position:"relative", zIndex:1 }}>{i+1}</div>
                          <div style={{ paddingTop:8 }}>
                            <p style={{ color:"#94a3b8", fontSize:".86rem", lineHeight:1.6 }}>{step}</p>
                          </div>
                        </div>
                      ))}
                      <button onClick={() => setPage("workflow")} style={{ marginTop:28, display:"inline-flex", alignItems:"center", gap:8, background:"white", color:"#0f172a", border:"none", borderRadius:12, padding:"12px 22px", fontWeight:700, fontSize:".88rem", cursor:"pointer", fontFamily:"inherit" }}>
                        Full Workflow Detail <ArrowRight size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>

          <section style={{ padding:"88px 24px", background:"#f8fafc" }}>
            <div style={{ maxWidth:1000, margin:"0 auto" }}>
              <FadeIn>
                <div style={{ display:"grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap:48, alignItems:"center" }}>
                  <div>
                    <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(245,158,11,.08)", border:"1px solid rgba(245,158,11,.15)", borderRadius:100, padding:"5px 14px", marginBottom:20 }}>
                      <span style={{ fontSize:".7rem", fontWeight:700, color:"#d97706", letterSpacing:".07em", textTransform:"uppercase" }}>Community Impact</span>
                    </div>
                    <h2 className="font-display" style={{ fontSize:"2.2rem", fontWeight:800, color:"#0f172a", letterSpacing:"-.03em", marginBottom:16, lineHeight:1.15 }}>Work That Creates Real Change</h2>
                    <p style={{ color:"#64748b", fontSize:".92rem", lineHeight:1.85, marginBottom:20 }}>Baraka Digital Hub was built as a long-term sustainability model — creating structured digital employment opportunities while supporting the broader mission of Baraka Children's Home through commercially competitive AI services.</p>
                    <button onClick={() => setPage("impact")} style={{ display:"inline-flex", alignItems:"center", gap:7, color:"#1d4ed8", fontWeight:700, fontSize:".88rem", background:"none", border:"none", cursor:"pointer", fontFamily:"inherit" }}>
                      Read about our impact <ChevronRight size={15} />
                    </button>
                  </div>
                  <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                    {[{n:"67%",l:"Youth unemployment in informal settlements",c:"#1d4ed8"},{n:"33%",l:"Young people without formal employment",c:"#0f9d68"},{n:"<5%",l:"Children’s home youths in sustainable careers",c:"#d97706"}].map((s,i)=>(
                      <div key={i} style={{ background:"white", borderRadius:18, padding:"26px 28px", border:"1px solid #f1f5f9", boxShadow:"0 10px 30px rgba(15,23,42,0.07)", display:"flex", alignItems:"flex-start", gap:18, minHeight:140 }}>
                        <div style={{ flexShrink:0, width:72, height:72, borderRadius:16, background:s.c, display:"flex", alignItems:"center", justifyContent:"center", color:"white", fontWeight:800, fontSize:"1.5rem" }}>{s.n}</div>
                        <div>
                          <p style={{ fontSize:"0.96rem", color:"#0f172a", fontWeight:700, marginBottom:6 }}>{s.l}</p>
                          <p style={{ fontSize:"0.88rem", color:"#64748b", lineHeight:1.75, margin:0 }}>We design programs and pathways that address these local challenges through jobs, training, and partnerships with employers.</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>

          <section style={{ padding:"88px 24px", background:"linear-gradient(160deg,#eff6ff,#ecfdf5)", position:"relative", overflow:"visible" }}>
            <div className="dot-grid" style={{ position:"absolute", inset:0, opacity:.5 }} />
            <div style={{ maxWidth:680, margin:"0 auto", textAlign:"center", position:"relative", zIndex:1 }}>
              <FadeIn>
                <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(29,78,216,.08)", border:"1px solid rgba(29,78,216,.15)", borderRadius:100, padding:"6px 16px", marginBottom:22 }}>
                  <span className="ani-pulse" style={{ width:6, height:6, borderRadius:"50%", background:"#0f9d68", display:"inline-block" }} />
                  <span style={{ fontSize:".72rem", fontWeight:700, color:"#1d4ed8", letterSpacing:".06em", textTransform:"uppercase" }}>Start Today</span>
                </div>
                <h2 className="font-display" style={{ fontSize:"2.8rem", fontWeight:800, color:"#0f172a", letterSpacing:"-.03em", marginBottom:16, lineHeight:1.1 }}>Ready to Launch a Pilot?</h2>
                <p style={{ color:"#64748b", fontSize:"1rem", lineHeight:1.8, marginBottom:36 }}>Start with a small batch. Our team will annotate your dataset, deliver results with full quality reporting, and show you exactly how we operate — before you commit to scale.</p>
                <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap", marginBottom:32 }}>
                  <button onClick={() => setPage("pilot")} className="btn-primary" style={{ fontSize:"1rem", padding:"15px 30px" }}>Launch Pilot Program <ArrowRight size={17} /></button>
                  <button onClick={() => setPage("workflow")} className="btn-secondary" style={{ fontSize:"1rem", padding:"15px 30px" }}>View Our Process</button>
                </div>
                <div style={{ display:"flex", justifyContent:"center", gap:28, flexWrap:"wrap" }}>
                  {["No upfront commitment","Results in 48 hours","Direct team access"].map((t,i)=>(
                    <div key={i} style={{ display:"flex", alignItems:"center", gap:7 }}>
                      <CheckCircle2 size={13} style={{ color:"#0f9d68" }} />
                      <span style={{ fontSize:".82rem", color:"#64748b", fontWeight:500 }}>{t}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </section>

          
        </>
      )}

      {page !== "pilot" && (
        <button onClick={() => setPage("pilot")} style={{
          position: "fixed",
          right: 20,
          bottom: 20,
          zIndex: 400,
          background: "linear-gradient(135deg,#1d4ed8,#06b6d4)",
          color: "white",
          border: "none",
          borderRadius: 999,
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          gap: 8,
          boxShadow: "0 12px 36px rgba(29,78,216,0.28)",
          cursor: "pointer",
          fontWeight: 700,
          fontFamily: "inherit",
        }}>
          Start Pilot <ArrowRight size={16} />
        </button>
      )}

      <footer style={{ background:"linear-gradient(180deg,#021024,#020617)", padding:"56px 24px 36px", borderTop:"1px solid rgba(255,255,255,.06)" }}>
        <div className="page-container">
          <div style={{ display:"grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 280px", gap:28, alignItems:"start", marginBottom:28 }}>
            <div>
              <img src="/logo.png" alt="Baraka Digital Hub logo" style={{ height:48, width:"auto", marginBottom:14 }} />
              <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
                <div style={{ display:"flex", flexWrap:"wrap", gap:12, marginTop:8 }}>
                </div>
              </div>
            </div>

            <div>
              <div style={{ fontSize:"0.95rem", fontWeight:700, color:"#ffffff", marginBottom:12 }}>Services</div>
              <div style={{ display:"grid", gap:8 }}>
                {['Computer Vision','NLP & Text','Audio Annotation','LLM Training','Transcription','BPO Services'].map((s,i)=>(
                  <button key={i} onClick={() => setPage("services")} style={{ textAlign:"left", background:"none", border:"none", color:"rgba(255,255,255,.8)", padding:0, cursor:"pointer", fontSize:"0.95rem" }}
                    onMouseEnter={e=>e.target.style.color="white"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,.8)"}>{s}</button>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontSize:"0.95rem", fontWeight:700, color:"#ffffff", marginBottom:12 }}>Company</div>
              <div style={{ display:"grid", gap:8 }}>
                <button onClick={() => setPage('about')} style={{ textAlign:"left", background:"none", border:"none", color:"rgba(255,255,255,.8)", padding:0, cursor:"pointer", fontSize:"0.95rem", fontFamily:"inherit" }} onMouseEnter={e=>e.target.style.color="white"} onMouseLeave={e=>{ e.target.style.color="rgba(255,255,255,.8)"; }}>About</button>
                <button onClick={() => setPage('careers')} style={{ textAlign:"left", background:"none", border:"none", color:"rgba(255,255,255,.8)", padding:0, cursor:"pointer", fontSize:"0.95rem", fontFamily:"inherit" }} onMouseEnter={e=>e.target.style.color="white"} onMouseLeave={e=>{ e.target.style.color="rgba(255,255,255,.8)"; }}>Careers</button>
                <button onClick={() => setPage('privacy')} style={{ textAlign:"left", background:"none", border:"none", color:"rgba(255,255,255,.8)", padding:0, cursor:"pointer", fontSize:"0.95rem", fontFamily:"inherit" }} onMouseEnter={e=>e.target.style.color="white"} onMouseLeave={e=>{ e.target.style.color="rgba(255,255,255,.8)"; }}>Privacy</button>
                <button onClick={() => setPage("contact")} style={{ textAlign:"left", background:"none", border:"none", color:"rgba(255,255,255,.8)", padding:0, cursor:"pointer", fontSize:"0.95rem", fontFamily:"inherit" }} onMouseEnter={e=>e.target.style.color="white"} onMouseLeave={e=>{ e.target.style.color="rgba(255,255,255,.8)"; }}>Contact</button>
              </div>
            </div>
          </div>

          <div style={{ borderTop:"1px solid rgba(255,255,255,.06)", paddingTop:18, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
            <p style={{ color:"rgba(255,255,255,.6)", fontSize:"0.85rem" }}>© 2026 Baraka Digital Hub. Nairobi, Kenya.</p>
            <div style={{ display:"flex", gap:14, alignItems:"center" }}>
              <span style={{ color:"rgba(255,255,255,.6)", fontSize:"0.85rem" }}>Trusted AI data services for global teams.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BarakaDigitalHub;
