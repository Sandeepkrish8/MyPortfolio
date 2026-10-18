import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '../utils/motion';

const BLINDS = 5;

/**
 * Counts 0 → 100, then lifts away as five "window blinds" with a stagger.
 * Calls onDone as the blinds start moving so the hero can animate in underneath.
 */
export default function Preloader({ name, onDone }) {
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);
  const onDoneRef = useRef(onDone);

  useEffect(() => {
    if (prefersReducedMotion()) {
      onDoneRef.current();
      setGone(true);
      return;
    }
    document.documentElement.classList.add('is-locked');
    let frame;
    let leaveTimer;
    let goneTimer;
    const duration = 1900;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.round((1 - Math.pow(1 - progress, 3)) * 100));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
        return;
      }
      leaveTimer = setTimeout(() => {
        setLeaving(true);
        document.documentElement.classList.remove('is-locked');
        onDoneRef.current();
        goneTimer = setTimeout(() => setGone(true), 1400);
      }, 250);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(leaveTimer);
      clearTimeout(goneTimer);
      document.documentElement.classList.remove('is-locked');
    };
  }, []);

  if (gone) return null;

  return (
    <div className={`preloader ${leaving ? 'is-leaving' : ''}`} aria-hidden="true">
      <div className="preloader__blinds">
        {Array.from({ length: BLINDS }, (_, i) => (
          <span key={i} style={{ '--i': i }} />
        ))}
      </div>
      <div className="preloader__content">
        <p className="preloader__name">
          {[...name].map((char, i) => (
            <span key={i} style={{ '--i': i }}>
              {char}
            </span>
          ))}
        </p>
        <p className="preloader__hint">Loading portfolio</p>
        <div className="preloader__bar">
          <span style={{ transform: `scaleX(${count / 100})` }} />
        </div>
        <p className="preloader__count">{String(count).padStart(3, '0')}</p>
      </div>
    </div>
  );
}
