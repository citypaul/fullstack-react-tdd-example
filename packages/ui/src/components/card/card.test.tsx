import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Card } from "./card";

describe("Card component", () => {
  it("renders the Card component and its children", () => {
    render(
      <Card>
        <Card.Header>
          <Card.Title>Title</Card.Title>
          <Card.Image src="image.png" alt="alt-text" />
        </Card.Header>
        <Card.Body>
          <p>Body content</p>
        </Card.Body>
        <Card.Footer>
          <p>Footer content</p>
        </Card.Footer>
        <Card.Actions>
          <button>Button</button>
        </Card.Actions>
      </Card>
    );

    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Body content")).toBeInTheDocument();
    expect(screen.getByText("Footer content")).toBeInTheDocument();
    expect(screen.getByAltText("alt-text")).toHaveAttribute("src", "image.png");
    expect(screen.getByRole("button")).toHaveTextContent("Button");
  });
});
