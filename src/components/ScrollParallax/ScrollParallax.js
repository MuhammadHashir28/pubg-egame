import React from 'react';
import { useEnhancedParallax } from '../../hooks/useEnhancedParallax';
import './ScrollParallax.css';

/**
 * ScrollParallax — wraps children with scroll-based parallax translation
 *
 * Props:
 *   speed  - intensity 0-1 (default 0.3)
 *   invert - reverse direction (default false)
 *   className - additional CSS classes
 *   as      - component tag (default 'div')
 *   style  - additional inline styles
 */
export default function ScrollParallax({
  children,
  speed = 0.3,
  invert = false,
  className = '',
  as: Tag = 'div',
  style = {},
  ...rest
}) {
  const [ref, offset] = useEnhancedParallax({ mode: 'scroll', speed, invert });

  return (
    <Tag
      ref={ref}
      className={`scroll-parallax ${className}`}
      style={{
        ...style,
        transform: `translateY(${offset.y}px)`,
        willChange: 'transform',
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}