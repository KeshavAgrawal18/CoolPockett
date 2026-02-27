import { forwardRef } from "react";
import type { SelectProps } from "./Select.types";
import "./select.css";

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, placeholder, error, id, name, value, onChange }, ref) => {
    const selectId = id || name;

    return (
      <div className="select-group">
        {label && (
          <label htmlFor={selectId} className="select-label">
            {label}
          </label>
        )}

        <select
          ref={ref}
          id={selectId}
          name={name}
          value={value || ""}
          onChange={(e) => onChange?.(e.target.value)}
          className={`select ${error ? "select-error" : ""}`}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {error && <div className="select-error-text">{error}</div>}
      </div>
    );
  },
);

Select.displayName = "Select";
