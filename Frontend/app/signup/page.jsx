"use client";

import { useState } from "react";
import Link from "next/link";
import AuthLayout from "../../components/AuthLayout";
import AuthInput from "../../components/AuthInput";
import { MailIcon, LockIcon, UserIcon, CheckIcon, MonogramIcon } from "../../components/AuthIcons";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const next = {};
    if (name.trim().length < 2) next.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (password.length < 8) next.password = "Password must be at least 8 characters.";
    if (confirmPassword !== password) next.confirmPassword = "Passwords don't match.";
    if (!agree) next.agree = "You need to accept the terms to continue.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // TODO: replace with your real sign-up call, e.g.
    // await fetch("/api/auth/signup", { method: "POST", body: JSON.stringify({ name, email, password }) });
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
  };

  return (
    <AuthLayout
      eyebrow="Begin your story"
      title="Create your StoryForge account"
      subtitle="One idea is all it takes to start a whole story world."
      footer={
        <>
          Already have an account? <Link href="/signin">Sign in</Link>
        </>
      }
    >
      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <AuthInput
          label="Full name"
          type="text"
          icon={<UserIcon />}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ava Storyteller"
          autoComplete="name"
          required
          error={errors.name}
        />

        <AuthInput
          label="Email"
          type="email"
          icon={<MailIcon />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          autoComplete="email"
          required
          error={errors.email}
        />

        <AuthInput
          label="Password"
          type="password"
          icon={<LockIcon />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="At least 8 characters"
          autoComplete="new-password"
          required
          error={errors.password}
        />

        <AuthInput
          label="Confirm password"
          type="password"
          icon={<LockIcon />}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="••••••••"
          autoComplete="new-password"
          required
          error={errors.confirmPassword}
        />

        <div className="field-row-between agree-row">
          <label className="checkbox">
            <span
              className={`checkbox-box${agree ? " checked" : ""}`}
              onClick={() => setAgree((a) => !a)}
              role="checkbox"
              aria-checked={agree}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setAgree((a) => !a);
                }
              }}
            >
              {agree && <CheckIcon />}
            </span>
            I agree to the <Link href="/terms">Terms</Link> &amp; <Link href="/privacy">Privacy Policy</Link>
          </label>
        </div>
        {errors.agree && <p className="field-error">{errors.agree}</p>}

        <button type="submit" className="auth-submit" disabled={submitting}>
          {submitting ? "Creating account…" : "Create Account"}
          {!submitting && (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>

        <div className="divider">
          <span>or continue with</span>
        </div>

        <div className="social-row">
          <button type="button" className="btn btn-ghost social-btn">
            <MonogramIcon letter="G" />
            Google
          </button>
          <button type="button" className="btn btn-ghost social-btn">
            <MonogramIcon letter="Gh" />
            GitHub
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}
