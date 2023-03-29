import { render, screen } from "@testing-library/react";
import React from "react";
import { Button } from "./button";

describe("Button", () => {
  it('should call the "onClick" handler when clicked', () => {
    const expectedButtonText = "Click me!";
    const onClick = jest.fn();

    render(<Button onClick={onClick}>{expectedButtonText}</Button>);

    expect(onClick).not.toHaveBeenCalled();

    screen.getByRole("button", { name: expectedButtonText }).click();

    expect(onClick).toHaveBeenCalled();
  });

  it("should render with the correct class name for primary button", () => {
    const expectedButtonText = "Click me!";

    render(<Button>{expectedButtonText}</Button>);

    expect(
      screen.getByRole("button", { name: expectedButtonText })
    ).toHaveClass("btn btn-primary");
  });

  it("should render with the correct class name for secondary button", () => {
    const expectedButtonText = "Click me!";

    render(<Button variant="secondary">{expectedButtonText}</Button>);

    expect(
      screen.getByRole("button", { name: expectedButtonText })
    ).toHaveClass("btn btn-secondary");
  });
});
