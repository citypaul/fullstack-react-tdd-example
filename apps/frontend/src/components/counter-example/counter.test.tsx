import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import { Counter } from "./counter-use-reducer-implementation";
import { Counter } from "./counter-use-state-implementation";

describe("Counter component", () => {
  test("Initial count is 0", async () => {
    render(<Counter />);

    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
  });

  test("Increment button increases the count", async () => {
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: /increment/i });
    await userEvent.click(incrementButton);
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
  });

  test("Decrement button decreases the count", async () => {
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: /increment/i });
    const decrementButton = screen.getByRole("button", { name: /decrement/i });

    await userEvent.click(incrementButton);
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();

    await userEvent.click(decrementButton);
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
  });

  test("Decrement button doesn't decrease count below 0", async () => {
    render(<Counter />);

    const decrementButton = screen.getByRole("button", { name: /decrement/i });

    await userEvent.click(decrementButton);
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
  });

  test("Reset button resets the count", async () => {
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: /increment/i });
    const resetButton = screen.getByRole("button", { name: /reset/i });

    await userEvent.click(incrementButton);
    await userEvent.click(incrementButton);
    expect(screen.getByText(/count: 2/i)).toBeInTheDocument();

    await userEvent.click(resetButton);
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
  });
});
