import { useState } from 'react';
import Icon from './Icon';
import ProjectVisual from './ProjectVisual';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

/**
 * Expanding accordion: on desktop the panels sit side-by-side and the hovered
 * one stretches open; on phones they stack vertically and open on tap.
 */
export default function Projects({ projects }) {
  const [active, setActive] = useState(0);

  return (
    <section id="work" className="section work">
      <SectionHeading
        index="03"
        label="Work"
        title="Things I’ve"
        accent="built."
        note="A few products I designed and developed end-to-end. Hover a panel to open it."
      />

      <Reveal className="panels" variant="clip">
        {projects.map((project, i) => {
          const isActive = i === active;
          return (
            <article
              key={project.title}
              className={`panel ${isActive ? 'is-active' : ''}`}
              onMouseEnter={() => setActive(i)}
              data-cursor={isActive ? undefined : 'Open'}
            >
              <button
                type="button"
                className="panel__tab"
                onClick={() => setActive(i)}
                onFocus={() => setActive(i)}
                aria-expanded={isActive}
                aria-controls={`panel-${i}`}
              >
                <span className="panel__num mono">{String(i + 1).padStart(2, '0')}</span>
                <span className="panel__tab-title">{project.title}</span>
                <span className="panel__tab-year mono">{project.year}</span>
              </button>

              <div className="panel__body" id={`panel-${i}`}>
                <div className="panel__body-inner">
                  <div className="panel__info">
                    <p className="mono panel__sub">
                      {project.subtitle} · {project.year}
                    </p>
                    <h3 className="panel__title">{project.title}</h3>
                    <p className="panel__desc">{project.description}</p>
                    <ul className="tags">
                      {project.stack.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                    <div className="panel__links">
                      <a href={project.live} className="btn btn--dark btn--sm" target="_blank" rel="noreferrer" tabIndex={isActive ? 0 : -1}>
                        Live demo <Icon name="arrowUpRight" size={14} />
                      </a>
                      <a href={project.code} className="link-underline" target="_blank" rel="noreferrer" tabIndex={isActive ? 0 : -1}>
                        Source code <Icon name="arrowUpRight" size={14} />
                      </a>
                    </div>
                  </div>
                  <div className="panel__visual">
                    <ProjectVisual variant={project.visual} seed={i + 1} />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </Reveal>
    </section>
  );
}
