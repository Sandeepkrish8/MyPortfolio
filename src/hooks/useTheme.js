import { useState } from 'react';
import { flushSync } from 'react-dom';
import { prefersReducedMotion } from '../utils/motion';

/**
 * Light / dark theme with a circular "ink spill" reveal that grows from the
 * click position, using the View Transitions API when the browser supports it.
 */
export function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || 'light'
  );

  const toggleTheme = (event) => {
    const next = theme === 'dark' ? 'light' : 'dark';
    const apply = () => {
      document.documentElement.dataset.theme = next;
      setTheme(next);
      try {
        localStorage.setItem('theme', next);
      } catch {
        /* storage can be blocked — the theme still works for this visit */
      }
    };

    if (!document.startViewTransition || prefersReducedMotion()) {
      apply();
      return;
    }

    // Keyboard clicks report 0,0 — fall back to the button's centre.
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX || rect.left + rect.width / 2;
    const y = event.clientY || rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    const transition = document.startViewTransition(() => flushSync(apply));
    transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 750, easing: 'cubic-bezier(.7,0,.2,1)', pseudoElement: '::view-transition-new(root)' }
      );
    });
  };

  return { theme, toggleTheme };
}
