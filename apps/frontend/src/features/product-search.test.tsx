import userEvent from "@testing-library/user-event";
import { createMockProduct } from "fullstack-react-tdd-example-mocks";
import { rest } from "msw";
import { server } from "../setupTests";
import { render, screen, waitFor } from "../test-utils";
import { ProductSearch } from "./product-search";
// For our purposes, we are going to assume if data is returned
// from the API, it will always be valid and complete

// Proper error handling and handling of invalid data should be tested
// at the BFF level.

describe("ProductSearch", () => {
  it("if products are returned, they should be displayed as a list of product cards", async () => {
    const searchQuery = "test product";
    const mockProductTitle = "Test Product";

    render(<ProductSearch />);

    const searchInput = await screen.findByLabelText(/product search:/i);
    const searchButton = await screen.findByRole("button", { name: /search/i });

    server.use(
      rest.get("/product-search", (req, res, ctx) => {
        if (req.url.searchParams.get("search-term") !== searchQuery) {
          return res(ctx.status(400));
        }

        return res(
          ctx.delay(100),
          ctx.json([createMockProduct({ title: mockProductTitle })])
        );
      })
    );

    expect(screen.queryByText(mockProductTitle)).not.toBeInTheDocument();

    await userEvent.type(searchInput, searchQuery);
    await userEvent.click(searchButton);

    await waitFor(() => {
      expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });

    expect(await screen.findByText(mockProductTitle)).toBeInTheDocument();

    expect(await screen.findByText(mockProductTitle)).toBeInTheDocument();
  });

  it.todo("the search button should be disabled if the search input is empty");
  it.todo("if no products are returned, a message should be displayed");
  it.todo("if an error occurs, a message should be displayed");
});
