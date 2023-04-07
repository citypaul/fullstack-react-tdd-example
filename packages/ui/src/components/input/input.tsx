import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = (props: InputProps) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">This is a label</span>
      </label>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  );
};
