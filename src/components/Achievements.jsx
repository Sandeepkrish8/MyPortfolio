import Icon from './Icon';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';
import { useCountUp } from '../hooks/useCountUp';
import { useInView } from '../hooks/useInView';

function Stat({ item, index }) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const value = useCountUp(item.value, inView, 1400 + index * 200);

  return (
    <Reveal delay={index * 0.1} className="achievement-wrap">
      <TiltCard className="achievement">
        <div ref={ref} className="achievement__inner">
          <span className="achievement__icon">
            <Icon name={item.icon} size={22} />
          </span>
          <p className="achievement__value">
            {item.prefix && <span className="achievement__prefix">{item.prefix}</span>}
            {value}
            {item.suffix && <span className="achievement__suffix">{item.suffix}</span>}
          </p>
          <p className="achievement__label">{item.label}</p>
          <p className="achievement__caption mono">{item.caption}</p>
        </div>
      </TiltCard>
    </Reveal>
  );
}

export default function Achievements({ items }) {
  return (
    <section id="achievements" className="section achievements">
      <SectionHeading index="06" label="Achievements" title="Proud" accent="moments." />
      <div className="achievements__grid">
        {items.map((item, i) => (
          <Stat key={item.label + item.caption} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
