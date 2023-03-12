import { render, screen } from "@testing-library/react";
import React from "react";
import { Switch } from "./switch";

describe("Switch", () => {
  it("should be turned off by default", () => {
    render(<Switch />);

    const switchElement = screen.getByRole("switch");

    expect(switchElement).toBeInTheDocument();
    expect(switchElement).not.toBeChecked();
  });

  it("should be possible to turn on and off", () => {
    const { rerender } = render(<Switch on />);

    const switchElement = screen.getByRole("switch");

    expect(switchElement).toBeInTheDocument();
    expect(switchElement).toBeChecked();

    rerender(<Switch on={false} />);

    expect(switchElement).not.toBeChecked();
  });
});
