import { forwardRef } from "react";
import type { ButtonProps } from "./Button.types";
import "./button.css";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      fullWidth = false,
      loading = false,
      disabled,
      className = "",
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={`
          btn
          btn-${variant}
          ${fullWidth ? "btn-full" : ""}
          ${className}
        `}
        {...props}
      >
        {loading ? "Loading..." : children}
      </button>
    );
  },
);

Button.displayName = "Button";
