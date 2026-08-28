"use client";

import { useState } from "react";
import StorySelector from "./StorySelector";
import { SendIcon, SmileIcon, BookIcon, MicIcon, StarOutlineIcon } from "./dashboard-icons";
import { MOOD_OPTIONS, GENRE_OPTIONS, TONE_OPTIONS, THEME_OPTIONS } from "../data/dashboard";

export default function StoryPrompt({ onGenerate }) {
  const [prompt, setPrompt] = useState("");
  const [mood, setMood] = useState("");
  const [genre, setGenre] = useState("");
  const [tone, setTone] = useState("");
  const [theme, setTheme] = useState("");

  const canGenerate = prompt.trim().length > 0;

  const handleGenerate = () => {
    if (!canGenerate) return;
    onGenerate?.({ prompt: prompt.trim(), mood, genre, tone, theme });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      handleGenerate();
    }
  };

  return (
    <div className="story-prompt reveal" style={{ "--d": "0.15s" }}>
      <p className="story-prompt-label">Describe your story...</p>
      <textarea
        className="story-prompt-textarea"
        placeholder="Enter your ideas, characters, plot, or any details you want in your story..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={handleKeyDown}
        rows={4}
        aria-label="Describe your story"
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
          title={canGenerate ? "Generate story" : "Describe your story first"}
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
}
