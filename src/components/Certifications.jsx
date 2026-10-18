import { useState } from 'react';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

/** A list where a dark highlight block glides to whichever row you hover. */
export default function Certifications({ items }) {
  const [hovered, setHovered] = useState(null);
  const [box, setBox] = useState({ top: 0, height: 0 });

  const handleEnter = (event, i) => {
    const row = event.currentTarget;
    setBox({ top: row.offsetTop, height: row.offsetHeight });
    setHovered(i);
  };

  return (
    <section id="certifications" className="section certs">
      <SectionHeading
        index="05"
        label="Certifications"
        title="Always"
        accent="learning."
        note={`${items.length} certifications across frontend, JavaScript, databases and tooling.`}
      />

      <Reveal className="certs__list" onMouseLeave={() => setHovered(null)}>
        <span
          className={`certs__highlight ${hovered !== null ? 'is-visible' : ''}`}
          style={{ transform: `translateY(${box.top}px)`, height: box.height }}
          aria-hidden="true"
        />
        <ul>
          {items.map((cert, i) => (
            <li
              key={cert.name}
              className={`certs__row ${hovered === i ? 'is-hovered' : ''}`}
              onMouseEnter={(event) => handleEnter(event, i)}
            >
              <span className="certs__index mono">{String(i + 1).padStart(2, '0')}</span>
              <span className="certs__name">{cert.name}</span>
              <span className="certs__issuer">{cert.issuer}</span>
              <span className="certs__year mono">{cert.year}</span>
              <Icon name="arrowUpRight" size={16} className="certs__arrow" />
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
