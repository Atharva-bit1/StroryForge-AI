"use client";

import { useEffect, useState } from "react";

export default function Navbar({ signInHref = "signin", signUpHref = "signup" }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">
        <a className="brand" href="#top">
          StoryForge<span className="brand-accent">AI</span>
          <span className="brand-spark">✦</span>
        </a>
        <nav className="nav-actions">
          <a className="btn btn-ghost" href={signInHref}>
            Sign In
          </a>
          <a className="btn btn-glow" href={signUpHref}>
            Sign Up
          </a>
        </nav>
      </div>
    </header>
  );
}
