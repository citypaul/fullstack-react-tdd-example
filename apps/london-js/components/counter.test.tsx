import { render, screen } from "@testing-library/react";
import { Counter } from "./counter";

describe("Counter", () => {
  it("should render", () => {
    render(<Counter />);
    expect(screen.getByText("Hello World!")).toBeInTheDocument();
  });
});
