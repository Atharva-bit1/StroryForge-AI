"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "./dashboard-icons";

export default function StorySelector({ label, icon, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="selector" ref={ref}>
      <button
        type="button"
        className={`selector-trigger${value ? " has-value" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="selector-icon">{icon}</span>
        <span className="selector-label">{value || label}</span>
        <ChevronDownIcon />
      </button>

      {open && (
        <ul className="selector-menu" role="listbox">
          {options.map((opt) => (
            <li key={opt}>
              <button
                type="button"
                role="option"
                aria-selected={value === opt}
                className={`selector-option${value === opt ? " selected" : ""}`}
                onClick={() => {
                  onChange(opt === value ? "" : opt);
                  setOpen(false);
                }}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
