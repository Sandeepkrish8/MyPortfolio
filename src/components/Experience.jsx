import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { useScrollProgress } from '../hooks/useScrollProgress';

/** Each digit is a vertical strip of 0–9 that rolls to the right number. */
function Odometer({ value }) {
  return (
    <span className="odometer" aria-label={value}>
      {[...value].map((digit, i) => (
        <span className="odometer__digit" aria-hidden="true" key={i}>
          <span className="odometer__track" style={{ transform: `translateY(${-Number(digit) * 10}%)` }}>
            {'0123456789'.split('').map((n) => (
              <span key={n}>{n}</span>
            ))}
          </span>
        </span>
      ))}
    </span>
  );
}

export default function Experience({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);
  // The timeline line fills as you scroll (driven by the --p CSS variable).
  const timelineRef = useScrollProgress({ start: 0.6, end: 0.6 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveIndex(Number(entry.target.dataset.index));
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="section experience">
      <SectionHeading index="04" label="Experience" title="Where I’ve" accent="grown." />

      <div className="experience__layout">
        <div className="experience__year" aria-hidden="true">
          <span className="experience__year-dot" />
          <Odometer value={items[activeIndex].year} />
          <span className="mono experience__year-type">{items[activeIndex].type}</span>
        </div>

        <ol className="timeline" ref={timelineRef}>
          <span className="timeline__line" aria-hidden="true">
            <span />
          </span>
          {items.map((item, i) => (
            <li
              key={item.title + item.period}
              className={`timeline__item ${i <= activeIndex ? 'is-passed' : ''}`}
              data-index={i}
              ref={(el) => (itemRefs.current[i] = el)}
            >
              <span className="timeline__dot" aria-hidden="true" />
              <Reveal className="timeline__card">
                <p className="timeline__meta">
                  <span className="badge">{item.type}</span>
                  <span className="timeline__year">{item.year}</span>
                </p>
                <h3 className="timeline__title">{item.title}</h3>
                <p className="timeline__org">
                  {item.org} <span className="mono">· {item.period}</span>
                </p>
                <ul className="timeline__points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <ul className="tags">
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
