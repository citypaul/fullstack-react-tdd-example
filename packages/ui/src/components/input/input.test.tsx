import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Label } from "../Label";
import { Input } from "./Input";

describe("Input", () => {
  it("renders and handles input", () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <>
        <Label text="Name" htmlFor="name" />
        <Input id="name" onChange={(e) => handleChange(e.target.value)} />
      </>
    );

    const input = getByLabelText("Name");
    userEvent.type(input, "John Doe");

    expect((input as HTMLInputElement).value).toBe("John Doe");
    expect(handleChange).toHaveBeenCalledWith("John Doe");
    expect(input).not.toHaveClass("input-secondary");
  });

  it("can render a secondary variant", () => {
    const { getByLabelText } = render(
      <>
        <Label text="Name" htmlFor="name" />
        <Input id="name" variant="secondary" />
      </>
    );

    const input = getByLabelText("Name");
    expect(input).toHaveClass("input-secondary");
  });
});
