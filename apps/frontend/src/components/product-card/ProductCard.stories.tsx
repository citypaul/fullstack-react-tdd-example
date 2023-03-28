import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Product, ProductCard } from "./ProductCard";

export default {
  title: "Our App Components/ProductCard",
  component: ProductCard,
  args: {
    onClick: (productId: Product["id"]) => alert(`clicked: ${productId}`),
    product: {
      id: "1",
      title: "Example Product",
      description: "This is an example product description.",
      image: {
        src: "https://via.placeholder.com/640x360",
        alt: "Example Product",
      },
      price: {
        currency: "£",
        value: 29.99,
      },
      tags: ["electronics", "gadget"],
    },
  },
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => (
  <ProductCard {...args} />
);

export const Default = Template.bind({});
