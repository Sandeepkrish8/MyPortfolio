import { seeded } from '../utils/motion';

/** Generated, animated artwork for each project card — no screenshots needed. */
export default function ProjectVisual({ variant, seed = 1 }) {
  const random = seeded(seed * 9973);

  if (variant === 'heatmap') {
    const cells = Array.from({ length: 12 * 8 }, () => random());
    return (
      <div className="pv pv--heatmap" aria-hidden="true">
        {cells.map((value, i) => (
          <span key={i} style={{ '--v': value.toFixed(2), '--d': `${(random() * 3).toFixed(2)}s` }} />
        ))}
      </div>
    );
  }

  if (variant === 'bars') {
    return (
      <div className="pv pv--bars" aria-hidden="true">
        {Array.from({ length: 22 }, (_, i) => (
          <span key={i} style={{ '--h': (0.25 + random() * 0.75).toFixed(2), '--d': `${(i * 0.08).toFixed(2)}s` }} />
        ))}
      </div>
    );
  }

  if (variant === 'rings') {
    return (
      <svg className="pv pv--rings" viewBox="0 0 200 200" aria-hidden="true">
        {[90, 72, 54, 36, 18].map((r, i) => (
          <circle
            key={r}
            cx="100"
            cy="100"
            r={r}
            strokeDasharray={`${4 + i * 3} ${6 + i * 2}`}
            style={{ '--d': `${10 + i * 4}s`, '--dir': i % 2 ? 'reverse' : 'normal' }}
          />
        ))}
        <circle cx="100" cy="100" r="6" className="pv__core" />
      </svg>
    );
  }

  // 'wave'
  const lines = Array.from({ length: 7 }, (_, i) => {
    const amp = 10 + i * 4;
    const y = 40 + i * 18;
    return `M0 ${y} C 50 ${y - amp}, 100 ${y + amp}, 150 ${y} S 250 ${y - amp}, 300 ${y}`;
  });
  return (
    <svg className="pv pv--wave" viewBox="0 0 300 200" preserveAspectRatio="none" aria-hidden="true">
      {lines.map((d, i) => (
        <path key={i} d={d} style={{ '--d': `${i * 0.25}s` }} />
      ))}
    </svg>
  );
}
