"use client";

import { useState } from "react";
import StorySelector from "./StorySelector";
import { SendIcon, SmileIcon, BookIcon, MicIcon, StarOutlineIcon } from "./dashboard-icons";
import { MOOD_OPTIONS, GENRE_OPTIONS, TONE_OPTIONS, THEME_OPTIONS } from "../data/dashboard";

export default function StoryPrompt() {
  const [prompt, setPrompt] = useState("");
  const [mood, setMood] = useState("");
  const [genre, setGenre] = useState("");
  const [tone, setTone] = useState("");
  const [theme, setTheme] = useState("");
  const [generating, setGenerating] = useState(false);

  const canGenerate = prompt.trim().length > 0 && !generating;

  const handleGenerate = async () => {
    if (!canGenerate) return;
    setGenerating(true);
    // TODO: wire this up to the FastAPI backend, e.g.
    // await fetch("/api/stories/generate", {
    //   method: "POST",
    //   body: JSON.stringify({ prompt, mood, genre, tone, theme }),
    // });
    await new Promise((r) => setTimeout(r, 1200));
    setGenerating(false);
  };

  return (
    <div className="story-prompt reveal" style={{ "--d": "0.15s" }}>
      <p className="story-prompt-label">Describe your story...</p>
      <textarea
        className="story-prompt-textarea"
        placeholder="Enter your ideas, characters, plot, or any details you want in your story..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={4}
      />

      <div className="story-prompt-controls">
        <div className="selector-row">
          <StorySelector label="Mood" icon={<SmileIcon />} options={MOOD_OPTIONS} value={mood} onChange={setMood} />
          <StorySelector label="Genre" icon={<BookIcon />} options={GENRE_OPTIONS} value={genre} onChange={setGenre} />
          <StorySelector label="Tone" icon={<MicIcon />} options={TONE_OPTIONS} value={tone} onChange={setTone} />
          <StorySelector label="Theme" icon={<StarOutlineIcon />} options={THEME_OPTIONS} value={theme} onChange={setTheme} />
        </div>

        <button
          className="generate-btn"
          onClick={handleGenerate}
          disabled={!canGenerate}
          aria-label="Generate story"
          title={prompt.trim().length === 0 ? "Describe your story first" : "Generate story"}
        >
          {generating ? <span className="generate-spinner" /> : <SendIcon />}
        </button>
      </div>
    </div>
  );
}
