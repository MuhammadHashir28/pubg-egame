import React, { useEffect, useRef } from 'react';

/**
 * ScrollReveal — wraps children and animates them on scroll into view.
 * Props:
 *   delay?: number (ms, default 0)
 *   direction?: 'up' | 'fade' | 'scale' | 'left' | 'right' (default 'up')
 *   threshold?: number 0-1 (default 0.15)
 *   className?: string
 */
export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  threshold = 0.15,
  className = '',
  tag: Tag = 'div',
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const getTransform = () => {
      switch (direction) {
        case 'fade': return 'translateY(0) scale(1)';
        case 'scale': return 'scale(0.9)';
        case 'left': return 'translateX(-40px)';
        case 'right': return 'translateX(40px)';
        default: return 'translateY(40px)';
      }
    };

    el.style.opacity = '0';
    el.style.transform = getTransform();
    el.style.transition = `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'none';
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction, threshold]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
