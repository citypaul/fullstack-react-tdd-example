import { render, screen } from "@testing-library/react";
import { Counter } from "./counter";

describe("counter", () => {
  it("should render", () => {
    render(<Counter />);
    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });
});
