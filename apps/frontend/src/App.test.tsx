import { render, screen } from "@testing-library/react";
import React from "react";
import { App } from "./App";

test("renders hello world button", () => {
  render(<App />);

  expect(screen.getByText(/submit/i)).toBeInTheDocument();
});
