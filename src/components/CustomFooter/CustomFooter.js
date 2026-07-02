import React from 'react';
import { Link } from 'react-router-dom';
import ScrollParallax from '../ScrollParallax/ScrollParallax';
import './CustomFooter.css';
import logoSvg from '../../images/logo.png';

const CustomFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <ScrollParallax speed={0.1} invert={false}>
        <div className="footer-glow footer-glow-1"></div>
      </ScrollParallax>
      <ScrollParallax speed={0.15} invert={true}>
        <div className="footer-glow footer-glow-2"></div>
      </ScrollParallax>

      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={logoSvg} alt="eGame Logo" />
            </Link>
            <p className="footer-description">
              Your ultimate PUBG companion. Interactive maps, tactical planning, and community resources — everything you need to dominate the battlefield.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link" aria-label="Discord">
                <i className="fab fa-discord"></i>
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4 className="footer-title">Explore</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Map">Interactive Maps</Link></li>
              <li><Link to="/BlogMain">Blog</Link></li>
              <li><Link to="/FAQs">FAQs</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-column">
            <h4 className="footer-title">Support</h4>
            <ul className="footer-links">
              <li><Link to="/Contact">Contact Us</Link></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-column footer-newsletter">
            <h4 className="footer-title">Stay Updated</h4>
            <p className="newsletter-text">
              Get the latest news, tips, and updates delivered to your inbox.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-btn">
                <i className="fas fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} <span className="text-gradient">eGame</span>. All rights reserved.
            </p>
            <div className="footer-badge">
              <span className="badge-text">Built for gamers, by gamers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;
