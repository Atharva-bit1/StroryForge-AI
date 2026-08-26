"use client";

import { useId, useState } from "react";
import { EyeIcon } from "./AuthIcons";

export default function AuthInput({
  label,
  type = "text",
  icon = null,
  value,
  onChange,
  placeholder,
  autoComplete,
  required = false,
  error = "",
}) {
  const id = useId();
  const [show, setShow] = useState(false);
  const isPassword = type === "password";
  const resolvedType = isPassword ? (show ? "text" : "password") : type;

  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <div className={`input-wrap${error ? " has-error" : ""}`}>
        {icon && <span className="input-icon">{icon}</span>}
        <input
          id={id}
          type={resolvedType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          className="input"
        />
        {isPassword && (
          <button
            type="button"
            className="input-toggle"
            onClick={() => setShow((s) => !s)}
            aria-label={show ? "Hide password" : "Show password"}
          >
            <EyeIcon open={show} />
          </button>
        )}
      </div>
      {error && <p className="field-error">{error}</p>}
    </div>
  );
}
