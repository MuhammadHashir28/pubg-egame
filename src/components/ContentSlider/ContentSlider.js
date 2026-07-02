import React, { useState, useEffect } from 'react';
import './ContentSlider.css';

const ContentSlider = ({ content, autoPlay = true, interval = 5000 }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-play
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % content.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, content.length, interval]);

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
        {content.map((item, index) => (
          <div className="slide" key={index}>
            {item}
          </div>
        ))}
      </div>

      <div className="dots-container">
        <div className="dots">
          {content.map((_, dotIndex) => (
            <button
              key={dotIndex}
              className={`dot ${dotIndex === activeSlide ? 'active' : ''}`}
              onClick={() => handleDotClick(dotIndex)}
              aria-label={`Go to slide ${dotIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentSlider;
