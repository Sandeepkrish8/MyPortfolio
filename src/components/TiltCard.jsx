import { useRef } from 'react';

/** A card that tilts in 3D toward the pointer, with a moving glare highlight. */
export default function TiltCard({ children, className = '', max = 10, ...rest }) {
  const ref = useRef(null);

  const handleMove = (event) => {
    if (event.pointerType !== 'mouse') return;
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width; // 0 → 1
    const py = (event.clientY - rect.top) / rect.height;
    el.style.setProperty('--rx', `${(0.5 - py) * max}deg`);
    el.style.setProperty('--ry', `${(px - 0.5) * max}deg`);
    el.style.setProperty('--gx', `${px * 100}%`);
    el.style.setProperty('--gy', `${py * 100}%`);
  };

  const reset = () => {
    const el = ref.current;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <div ref={ref} className={`tilt ${className}`} onPointerMove={handleMove} onPointerLeave={reset} {...rest}>
      {children}
      <span className="tilt__glare" aria-hidden="true" />
    </div>
  );
}
