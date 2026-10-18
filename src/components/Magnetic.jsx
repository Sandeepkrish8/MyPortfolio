import { useRef } from 'react';

/** Pulls its child toward the mouse pointer, then springs back on leave. */
export default function Magnetic({ children, strength = 0.35, className = '' }) {
  const ref = useRef(null);

  const handleMove = (event) => {
    if (event.pointerType !== 'mouse') return;
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const reset = () => {
    ref.current.style.transform = '';
  };

  return (
    <span ref={ref} className={`magnetic ${className}`} onPointerMove={handleMove} onPointerLeave={reset}>
      {children}
    </span>
  );
}
