import Reveal from './Reveal';
import SplitText from './SplitText';

/** "01 — ABOUT" eyebrow + big two-tone heading: bold sans + italic serif accent. */
export default function SectionHeading({ index, label, title, accent, note, align = 'left' }) {
  return (
    <header className={`section-head section-head--${align}`}>
      <Reveal as="p" className="eyebrow" variant="fade">
        <span className="eyebrow__index">{index}</span>
        <span className="eyebrow__line" />
        {label}
      </Reveal>
      <Reveal as="h2" className="display" variant="none">
        <SplitText text={title} />{' '}
        <em className="display__accent">
          <SplitText text={accent} delay={0.25} />
        </em>
      </Reveal>
      {note && (
        <Reveal as="p" className="section-head__note" delay={0.3}>
          {note}
        </Reveal>
      )}
    </header>
  );
}
