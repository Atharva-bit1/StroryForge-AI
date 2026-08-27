"use client";

import { useEffect, useRef, useState } from "react";
import { UserSilhouetteIcon } from "./dashboard-icons";

export default function ProfileButton() {
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
    <div className="profile-menu" ref={ref}>
      <button
        className="profile-btn"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Account menu"
      >
        <UserSilhouetteIcon />
      </button>

      {open && (
        <div className="profile-dropdown" role="menu">
          <div className="profile-dropdown-head">
            <p className="profile-name">Story Weaver</p>
            <p className="profile-email">weaver@storyforge.ai</p>
          </div>
          <a href="/dashboard" className="profile-item" role="menuitem">
            Your Stories
          </a>
          <a href="#settings" className="profile-item" role="menuitem">
            Settings
          </a>
          <a href="/signin" className="profile-item profile-item-danger" role="menuitem">
            Sign out
          </a>
        </div>
      )}
    </div>
  );
}
