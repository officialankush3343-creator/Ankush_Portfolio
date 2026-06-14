'use client';

import { useEffect, useState } from 'react';

export default function TypingText({
  phrases = [],
  typingSpeed = 70,
  deletingSpeed = 35,
  pauseTime = 1400,
  className = '',
}) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!phrases.length) return undefined;
    const current = phrases[index % phrases.length];

    if (!isDeleting && display === current) {
      const t = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(t);
    }
    if (isDeleting && display === '') {
      setIsDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
      return undefined;
    }

    const delta = isDeleting ? -1 : 1;
    const next = current.slice(0, display.length + delta);
    const t = setTimeout(
      () => setDisplay(next),
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(t);
  }, [display, isDeleting, index, phrases, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className} aria-live="polite">
      {display}
      <span aria-hidden="true" style={{
        display: 'inline-block',
        width: 3,
        height: '1em',
        marginLeft: 4,
        background: 'currentColor',
        verticalAlign: '-0.12em',
        animation: 'blink 1s steps(2,start) infinite',
      }} />
      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </span>
  );
}
