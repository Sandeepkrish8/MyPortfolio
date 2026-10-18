import { useState } from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { useInView } from '../hooks/useInView';

const ICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/';
const COLUMNS = 8; // used only to compute the diagonal entrance wave

function SkillIcon({ skill }) {
  const [failed, setFailed] = useState(false);
  if (!skill.icon || failed) {
    return <span className="element-detail__symbol">{skill.symbol}</span>;
  }
  return (
    <img
      key={skill.icon}
      className="element-detail__icon"
      src={`${ICON_BASE}${skill.icon}.svg`}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

/**
 * "The periodic table of my stack": every skill is an element tile.
 * Hover / focus / tap a tile to inspect it; pick a family chip to light that family up.
 */
export default function Skills({ skills, families }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [family, setFamily] = useState(null);
  const [gridRef, gridVisible] = useInView({ threshold: 0.15 });
  const active = skills[activeIndex];
  const familyLabel = (id) => families.find((f) => f.id === id)?.label;

  return (
    <section id="skills" className="section skills">
      <SectionHeading
        index="02"
        label="Skills"
        title="The periodic table"
        accent="of my stack."
        note="Elements in six families. Hover a tile to inspect it, or pick a family to light it up."
      />

      <Reveal className="chips" role="group" aria-label="Filter skills by family" delay={0.1}>
        {families.map((f) => (
          <button
            key={f.id}
            type="button"
            className={`chip chip--${f.id} ${family === f.id ? 'is-active' : ''}`}
            aria-pressed={family === f.id}
            onClick={() => setFamily((current) => (current === f.id ? null : f.id))}
          >
            <span className="chip__dot" />
            {f.label}
          </button>
        ))}
      </Reveal>

      <div className="skills__layout">
        <div ref={gridRef} className={`ptable ${gridVisible ? 'is-visible' : ''} ${family ? 'is-filtered' : ''}`}>
          {skills.map((skill, i) => {
            const dimmed = family && skill.family !== family;
            const related = !family && skill.family === active.family && i !== activeIndex;
            const wave = (i % COLUMNS) + Math.floor(i / COLUMNS); // diagonal delay
            return (
              <button
                key={skill.symbol}
                type="button"
                className={`element element--${skill.family} ${i === activeIndex ? 'is-active' : ''} ${
                  dimmed ? 'is-dimmed' : ''
                } ${related ? 'is-related' : ''}`}
                style={{ '--wave': wave }}
                onMouseEnter={() => setActiveIndex(i)}
                onFocus={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
                aria-label={`${skill.name}, ${familyLabel(skill.family)}`}
              >
                <span className="element__number">{String(i + 1).padStart(2, '0')}</span>
                <span className="element__symbol">{skill.symbol}</span>
                <span className="element__name">{skill.name}</span>
              </button>
            );
          })}
        </div>

        <aside className="element-detail" aria-live="polite">
          <div className="element-detail__visual" key={active.symbol}>
            <SkillIcon skill={active} />
          </div>
          <p className="element-detail__meta mono">
            <span>No. {String(activeIndex + 1).padStart(2, '0')}</span>
            <span className={`element-detail__family element--${active.family}`}>{familyLabel(active.family)}</span>
          </p>
          <h3 className="element-detail__name">{active.name}</h3>
          <p className="element-detail__note">{active.note}</p>
        </aside>
      </div>
    </section>
  );
}
