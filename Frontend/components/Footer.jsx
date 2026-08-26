export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="brand">
            StoryForge<span className="brand-accent">AI</span>
            <span className="brand-spark">✦</span>
          </span>
          <p>Story worlds, generated and remembered.</p>
        </div>
        <div className="footer-links">
          <a href="#signin">Sign In</a>
          <a href="#signup">Sign Up</a>
          <a href="#top">Back to top</a>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} StoryForge AI. All rights reserved.</div>
    </footer>
  );
}
