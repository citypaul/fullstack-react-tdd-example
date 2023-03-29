import { render } from "../test-utils";

// For our purposes, we are going to assume if data is returned
// from the API, it will always be valid and complete

// Proper error handling and handling of invalid data should be tested
// at the BFF level.

describe("ProductSearch", () => {
  it("if products are returned, they should be displayed as a list of product cards", () => {});

  it.todo("the search button should be disabled if the search input is empty");
  it.todo("if no products are returned, a message should be displayed");
  it.todo("if an error occurs, a message should be displayed");
});
