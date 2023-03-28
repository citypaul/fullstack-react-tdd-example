import type { Product } from "fullstack-react-tdd-example-types";

export const createProductMock = (overrides?: Partial<Product>): Product => ({
  id: "1",
  title: "Product title",
  description: "Product description",
  image: {
    src: "https://images.unsplash.com/photo-1542731900-6d4a6d8f8d7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    alt: "Product image",
  },
  price: {
    currency: "£",
    value: 10,
  },
  tags: ["tag1", "tag2"],
  ...overrides,
});
