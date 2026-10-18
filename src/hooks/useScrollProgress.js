import { useEffect, useRef } from 'react';
import { clamp } from '../utils/motion';

/**
 * Writes a `--p` CSS variable (0 → 1) on the element as it travels through
 * the viewport. Updating a CSS variable directly avoids a React re-render on
 * every scroll event, which keeps scrolling smooth.
 */
export function useScrollProgress({ start = 1, end = 0.25 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let frame;
    const update = () => {
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the top of the element is at `start * vh`, 1 when its bottom reaches `end * vh`
      const total = rect.height + vh * (start - end);
      const progress = clamp((vh * start - rect.top) / total, 0, 1);
      node.style.setProperty('--p', progress.toFixed(4));
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
  }, [start, end]);

  return ref;
}
