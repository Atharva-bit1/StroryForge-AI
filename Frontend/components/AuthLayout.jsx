import BackgroundAtmosphere from "./BackgroundAtmosphere";

export default function AuthLayout({ eyebrow, title, subtitle, children, footer }) {
  return (
    <>
      <BackgroundAtmosphere />
      <main className="auth-page">
        <a className="brand auth-brand" href="/">
          StoryForge<span className="brand-accent">AI</span>
          <span className="brand-spark">✦</span>
        </a>

        <div className="auth-card reveal">
          <div className="auth-head">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h1>{title}</h1>
            {subtitle && <p className="auth-subtitle">{subtitle}</p>}
          </div>

          {children}
        </div>

        {footer && <div className="auth-foot">{footer}</div>}
      </main>
    </>
  );
}
