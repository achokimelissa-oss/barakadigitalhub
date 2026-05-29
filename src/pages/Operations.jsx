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

			<section className="section-block section-intro">
				<div className="text-block">
					<p className="highlight-pill">Operations</p>
					<h1>Managed digital operations</h1>
					<p>
						We run reliable, scalable operations — onboarding, workforce management, quality assurance, and secure data handling for AI projects.
					</p>
				</div>
			</section>

			<section className="section-block section-ops" style={{ padding: "32px 20px" }}>
				<div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gap: 16 }}>
					<div style={{ background: "#fff", padding: 18, borderRadius: 10, boxShadow: "0 6px 18px rgba(15,23,42,0.06)" }}>
						<h3 style={{ margin: 0 }}>Onboarding & Training</h3>
						<p style={{ marginTop: 8, color: "#374151" }}>Rapidly onboard annotators with role-based training, clear guidelines, and sample validations.</p>
					</div>
					<div style={{ background: "#fff", padding: 18, borderRadius: 10, boxShadow: "0 6px 18px rgba(15,23,42,0.06)" }}>
						<h3 style={{ margin: 0 }}>Quality Assurance</h3>
						<p style={{ marginTop: 8, color: "#374151" }}>Multi-layered QA, consensus checks, and continuous monitoring to maintain high label accuracy.</p>
					</div>
					<div style={{ background: "#fff", padding: 18, borderRadius: 10, boxShadow: "0 6px 18px rgba(15,23,42,0.06)" }}>
						<h3 style={{ margin: 0 }}>Security & Compliance</h3>
						<p style={{ marginTop: 8, color: "#374151" }}>Secure data handling, partitioned access, and compliance controls for sensitive projects.</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default Operations;
