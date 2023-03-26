import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormExample } from "./FormExample";

describe("FormExample", () => {
  it("can submit the form", () => {
    const firstName = "John";
    const email = "john@test.com";
    const password = "password";

    render(<FormExample />);

    const firstNameInput = screen.getByLabelText(/first name/i);
    const emailInput = screen.getByLabelText(/email address/i);
    const passwordInput = screen.getByLabelText(/password/i);

    userEvent.type(firstNameInput, firstName);
    userEvent.type(emailInput, email);
    userEvent.type(passwordInput, password);

    const submitButton = screen.getByRole("button", { name: /submit/i });
    userEvent.click(submitButton);

    expect(screen.getByText(/form submitted/i)).toBeInTheDocument();
  });
});
