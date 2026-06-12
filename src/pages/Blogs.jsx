import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ChevronLeft = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const PageHelmet = ({ title, description, robots, canonical }) => (
  <Helmet>
    <title>{title}</title>
    {description && <meta name="description" content={description} />}
    {robots && <meta name="robots" content={robots} />}
    {canonical && <link rel="canonical" href={canonical} />}
  </Helmet>
);

export default function BlogsPage({ goBack, isMobile }) {
  const router = useNavigate();
  const blogs = [
    {
      title: "Beyond Bulk Labeling: How Baraka Digital Hub Powers the Next Generation of AI",
      date: "June 2026",
      excerpt: "A deep dive into ethical sourcing, tool proficiency, and why AI training data requires more than scale.",
      tag: "Insights",
      page: "insights",
    },
    {
      title: "The Back Office Is Where Growth Goes to Stall — Unless You Outsource It Right",
      date: "May 2026",
      excerpt: "How managed back-office operations turn process bottlenecks into scalable growth engines for digital teams.",
      tag: "Back Office",
      page: "backoffice",
    },
    {
      title: "The Languages AI Still Cannot Hear — And How BDH Is Changing That",
      date: "April 2026",
      excerpt: "Why transcription for Swahili, Sheng, Kikuyu, Dholuo, Kamba, Kalenjin, Luganda, Amharic, Oromo, Somali, Tigrinya, Maasai, and Runyoro is a strategic data advantage — and how BDH collects production-grade datasets in these dialects.",
      tag: "Language AI",
      page: "african-languages",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "radial-gradient(circle at top, rgba(59,130,246,.18), transparent 28%), radial-gradient(circle at bottom right, rgba(16,185,129,.14), transparent 24%), linear-gradient(180deg, #020617 0%, #08172f 45%, #0b203f 100%)", color: "#e2e8f0", overflowX: "hidden", paddingTop: 110, paddingBottom: 60 }}>
      <PageHelmet title="Blogs | Baraka Digital Hub" description="Read blog insights on AI annotation, future-ready workflows, and ethical impact-driven digital operations." />
      <div className="page-container" style={{ padding: "0 24px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto", textAlign: "center", paddingBottom: 40 }}>
          <button onClick={goBack} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 999, color: "#e2e8f0", padding: "10px 18px", cursor: "pointer", fontFamily: "inherit", marginBottom: 24 }}>
            <ChevronLeft size={18} /> Back to Home
          </button>
          <h1 className="font-display" style={{ fontSize: isMobile ? "2.6rem" : "3.8rem", fontWeight: 900, letterSpacing: "-.04em", marginBottom: 16, color: "#f8fafc" }}>Baraka Digital Hub Blog</h1>
          <p style={{ color: "rgba(226,232,240,.84)", fontSize: "1rem", lineHeight: 1.8, width: '100%', margin: 0 }}>
            A curated collection of stories about AI annotation, future-ready workflows, and responsible digital operations for global teams. This blog highlights East African languages and dialects including Swahili, Sheng, Kikuyu, Dholuo, Kamba, Kalenjin, Luganda, Amharic, Oromo, Somali, Tigrinya, Maasai, and Runyoro.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))", gap: 24 }}>
          {blogs.map((blog, index) => (
            <div key={index} style={{ position: "relative", overflow: "hidden", borderRadius: 28, border: "1px solid rgba(255,255,255,.08)", background: "rgba(1,12,32,.72)", boxShadow: "0 30px 80px rgba(0, 0, 0, 0.35)", padding: "32px 28px", minHeight: 320 }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at top left, rgba(59,130,246,.24), transparent 30%), radial-gradient(circle at bottom right, rgba(16,185,129,.18), transparent 28%)", pointerEvents: "none", opacity: 0.65 }} />
              <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#7dd3fc", fontSize: ".82rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 18, background: "rgba(15, 23, 42, .55)", borderRadius: 999, padding: "8px 14px" }}>{blog.tag}</span>
                <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.55rem", lineHeight: 1.2, marginBottom: 16, color: "#ffffff" }}>{blog.title}</h2>
                <p style={{ color: "rgba(226,232,240,.85)", lineHeight: 1.75, fontSize: "0.98rem", marginBottom: "auto" }}>{blog.excerpt}</p>
                <div style={{ marginTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                  <span style={{ color: "rgba(226,232,240,.6)", fontSize: ".85rem", fontWeight: 600 }}>{blog.date}</span>
                  <a href={`/${blog.page}`} onClick={(e) => { e.preventDefault(); router(`/${blog.page}`); }} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(124, 211, 252, .45)", background: "rgba(59,130,246,.14)", color: "#cce7ff", borderRadius: 999, padding: "10px 16px", cursor: "pointer", fontWeight: 700, fontFamily: "inherit", fontSize: ".86rem", textDecoration: "none" }}>Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
