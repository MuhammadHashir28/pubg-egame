import { useEffect, useRef, useState } from 'react';

/**
 * useEnhancedParallax — multi-mode parallax hook
 * Modes: 'scroll' | 'mouse' | 'tilt' | 'depth'
 *
 * @param {Object} options
 * @param {'scroll'|'mouse'|'tilt'|'depth'} options.mode - parallax mode
 * @param {number} options.speed - intensity (0-1), default 0.3
 * @param {boolean} options.invert - reverse direction, default false
 * @returns {Array} [ref, offset, tilt]
 */
export function useEnhancedParallax({
  mode = 'scroll',
  speed = 0.3,
  invert = false,
} = {}) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const frameRef = useRef(null);

  // ---- Scroll Parallax ----
  useEffect(() => {
    if (mode !== 'scroll' && mode !== 'depth') return;

    const handleScroll = () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        const elementCenter = rect.top + rect.height / 2;
        const distance = (elementCenter - viewportCenter) / viewportCenter;
        const factor = invert ? -speed : speed;
        setOffset({ x: 0, y: distance * 100 * factor });
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [mode, speed, invert]);

  // ---- Mouse Parallax ----
  useEffect(() => {
    if (mode !== 'mouse' && mode !== 'depth') return;

    const el = ref.current;
    if (!el) return;

    const handleMouse = (e) => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) / rect.width;
        const deltaY = (e.clientY - centerY) / rect.height;
        const factor = invert ? -speed : speed;
        setOffset({
          x: deltaX * 40 * factor,
          y: deltaY * 40 * factor,
        });
      });
    };

    el.addEventListener('mousemove', handleMouse, { passive: true });
    el.addEventListener('mouseleave', () => setOffset({ x: 0, y: 0 }));
    return () => {
      el.removeEventListener('mousemove', handleMouse);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [mode, speed, invert]);

  // ---- Tilt (3D perspective tilt on hover) ----
  useEffect(() => {
    if (mode !== 'tilt') return;

    const el = ref.current;
    if (!el) return;

    const handleTilt = (e) => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const maxRotate = 15 * speed;
        setTilt({
          rotateX: (y - 0.5) * -maxRotate,
          rotateY: (x - 0.5) * maxRotate,
        });
      });
    };

    const resetTilt = () => setTilt({ rotateX: 0, rotateY: 0 });

    el.addEventListener('mousemove', handleTilt, { passive: true });
    el.addEventListener('mouseleave', resetTilt);
    return () => {
      el.removeEventListener('mousemove', handleTilt);
      el.removeEventListener('mouseleave', resetTilt);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [mode, speed]);

  return [ref, offset, tilt];
}

/**
 * useMouseGlow — tracks mouse position relative to element for glow effects
 * Returns normalized position { x: 0-1, y: 0-1 }
 */
export function useMouseGlow() {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      setPos({
        x: Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width)),
        y: Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height)),
      });
    };

    el.addEventListener('mousemove', handleMove, { passive: true });
    return () => el.removeEventListener('mousemove', handleMove);
  }, []);

  return [ref, pos];
}

/**
 * useFollowCursor — smoothly follows cursor with spring-like easing
 * @param {number} lerp - smoothing factor (0-1), default 0.08
 * @returns {Array} [x, y] - smooth cursor position
 */
export function useFollowCursor(lerp = 0.08) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const frameRef = useRef(null);

  useEffect(() => {
    const handleMouse = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouse, { passive: true });

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * lerp;
      current.current.y += (target.current.y - current.current.y) * lerp;
      setPos({ ...current.current });
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouse);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [lerp]);

  return [pos.x, pos.y];
}