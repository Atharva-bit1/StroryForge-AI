import StoryCarousel from "./StoryCarousel";
import ScrollIndicator from "./ScrollIndicator";

export default function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <h1 className="hero-title reveal">
          StoryForge <span className="grad-text">AI</span>
          <span className="brand-spark hero-spark">✦</span>
        </h1>
        <p className="hero-subtitle reveal" style={{ "--d": "0.08s" }}>
          A Memory-Augmented Multimodal
          <br />
          AI Storytelling System
        </p>
        <p className="hero-desc reveal" style={{ "--d": "0.16s" }}>
          Generate immersive multi-scene stories while maintaining character, plot, and world consistency using
          intelligent story memory. Transform your generated stories into rich visual and audio experiences.
        </p>
        <a href="#signup" className="cta reveal" style={{ "--d": "0.24s" }}>
          <span>Get Started</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      <StoryCarousel />

      <ScrollIndicator targetId="workflow" />
    </section>
  );
}
