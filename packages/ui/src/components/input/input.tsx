import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "secondary";
}

export const Input = (props: InputProps) => {
  return (
    <input
      className={`input input-bordered w-full max-w-xs ${
        props.variant === "secondary" ? "input-secondary" : ""
      }`}
      type="text"
      {...props}
    />
  );
};
