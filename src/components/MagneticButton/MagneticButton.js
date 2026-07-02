import React, { useRef, useState, useCallback } from 'react';
import './MagneticButton.css';

/**
 * MagneticButton — button that attracts toward cursor on hover
 *
 * Props:
 *   strength   - magnetic pull intensity (default 0.3)
 *   radius     - activation radius in px (default 150)
 *   children   - content
 *   className  - additional CSS classes
 *   as         - element tag (default 'button')
 *   ...rest    - forwarded to element
 */
export default function MagneticButton({
  children,
  strength = 0.3,
  radius = 150,
  className = '',
  as: Tag = 'button',
  ...rest
}) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const frameRef = useRef(null);

  const handleMouse = useCallback((e) => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const distance = Math.sqrt(distX * distX + distY * distY);

      if (distance < radius) {
        const pull = (1 - distance / radius) * strength;
        setOffset({
          x: distX * pull,
          y: distY * pull,
        });
        setIsHovered(true);
      } else {
        setOffset({ x: 0, y: 0 });
        setIsHovered(false);
      }
    });
  }, [strength, radius]);

  const handleLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 });
    setIsHovered(false);
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <Tag
      ref={ref}
      className={`magnetic-btn ${isHovered ? 'magnetic-btn--active' : ''} ${className}`}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
      }}
      {...rest}
    >
      <span className="magnetic-btn__inner" style={{
        transform: isHovered ? `translate(${offset.x * 0.3}px, ${offset.y * 0.3}px)` : 'none',
      }}>
        {children}
      </span>
    </Tag>
  );
}