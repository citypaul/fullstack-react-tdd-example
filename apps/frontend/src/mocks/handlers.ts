import { createMockProduct } from "fullstack-react-tdd-example-mocks";
import { rest } from "msw";

export const handlers = [
  rest.get("/mock-service-worker-demo", (req, res, ctx) => {
    return res(
      ctx.delay(750),
      ctx.json([
        createMockProduct({
          title: "Mock service worker demo",
        }),
      ]),
      ctx.status(200)
    );
  }),
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
