import React from "react";
import { App } from "./App";
import { render, screen } from "./test-utils";

test("renders product search", async () => {
  render(<App />);

  expect(await screen.findByText(/product search/i)).toBeInTheDocument();
});
