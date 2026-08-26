export default function BackgroundAtmosphere() {
  return (
    <div className="bg-atmosphere" aria-hidden="true">
      <div className="stars" />
      <div className="glow glow-center" />
      <div className="glow glow-left" />
      <div className="glow glow-right" />

      <svg className="moon" viewBox="0 0 200 200" aria-hidden="true">
        <defs>
          <radialGradient id="moonGrad" cx="35%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#f4f0ff" />
            <stop offset="60%" stopColor="#cfd6ff" />
            <stop offset="100%" stopColor="#9aa3d9" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="90" fill="url(#moonGrad)" />
        <circle cx="70" cy="70" r="12" fill="#b9c1ec" opacity="0.5" />
        <circle cx="130" cy="110" r="18" fill="#b9c1ec" opacity="0.4" />
        <circle cx="95" cy="140" r="9" fill="#b9c1ec" opacity="0.45" />
      </svg>

      <svg className="skyline skyline-left" viewBox="0 0 700 500" preserveAspectRatio="xMinYMax slice" aria-hidden="true">
        <defs>
          <linearGradient id="mtGrad1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#141c3c" />
            <stop offset="100%" stopColor="#0a0d1c" />
          </linearGradient>
          <linearGradient id="mtGrad2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1c2650" />
            <stop offset="100%" stopColor="#0a0d1c" />
          </linearGradient>
        </defs>
        <path d="M0 320 L60 250 L120 300 L180 210 L260 290 L330 230 L400 310 L470 260 L560 330 L640 270 L700 320 L700 500 L0 500 Z" fill="url(#mtGrad1)" />
        <path d="M0 380 L90 330 L160 370 L230 310 L300 370 L380 330 L460 390 L540 340 L620 390 L700 360 L700 500 L0 500 Z" fill="url(#mtGrad2)" opacity="0.9" />
        <g className="castle" transform="translate(60,195)">
          <rect x="10" y="70" width="90" height="55" fill="#10163a" />
          <rect x="10" y="60" width="10" height="10" fill="#10163a" />
          <rect x="26" y="60" width="10" height="10" fill="#10163a" />
          <rect x="42" y="60" width="10" height="10" fill="#10163a" />
          <rect x="58" y="60" width="10" height="10" fill="#10163a" />
          <rect x="74" y="60" width="10" height="10" fill="#10163a" />
          <rect x="90" y="60" width="10" height="10" fill="#10163a" />
          <rect x="0" y="48" width="16" height="77" fill="#0e1330" />
          <polygon points="8,26 0,48 16,48" fill="#0e1330" />
          <rect x="45" y="14" width="20" height="111" fill="#131a42" />
          <polygon points="55,-8 45,14 65,14" fill="#131a42" />
          <rect x="94" y="42" width="16" height="83" fill="#0e1330" />
          <polygon points="102,20 94,42 110,42" fill="#0e1330" />
          <rect x="50" y="95" width="10" height="30" fill="#050714" />
          <rect x="46" y="30" width="4" height="8" fill="#050714" />
          <rect x="60" y="30" width="4" height="8" fill="#050714" />
          <circle cx="55" cy="60" r="2.6" fill="#6ea8ff" className="castle-window" />
          <circle cx="8" cy="90" r="2" fill="#6ea8ff" className="castle-window" style={{ animationDelay: ".6s" }} />
          <circle cx="102" cy="85" r="2" fill="#a78bfa" className="castle-window" style={{ animationDelay: "1.2s" }} />
          <circle cx="30" cy="95" r="1.8" fill="#a78bfa" className="castle-window" style={{ animationDelay: "1.8s" }} />
        </g>
      </svg>

      <svg className="skyline skyline-right" viewBox="0 0 700 500" preserveAspectRatio="xMaxYMax slice" aria-hidden="true">
        <path d="M700 340 L640 270 L580 310 L520 240 L450 300 L390 250 L320 320 L260 270 L190 330 L120 280 L0 500 L700 500 Z" fill="url(#mtGrad1)" />
        <path d="M700 400 L610 340 L540 380 L470 330 L400 385 L330 340 L260 395 L190 350 L0 500 L700 500 Z" fill="url(#mtGrad2)" opacity="0.9" />
        <g className="dragon" transform="translate(520,60) scale(0.9)">
          <path
            d="M0 40 C 20 10, 55 0, 90 12 C 100 4, 118 2, 132 10 C 122 14, 112 20, 108 26 C 130 24, 150 32, 158 46 C 138 42, 118 44, 104 52 C 92 62, 70 66, 52 60 C 60 52, 64 44, 60 36 C 44 44, 22 46, 0 40 Z"
            fill="#0c1130"
            opacity="0.92"
          />
          <circle cx="98" cy="16" r="2" fill="#a78bfa" className="dragon-eye" />
        </g>
        <g className="floating-island" transform="translate(560,190)">
          <ellipse cx="40" cy="18" rx="42" ry="14" fill="#141c3c" />
          <polygon points="8,16 72,16 60,34 20,34" fill="#0e1330" />
          <rect x="30" y="-14" width="4" height="16" fill="#1c2650" />
          <polygon points="32,-22 26,-14 38,-14" fill="#1c2650" />
        </g>
      </svg>

      <div className="portal" />
      <div className="vignette" />
    </div>
  );
}
