import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import semua halaman
import Home from './pages/Home';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      {/* Navbar Modern dengan Glassmorphism effect dari CSS */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm py-3">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to="/">
            <span className="text-primary">HRD.</span>
          </Link>
          
          <button 
            className="navbar-toggler border-0" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-2">
              <li className="nav-item">
                <Link className="nav-link px-3" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="/team">Team</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3 btn btn-primary text-white rounded-pill ms-lg-3 px-4" to="/contact">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Konten Utama dengan Minimum Height agar Footer tetap di bawah */}
      <main style={{ minHeight: '85vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer Modern */}
      <footer className="bg-dark text-white pt-5 pb-4 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold mb-3 text-primary">HRD.</h5>
              <p className="text-white-50 w-75">
                Membangun solusi digital masa depan dengan React.js dan desain yang berpusat pada pengguna.
              </p>
            </div>
            <div className="col-md-3 mb-4">
              <h6 className="fw-bold mb-3 text-uppercase small">Navigation</h6>
              <ul className="list-unstyled text-white-50">
                <li><Link to="/" className="text-decoration-none text-reset">Home</Link></li>
                <li><Link to="/portfolio" className="text-decoration-none text-reset">Portfolio</Link></li>
                <li><Link to="/team" className="text-decoration-none text-reset">Our Team</Link></li>
              </ul>
            </div>
            <div className="col-md-3 mb-4 text-md-end">
              <h6 className="fw-bold mb-3 text-uppercase small">Social Media</h6>
              <div className="d-flex justify-content-md-end gap-3 text-white-50">
                <i className="bi bi-github fs-5"></i>
                <i className="bi bi-linkedin fs-5"></i>
                <i className="bi bi-instagram fs-5"></i>
              </div>
            </div>
          </div>
          <hr className="border-secondary mt-4 mb-4" />
          <div className="text-center text-white-50 small">
            <p className="mb-0">&copy; 2026 Herdyawan Ismail Nurcahyo. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;