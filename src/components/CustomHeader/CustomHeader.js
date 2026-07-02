import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoSvg from '../../images/logo.png';
import './CustomHeader.css';

const CustomHeader = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', link: '/' },
    { id: 'about', label: 'About', link: '/About' },
    { id: 'maps', label: 'Maps', link: '/Map' },
    { id: 'blog', label: 'Blog', link: '/BlogMain' },
    { id: 'faqs', label: 'FAQs', link: '/FAQs' },
    { id: 'contact', label: 'Contact', link: '/Contact' }
  ];

  useEffect(() => {
    const activeMenuItem = menuItems.find((menuItem) => menuItem.link === location.pathname);
    if (activeMenuItem) {
      setActiveTab(activeMenuItem.id);
    } else {
      setActiveTab('');
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-inner">
          {/* Logo */}
          <Link to="/" className="logo-link">
            <img src={logoSvg} alt="eGame Logo" className="logo" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-menu-desktop">
            {menuItems.map((menuItem) => (
              <Link
                key={menuItem.id}
                to={menuItem.link}
                onClick={() => handleTabClick(menuItem.id)}
                className={`nav-link ${activeTab === menuItem.id ? 'active' : ''}`}
              >
                {menuItem.label}
              </Link>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            <Link to="/Map" className="btn-header-cta">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
              Open Map
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className={`nav-menu-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
          {menuItems.map((menuItem) => (
            <Link
              key={menuItem.id}
              to={menuItem.link}
              onClick={() => handleTabClick(menuItem.id)}
              className={`nav-link-mobile ${activeTab === menuItem.id ? 'active' : ''}`}
            >
              {menuItem.label}
            </Link>
          ))}
          <Link
            to="/Map"
            className="btn-header-cta mobile-cta"
            onClick={() => handleTabClick('maps')}
          >
            Open Map
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default CustomHeader;
