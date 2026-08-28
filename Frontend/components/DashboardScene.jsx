export default function DashboardScene() {
  return (
    <div className="dash-scene" aria-hidden="true">
      <div className="dash-scene-sky" />
      <div className="dash-scene-stars" />

      <div className="dash-galaxy">
        <svg viewBox="0 0 300 300" width="100%" height="100%">
          <defs>
            <radialGradient id="galaxyCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#d8f3ff" stopOpacity="0.9" />
              <stop offset="35%" stopColor="#72cfff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#2477c5" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="150" cy="150" r="70" fill="url(#galaxyCore)" />
          <path
            d="M150 150 C 190 130, 230 145, 235 90"
            fill="none"
            stroke="rgba(120,200,255,0.30)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M150 150 C 110 170, 70 155, 60 205"
            fill="none"
            stroke="rgba(90,170,230,0.24)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M150 150 C 175 185, 165 225, 210 245"
            fill="none"
            stroke="rgba(200,180,255,0.2)"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="dash-planet">
        <div className="dash-planet-ring" />
        <div className="dash-planet-body" />
      </div>

      <svg
        className="dash-clouds"
        viewBox="0 0 1200 400"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
      >
        <ellipse
          cx="220"
          cy="120"
          rx="180"
          ry="26"
          fill="rgba(180,170,230,0.06)"
        />
        <ellipse
          cx="850"
          cy="180"
          rx="240"
          ry="30"
          fill="rgba(180,170,230,0.05)"
        />
        <ellipse
          cx="500"
          cy="90"
          rx="150"
          ry="18"
          fill="rgba(200,190,255,0.05)"
        />
      </svg>

      <svg
        className="dash-mountains dash-mountains-back"
        viewBox="0 0 1200 420"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
      >
        <path
          d="M0 300 L100 220 L200 280 L320 190 L430 270 L560 200 L680 290 L800 210 L930 300 L1050 230 L1200 290 L1200 420 L0 420 Z"
          fill="#07152b"
          opacity="0.75"
        />
      </svg>
      <svg
        className="dash-mountains dash-mountains-front"
        viewBox="0 0 1200 420"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
      >
        <path
          d="M0 360 L150 260 L280 330 L400 240 L540 340 L650 260 L780 350 L900 270 L1050 350 L1200 300 L1200 420 L0 420 Z"
          fill="#030a17"
        />
      </svg>

      <svg className="dash-castle" viewBox="0 0 260 260" aria-hidden="true">
        <g>
          <rect x="30" y="150" width="120" height="80" fill="#0e0a26" />
          <rect x="30" y="130" width="14" height="14" fill="#0e0a26" />
          <rect x="52" y="130" width="14" height="14" fill="#0e0a26" />
          <rect x="74" y="130" width="14" height="14" fill="#0e0a26" />
          <rect x="96" y="130" width="14" height="14" fill="#0e0a26" />
          <rect x="118" y="130" width="14" height="14" fill="#0e0a26" />
          <rect x="140" y="130" width="14" height="14" fill="#0e0a26" />
          <rect x="10" y="100" width="26" height="130" fill="#0a0720" />
          <polygon points="23,68 10,100 36,100" fill="#0a0720" />
          <rect x="150" y="90" width="30" height="140" fill="#0c0928" />
          <polygon points="165,52 150,90 180,90" fill="#0c0928" />
          <rect x="185" y="120" width="22" height="110" fill="#0a0720" />
          <polygon points="196,90 185,120 207,120" fill="#0a0720" />
          <rect x="80" y="185" width="18" height="45" fill="#050414" />
          <circle
            cx="23"
            cy="140"
            r="3"
            fill="#f4c77e"
            className="castle-window"
          />
          <circle
            cx="165"
            cy="110"
            r="3.4"
            fill="#f4c77e"
            className="castle-window"
            style={{ animationDelay: ".5s" }}
          />
          <circle
            cx="196"
            cy="150"
            r="2.6"
            fill="#c9a9ff"
            className="castle-window"
            style={{ animationDelay: "1s" }}
          />
          <circle
            cx="60"
            cy="170"
            r="2.4"
            fill="#f4c77e"
            className="castle-window"
            style={{ animationDelay: "1.4s" }}
          />
          <circle
            cx="120"
            cy="170"
            r="2.4"
            fill="#c9a9ff"
            className="castle-window"
            style={{ animationDelay: "1.8s" }}
          />
        </g>
      </svg>

      <div className="dash-lake">
        <div className="dash-lake-glow" />
      </div>

      <div className="dash-scene-vignette" />
      <div className="dash-scene-center-fade" />
    </div>
  );
}
