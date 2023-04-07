import React, { useId } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = ({ label, error, ...rest }: InputProps) => {
  const id = useId();

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label" htmlFor={id}>
        <span className="label-text">{label}</span>
      </label>
      <input
        {...rest}
        id={id}
        className={`input input-bordered w-full max-w-xs ${
          error ? "input-error" : ""
        }`}
        aria-invalid={error ? "true" : "false"}
      />
      {error && <p className="text-error">{error}</p>}
    </div>
  );
};
