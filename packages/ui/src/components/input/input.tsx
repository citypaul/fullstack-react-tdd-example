import React, { useId } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  variant?: "secondary";
  error?: string;
}

export const Input = ({
  label,
  variant,
  error,
  className,
  ...inputProps
}: InputProps) => {
  const id = useId();

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label" htmlFor={id}>
        <span className="label-text">{label}</span>
      </label>
      <input
        type="text"
        {...inputProps}
        aria-invalid={error ? "true" : "false"}
        id={id}
        className={`input input-bordered w-full max-w-xs ${
          variant === "secondary" ? "input-secondary" : ""
        } ${error ? "input-error" : ""} ${className}`}
      />
      {error && <p className="text-error">{error}</p>}
    </div>
  );
};
