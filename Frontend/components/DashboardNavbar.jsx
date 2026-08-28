"use client";

import { useEffect, useRef, useState } from "react";
import { PlayIcon } from "./dashboard-icons";
import ProfileButton from "./ProfileButton";

export default function DashboardNavbar({ hasStory = false }) {
  const [playOpen, setPlayOpen] = useState(false);
  const playRef = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (playRef.current && !playRef.current.contains(e.target)) setPlayOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header className="dash-navbar">
      <a className="brand" href="/dashboard">
        StoryForge<span className="brand-accent">AI</span>
        <span className="brand-spark">✦</span>
      </a>

      <div className="dash-navbar-actions">
        <div className="play-menu" ref={playRef}>
          <button
            className="icon-btn icon-btn-lg"
            aria-label="Play narration"
            aria-haspopup="dialog"
            aria-expanded={playOpen}
            onClick={() => setPlayOpen((o) => !o)}
          >
            <PlayIcon />
          </button>
          {playOpen && (
            <div className="play-popover" role="dialog">
              <strong>{hasStory ? "Visual Story — Coming Soon" : "Visual Story mode"}</strong>
              {hasStory
                ? "Animated scenes and narration for this story are on the way."
                : "Visual Story mode will be available here once you've generated a story."}
            </div>
          )}
        </div>
        <ProfileButton />
      </div>
    </header>
  );
}
