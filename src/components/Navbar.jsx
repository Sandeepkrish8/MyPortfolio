import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Icon from './Icon';
import { useTheme } from '../hooks/useTheme';

// Sections without their own nav link highlight a neighbour instead.
const NAV_ALIAS = { certifications: 'experience' };

export default function Navbar({ profile, links, activeSection }) {
  const current = NAV_ALIAS[activeSection] || activeSection;
  const { theme, toggleTheme } = useTheme();
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false });
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const linkRefs = useRef({});

  // Slide the dark pill under the active link by measuring that link's position.
  useLayoutEffect(() => {
    const measure = () => {
      const el = linkRefs.current[current];
      if (!el) {
        setIndicator((prev) => ({ ...prev, visible: false }));
        return;
      }
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth, visible: true });
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [current]);

  // Hide the bar while scrolling down, bring it back when scrolling up.
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > lastY && y > 320);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('is-locked', menuOpen);
    const onKey = (event) => event.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header className={`nav ${hidden && !menuOpen ? 'is-hidden' : ''} ${scrolled ? 'is-scrolled' : ''}`}>
      <a href="#home" className="nav__brand" aria-label="Back to top">
        <span className="nav__logo">{profile.initials}</span>
        <span className="nav__name">
          {profile.firstName} {profile.lastName}
        </span>
      </a>

      <nav className="nav__pill" aria-label="Primary">
        <span
          className={`nav__indicator ${indicator.visible ? 'is-visible' : ''}`}
          style={{ transform: `translateX(${indicator.left}px)`, width: indicator.width }}
          aria-hidden="true"
        />
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            ref={(el) => (linkRefs.current[link.id] = el)}
            className={`nav__link ${current === link.id ? 'is-active' : ''}`}
            aria-current={current === link.id ? 'true' : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="nav__actions">
        <button
          type="button"
          className="icon-btn"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
        </button>
        <button
          type="button"
          className="icon-btn nav__menu-btn"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>
      </div>

      <div id="mobile-menu" className={`menu ${menuOpen ? 'is-open' : ''}`} hidden={!menuOpen}>
        <ol className="menu__list">
          {links.map((link, i) => (
            <li key={link.id} style={{ '--i': i }}>
              <a href={`#${link.id}`} onClick={() => setMenuOpen(false)}>
                <span className="menu__index">0{i + 1}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </header>
  );
}
