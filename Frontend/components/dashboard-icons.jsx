const base = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none" };

export function HamburgerIcon(p) {
  return (
    <svg {...base} {...p}>
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
export function PlusIcon(p) {
  return (
    <svg {...base} {...p}>
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
export function SearchIcon(p) {
  return (
    <svg {...base} {...p}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="M20 20l-3.6-3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
export function ClockHistoryIcon(p) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 9v4l2.6 2.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 2.5h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
export function ChevronLeftIcon(p) {
  return (
    <svg {...base} {...p}>
      <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function ChevronRightIcon(p) {
  return (
    <svg {...base} {...p}>
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function ChevronDownIcon(p) {
  return (
    <svg {...base} {...p} width={16} height={16}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function DotsIcon(p) {
  return (
    <svg {...base} {...p} width={16} height={16}>
      <circle cx="12" cy="5.5" r="1.6" fill="currentColor" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
      <circle cx="12" cy="18.5" r="1.6" fill="currentColor" />
    </svg>
  );
}
export function PlayIcon(p) {
  return (
    <svg {...base} {...p}>
      <path d="M8 5.5v13l11-6.5-11-6.5z" fill="currentColor" />
    </svg>
  );
}
export function SendIcon(p) {
  return (
    <svg {...base} {...p}>
      <path d="M4 12l16-7-6 16-2.5-6.5L4 12z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" fill="none" />
    </svg>
  );
}
export function UserSilhouetteIcon(p) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="8.5" r="3.6" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4.8 19.5c0-3.7 3.2-6.2 7.2-6.2s7.2 2.5 7.2 6.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
export function SmileIcon(p) {
  return (
    <svg {...base} {...p} width={16} height={16}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="9" cy="10.5" r="1" fill="currentColor" />
      <circle cx="15" cy="10.5" r="1" fill="currentColor" />
      <path d="M8.5 14.2c1 1.2 2.2 1.8 3.5 1.8s2.5-.6 3.5-1.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
export function BookIcon(p) {
  return (
    <svg {...base} {...p} width={16} height={16}>
      <path d="M12 6.5c-1.5-1-4-1.5-6-1v13c2 0 4.5.5 6 1.5m0-13.5c1.5-1 4-1.5 6-1v13c-2 0-4.5.5-6 1.5m0-13.5v13.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
export function MicIcon(p) {
  return (
    <svg {...base} {...p} width={16} height={16}>
      <rect x="9" y="3.5" width="6" height="10" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 11a6 6 0 0 0 12 0M12 17v3.5M9.5 20.5h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
export function StarOutlineIcon(p) {
  return (
    <svg {...base} {...p} width={16} height={16}>
      <path d="M12 3.5l2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6-4.4-4.2 6-.8L12 3.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
export function WavesIcon(p) {
  return (
    <svg {...base} {...p} width={16} height={16}>
      <path d="M3 9c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M3 15c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
export function FlameIcon(p) {
  return (
    <svg {...base} {...p} width={16} height={16}>
      <path d="M12 2.5c1 3-3.5 4-3.5 7.5a3.5 3.5 0 1 0 7 0c0-1.2-.6-2-1.2-2.8.6 2-1 2.5-1 4a1.3 1.3 0 1 1-2.6 0c0-3 3-3.7 1.3-8.7z" fill="currentColor" opacity="0.9" />
    </svg>
  );
}
export function MountainIcon(p) {
  return (
    <svg {...base} {...p} width={16} height={16}>
      <path d="M3 18l5.5-9L12 14l2-3 7 7H3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
export function RingsIcon(p) {
  return (
    <svg {...base} {...p} width={16} height={16}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
export function CrownIcon(p) {
  return (
    <svg {...base} {...p} width={16} height={16}>
      <path d="M3 8l4 3 5-6 5 6 4-3-1.6 10H4.6L3 8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export const HISTORY_ICONS = {
  book: BookIcon,
  waves: WavesIcon,
  flame: FlameIcon,
  mountain: MountainIcon,
  rings: RingsIcon,
  crown: CrownIcon,
};
