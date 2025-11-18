
import { useRef, useEffect } from 'react';

const useTilt = <T extends HTMLElement,>(active: boolean) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current || !active) return;

    const el = ref.current;
    let prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { width, height, left, top } = el.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      const maxTilt = 6;
      const tiltX = (maxTilt / (height / 2)) * (y - height / 2);
      const tiltY = -(maxTilt / (width / 2)) * (x - width / 2);

      el.style.setProperty('--tiltX', `${tiltX}deg`);
      el.style.setProperty('--tiltY', `${tiltY}deg`);
      el.style.transition = 'transform 0.1s ease-out';
    };

    const handleMouseLeave = () => {
      el.style.setProperty('--tiltX', '0deg');
      el.style.setProperty('--tiltY', '0deg');
      el.style.transition = 'transform 0.3s ease-in-out';
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    el.style.transform = 'perspective(1000px) rotateX(var(--tiltX, 0deg)) rotateY(var(--tiltY, 0deg))';
    el.style.willChange = 'transform';
    
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [active]);

  return ref;
};

export default useTilt;
