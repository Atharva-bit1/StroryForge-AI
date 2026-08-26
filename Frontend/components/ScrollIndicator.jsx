export default function ScrollIndicator({ targetId = "workflow" }) {
  return (
    <a href={`#${targetId}`} className="scroll-indicator">
      <span className="scroll-chevron">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span>Explore StoryForge</span>
    </a>
  );
}
