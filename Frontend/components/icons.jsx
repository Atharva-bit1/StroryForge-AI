// Story card art icons (used inside the carousel cards)
export function StoryIcon({ name }) {
  switch (name) {
    case "castle":
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <rect x="20" y="45" width="10" height="35" fill="rgba(255,255,255,0.14)" />
          <polygon points="25,30 20,45 30,45" fill="rgba(255,255,255,0.14)" />
          <rect x="45" y="30" width="12" height="50" fill="rgba(255,255,255,0.18)" />
          <polygon points="51,14 45,30 57,30" fill="rgba(255,255,255,0.18)" />
          <rect x="70" y="42" width="10" height="38" fill="rgba(255,255,255,0.14)" />
          <polygon points="75,28 70,42 80,42" fill="rgba(255,255,255,0.14)" />
          <rect x="30" y="55" width="40" height="25" fill="rgba(255,255,255,0.12)" />
          <circle cx="51" cy="42" r="55" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        </svg>
      );
    case "planet":
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <circle cx="55" cy="35" r="22" fill="rgba(255,255,255,0.14)" />
          <ellipse cx="55" cy="35" rx="34" ry="7" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" transform="rotate(-15 55 35)" />
          <circle cx="20" cy="75" r="4" fill="rgba(255,255,255,0.2)" />
          <circle cx="80" cy="70" r="2.5" fill="rgba(255,255,255,0.18)" />
        </svg>
      );
    case "mansion":
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <rect x="25" y="45" width="50" height="35" fill="rgba(255,255,255,0.12)" />
          <polygon points="50,25 20,45 80,45" fill="rgba(255,255,255,0.16)" />
          <rect x="43" y="58" width="14" height="22" fill="rgba(255,255,255,0.08)" />
          <circle cx="50" cy="12" r="8" fill="rgba(255,255,255,0.1)" />
        </svg>
      );
    case "lantern":
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <rect x="42" y="55" width="16" height="24" rx="3" fill="rgba(255,255,255,0.16)" />
          <line x1="50" y1="20" x2="50" y2="55" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          <circle cx="50" cy="66" r="6" fill="rgba(255,255,255,0.35)" />
          <path d="M25 85 Q50 70 75 85" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
        </svg>
      );
    case "skyline":
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <rect x="15" y="50" width="12" height="35" fill="rgba(255,255,255,0.12)" />
          <rect x="32" y="35" width="14" height="50" fill="rgba(255,255,255,0.16)" />
          <rect x="52" y="45" width="12" height="40" fill="rgba(255,255,255,0.12)" />
          <rect x="68" y="28" width="16" height="57" fill="rgba(255,255,255,0.18)" />
          <circle cx="76" cy="16" r="7" fill="rgba(255,255,255,0.25)" />
        </svg>
      );
    default:
      return null;
  }
}

// Workflow / capability node icons
export function NodeIcon({ name, size = 24 }) {
  const props = { width: size, height: size, viewBox: "0 0 24 24", fill: "none" };
  switch (name) {
    case "idea":
      return (
        <svg {...props}>
          <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.5.4.6 1 .6 1.6V16h6v-.6c0-.6.1-1.2.6-1.6A6 6 0 0 0 12 3z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "spark":
      return (
        <svg {...props}>
          <path d="M12 2l1.8 5.6L19 9.5l-5.2 1.9L12 17l-1.8-5.6L5 9.5l5.2-1.9L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M19 15l.8 2.4L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.6L19 15z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        </svg>
      );
    case "memory":
      return (
        <svg {...props}>
          <ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M5 6v5c0 1.7 3.1 3 7 3s7-1.3 7-3V6" stroke="currentColor" strokeWidth="1.6" />
          <path d="M5 11v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "scene":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M3 9h18M7 5v4M17 5v4" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      );
    case "multimodal":
      return (
        <svg {...props}>
          <rect x="3" y="4" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="7.5" cy="8" r="1.3" fill="currentColor" />
          <path d="M4 12.5l3-3 2.5 2.5L13 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17.5 8v8M20 6v12M15 10v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "book":
      return (
        <svg {...props}>
          <path d="M12 6.5c-1.5-1-4-1.5-6-1v13c2 0 4.5.5 6 1.5m0-13.5c1.5-1 4-1.5 6-1v13c-2 0-4.5.5-6 1.5m0-13.5v13.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
    case "char":
      return (
        <svg {...props}>
          <circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.6" />
          <path d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "world":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M3.5 12h17M12 3.5c2.5 2.3 3.8 5.2 3.8 8.5s-1.3 6.2-3.8 8.5c-2.5-2.3-3.8-5.2-3.8-8.5S9.5 5.8 12 3.5z" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      );
    case "multi":
      return (
        <svg {...props}>
          <rect x="3" y="4" width="12" height="9" rx="1.6" stroke="currentColor" strokeWidth="1.5" />
          <rect x="8.5" y="10.5" width="12" height="9" rx="1.6" stroke="currentColor" strokeWidth="1.5" fill="#05060d" />
        </svg>
      );
    case "audio":
      return (
        <svg {...props}>
          <path d="M4 10v4h3.5L12 17.5v-11L7.5 10H4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}
