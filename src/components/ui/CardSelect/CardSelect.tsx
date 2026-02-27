import type { CardSelectProps } from "./CardSelect.types";
import "./cardSelect.css";

export function CardSelect<T extends string>({
  label,
  options,
  value,
  onChange,
  error,
}: CardSelectProps<T>) {
  return (
    <div className="card-group">
      {label && <label className="card-label">{label}</label>}

      <div className="card-grid">
        {options.map((option) => {
          const isActive = option.value === value;

          return (
            <button
              key={option.value}
              type="button"
              className={`card ${isActive ? "card-active" : ""}`}
              onClick={() => onChange(option.value)}
            >
              <div className="card-title">{option.label}</div>

              {option.description && (
                <div className="card-description">{option.description}</div>
              )}
            </button>
          );
        })}
      </div>

      {error && <div className="card-error">{error}</div>}
    </div>
  );
}
