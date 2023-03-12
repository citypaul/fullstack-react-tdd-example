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
});
