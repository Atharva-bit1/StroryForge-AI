"use client";

import { useState } from "react";
import Link from "next/link";
import AuthLayout from "../../components/AuthLayout";
import AuthInput from "../../components/AuthInput";
import {
  MailIcon,
  LockIcon,
  CheckIcon,
  MonogramIcon,
} from "../../components/AuthIcons";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const next = {};

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Enter a valid email address.";
    }

    if (!password) {
      next.password = "Enter your password.";
    }

    setErrors(next);

    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setSubmitting(true);

    // TODO:
    // Connect this to your FastAPI login endpoint later.
    //
    // Example:
    // await fetch("http://localhost:8000/api/auth/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email,
    //     password,
    //   }),
    // });

    await new Promise((resolve) => setTimeout(resolve, 900));

    setSubmitting(false);
  };

  return (
    <AuthLayout
      eyebrow="Welcome back"
      title="Sign in to StoryForge"
      subtitle="Pick up your story worlds right where you left them."
      footer={
        <>
          Don't have an account? <Link href="/signup">Create one</Link>
        </>
      }
    >
      <form className="auth-form" onSubmit={handleSubmit} noValidate>
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
          placeholder="••••••••"
          autoComplete="current-password"
          required
          error={errors.password}
        />

        <div className="field-row-between">
          <label className="checkbox">
            <span
              className={`checkbox-box${remember ? " checked" : ""}`}
              onClick={() => setRemember((value) => !value)}
              role="checkbox"
              aria-checked={remember}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setRemember((value) => !value);
                }
              }}
            >
              {remember && <CheckIcon />}
            </span>
            Remember me
          </label>

          <Link href="/forgot-password" className="auth-link-muted">
            Forgot password?
          </Link>
        </div>

        <button type="submit" className="auth-submit" disabled={submitting}>
          {submitting ? "Signing In…" : "Sign In"}

          {!submitting && (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
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
