import { useState, forwardRef } from "react";
import type { PasswordInputProps } from "./PasswordInput.types";
import "./passwordInput.css";

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label, error, id, name, value = "", onChange }, ref) => {
    const [show, setShow] = useState(false);
    const inputId = id || name;

    const password = String(value);

    const getStrength = () => {
      if (!password) return 0;
      if (password.length < 6) return 1;
      if (password.length < 10) return 2;
      return 3;
    };

    const strength = getStrength();
    const strengthText = ["", "Weak", "Medium", "Strong"][strength];

    return (
      <div className="password-group">
        {label && (
          <label htmlFor={inputId} className="password-label">
            {label}
          </label>
        )}

        <div className="password-input-wrapper">
          <input
            ref={ref}
            id={inputId}
            name={name}
            type={show ? "text" : "password"}
            value={password}
            onChange={(e) => onChange?.(e.target.value)}
            className={`password-input ${error ? "password-error" : ""}`}
          />

          <button
            type="button"
            className="password-toggle"
            onClick={() => setShow(!show)}
          >
            👁
          </button>
        </div>

        <div className="password-strength-bar">
          <div className={`password-strength-fill s-${strength}`} />
        </div>

        {password && (
          <div className="password-strength-text">{strengthText}</div>
        )}

        {error && <div className="password-error-text">{error}</div>}
      </div>
    );
  },
);

PasswordInput.displayName = "PasswordInput";
