import React from "react";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
}

export const Label = ({ text, className, ...props }: LabelProps) => {
  return (
    <label className={`label ${className}`} {...props}>
      <span className="label-text">{text}</span>
    </label>
  );
};
