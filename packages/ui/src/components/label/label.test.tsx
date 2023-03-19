// Label.test.tsx
import { render, screen } from "@testing-library/react";
import React from "react";
import { Label } from "./Label";

describe("Label component", () => {
  it("renders the label with correct text and htmlFor attribute", () => {
    render(<Label htmlFor="inputId" text="Label Text" />);

    const labelText = screen.getByText("Label Text");
    expect(labelText).toBeInTheDocument();
    expect(labelText.closest("label")).toHaveAttribute("for", "inputId");
  });

  it("supports additional className prop", () => {
    render(
      <Label htmlFor="inputId" text="Label Text" className="custom-class" />
    );

    const labelText = screen.getByText("Label Text");
    expect(labelText.closest("label")).toHaveClass("label", "custom-class");
  });

  it("supports additional props", () => {
    render(
      <Label
        htmlFor="inputId"
        text="Label Text"
        className="custom-class"
        id="custom-id"
        data-testid="custom-data-testid"
      />
    );

    const labelText = screen.getByText("Label Text");
    const label = labelText.closest("label");
    expect(label).toHaveAttribute("id", "custom-id");
    expect(label).toHaveAttribute("data-testid", "custom-data-testid");
  });
});
