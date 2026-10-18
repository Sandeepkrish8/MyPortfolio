import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '../utils/motion';

const GLYPHS = '!<>-_\\/[]{}—=+*^?#01';

/**
 * Cycles through `words`. Each change "decodes" letter by letter through
 * random glyphs, like a terminal locking onto the new word.
 */
export default function TextScramble({ words, interval = 2600 }) {
  const [text, setText] = useState(words[0]);
  const current = useRef(words[0]);

  useEffect(() => {
    let index = 0;
    let frame;
    let timer;

    const scrambleTo = (target) => {
      const from = current.current;
      const length = Math.max(from.length, target.length);
      const queue = Array.from({ length }, (_, i) => {
        const start = Math.floor(Math.random() * 18);
        return { from: from[i] || '', to: target[i] || '', start, end: start + 8 + Math.floor(Math.random() * 18) };
      });
      let tick = 0;

      const update = () => {
        let output = '';
        let done = 0;
        queue.forEach((item) => {
          if (tick >= item.end) {
            done += 1;
            output += item.to;
          } else if (tick >= item.start) {
            output += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          } else {
            output += item.from;
          }
        });
        setText(output);
        if (done === queue.length) {
          current.current = target;
          timer = setTimeout(next, interval);
        } else {
          tick += 1;
          frame = requestAnimationFrame(update);
        }
      };
      update();
    };

    const next = () => {
      index = (index + 1) % words.length;
      if (prefersReducedMotion()) {
        current.current = words[index];
        setText(words[index]);
        timer = setTimeout(next, interval);
      } else {
        scrambleTo(words[index]);
      }
    };

    timer = setTimeout(next, interval);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, [words, interval]);

  return (
    <span className="scramble">
      <span className="sr-only">{words.join(', ')}</span>
      <span aria-hidden="true">{text}</span>
    </span>
  );
}
