import React, { useId } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = ({ label, ...rest }: InputProps) => {
  const id = useId();

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label" htmlFor={id}>
        <span className="label-text">{label}</span>
      </label>
      <input
        {...rest}
        id={id}
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  );
};
