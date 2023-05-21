import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./counter";

describe("counter component", () => {
  it("Upon the Counter component's initial render, the counter value should be zero", () => {
    render(<Counter />);

    expect(screen.getByRole("status", { name: "counter" })).toHaveTextContent(
      "0"
    );
  });

  it('When user clicks the "Increment" button, the counter value should increase by one (1).', async () => {
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: "Increment" });

    await userEvent.click(incrementButton);

    expect(screen.getByRole("status", { name: "counter" })).toHaveTextContent(
      "1"
    );

    await userEvent.click(incrementButton);

    expect(screen.getByRole("status", { name: "counter" })).toHaveTextContent(
      "2"
    );
  });

  it('When a user interacts with the "Decrement" button, the counter value should decrease by one (1) provided the current counter value is above zero (0).', async () => {
    render(<Counter />);

    const decrementButton = screen.getByRole("button", { name: "Decrement" });

    const incrementButton = screen.getByRole("button", { name: "Increment" });

    await userEvent.click(incrementButton);

    expect(screen.getByRole("status", { name: "counter" })).toHaveTextContent(
      "1"
    );

    await userEvent.click(decrementButton);

    expect(screen.getByRole("status", { name: "counter" })).toHaveTextContent(
      "0"
    );
  });

  it("If a user attempts to decrement the counter value when it's already at zero (0), the counter value should remain at zero (0).", async () => {
    render(<Counter />);

    const decrementButton = screen.getByRole("button", {
      name: "Decrement",
    });

    await userEvent.click(decrementButton);

    expect(screen.getByRole("status", { name: "counter" })).toHaveTextContent(
      "0"
    );
  });

  it('When a user interacts with the "Reset" button, the counter value should reset to zero (0), regardless of its current value.', async () => {
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: "Increment" });

    const resetButton = screen.getByRole("button", { name: "Reset" });

    await userEvent.click(incrementButton);

    expect(screen.getByRole("status", { name: "counter" })).toHaveTextContent(
      "1"
    );

    await userEvent.click(incrementButton);

    expect(screen.getByRole("status", { name: "counter" })).toHaveTextContent(
      "2"
    );

    await userEvent.click(resetButton);

    expect(screen.getByRole("status", { name: "counter" })).toHaveTextContent(
      "0"
    );
  });
});

//
//
//
// When a user interacts with the "Reset" button, the counter value should reset to zero (0), regardless of its current value.
