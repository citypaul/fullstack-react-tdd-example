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

    render(<ProductSearch />);

    expect(await screen.findByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });

    const searchInput = await screen.findByLabelText(/product search:/i);
    const searchButton = await screen.findByRole("button", { name: /search/i });

    server.use(
      rest.get("/product-search", (req, res, ctx) => {
        if (req.url.searchParams.get("search-term") !== searchQuery) {
          return res(ctx.status(400));
        }

        return res(ctx.json([createMockProduct()]));

        // await screen.findByText("Product Search");
      })
    );
  });

  it.todo("if no products are returned, a message should be displayed");
  it.todo("if an error occurs, a message should be displayed");
});
