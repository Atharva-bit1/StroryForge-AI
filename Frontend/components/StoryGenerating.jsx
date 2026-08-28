"use client";

import { useEffect, useState } from "react";

const MESSAGES = [
  "Forging your story...",
  "Creating your world...",
  "Remembering your characters...",
  "Shaping the next scene...",
  "Bringing your story to life...",
];

const PARTICLE_COUNT = 8;
const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
  const angle = (i / PARTICLE_COUNT) * Math.PI * 2;
  const radius = 78;
  return {
    left: `calc(50% + ${Math.cos(angle) * radius}px)`,
    top: `calc(50% + ${Math.sin(angle) * radius}px)`,
    delay: `${(i * 0.35).toFixed(2)}s`,
  };
});

export default function StoryGenerating({ error = null, onRetry }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (error) return undefined;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % MESSAGES.length);
    }, 1800);
    return () => clearInterval(id);
  }, [error]);

  if (error) {
    return (
      <div className="generating-wrap reveal" role="alert">
        <div className="generating-orb-stage generating-error-stage" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" width="30" height="30">
            <path d="M12 8v5M12 16.5h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </div>
        <h2 className="generating-title">Something went wrong</h2>
        <p className="generating-sub">{error}</p>
        <button type="button" className="btn btn-glow" onClick={onRetry}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="generating-wrap reveal" role="status" aria-live="polite">
      <div className="generating-orb-stage">
        <span className="generating-ring ring-outer" aria-hidden="true" />
        <span className="generating-ring ring-inner" aria-hidden="true" />
        {particles.map((p, i) => (
          <span
            key={i}
            className="generating-particle"
            style={{ left: p.left, top: p.top, animationDelay: p.delay }}
            aria-hidden="true"
          />
        ))}
        <div className="generating-core" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" width="26" height="26">
            <path
              d="M12 6.5c-1.5-1-4-1.5-6-1v13c2 0 4.5.5 6 1.5m0-13.5c1.5-1 4-1.5 6-1v13c-2 0-4.5.5-6 1.5m0-13.5v13.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <h2 className="generating-title" key={index}>
        {MESSAGES[index]}
      </h2>
      <p className="generating-sub">Building characters, worlds, and possibilities...</p>
      <div className="generating-dots" aria-hidden="true">
        <span className="generating-dot" />
        <span className="generating-dot" />
        <span className="generating-dot" />
      </div>
    </div>
  );
}
