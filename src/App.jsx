import { useEffect } from "react";
import { Link, NavLink, Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Impact from "./pages/Impact";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Pilot from "./pages/Pilot";
import Workflow from "./pages/Workflow";
import Operations from "./pages/Operations";
import NotFound from "./pages/NotFound";

const navigation = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/impact", label: "Impact" },
  { path: "/about", label: "About" },
  { path: "/careers", label: "Careers" },
  { path: "/pilot", label: "Pilot" },
  { path: "/workflow", label: "Workflow" },
  { path: "/operations", label: "Operations" },
  { path: "/privacy", label: "Privacy" },
  { path: "/contact", label: "Contact" },
];

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Baraka Digital Hub | AI Training, Data Annotation & Digital Operations</title>
        <meta
          name="description"
          content="Baraka Digital Hub delivers AI training, annotation, transcription, and digital operations services from Nairobi with social impact at the centre."
        />
      </Helmet>

      <header className="site-header">
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div className="logo" aria-hidden="true" />
          <div>
            <p className="eyebrow" style={{ margin: 0, color: "#2563eb" }}>
              Baraka Digital Hub
            </p>
          </div>
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="app-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/pilot" element={<Pilot />} />
          <Route path="/workflow" element={<Workflow />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
