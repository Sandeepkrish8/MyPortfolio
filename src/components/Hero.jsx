import { useEffect, useRef } from 'react';
import Icon from './Icon';
import Magnetic from './Magnetic';
import SplitText from './SplitText';
import TextScramble from './TextScramble';

const ORBIT_CHIPS = ['React', 'JS', 'CSS', 'Git', 'Redux', 'HTML'];

export default function Hero({ profile }) {
  const heroRef = useRef(null);
  const bigName = profile.firstName.toUpperCase();

  // Parallax: a --scroll variable from 0 (top) to 1 (hero scrolled away).
  useEffect(() => {
    const hero = heroRef.current;
    let frame;
    const update = () => {
      const progress = Math.min(window.scrollY / hero.offsetHeight, 1);
      hero.style.setProperty('--scroll', progress.toFixed(3));
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Spotlight: the solid copy of the giant name is only visible inside a
  // circle that follows the mouse (a CSS mask positioned with --mx / --my).
  const handlePointerMove = (event) => {
    const rect = heroRef.current.getBoundingClientRect();
    heroRef.current.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    heroRef.current.style.setProperty('--my', `${event.clientY - rect.top}px`);
  };

  return (
    <section id="home" className="hero" ref={heroRef} onPointerMove={handlePointerMove}>
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__bigname" aria-hidden="true">
        {['base', 'lit'].map((layer) => (
          <p key={layer} className={`hero__bigname-layer hero__bigname-layer--${layer}`}>
            {[...bigName].map((char, i) => (
              <span key={i} style={{ '--i': i }}>
                {char}
              </span>
            ))}
          </p>
        ))}
      </div>

      <div className="hero__portrait">
        <div className="orbit" aria-hidden="true">
          {ORBIT_CHIPS.map((chip, i) => (
            <span
              key={chip}
              className="orbit__chip"
              style={{ '--angle': `${(360 / ORBIT_CHIPS.length) * i}deg` }}
            >
              <span className="orbit__label">{chip}</span>
            </span>
          ))}
        </div>
        <div className="blob">
          {profile.image ? (
            <img src={profile.image} alt={`${profile.firstName} ${profile.lastName}`} />
          ) : (
            <span className="blob__initials" aria-hidden="true">
              {profile.initials}
            </span>
          )}
        </div>
        <p className="hero__status">
          <span className="pulse-dot" /> Available for work
        </p>
      </div>

      <div className="hero__intro">
        <p className="hero__eyebrow mono">
          {profile.firstName} {profile.lastName} — Portfolio ’{profile.year.slice(2)}
        </p>
        <h1 className="hero__title">
          <SplitText text={profile.role.split(' ')[0]} delay={0.2} stagger={0.04} />
          <br />
          <SplitText text={`${profile.role.split(' ').slice(1).join(' ')}.`} delay={0.45} stagger={0.04} />
        </h1>
        <p className="hero__tagline">
          I’m a <TextScramble words={profile.roles} /> <span className="hero__tagline-soft">· {profile.tagline}</span>
        </p>
      </div>

      <div className="hero__actions">
        <Magnetic>
          <a href="#work" className="btn btn--dark" data-cursor="Go">
            Explore work <Icon name="arrowRight" size={16} />
          </a>
        </Magnetic>
        <div className="hero__links">
          <a href="#contact" className="link-underline">Let’s talk</a>
          <a href={profile.resume} className="link-underline" download>
            Résumé <Icon name="arrowDown" size={14} />
          </a>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to about section">
        <span className="mono">Scroll</span>
        <span className="hero__scroll-line" />
      </a>
    </section>
  );
}
