import userEvent from "@testing-library/user-event";
import { createMockProduct } from "fullstack-react-tdd-example-mocks";
import { Product } from "fullstack-react-tdd-example-types";
import { rest } from "msw";
import { ReactQueryProductSearch as ProductSearch } from ".";
import { server } from "../../setupTests";
import { render, screen, waitFor } from "../../test-utils";
// For our purposes, we are going to assume if data is returned
// from the API, it will always be valid and complete

// Proper error handling and handling of invalid data should be tested
// at the BFF level.

const mockProduct1Data: Product = {
  id: "1",
  title: "test product 1",
  description: "test product 1 description",
  price: {
    currency: "$",
    value: 100,
  },
  image: {
    alt: "test product 1 image",
    src: "https://via.placeholder.com/300x300",
  },
  tags: ["test"],
};

const mockProduct2Data: Product = {
  id: "2",
  title: "test product 2",
  description: "test product 2 description",
  price: {
    currency: "$",
    value: 200,
  },
  image: {
    alt: "test product 2 image",
    src: "https://via.placeholder.com/300x3002",
  },
  tags: ["test2"],
};

const assertProductCard = async (product: Product) => {
  expect(await screen.findByText(product.title)).toBeInTheDocument();

  expect(await screen.findByText(product.description)).toBeInTheDocument();

  expect(
    await screen.findByText(`${product.price.currency}${product.price.value}`)
  ).toBeInTheDocument();

  expect(await screen.findByAltText(product.image.alt)).toBeInTheDocument();

  expect(
    await screen.findByRole("img", { name: product.image.alt })
  ).toHaveAttribute("src", product.image.src);
};

describe("ProductSearch", () => {
  it("if products are returned, they should be displayed as a list of product cards", async () => {
    const searchQuery = "test product";

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
          ctx.json([
            createMockProduct(mockProduct1Data),
            createMockProduct(mockProduct2Data),
          ])
        );
      })
    );

    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    expect(screen.queryByText(mockProduct1Data.title)).not.toBeInTheDocument();
    expect(screen.queryByText(mockProduct2Data.title)).not.toBeInTheDocument();

    await userEvent.type(searchInput, searchQuery);
    await userEvent.click(searchButton);

    await waitFor(() => {
      expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });

    await assertProductCard(mockProduct1Data);
    await assertProductCard(mockProduct2Data);
  });

  it("if no products are returned, a message should be displayed", async () => {
    const searchQuery = "test product";

    render(<ProductSearch />);

    const searchInput = await screen.findByLabelText(/product search:/i);
    const searchButton = await screen.findByRole("button", { name: /search/i });

    server.use(
      rest.get("/product-search", (req, res, ctx) => {
        if (req.url.searchParams.get("search-term") !== searchQuery) {
          return res(ctx.status(400));
        }

        return res(ctx.delay(100), ctx.json([]));
      })
    );

    await userEvent.type(searchInput, searchQuery);
    await userEvent.click(searchButton);

    expect(await screen.findByText(/no products found/i)).toBeInTheDocument();
    expect(screen.queryByText(mockProduct1Data.title)).not.toBeInTheDocument();
  });

  it("if an API error occurs, a message should be displayed", async () => {
    const searchQuery = "test product";
    console.error = jest.fn();

    render(<ProductSearch />);

    const searchInput = await screen.findByLabelText(/product search:/i);
    const searchButton = await screen.findByRole("button", { name: /search/i });

    server.use(
      rest.get("/product-search", (req, res, ctx) => {
        return res(ctx.status(400));
      })
    );

    await userEvent.type(searchInput, searchQuery);
    await userEvent.click(searchButton);

    expect(await screen.findByText(/Error fetching data/i)).toBeInTheDocument();
  });
});
