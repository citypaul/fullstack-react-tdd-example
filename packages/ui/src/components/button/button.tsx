import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export const Button = ({ children, variant }: ButtonProps) => {
  return (
    <button
      className={`btn${
        variant === "secondary" ? ` btn-secondary` : " btn-primary"
      }`}
    >
      {children}
    </button>
  );
};
