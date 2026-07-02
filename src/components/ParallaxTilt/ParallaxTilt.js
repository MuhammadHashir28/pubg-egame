import React from 'react';
import { useEnhancedParallax } from '../../hooks/useEnhancedParallax';
import './ParallaxTilt.css';

/**
 * ParallaxTilt — 3D perspective tilt card on mouse hover
 *
 * Props:
 *   speed      - tilt intensity 0-1 (default 0.5)
 *   scale      - hover scale (default 1.02)
 *   className  - additional CSS classes
 *   glare      - show glare effect (default true)
 *   children   - content
 */
export default function ParallaxTilt({
  children,
  speed = 0.5,
  scale = 1.02,
  className = '',
  glare = true,
  style = {},
  ...rest
}) {
  const [ref, , tilt] = useEnhancedParallax({ mode: 'tilt', speed });

  return (
    <div
      ref={ref}
      className={`parallax-tilt ${glare ? 'parallax-tilt--glare' : ''} ${className}`}
      style={{
        ...style,
        transform: `perspective(800px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(${tilt.rotateX !== 0 || tilt.rotateY !== 0 ? scale : 1}, ${tilt.rotateX !== 0 || tilt.rotateY !== 0 ? scale : 1}, 1)`,
        transition: tilt.rotateX === 0 && tilt.rotateY === 0 ? 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
        willChange: 'transform',
      }}
      {...rest}
    >
      {children}
    </div>
  );
}