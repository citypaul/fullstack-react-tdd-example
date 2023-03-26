import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormExample } from "./FormExample";

describe("FormExample", () => {
  it("can submit the form", async () => {
    const firstName = "John";
    const email = "john@test.com";
    const password = "password";

    render(<FormExample />);

    const firstNameInput = screen.getByLabelText(/first name/i);
    const emailInput = screen.getByLabelText(/email address/i);
    const passwordInput = screen.getByLabelText(/password/i);

    await userEvent.type(firstNameInput, firstName);
    await userEvent.type(emailInput, email);
    await userEvent.type(passwordInput, password);

    const submitButton = screen.getByRole("button", { name: /submit/i });
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/form submitted/i)).toBeInTheDocument();
    });
  });

  describe("unhappy path", () => {
    it("can display a password required error", async () => {
      const firstName = "John";
      const email = "john@test.com";

      render(<FormExample />);

      const firstNameInput = screen.getByLabelText(/first name/i);
      const emailInput = screen.getByLabelText(/email address/i);

      await userEvent.type(firstNameInput, firstName);
      await userEvent.type(emailInput, email);

      const submitButton = screen.getByRole("button", { name: /submit/i });
      await userEvent.click(submitButton);

      expect(
        await screen.findByText(/password is required/i)
      ).toBeInTheDocument();
    });
  });
});
