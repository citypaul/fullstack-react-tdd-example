import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UseReducerCounter as Counter } from "./";

describe("Counter component", () => {
  test("Initial count is 0", async () => {
    render(<Counter />);

    expect(screen.getByRole("status", { name: "count" })).toHaveTextContent(
      "0"
    );
  });

  test("Increment button increases the count", async () => {
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: /increment/i });
    await userEvent.click(incrementButton);

    expect(screen.getByRole("status", { name: "count" })).toHaveTextContent(
      "1"
    );
  });

  test("Decrement button decreases the count", async () => {
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: /increment/i });
    const decrementButton = screen.getByRole("button", { name: /decrement/i });

    await userEvent.click(incrementButton);
    expect(screen.getByRole("status", { name: "count" })).toHaveTextContent(
      "1"
    );

    await userEvent.click(decrementButton);
    expect(screen.getByRole("status", { name: "count" })).toHaveTextContent(
      "0"
    );
  });

  test("Decrement button doesn't decrease count below 0", async () => {
    render(<Counter />);

    const decrementButton = screen.getByRole("button", { name: /decrement/i });

    await userEvent.click(decrementButton);

    expect(screen.getByRole("status", { name: "count" })).toHaveTextContent(
      "0"
    );
  });

  test("Reset button resets the count", async () => {
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: /increment/i });
    const resetButton = screen.getByRole("button", { name: /reset/i });

    await userEvent.click(incrementButton);
    await userEvent.click(incrementButton);

    expect(screen.getByRole("status", { name: "count" })).toHaveTextContent(
      "2"
    );

    await userEvent.click(resetButton);

    expect(screen.getByRole("status", { name: "count" })).toHaveTextContent(
      "0"
    );
  });
});
