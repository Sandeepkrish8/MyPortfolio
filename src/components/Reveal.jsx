import { useInView } from '../hooks/useInView';

/**
 * Wraps content and adds `is-visible` when it scrolls into view.
 * The actual animation lives in CSS (see .reveal in styles/global.css).
 * variant: 'up' | 'fade' | 'scale' | 'clip' | 'none'
 */
export default function Reveal({
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  className = '',
  style,
  children,
  ...rest
}) {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${inView ? 'is-visible' : ''} ${className}`}
      style={{ '--delay': `${delay}s`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
