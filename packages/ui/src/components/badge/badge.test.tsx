import { render, screen } from "@testing-library/react";
import React from "react";
import { Badge, BadgeProps } from "./badge";

describe("Badge", () => {
  test("renders with default type and size", () => {
    const badgeText = "Test Badge";

    render(<Badge>{badgeText}</Badge>);

    expect(screen.getByText(badgeText)).toHaveClass("badge");
    expect(screen.getByText(badgeText)).not.toHaveClass("badge-primary");
  });

  test.each<BadgeProps["type"]>(["primary", "secondary", "success"])(
    "renders with custom type (type: %s)",
    (type) => {
      const badgeText = "Test Badge";

      render(<Badge type={type}>Test Badge</Badge>);

      expect(screen.getByText(badgeText)).toHaveClass(`badge-${type}`);
    }
  );

  test("can render an outlined badge", () => {
    const badgeText = "Test Badge";

    const { rerender } = render(<Badge>{badgeText}</Badge>);

    expect(screen.getByText(badgeText)).not.toHaveClass("badge-outline");

    rerender(<Badge outline>{badgeText}</Badge>);

    expect(screen.getByText(badgeText)).toHaveClass("badge-outline");
  });
});
