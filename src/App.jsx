import { useEffect, useState } from "react";
import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Impact from "./pages/Impact";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const logo = "/logo.png";

function App() {
  const [showTop, setShowTop] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 280);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Router>
      <div className="app-shell">
        <header className="site-header">
          <div className="brand">
            <img src={logo} alt="Baraka Digital Hub logo" className="logo" />
            <div>
              <p className="eyebrow">Baraka Digital Hub</p>
              <h1>Digital services designed for modern growth</h1>
            </div>
          </div>

          <nav className="nav-links">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/impact">Social Impact</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact" className="nav-cta button primary">
              Start Pilot
            </NavLink>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="site-footer">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>Company</h3>
              <p>
                Baraka Digital Hub connects global clients to social impact digital services while creating sustainable opportunity for youth in Nairobi.
              </p>
              <div className="footer-company-links">
                <NavLink to="/privacy" className="footer-company-link">Privacy</NavLink>
                <NavLink to="/contact" className="footer-contact-link">Contact</NavLink>
              </div>
            </div>

            <div className="footer-section">
              <h3>Services</h3>
              <ul className="footer-list">
                <li>AI training & annotation</li>
                <li>Transcription & NLP datasets</li>
                <li>BPO & data operations</li>
                <li>Audio & speech processing</li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Social Impact</h3>
              <ul className="footer-list">
                <li>Dual-impact delivery model</li>
                <li>Skills development for underserved youth</li>
                <li>Support for Baraka Children’s Home</li>
                <li>Community economic inclusion</li>
              </ul>
            </div>
          </div>
          <div className="footer-copy">© {year} Baraka Digital Hub. All rights reserved.</div>
        </footer>
        <button
          className={`scroll-top ${showTop ? "visible" : ""}`}
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <span>↑</span>
          <span>Back to top</span>
        </button>
      </div>
    </Router>
  );
}

export default App;
