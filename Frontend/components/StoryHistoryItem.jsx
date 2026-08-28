"use client";

import { useEffect, useRef, useState } from "react";
import { HISTORY_ICONS, DotsIcon } from "./dashboard-icons";

export default function StoryHistoryItem({ item, collapsed, active = false, onSelect }) {
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
      <button
        className={`history-icon-btn tint-${item.tint}${active ? " active" : ""}`}
        title={item.title}
        aria-label={`Open ${item.title}`}
        aria-current={active}
        onClick={() => onSelect?.(item)}
      >
        <Icon />
      </button>
    );
  }

  return (
    <div className={`history-item${active ? " active" : ""}`} ref={ref}>
      <button className="history-item-main" onClick={() => onSelect?.(item)} aria-current={active}>
        <span className={`history-icon tint-${item.tint}`}>
          <Icon />
        </span>
        <span className="history-text">
          <span className="history-title">{item.title}</span>
          <span className="history-time">{item.time}</span>
        </span>
      </button>

      <button
        className="history-menu-btn"
        aria-label={`Options for ${item.title}`}
        aria-haspopup="menu"
        aria-expanded={menuOpen}
        onClick={(e) => {
          e.stopPropagation();
          setMenuOpen((o) => !o);
        }}
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
