import React from "react";

type BadgeType = "primary" | "secondary" | "success";

export type BadgeProps = {
  type?: BadgeType;
  outline?: boolean;
  children: React.ReactNode;
};

export const Badge = ({ type, outline = false, children }: BadgeProps) => {
  const badgeTypeClass = type ? `badge-${type}` : "";
  const badgeOutlineClass = outline ? "badge-outline" : "";

  const className = `badge ${badgeTypeClass} ${badgeOutlineClass}`.trim();

  return <div className={className}>{children}</div>;
};
