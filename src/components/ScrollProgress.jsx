import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';

const RADIUS = 20;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/** Thin progress bar at the top + a "back to top" button whose ring fills as you scroll. */
export default function ScrollProgress() {
  const barRef = useRef(null);
  const ringRef = useRef(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let frame;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      barRef.current.style.transform = `scaleX(${progress})`;
      ringRef.current.style.strokeDashoffset = CIRCUMFERENCE * (1 - progress);
      setShowTop(window.scrollY > window.innerHeight * 0.8);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <>
      <div className="scroll-bar" aria-hidden="true">
        <span ref={barRef} />
      </div>
      <button
        type="button"
        className={`to-top ${showTop ? 'is-visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
      >
        <svg className="to-top__progress" viewBox="0 0 48 48" aria-hidden="true">
          <circle cx="24" cy="24" r={RADIUS} className="to-top__track" />
          <circle
            ref={ringRef}
            cx="24"
            cy="24"
            r={RADIUS}
            className="to-top__ring"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE}
          />
        </svg>
        <Icon name="arrowUp" size={16} />
      </button>
    </>
  );
}
