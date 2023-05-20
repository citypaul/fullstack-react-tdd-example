import { render, screen } from "@testing-library/react";
import { HelloWorld } from "./hello-world";

describe("hello-world", () => {
  it("should render", () => {
    render(<HelloWorld />);
    expect(screen.getByText("Hello World!")).toBeInTheDocument();
  });
});
