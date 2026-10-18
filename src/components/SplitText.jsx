/**
 * Splits text into words and letters so each letter can animate on its own.
 * Letters slide up from behind a mask when a parent gets `.is-visible`
 * (or the page gets `.is-loaded` for the hero).
 * Screen readers get the plain text through aria-label.
 */
export default function SplitText({ text, className = '', stagger = 0.03, delay = 0 }) {
  let charIndex = 0;
  const words = text.split(' ');

  return (
    <span
      className={`split ${className}`}
      aria-label={text}
      role="text"
      style={{ '--stagger': `${stagger}s`, '--split-delay': `${delay}s` }}
    >
      {words.map((word, w) => (
        <span className="split__word" aria-hidden="true" key={w}>
          {[...word].map((char) => {
            const i = charIndex++;
            return (
              <span className="split__char" style={{ '--i': i }} key={i}>
                {char}
              </span>
            );
          })}
          {w < words.length - 1 && ' '}
        </span>
      ))}
    </span>
  );
}
