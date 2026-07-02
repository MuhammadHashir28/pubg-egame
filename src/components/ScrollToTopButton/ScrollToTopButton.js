import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (


<div id="scrollup" className={`${showButton ? 'show' : ''}`}>
  <button id="scroll-top" className="scroll-to-top hover-target" onClick={scrollToTop}>
    <i className="las la-arrow-up"></i>
  </button>
</div>


  );
};

export default ScrollToTopButton;
