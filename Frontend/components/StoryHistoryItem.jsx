"use client";

import { useEffect, useRef, useState } from "react";
import { HISTORY_ICONS, DotsIcon } from "./dashboard-icons";

export default function StoryHistoryItem({ item, collapsed }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef(null);
  const Icon = HISTORY_ICONS[item.icon];

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  if (collapsed) {
    return (
      <button className={`history-icon-btn tint-${item.tint}`} title={item.title} aria-label={item.title}>
        <Icon />
      </button>
    );
  }

  return (
    <div className="history-item" ref={ref}>
      <span className={`history-icon tint-${item.tint}`}>
        <Icon />
      </span>
      <span className="history-text">
        <span className="history-title">{item.title}</span>
        <span className="history-time">{item.time}</span>
      </span>
      <button
        className="history-menu-btn"
        aria-label="Story options"
        aria-haspopup="menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((o) => !o)}
      >
        <DotsIcon />
      </button>

      {menuOpen && (
        <div className="history-menu" role="menu">
          <button className="history-menu-item" role="menuitem" onClick={() => setMenuOpen(false)}>
            Rename
          </button>
          <button className="history-menu-item history-menu-item-danger" role="menuitem" onClick={() => setMenuOpen(false)}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
