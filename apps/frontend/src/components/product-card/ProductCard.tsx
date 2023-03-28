import { Card } from "fullstack-react-tdd-example-ui";
import React from "react";

// export price and product type to types package
type Price = {
  currency: "£" | "$" | "€";
  value: number;
};

type Image = {
  src: string;
  alt: string;
};

export type Product = {
  title: string;
  description: string;
  image: Image;
  price: Price;
  tags: string[];
};

export type ProductCardProps = { product: Product };

export const ProductCard = (props: ProductCardProps) => {
  return <></>;
};
