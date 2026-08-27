import DashboardNavbar from "../../components/DashboardNavbar";
import DashboardSidebar from "../../components/DashboardSidebar";
import DashboardScene from "../../components/DashboardScene";
import StoryPrompt from "../../components/StoryPrompt";

export const metadata = {
  title: "Dashboard — StoryForge AI",
  description: "Your AI command center for creating and exploring fictional worlds.",
};

export default function DashboardPage() {
  return (
    <div className="dash-page">
      <div className="dash-page-bg" aria-hidden="true">
        <div className="dash-page-stars" />
      </div>

      <DashboardNavbar />

      <div className="dash-shell">
        <DashboardSidebar />

        <main className="dash-workspace">
          <DashboardScene />

          <div className="dash-workspace-content">
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

            <StoryPrompt />
          </div>
        </main>
      </div>
    </div>
  );
}
