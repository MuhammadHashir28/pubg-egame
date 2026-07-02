import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ContentSlider from '../components/ContentSlider/ContentSlider';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import ScrollParallax from '../components/ScrollParallax/ScrollParallax';
import ParallaxTilt from '../components/ParallaxTilt/ParallaxTilt';
import MagneticButton from '../components/MagneticButton/MagneticButton';
import { useEnhancedParallax, useMouseGlow } from '../hooks/useEnhancedParallax';
import pubgCharacterImg from '../images/pubg-character.png';
import sniperCharacterImg from '../images/snipercharacter.png';
import gameCharactersImg from '../images/game-charecters.png';
import './Home.css';

// Force CSS reload with timestamp
console.log('Home.css loaded at', new Date().toISOString());

/* ---- Animated Counter ---- */
function CounterStat({ value, label, delay = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          // Parse numeric part
          const num = parseInt(value.replace(/\D/g, ''), 10) || 0;
          const suffix = value.replace(/[\d,]/g, '');
          const duration = 1800;
          const start = performance.now();

          const tick = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(num * eased));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  const num = parseInt(value.replace(/\D/g, ''), 10) || 0;
  const suffix = value.replace(/[\d,]/g, '');

  return (
    <div className="hero-stat" ref={ref} style={{ animationDelay: `${delay}ms` }}>
      <div className="hero-stat-value">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="hero-stat-label">{label}</div>
    </div>
  );
}

/* ---- Hero Slide with Tilt & Mouse Glow ---- */
function HeroSlideVisual({ image, imageAlt }) {
  const [tiltRef, , tilt] = useEnhancedParallax({ mode: 'tilt', speed: 0.3 });
  const [glowRef, glowPos] = useMouseGlow();

  return (
    <div className="hero-visual animate-slide-up animate-slide-up-delay-2" ref={glowRef}>
      <div className="hero-image-wrapper" ref={tiltRef} style={{
        transform: `perspective(800px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        {/* Floating glow rings */}
        <div className="hero-glow-ring hero-glow-ring-1"></div>
        <div className="hero-glow-ring hero-glow-ring-2"></div>
        <div className="hero-glow-ring hero-glow-ring-3"></div>
        <img src={image} alt={imageAlt} className="hero-image" />
        {/* Floating tags */}
        <div className="hero-float-tag hero-float-tag-1" style={{
          transform: `translate(${glowPos.x * 10 - 5}px, ${glowPos.y * 10 - 5}px)`,
          transition: 'transform 0.2s ease',
        }}>
          <span className="tag-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          </span>
          Live Zones
        </div>
        <div className="hero-float-tag hero-float-tag-2" style={{
          transform: `translate(${glowPos.x * -10 + 5}px, ${glowPos.y * -10 + 5}px)`,
          transition: 'transform 0.2s ease',
        }}>
          <span className="tag-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/></svg>
          </span>
          4 Maps
        </div>
        {/* Mouse-follow glow */}
        <div className="hero-mouse-glow" style={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,193,7,0.08), transparent 70%)',
          pointerEvents: 'none',
          transform: `translate(${glowPos.x * 100 - 50}px, ${glowPos.y * 100 - 50}px)`,
          transition: 'transform 0.3s ease',
          zIndex: 1,
        }} />
      </div>
    </div>
  );
}

export default function Home() {
  const slides = [
    {
      badge: 'PUBG Companion Suite',
      title: 'Dominate the Battlefield',
      description: 'Master every drop, every fight, every victory. Interactive maps, smart loadouts, and pro-grade analytics built for serious players.',
      image: pubgCharacterImg,
      imageAlt: 'PUBG Character',
      stats: [
        { value: '50K+', label: 'Active Squads' },
        { value: '4', label: 'Maps Covered' },
        { value: '1M+', label: 'Marks Placed' },
      ],
      primaryLink: { to: '/Map', label: 'Open Tactical Map' },
      secondaryLink: { to: '/BlogMain', label: 'Read Guides' },
    },
    {
      badge: 'Pro Strategy Suite',
      title: 'Snipe Like a Champion',
      description: 'Plan rotations, mark hot zones, and share tactics with your squad. Every callout counts when the circle shrinks.',
      image: sniperCharacterImg,
      imageAlt: 'Sniper Character',
      stats: [
        { value: '100K+', label: 'Matches Tracked' },
        { value: '500+', label: 'Tournaments' },
      ],
      primaryLink: { to: '/Map', label: 'Plan Your Route' },
      secondaryLink: { to: '/About', label: 'Learn More' },
    },
    {
      badge: 'Built for Squads',
      title: 'Gear Up for Victory',
      description: 'From snipers to CQB, optimize every slot. Build the perfect loadout for every fight scenario in seconds.',
      image: gameCharactersImg,
      imageAlt: 'Game Characters',
      stats: [
        { value: '200+', label: 'Items Tracked' },
        { value: '24/7', label: 'Live Updates' },
      ],
      primaryLink: { to: '/Map', label: 'Start Mapping' },
      secondaryLink: { to: '/BlogMain', label: 'Read Guides' },
    },
  ];

  const features = [
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
          <line x1="9" y1="3" x2="9" y2="18"/>
          <line x1="15" y1="6" x2="15" y2="21"/>
        </svg>
      ),
      title: 'Interactive Maps',
      description: 'Mark drops, plan rotations, share callouts with squad. All four maps, fully interactive.',
      link: '/Map',
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
      ),
      title: 'Loadout Builder',
      description: 'Craft the perfect loadout with item database, capacity calculator, and pre-built templates.',
      link: '/About',
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      ),
      title: 'Score Tracking',
      description: 'Upload match results, track K/D trends, damage graphs, and rank progression over time.',
      link: '/About',
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Community',
      description: 'Join thousands of players sharing strategies, forming squads, and competing in weekly tournaments.',
      link: '/BlogMain',
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
      ),
      title: 'Live Support',
      description: 'Round-the-clock support from our team of PUBG veterans. Never get stuck on a problem.',
      link: '/Contact',
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      ),
      title: 'Live Zone Predictions',
      description: 'AI-powered circle predictions that factor in terrain, player density, and historical data.',
      link: '/Map',
    },
  ];

  const trustedBy = ['TSM', 'NAVI', 'FaZe Clan', 'Cloud9', 'Fnatic', 'Team Liquid', '100 Thieves', 'Sentinels'];

  return (
    <div className="home">
      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-grid-pattern"></div>
          {/* Parallax orbs that follow scroll */}
          <ScrollParallax speed={0.15} invert={false}>
            <div className="hero-orb hero-orb-1"></div>
          </ScrollParallax>
          <ScrollParallax speed={0.2} invert={true}>
            <div className="hero-orb hero-orb-2"></div>
          </ScrollParallax>
          <ScrollParallax speed={0.1} invert={false}>
            <div className="hero-orb hero-orb-3"></div>
          </ScrollParallax>
          {/* Gradient vignette */}
          <div className="hero-vignette"></div>
        </div>

        <div className="container">
          <ContentSlider
            content={slides.map((slide, index) => (
              <div className="hero-slide" key={index}>
                <div className="hero-content">
                  {/* Text side */}
                  <div className="hero-text">
                    <div className="hero-badge animate-slide-up">
                      <span className="hero-badge-dot"></span>
                      {slide.badge}
                    </div>
                    <h1 className="hero-title animate-slide-up animate-slide-up-delay-1">
                      {slide.title}
                    </h1>
                    <p className="hero-description animate-slide-up animate-slide-up-delay-2">
                      {slide.description}
                    </p>
                    <div className="hero-actions animate-slide-up animate-slide-up-delay-3">
                      <MagneticButton
                        as={Link}
                        to={slide.primaryLink.to}
                        className="btn-warm btn-xl hero-cta-primary"
                        strength={0.2}
                        radius={120}
                      >
                        {slide.primaryLink.label}
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </MagneticButton>
                      <MagneticButton
                        as={Link}
                        to={slide.secondaryLink.to}
                        className="btn-ghost btn-xl"
                        strength={0.15}
                        radius={100}
                      >
                        {slide.secondaryLink.label}
                      </MagneticButton>
                    </div>
                    {/* Animated stats */}
                    <div className="hero-stats animate-slide-up animate-slide-up-delay-4">
                      {slide.stats.map((stat, idx) => (
                        <React.Fragment key={idx}>
                          <CounterStat value={stat.value} label={stat.label} />
                          {idx < slide.stats.length - 1 && <div className="hero-stat-divider"></div>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Visual side with tilt + mouse glow */}
                  <HeroSlideVisual image={slide.image} imageAlt={slide.imageAlt} />
                </div>
              </div>
            ))}
          />

          {/* Scroll indicator */}
          <div className="scroll-indicator">
            <div className="scroll-indicator-line"></div>
            <span>Scroll</span>
          </div>
        </div>
      </section>

      {/* ─── TRUSTED BY ─── */}
      <ScrollReveal>
        <section className="trusted-section">
          <div className="trusted-inner">
            <p className="trusted-label">Trusted by top teams worldwide</p>
            <div className="trusted-track-wrap">
              <div className="marquee-track">
                <div className="marquee-inner">
                  {[...trustedBy, ...trustedBy].map((team, i) => (
                    <span key={i} className="trusted-item">{team}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── FEATURES ─── */}
      <section className="features">
        <div className="features-inner">
          <div className="features-header">
            <span className="badge-premium">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              Why eGame
            </span>
            <h2 className="features-title">Everything you need to win</h2>
            <p className="features-sub">Built by gamers who live and breathe PUBG. Every tool is battle-tested and refined by the community.</p>
          </div>

          <div className="features-grid stagger-fade">
            {features.map((feature, i) => (
              <ParallaxTilt key={i} speed={0.3} scale={1.02} glare={true}>
                <Link to={feature.link} className="feature-card" key={i}>
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <div className="feature-body">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-desc">{feature.description}</p>
                  </div>
                  <div className="feature-cta">
                    <span>Explore</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </Link>
              </ParallaxTilt>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta-section">
        <ScrollParallax speed={0.15}>
          <div className="cta-orb-bg" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '700px',
            height: '500px',
            background: 'radial-gradient(ellipse, rgba(255, 193, 7, 0.06) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }} />
        </ScrollParallax>
        <div className="cta-inner">
          <ScrollReveal>
            <span className="badge-premium">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              Get Started Free
            </span>
            <h2 className="cta-title">Ready to dominate?</h2>
            <p className="cta-sub">Join 50,000+ players who use eGame every day to gain their competitive edge.</p>
            <div className="cta-actions">
              <MagneticButton
                as={Link}
                to="/Map"
                className="btn-warm btn-xl"
                strength={0.25}
                radius={130}
              >
                Launch the Map
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </MagneticButton>
              <Link to="/About" className="btn-ghost btn-xl">
                See How It Works
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}