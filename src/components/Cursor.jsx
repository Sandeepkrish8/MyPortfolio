import { useEffect, useRef, useState } from 'react';

/**
 * Two-part custom cursor: a small dot glued to the pointer and a ring that
 * trails behind with easing (lerp). Hovering links grows the ring; elements
 * with data-cursor="Label" show that label inside the ring.
 * Only enabled for precise pointers (mouse / trackpad), never on touch.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState('');
  const [label, setLabel] = useState('');
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (fine && !reduce) setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add('has-cursor');
    let x = -100;
    let y = -100;
    let ringX = x;
    let ringY = y;
    let frame;

    const move = (event) => {
      x = event.clientX;
      y = event.clientY;
      dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    // Linear interpolation: each frame the ring covers 18% of the remaining distance.
    const loop = () => {
      ringX += (x - ringX) * 0.18;
      ringY += (y - ringY) * 0.18;
      ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = requestAnimationFrame(loop);
    };

    const over = (event) => {
      const target = event.target.closest('a, button, [data-cursor]');
      if (!target) {
        setMode('');
        setLabel('');
        return;
      }
      const text = target.dataset.cursor || '';
      setLabel(text);
      setMode(text ? 'label' : 'hover');
    };

    const down = () => ringRef.current.classList.add('is-down');
    const up = () => ringRef.current.classList.remove('is-down');
    const leave = () => setMode('hidden');
    const enter = () => setMode('');

    window.addEventListener('pointermove', move);
    document.addEventListener('pointerover', over);
    window.addEventListener('pointerdown', down);
    window.addEventListener('pointerup', up);
    document.documentElement.addEventListener('pointerleave', leave);
    document.documentElement.addEventListener('pointerenter', enter);
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove('has-cursor');
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerover', over);
      window.removeEventListener('pointerdown', down);
      window.removeEventListener('pointerup', up);
      document.documentElement.removeEventListener('pointerleave', leave);
      document.documentElement.removeEventListener('pointerenter', enter);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={ringRef} className={`cursor-ring ${mode ? `is-${mode}` : ''}`} aria-hidden="true">
        <span className="cursor-ring__circle">
          <span className="cursor-ring__label">{label}</span>
        </span>
      </div>
      <div ref={dotRef} className={`cursor-dot ${mode ? `is-${mode}` : ''}`} aria-hidden="true" />
    </>
  );
}
