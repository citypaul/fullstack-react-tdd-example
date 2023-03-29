import { createMockProduct } from "fullstack-react-tdd-example-mocks";
import { rest } from "msw";

export const handlers = [
  rest.get("/product-search", (req, res, ctx) => {
    return res(
      ctx.json([
        createMockProduct(),
        createMockProduct({
          id: "2",
          title: "Product 2",
          price: {
            value: 2000,
            currency: "£",
          },
        }),
      ]),
      ctx.status(200)
    );
  }),
];
