"use client";

import { useEffect, useId, useRef, useState } from "react";

function Toggle({ checked, onChange, label }) {
  return (
    <span
      className={`toggle${checked ? " on" : ""}`}
      role="switch"
      aria-checked={checked}
      aria-label={label}
      tabIndex={0}
      onClick={() => onChange(!checked)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onChange(!checked);
        }
      }}
    >
      <span className="toggle-knob" />
    </span>
  );
}

export default function SettingsModal({ open, onClose }) {
  const modalRef = useRef(null);
  const nameId = useId();

  const [displayName, setDisplayName] = useState("Story Weaver");
  const [darkTheme, setDarkTheme] = useState(true);
  const [genNotifications, setGenNotifications] = useState(true);
  const [autoPlayNarration, setAutoPlayNarration] = useState(false);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    const onClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="settings-backdrop">
      <div className="settings-modal" ref={modalRef} role="dialog" aria-modal="true" aria-labelledby="settings-title">
        <div className="settings-modal-head">
          <h2 id="settings-title">Settings</h2>
          <button type="button" className="icon-btn settings-close-btn" onClick={onClose} aria-label="Close settings">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="settings-section">
          <p className="settings-section-label">Profile</p>
          <div className="settings-row">
            <label htmlFor={nameId} className="settings-row-label">
              Display name
            </label>
            <input
              id={nameId}
              type="text"
              className="settings-input"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
        </div>

        <div className="settings-section">
          <p className="settings-section-label">Appearance</p>
          <div className="settings-row">
            <span className="settings-row-label">Dark cinematic theme</span>
            <Toggle checked={darkTheme} onChange={setDarkTheme} label="Dark cinematic theme" />
          </div>
        </div>

        <div className="settings-section">
          <p className="settings-section-label">Notifications</p>
          <div className="settings-row">
            <span>
              <span className="settings-row-label">Story generation notifications</span>
              <span className="settings-row-desc" style={{ display: "block" }}>
                Get notified when a story finishes generating.
              </span>
            </span>
            <Toggle checked={genNotifications} onChange={setGenNotifications} label="Story generation notifications" />
          </div>
        </div>

        <div className="settings-section">
          <p className="settings-section-label">Preferences</p>
          <div className="settings-row">
            <span className="settings-row-label">Auto-play narration</span>
            <Toggle checked={autoPlayNarration} onChange={setAutoPlayNarration} label="Auto-play narration" />
          </div>
        </div>
      </div>
    </div>
  );
}
