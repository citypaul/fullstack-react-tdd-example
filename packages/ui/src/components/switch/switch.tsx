import React from "react";

type SwitchProps = {
  on?: boolean;
};

export const Switch = (props: SwitchProps) => (
  <input type="checkbox" className="toggle toggle-success" />
);
