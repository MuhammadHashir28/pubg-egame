import React, { useEffect, useRef } from 'react';
import './CustomScrollbar.css';

const CustomScrollbar = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      // Get the scroll position and do something with it
      const scrollPosition = container.scrollTop;
      // Implement your custom logic for scrolling here
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="custom-scrollbar-container" ref={containerRef}>
      <div className="custom-scrollbar-track">
        <div className="custom-scrollbar-thumb"></div>
      </div>
    </div>
  );
};

export default CustomScrollbar;
