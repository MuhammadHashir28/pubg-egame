import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import ScrollParallax from '../components/ScrollParallax/ScrollParallax';
import ParallaxTilt from '../components/ParallaxTilt/ParallaxTilt';
import MagneticButton from '../components/MagneticButton/MagneticButton';
import './About.css';
import aboutImg1 from '../images/about-img1.jpg';

/* Animated Counter */
function AnimatedCounter({ value, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const num = parseInt(value.replace(/\D/g, ''), 10) || 0;
        const suffix = value.replace(/[\d,]/g, '');
        const duration = 2000;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setCount(Math.round(num * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  const num = parseInt(value.replace(/\D/g, ''), 10) || 0;
  const suffix = value.replace(/[\d,]/g, '');
  return (
    <div className="stat-card" ref={ref}>
      <div className="stat-value">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function About() {
  const services = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
          <line x1="9" y1="3" x2="9" y2="18"/>
          <line x1="15" y1="6" x2="15" y2="21"/>
        </svg>
      ),
      title: 'Interactive Maps',
      description: 'Mark drop zones, plan rotations, share callouts with squad. All four PUBG maps covered in detail.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
      ),
      title: 'Loadout Builder',
      description: 'Create perfect loadouts with our item database, capacity calculator, and community-shared templates.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      ),
      title: 'Score Tracking',
      description: 'Upload match results and track your K/D, damage, and rank progression over time with charts.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Community',
      description: 'Join thousands of players sharing strategies, forming squads, and competing in weekly tournaments.',
    },
  ];

  const stats = [
    { value: '50K+', label: 'Active Users' },
    { value: '4', label: 'Maps Covered' },
    { value: '100K+', label: 'Matches Tracked' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <div className="about-page">
      {/* ─── HERO ─── */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <div className="about-grid-overlay"></div>
          <ScrollParallax speed={0.15} invert={false}>
            <div className="about-orb about-orb-1"></div>
          </ScrollParallax>
          <ScrollParallax speed={0.2} invert={true}>
            <div className="about-orb about-orb-2"></div>
          </ScrollParallax>
          <ScrollParallax speed={0.1} invert={false}>
            <div className="about-orb about-orb-3"></div>
          </ScrollParallax>
        </div>
        <div className="container">
          <div className="about-hero-content">
            <span className="page-badge animate-slide-up">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              About Us
            </span>
            <h1 className="page-title animate-slide-up animate-slide-up-delay-1">
              Empowering Players to{' '}
              <span className="title-gradient">Dominate</span>
            </h1>
            <p className="page-description animate-slide-up animate-slide-up-delay-2">
              We're a team of passionate gamers and developers building the ultimate PUBG companion tool. Every feature is designed by players who understand the game inside out.
            </p>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid stagger-fade">
            {stats.map((stat) => (
              <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── MISSION ─── */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <ScrollReveal direction="left">
              <div className="mission-image-wrap">
                <ScrollParallax speed={0.1}>
                  <div className="mission-glow-card"></div>
                </ScrollParallax>
                <img src={aboutImg1} alt="Our Mission" className="mission-image" />
                <div className="mission-image-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/></svg>
                  4 Maps Active
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="mission-content">
                <span className="section-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                  Our Mission
                </span>
                <h2 className="section-title">
                  Unleash Your <span className="title-gradient">Full Potential</span>
                </h2>
                <p className="mission-text">
                  We believe every player deserves the tools to reach their peak. Whether you're grinding your first Chicken Dinner or competing at a pro level, eGame gives you the tactical edge that matters.
                </p>
                <p className="mission-text">
                  From precise map annotations to optimized loadouts, we turn game sense into data — so you make better decisions, faster, every match.
                </p>
                <div className="mission-actions">
                  <MagneticButton as={Link} to="/Map" className="btn-warm" strength={0.2} radius={120}>
                    Explore Tools
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </MagneticButton>
                  <Link to="/BlogMain" className="btn-ghost">
                    Read Guides
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="services-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="badge-premium">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                What We Offer
              </span>
              <h2 className="section-title-center">Our Services</h2>
            </div>
          </ScrollReveal>
          <div className="services-grid stagger-fade">
            {services.map((service) => (
              <ParallaxTilt key={service.title} speed={0.4} scale={1.03} glare={true}>
                <div className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </ParallaxTilt>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="about-cta">
        <div className="container">
          <ScrollReveal>
            <div className="cta-box">
              <ScrollParallax speed={0.12}>
                <div className="cta-glow-orb"></div>
              </ScrollParallax>
              <ScrollParallax speed={0.18} invert={true}>
                <div className="cta-glow-orb-2"></div>
              </ScrollParallax>
              <div className="cta-box-inner">
                <span className="badge-premium" style={{ marginBottom: '1.5rem' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  Start Today
                </span>
                <h2 className="cta-title">Ready to Level Up?</h2>
                <p className="cta-description">
                  Join 50,000+ players who dominate with eGame every day.
                </p>
                <div className="cta-actions">
                  <MagneticButton as={Link} to="/Map" className="btn-warm btn-xl" strength={0.25} radius={130}>
                    Launch Map
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </MagneticButton>
                  <Link to="/Contact" className="btn-ghost btn-xl">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

export default About;