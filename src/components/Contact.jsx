import { useEffect, useState } from 'react';
import Icon from './Icon';
import Magnetic from './Magnetic';
import Marquee from './Marquee';
import Reveal from './Reveal';
import { useScrollProgress } from '../hooks/useScrollProgress';

const HEADLINE = ['Let’s', 'build', 'something', 'together.'];
const ACCENT_FROM = 2; // words from this index use the italic serif

export default function Contact({ profile }) {
  // Words "ink in" one by one as the heading scrolls through the viewport.
  const headingRef = useScrollProgress({ start: 0.95, end: 0.45 });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="section contact">
      <Marquee items={['Open to work', 'Frontend', 'React', 'JavaScript', 'UI Engineering', 'Let’s talk']} />

      <div className="contact__inner">
        <Reveal as="p" className="eyebrow" variant="fade">
          <span className="eyebrow__index">07</span>
          <span className="eyebrow__line" />
          Contact
        </Reveal>

        <h2 className="contact__title" ref={headingRef} style={{ '--n': HEADLINE.length }}>
          {HEADLINE.map((word, i) => (
            <span
              key={word}
              className={`contact__word ${i >= ACCENT_FROM ? 'contact__word--accent' : ''}`}
              style={{ '--i': i }}
            >
              {word}{' '}
            </span>
          ))}
        </h2>

        <Reveal className="contact__email-row" delay={0.1}>
          <a href={`mailto:${profile.email}`} className="contact__email" data-cursor="Say hi">
            {profile.email}
          </a>
          <button type="button" className="icon-btn" onClick={copyEmail} aria-label="Copy email address">
            <Icon name={copied ? 'check' : 'copy'} />
          </button>
          <span className={`toast ${copied ? 'is-visible' : ''}`} role="status">
            {copied ? 'Copied to clipboard ✓' : ''}
          </span>
        </Reveal>

        <Reveal className="contact__actions" delay={0.2}>
          <Magnetic strength={0.5}>
            <a href={`mailto:${profile.email}`} className="btn btn--dark btn--lg">
              Start a conversation <Icon name="arrowRight" size={18} />
            </a>
          </Magnetic>
          <div className="contact__socials">
            <a href={profile.github} className="link-underline" target="_blank" rel="noreferrer">
              GitHub <Icon name="arrowUpRight" size={14} />
            </a>
            <a href={profile.linkedin} className="link-underline" target="_blank" rel="noreferrer">
              LinkedIn <Icon name="arrowUpRight" size={14} />
            </a>
            <a href={profile.resume} className="link-underline" download>
              Résumé <Icon name="arrowDown" size={14} />
            </a>
          </div>
        </Reveal>
      </div>

      <footer className="footer">
        <p>
          © {profile.year} {profile.firstName} {profile.lastName}
        </p>
        <p className="mono">Designed & built with React</p>
      </footer>
    </section>
  );
}
