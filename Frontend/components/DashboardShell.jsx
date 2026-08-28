"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";
import DashboardScene from "./DashboardScene";
import StoryPrompt from "./StoryPrompt";
import StoryGenerating from "./StoryGenerating";
import StoryReader from "./StoryReader";
import { STORY_HISTORY, buildMockStory } from "../data/dashboard";

const GENERATION_DELAY_MS = 4000;

export default function DashboardShell() {
  // mode: "create" | "generating" | "story"
  const [mode, setMode] = useState("create");
  const [stories, setStories] = useState(STORY_HISTORY);
  const [currentStory, setCurrentStory] = useState(null);
  const [pendingConfig, setPendingConfig] = useState(null);
  const [error, setError] = useState(null);

  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const runGeneration = useCallback((config) => {
    if (timerRef.current) clearTimeout(timerRef.current);

    // TODO: Replace this mock delay + buildMockStory call with a real request:
    //   const res = await fetch("/api/stories/generate", { method: "POST", body: JSON.stringify(config) });
    //   const story = await res.json();
    // See data/dashboard.js → buildMockStory for the single seam to swap out.
    timerRef.current = setTimeout(() => {
      try {
        const story = buildMockStory(config);
        setStories((prev) => [story, ...prev]);
        setCurrentStory(story);
        setError(null);
        setMode("story");
      } catch (err) {
        setError("Something went wrong while creating your story. Please try again.");
        setMode("generating");
      }
    }, GENERATION_DELAY_MS);
  }, []);

  const handleGenerate = useCallback(
    (config) => {
      setPendingConfig(config);
      setError(null);
      setMode("generating");
      runGeneration(config);
    },
    [runGeneration]
  );

  const handleRetry = useCallback(() => {
    if (!pendingConfig) {
      setError(null);
      setMode("create");
      return;
    }
    setError(null);
    setMode("generating");
    runGeneration(pendingConfig);
  }, [pendingConfig, runGeneration]);

  const handleSelectStory = useCallback((story) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setError(null);
    setCurrentStory(story);
    setMode("story");
  }, []);

  const handleNewStory = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setError(null);
    setPendingConfig(null);
    setCurrentStory(null);
    setMode("create");
  }, []);

  return (
    <div className="dash-page">
      <div className="dash-page-bg" aria-hidden="true">
        <div className="dash-page-stars" />
      </div>

      <DashboardNavbar hasStory={mode === "story" && !!currentStory} />

      <div className="dash-shell">
        <DashboardSidebar
          stories={stories}
          currentStoryId={currentStory?.id ?? null}
          onSelectStory={handleSelectStory}
          onNewStory={handleNewStory}
        />

        <main className="dash-workspace">
          <DashboardScene />

          <div className="dash-workspace-content">
            {mode === "create" && (
              <>
                <div className="dash-welcome reveal">
                  <p className="dash-welcome-eyebrow">Welcome back,</p>
                  <h1 className="dash-welcome-title">What story will we create today?</h1>
                  <p className="dash-welcome-sub">Your imagination, our AI, infinite possibilities.</p>
                  <div className="dash-welcome-divider">
                    <span />
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2l1.6 8.4L22 12l-8.4 1.6L12 22l-1.6-8.4L2 12l8.4-1.6L12 2z" fill="currentColor" />
                    </svg>
                    <span />
                  </div>
                </div>

                <StoryPrompt onGenerate={handleGenerate} />
              </>
            )}

            {mode === "generating" && <StoryGenerating error={error} onRetry={handleRetry} />}

            {mode === "story" && currentStory && (
              <StoryReader story={currentStory} onBack={handleNewStory} onNewStory={handleNewStory} />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
