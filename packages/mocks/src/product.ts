import type { Product } from "fullstack-react-tdd-example-types";

export const createMockProduct = (overrides?: Partial<Product>): Product => ({
  id: "1",
  title: "Product title",
  description: "Product description",
  image: {
    src: "https://via.placeholder.com/640x360",
    alt: "Example Product",
  },
  price: {
    currency: "£",
    value: 10,
  },
  tags: ["electronics", "sound"],
  ...overrides,
});
