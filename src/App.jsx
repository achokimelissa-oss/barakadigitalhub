import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Impact from "./pages/Impact";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const logo = "/logo.png";

function App() {
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
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="site-footer">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>About</h3>
              <p>
                Baraka Digital Hub connects global clients to social impact digital services while creating sustainable opportunity for youth in Nairobi.
              </p>
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

            <div className="footer-section">
              <h3>Careers</h3>
              <p>No open roles at this time.</p>
              <p>Check back for future opportunities or contact us to discuss partnerships and project work.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
