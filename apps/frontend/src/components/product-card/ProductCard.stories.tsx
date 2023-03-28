import { ComponentMeta, ComponentStory } from "@storybook/react";
import { createMockProduct } from "fullstack-react-tdd-example-mocks";
import { Product } from "fullstack-react-tdd-example-types";
import React from "react";
import { ProductCard } from "./ProductCard";

export default {
  title: "Our App Components/ProductCard",
  component: ProductCard,
  args: {
    onClick: (productId: Product["id"]) => alert(`clicked: ${productId}`),
    product: createMockProduct(),
  },
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => (
  <ProductCard {...args} />
);

export const Default = Template.bind({});
