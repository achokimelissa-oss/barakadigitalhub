import { Helmet } from "react-helmet-async";

function Operations() {
	return (
		<>
			<Helmet>
				<title>Digital Operations | Baraka Digital Hub</title>
				<meta
					name="description"
					content="Scalable digital operations and managed data services — from human-in-the-loop workflows to full project management."
				/>
			</Helmet>

			<div style={{ background: "radial-gradient(circle at top, rgba(59,130,246,.18), transparent 28%), radial-gradient(circle at bottom right, rgba(16,185,129,.14), transparent 24%), linear-gradient(180deg, #020617 0%, #08172f 45%, #0b203f 100%)", color: "#e2e8f0", minHeight: "100vh" }}>
			<section className="section-block section-intro" style={{ background: "transparent" }}>
				<div className="text-block">
					<p className="highlight-pill">Operations</p>
					<h1 style={{ color: "#f8fafc" }}>Managed digital operations</h1>
					<p>
						We run reliable, scalable operations — onboarding, workforce management, quality assurance, and secure data handling for AI projects.
					</p>
				</div>
			</section>

			<section className="section-block">
				<div className="text-block">
					<h2>Our Four-Layer Operational Model</h2>
					<p>
						Every engagement runs through a structured four-layer model that ensures reliable delivery at scale.
					</p>
					<div className="about-grid" style={{ marginTop: 18 }}>
						<div className="about-card">
							<h3>01 — Project Management</h3>
							<p>A dedicated Project Manager owns your engagement end-to-end — translating requirements into operational workflows, enforcing SLAs, and serving as your single accountable point of contact.</p>
						</div>
						<div className="about-card">
							<h3>02 — Team Lead Coordination</h3>
							<p>Team Leads manage daily execution, resolve edge cases in real time, and perform first-level screening before QA to surface and fix issues early.</p>
						</div>
						<div className="about-card">
							<h3>03 — Certified Production Workforce</h3>
							<p>Specialists are onboarded, trained, and certified for each task type with continuous performance tracking to maintain high quality.</p>
						</div>
						<div className="about-card">
							<h3>04 — Independent QA System</h3>
							<p>QA is structurally separated from production, reviewing outputs and ensuring objective error classification, correction, and reporting.</p>
						</div>
					</div>
				</div>
			</section>

			<section className="section-block section-ops" style={{ padding: "32px 20px" }}>
				<div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gap: 16 }}>
					<div style={{ padding: 18, borderRadius: 10 }}>
						<h3 style={{ margin: 0 }}>Onboarding & training</h3>
						<p style={{ marginTop: 8, color: "#0f172a" }}>We quickly train and certify teams with clear instructions and simple tests.</p>
					</div>
					<div style={{ padding: 18, borderRadius: 10 }}>
						<h3 style={{ margin: 0 }}>Quality checks</h3>
						<p style={{ marginTop: 8, color: "#0f172a" }}>Checks at several stages keep labels accurate and consistent.</p>
					</div>
					<div style={{ padding: 18, borderRadius: 10 }}>
						<h3 style={{ margin: 0 }}>Security & compliance</h3>
						<p style={{ marginTop: 8, color: "#0f172a" }}>We protect data with strict access controls and privacy rules.</p>
					</div>
				</div>
			</section>
			</div>
		</>
	);
}

export default Operations;
