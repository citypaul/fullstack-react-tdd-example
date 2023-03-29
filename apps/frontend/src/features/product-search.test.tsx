import { render, screen } from "../test-utils";
import { ProductSearch } from "./product-search";

// For our purposes, we are going to assume if data is returned
// from the API, it will always be valid and complete

// Proper error handling and handling of invalid data should be tested
// at the BFF level.

describe("ProductSearch", () => {
  it("if products are returned, they should be displayed as a list of product cards", async () => {
    render(<ProductSearch />);

    await screen.findByText("Product Search");
  });

  it.todo("if no products are returned, a message should be displayed");
  it.todo("if an error occurs, a message should be displayed");
});
