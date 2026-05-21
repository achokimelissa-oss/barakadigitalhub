import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
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
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="site-footer">
          <p>Built with Vite + React · Deployed on Vercel</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
