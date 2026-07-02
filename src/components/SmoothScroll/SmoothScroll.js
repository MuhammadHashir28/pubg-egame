import { useEffect } from 'react';

/**
 * SmoothScroll — enables smooth anchor scrolling and optional
 * smooth scroll behavior via CSS scroll-behavior.
 * Also provides a utility to animate scroll to elements smoothly.
 *
 * This component doesn't render anything — it just adds behavior.
 */
export default function SmoothScroll() {
  useEffect(() => {
    // Handle all anchor clicks with smooth scroll
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return null; // Non-rendering component
}