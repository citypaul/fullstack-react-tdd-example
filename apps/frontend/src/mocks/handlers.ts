import { createMockProduct } from "fullstack-react-tdd-example-mocks";
import { rest } from "msw";

export const handlers = [
  rest.get("/product-search", (req, res, ctx) => {
    return res(
      ctx.json([createMockProduct(), createMockProduct()]),
      ctx.status(200)
    );
  }),
];
