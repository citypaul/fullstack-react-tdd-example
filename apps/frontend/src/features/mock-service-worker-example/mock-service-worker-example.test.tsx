import userEvent from "@testing-library/user-event";
import React from "react";
import { render, screen, waitForElementToBeRemoved } from "../../test-utils";
import { MockServiceWorkerExample } from "./mock-service-worker-example";

describe("Mock service worker example", () => {
  test("renders", async () => {
    render(<MockServiceWorkerExample />);

    const button = screen.getByRole("button", { name: /fetch data/i });
    await userEvent.click(button);

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));

    expect(
      await screen.findByText(/mock service worker demo/i)
    ).toBeInTheDocument();
  });
});
