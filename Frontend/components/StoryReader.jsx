export default function StoryReader({ story, onBack, onNewStory }) {
  if (!story) return null;

  const meta = [story.genre, story.mood, story.tone, story.theme].filter(Boolean).join(" · ");
  const paragraphs = Array.isArray(story.content) ? story.content : [story.content];

  return (
    <div className="story-reader reveal">
      <div className="story-reader-actions">
        <button type="button" className="btn btn-ghost" onClick={onBack}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Back</span>
        </button>
        <button type="button" className="btn btn-glow" onClick={onNewStory}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span>New Story</span>
        </button>
      </div>

      <article className="story-panel">
        <h1 className="story-panel-title">{story.title}</h1>
        {meta && <p className="story-panel-meta">{meta}</p>}
        <div className="story-panel-divider" />

        {story.chapter && <p className="story-panel-chapter-label">{story.chapter}</p>}
        {story.chapterTitle && <h2 className="story-panel-chapter-title">{story.chapterTitle}</h2>}

        <div className="story-panel-body">
          {paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
