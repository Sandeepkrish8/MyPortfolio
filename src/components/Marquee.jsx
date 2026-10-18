import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../utils/motion';

/**
 * An endless ticker that speeds up with your scroll speed and flips
 * direction when you scroll back up.
 */
export default function Marquee({ items }) {
  const trackRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const track = trackRef.current;
    let offset = 0;
    let direction = -1;
    let boost = 0;
    let lastY = window.scrollY;
    let frame;

    const onScroll = () => {
      const delta = window.scrollY - lastY;
      lastY = window.scrollY;
      if (delta !== 0) direction = delta > 0 ? -1 : 1;
      boost = Math.min(boost + Math.abs(delta) * 0.08, 18);
    };

    const loop = () => {
      const half = track.scrollWidth / 2; // content is rendered twice
      offset += direction * (0.6 + boost);
      boost *= 0.92; // the extra speed fades out
      if (offset <= -half) offset += half;
      if (offset > 0) offset -= half;
      track.style.transform = `translate3d(${offset}px, 0, 0)`;
      frame = requestAnimationFrame(loop);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    frame = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const content = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track" ref={trackRef}>
        {content.map((item, i) => (
          <span key={i} className="marquee__item">
            {item}
            <span className="marquee__star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
