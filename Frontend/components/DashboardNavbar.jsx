import { PlayIcon } from "./dashboard-icons";
import ProfileButton from "./ProfileButton";

export default function DashboardNavbar() {
  return (
    <header className="dash-navbar">
      <a className="brand" href="/dashboard">
        StoryForge<span className="brand-accent">AI</span>
        <span className="brand-spark">✦</span>
      </a>

      <div className="dash-navbar-actions">
        <button className="icon-btn icon-btn-lg" aria-label="Play narration" title="Play narration">
          <PlayIcon />
        </button>
        <ProfileButton />
      </div>
    </header>
  );
}
