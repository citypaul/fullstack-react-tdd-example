import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = (props: InputProps) => {
  return <input type="text" value={"I am an input"} />;
};
