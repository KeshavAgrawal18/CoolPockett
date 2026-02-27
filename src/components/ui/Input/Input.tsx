import { forwardRef } from "react";
import type { InputProps } from "./Input.types";
import "./input.css";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, name, ...props }, ref) => {
    const inputId = id || name;

    return (
      <div className="input-group">
        {label && (
          <label htmlFor={inputId} className="input-label">
            {label}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          name={name}
          className={`input ${error ? "input-error" : ""}`}
          {...props}
        />

        {error && <div className="input-error-text">{error}</div>}
      </div>
    );
  },
);

Input.displayName = "Input";
