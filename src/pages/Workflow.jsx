import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

function Workflow() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const specs = [
    { label: "Model Type", value: "Computer Vision" },
    { label: "Task", value: "Bounding Box Annotation" },
    { label: "Dataset", value: "25,000 Images" },
    { label: "SLA", value: "48 Hours*" },
    { label: "Workforce", value: "80 Trained Agents" },
    { label: "QA Capacity", value: "15 Validators" },
    { label: "Throughput", value: "1,920+ Production Hours" },
    { label: "Assurance", value: "100% Multi-Pass QA" },
    { label: "Reporting", value: "Real-Time Metrics" },
    { label: "Integration", value: "COCO, YOLO, JSON+" },
  ];

  const phases = [
    { step: "Discovery & Planning", desc: "Requirements, scoping, and tooling alignment." },
    { step: "Team Training & Certification", desc: "Calibration, SOPs, and task-level certification before live work." },
    { step: "Pilot Execution", desc: "Small-batch validation for accuracy and throughput." },
    { step: "Performance Review & Production Roadmap", desc: "Validation, reporting, and scale planning." },
  ];

  return (
    <>
      <Helmet>
        <title>How It Works | Baraka Digital Hub</title>
        <meta name="description" content="How Baraka Digital Hub runs production AI data pipelines: scoping, training, pilot, QA and delivery." />
      </Helmet>

      <section style={{ padding: "48px 20px", background: "linear-gradient(180deg,#071022 0%,#0b1830 60%)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", color: "#e6f7ff" }}>
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <div style={{ display: "inline-block", background: "rgba(255,255,255,0.04)", color: "#9be7ff", padding: "6px 14px", borderRadius: 100, fontSize: ".72rem", fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 12 }}>Built for Reliable Scale</div>
            <h1 style={{ margin: 0, fontSize: "2rem", lineHeight: 1.05 }}>How It Works</h1>
            <p style={{ color: "#9fb6c9", marginTop: 10, maxWidth: 820, marginLeft: "auto", marginRight: "auto" }}>Production-grade data pipelines with deterministic QA and elastic scaling.</p>
          </div>

          <div style={{ background: "rgba(15,23,42,.9)", borderRadius: 16, padding: 0, overflow: "visible" }}>
            <div style={{ borderBottom: "1px solid rgba(6,182,212,.08)", padding: isMobile ? "20px" : "36px 40px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#06b6d4", boxShadow: "0 0 12px #06b6d4" }} />
                <h2 style={{ margin: 0, fontSize: "1.25rem" }}>Production Pipeline</h2>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 18 }}>
                {specs.map((s, i) => (
                  <div key={i} style={{ paddingBottom: 12, borderBottom: i < specs.length - 2 ? "1px solid rgba(6,182,212,.06)" : "none" }}>
                    <div style={{ fontSize: ".72rem", color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em" }}>{s.label}</div>
                    <div style={{ marginTop: 6, fontSize: "1rem", fontWeight: 700, color: "#f1f5f9" }}>{s.value}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 18, fontSize: ".72rem", color: "#64748b" }}>* Timeline subject to scope and quality thresholds</div>
            </div>

            <div style={{ padding: isMobile ? "20px" : "36px 40px", background: "linear-gradient(135deg, rgba(6,182,212,.03), rgba(34,197,94,.03))", minHeight: isMobile ? "auto" : undefined }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 12px #22c55e" }} />
                <h3 style={{ margin: 0, fontSize: "1.15rem", color: "#f1f5f9" }}>Processing Pipeline</h3>
              </div>

              {phases.map((p, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", paddingBottom: i < phases.length - 1 ? 12 : 0, marginBottom: i < phases.length - 1 ? 12 : 0 }}>
                  <div style={{ flexShrink: 0, width: 36, height: 36, borderRadius: 6, background: i % 2 === 0 ? "linear-gradient(135deg, rgba(6,182,212,.8), rgba(34,197,94,.8))" : "linear-gradient(135deg, rgba(168,85,247,.8), rgba(249,115,22,.8))", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800 }}>{p.step.substring(0,1)}</div>
                  <div>
                    <div style={{ fontSize: ".98rem", fontWeight: 800, color: "#cbd5e1" }}>{p.step}</div>
                    <div style={{ fontSize: ".86rem", color: "#94a3b8", marginTop: 4 }}>{p.desc}</div>
                  </div>
                </div>
              ))}

              <div style={{ marginTop: 18 }}>
                <a href="/pilot" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 14px" }}>Start a Pilot <ArrowRight size={14} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Workflow;
