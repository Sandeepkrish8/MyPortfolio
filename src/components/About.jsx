import Icon from './Icon';
import IdCard from './IdCard';
import Magnetic from './Magnetic';
import Reveal from './Reveal';
import SplitText from './SplitText';

export default function About({ profile, topSkills }) {
  return (
    <section id="about" className="section about">
      <div className="about__text">
        <Reveal as="p" className="eyebrow" variant="fade">
          <span className="eyebrow__index">01</span>
          <span className="eyebrow__line" />
          About
        </Reveal>
        <Reveal as="h2" className="display" variant="none">
          <SplitText text="Hi, I’m" />{' '}
          <em className="display__accent">
            <SplitText text={`${profile.firstName}.`} delay={0.2} />
          </em>
        </Reveal>
        <Reveal as="p" className="lead" delay={0.15}>
          {profile.bio}
        </Reveal>
        <Reveal as="p" className="muted" delay={0.25}>
          {profile.bioExtra}
        </Reveal>
        <Reveal className="about__links" delay={0.35}>
          <Magnetic>
            <a href={profile.resume} className="btn btn--dark" download>
              Résumé <Icon name="arrowDown" size={16} />
            </a>
          </Magnetic>
          <a href={profile.github} className="link-underline" target="_blank" rel="noreferrer">
            GitHub <Icon name="arrowUpRight" size={14} />
          </a>
          <a href={profile.linkedin} className="link-underline" target="_blank" rel="noreferrer">
            LinkedIn <Icon name="arrowUpRight" size={14} />
          </a>
        </Reveal>
      </div>

      <IdCard profile={profile} topSkills={topSkills} />

      <div className="about__facts">
        <Reveal as="p" className="eyebrow" variant="fade">
          Quick facts
        </Reveal>
        <dl className="facts">
          {profile.facts.map((fact, i) => (
            <Reveal className="facts__row" key={fact.label} delay={0.08 * i}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </Reveal>
          ))}
        </dl>
        <Reveal as="blockquote" className="quote" delay={0.4}>
          “{profile.quote}”
        </Reveal>
      </div>
    </section>
  );
}
