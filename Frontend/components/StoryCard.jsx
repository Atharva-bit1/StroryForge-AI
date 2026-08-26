import { StoryIcon } from "./icons";

export default function StoryCard({ card, offset, onClick }) {
  const dataOffset = Math.abs(offset) > 2 ? "hidden" : String(offset);

  return (
    <div
      className="story-card"
      data-offset={dataOffset}
      role="button"
      tabIndex={0}
      aria-label={`${card.title}, ${card.genre}`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
    >
      <div
        className="art"
        style={{ background: `linear-gradient(160deg, ${card.gradient[0]} 0%, ${card.gradient[1]} 100%)` }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.9,
            width: "60%",
            height: "60%",
            margin: "auto",
          }}
        >
          <StoryIcon name={card.icon} />
        </div>
      </div>
      <div className="overlay" />
      <div className="meta">
        <p className="chapter">
          {card.genre} · {card.chapter}
        </p>
        <p className="title">{card.title}</p>
      </div>
    </div>
  );
}
