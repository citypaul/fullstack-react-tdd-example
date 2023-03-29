import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export const Button = ({ children, variant, ...rest }: ButtonProps) => {
  return (
    <button
      className={`btn${
        variant === "secondary" ? ` btn-secondary` : " btn-primary"
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};
