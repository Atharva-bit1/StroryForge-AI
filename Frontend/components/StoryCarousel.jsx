"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import StoryCard from "./StoryCard";
import { STORY_CARDS } from "../data/stories";

const ROTATE_MS = 4000;

function signedOffset(index, active, total) {
  let rel = (index - active + total) % total;
  if (rel > total / 2) rel -= total;
  return rel;
}

export default function StoryCarousel() {
  const [active, setActive] = useState(0);
  const isHovering = useRef(false);
  const touchStartX = useRef(null);
  const timerRef = useRef(null);
  const total = STORY_CARDS.length;

  const next = useCallback(() => {
    setActive((a) => (a + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setActive((a) => (a - 1 + total) % total);
  }, [total]);

  const goTo = useCallback((i) => {
    setActive(((i % total) + total) % total);
  }, [total]);

  const restartAuto = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isHovering.current) next();
    }, ROTATE_MS);
  }, [next]);

  useEffect(() => {
    restartAuto();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [restartAuto]);

  const handleCardClick = (i) => {
    goTo(i);
    restartAuto();
  };

  const handleNext = () => {
    next();
    restartAuto();
  };

  const handlePrev = () => {
    prev();
    restartAuto();
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) {
      dx < 0 ? next() : prev();
      restartAuto();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="carousel-wrap reveal"
      style={{ "--d": "0.32s" }}
      onMouseEnter={() => (isHovering.current = true)}
      onMouseLeave={() => (isHovering.current = false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button className="car-nav car-prev" aria-label="Previous story" onClick={handlePrev}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="carousel">
        {STORY_CARDS.map((card, i) => (
          <StoryCard key={card.title} card={card} offset={signedOffset(i, active, total)} onClick={() => handleCardClick(i)} />
        ))}
      </div>

      <button className="car-nav car-next" aria-label="Next story" onClick={handleNext}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
