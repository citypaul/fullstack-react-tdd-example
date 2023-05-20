import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Input } from "./input";

describe("Input", () => {
  it("renders and handles input", () => {
    const expectedLabel = "Name";

    const handleChange = jest.fn();
    render(
      <Input
        id="name"
        onChange={(e) => handleChange(e.target.value)}
        label={expectedLabel}
      />
    );

    const input = screen.getByLabelText(expectedLabel);
    userEvent.type(input, "John Doe");

    expect((input as HTMLInputElement).value).toBe("John Doe");
    expect(handleChange).toHaveBeenCalledWith("John Doe");
    expect(input).not.toBeInvalid();
  });

  it("can render an error state", () => {
    const expectedLabel = "Name";
    const expectedErrorMessage = "This field is required";

    const { getByLabelText } = render(
      <Input id="name" label={expectedLabel} error={expectedErrorMessage} />
    );

    const input = getByLabelText(expectedLabel);
    expect(input).toHaveClass("input-error");
    expect(input).toBeInvalid();

    expect(screen.getByText(expectedErrorMessage)).toBeInTheDocument();
  });

  it("can render custom classes", () => {
    const expectedLabel = "Name";
    const { getByLabelText } = render(
      <Input id="name" label={expectedLabel} className="text-red-500" />
    );

    const input = getByLabelText(expectedLabel);
    expect(input).toHaveClass("text-red-500");
  });
});
