import React, { useEffect, useState } from 'react';
import './SitePreloader.css';

const SitePreloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing...');

  const statusMessages = [
    'Initializing...',
    'Loading assets...',
    'Preparing maps...',
    'Syncing data...',
    'Almost ready...',
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    let msgIndex = 0;
    const msgInterval = setInterval(() => {
      msgIndex = (msgIndex + 1) % statusMessages.length;
      setStatusText(statusMessages[msgIndex]);
    }, 450);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      clearInterval(msgInterval);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="site-preloader">
      {/* Background elements */}
      <div className="preloader-bg">
        <div className="preloader-orb preloader-orb-1"></div>
        <div className="preloader-orb preloader-orb-2"></div>
        <div className="preloader-orb preloader-orb-3"></div>
        <div className="preloader-grid"></div>
      </div>

      {/* Corner decorations */}
      <div className="preloader-corner preloader-corner-tl"></div>
      <div className="preloader-corner preloader-corner-tr"></div>
      <div className="preloader-corner preloader-corner-bl"></div>
      <div className="preloader-corner preloader-corner-br"></div>

      {/* Content */}
      <div className="preloader-content">
        {/* Logo mark — teal crosshair */}
        <div className="preloader-logo-wrap">
          <div className="preloader-logo-ring"></div>
          <div className="preloader-logo-ring-2"></div>
          <div className="preloader-logo-ring-3"></div>
          <svg
            className="preloader-logo-icon"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {/* Crosshair icon */}
            <circle cx="12" cy="12" r="9" />
            <line x1="12" y1="1" x2="12" y2="5" />
            <line x1="12" y1="19" x2="12" y2="23" />
            <line x1="1" y1="12" x2="5" y2="12" />
            <line x1="19" y1="12" x2="23" y2="12" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>

        {/* Progress */}
        <div className="preloader-progress">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>

        <p className="preloader-status">{statusText}</p>
      </div>
    </div>
  );
};

export default SitePreloader;
