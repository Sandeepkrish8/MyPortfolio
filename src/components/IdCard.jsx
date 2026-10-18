import { useEffect, useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { prefersReducedMotion, seeded } from '../utils/motion';

// Pendulum tuning (per animation frame at ~60fps).
const STIFFNESS = 0.0075; // how strongly gravity pulls the card back to centre
const DAMPING = 0.985; // < 1 so the swing slowly dies out
const MAX_ANGLE = 1.1; // radians

/** Barcode bars generated from a string, so every name gets its own barcode. */
function Barcode({ value }) {
  let x = 0;
  const bars = [...value].flatMap((char) => {
    const code = char.charCodeAt(0);
    return [1 + (code % 3), 1 + ((code >> 2) % 2), 1 + ((code >> 1) % 3)].map((width, i) => {
      const bar = { x, width, fill: i % 2 === 0 };
      x += width + 1;
      return bar;
    });
  });
  return (
    <svg className="idcard__barcode" viewBox={`0 0 ${x} 20`} preserveAspectRatio="none" aria-hidden="true">
      {bars.filter((b) => b.fill).map((b, i) => (
        <rect key={i} x={b.x} width={b.width} height="20" />
      ))}
    </svg>
  );
}

/** A QR-looking pattern (decorative) — deterministic from the seed. */
function FauxQr({ seed }) {
  const random = seeded(seed);
  const size = 13;
  const isFinder = (x, y) => (x < 4 && y < 4) || (x > 8 && y < 4) || (x < 4 && y > 8);
  const cells = [];
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      if (!isFinder(x, y) && random() > 0.5) cells.push([x, y]);
    }
  }
  return (
    <svg className="idcard__qr" viewBox="0 0 13 13" aria-hidden="true">
      {[[0, 0], [9, 0], [0, 9]].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect x={x} y={y} width="4" height="4" />
          <rect x={x + 0.8} y={y + 0.8} width="2.4" height="2.4" className="idcard__qr-hole" />
          <rect x={x + 1.4} y={y + 1.4} width="1.2" height="1.2" />
        </g>
      ))}
      {cells.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />
      ))}
    </svg>
  );
}

/**
 * The hanging "Developer ID" badge.
 * - Swings like a real pendulum when it scrolls into view.
 * - Drag it with the mouse/finger and let go — physics takes over.
 * - Click (or press Enter) to flip it over.
 */
export default function IdCard({ profile, topSkills }) {
  const [viewRef, inView] = useInView({ threshold: 0.35 });
  const pivotRef = useRef(null);
  const swingRef = useRef(null);
  const physics = useRef({ angle: 0.55, velocity: 0, dragging: false, running: false, moved: 0, lastAngle: 0 });
  const startLoop = useRef(() => {});
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const swing = swingRef.current;
    const p = physics.current;
    if (prefersReducedMotion()) {
      p.angle = 0;
      swing.style.transform = 'rotate(0rad)';
      return;
    }
    let frame;

    const render = () => {
      swing.style.transform = `rotate(${p.angle}rad)`;
      // Twist the card a little in 3D based on speed, and move the holo shine with the angle.
      swing.style.setProperty('--twist', `${p.velocity * 260}deg`);
      swing.style.setProperty('--shine', `${50 + p.angle * 80}%`);
    };

    const step = () => {
      if (!p.dragging) {
        p.velocity = (p.velocity - STIFFNESS * Math.sin(p.angle)) * DAMPING;
        p.angle += p.velocity;
      }
      render();
      const resting = !p.dragging && Math.abs(p.angle) < 0.0008 && Math.abs(p.velocity) < 0.0008;
      if (resting) {
        p.running = false; // stop the loop to save battery
        return;
      }
      frame = requestAnimationFrame(step);
    };

    startLoop.current = () => {
      if (p.running) return;
      p.running = true;
      frame = requestAnimationFrame(step);
    };

    render();
    if (inView) startLoop.current();
    return () => {
      cancelAnimationFrame(frame);
      p.running = false;
    };
  }, [inView]);

  const angleFromPointer = (event) => {
    const rect = pivotRef.current.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = Math.max(event.clientY - rect.top, 1);
    return Math.max(-MAX_ANGLE, Math.min(MAX_ANGLE, -Math.atan2(dx, dy)));
  };

  const handlePointerDown = (event) => {
    const p = physics.current;
    p.dragging = true;
    p.moved = 0;
    p.lastAngle = p.angle;
    event.currentTarget.setPointerCapture(event.pointerId);
    startLoop.current();
  };

  const handlePointerMove = (event) => {
    const p = physics.current;
    if (!p.dragging) return;
    const next = angleFromPointer(event);
    p.velocity = next - p.angle;
    p.moved += Math.abs(p.velocity);
    p.angle = next;
  };

  const handlePointerUp = () => {
    const p = physics.current;
    if (!p.dragging) return;
    p.dragging = false;
    if (p.moved < 0.03) setFlipped((f) => !f); // barely moved → it was a click
  };

  // A little nudge when the pointer brushes past the card.
  const handlePointerEnter = (event) => {
    const p = physics.current;
    if (p.dragging || event.pointerType !== 'mouse') return;
    p.velocity += event.movementX > 0 ? -0.018 : 0.018;
    startLoop.current();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setFlipped((f) => !f);
    }
  };

  const fullName = `${profile.firstName} ${profile.lastName}`;

  return (
    <div className="lanyard" ref={viewRef}>
      <div className="lanyard__pivot" ref={pivotRef} />
      <div className="lanyard__swing" ref={swingRef}>
        <div className="lanyard__strap" aria-hidden="true">
          <span>{`${profile.initials} · DEV · `.repeat(4)}</span>
        </div>
        <div className="lanyard__clip" aria-hidden="true" />
        <div
          className={`idcard ${flipped ? 'is-flipped' : ''}`}
          role="button"
          tabIndex={0}
          aria-pressed={flipped}
          aria-label={`Developer ID card for ${fullName}. Press to flip.`}
          data-cursor="Drag"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onPointerEnter={handlePointerEnter}
          onKeyDown={handleKeyDown}
        >
          <div className="idcard__inner">
            <div className="idcard__face idcard__face--front">
              <div className="idcard__head">
                <span className="idcard__logo">{profile.initials}</span>
                <div>
                  <p className="idcard__title">Developer ID</p>
                  <p className="idcard__sub">Portfolio · {profile.year}</p>
                </div>
              </div>
              <div className="idcard__photo">
                {profile.image ? (
                  <img src={profile.image} alt="" draggable="false" />
                ) : (
                  <span>{profile.initials}</span>
                )}
              </div>
              <p className="idcard__name">{fullName}</p>
              <p className="idcard__role">{profile.role}</p>
              <div className="idcard__meta">
                <span>{profile.idNumber}</span>
                <span>Frontend</span>
                <span>{profile.year}</span>
              </div>
              <Barcode value={fullName.toUpperCase() + profile.year} />
              <span className="idcard__holo" aria-hidden="true" />
            </div>

            <div className="idcard__face idcard__face--back">
              <p className="idcard__title">If found,</p>
              <p className="idcard__back-big">
                please <em>hire.</em>
              </p>
              <ul className="idcard__skills">
                {topSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <FauxQr seed={fullName.length * 7919 + 17} />
              <p className="idcard__sub">Tap to flip back</p>
            </div>
          </div>
        </div>
      </div>
      <p className="lanyard__hint mono">Drag me · tap to flip</p>
    </div>
  );
}
