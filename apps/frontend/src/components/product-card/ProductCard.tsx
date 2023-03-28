import { Badge, Card } from "fullstack-react-tdd-example-ui";
import React from "react";

type Price = {
  currency: "£" | "$" | "€";
  value: number;
};

type Image = {
  src: string;
  alt: string;
};

export type Product = {
  id: string;
  title: string;
  description: string;
  image: Image;
  price: Price;
  tags: string[];
};

export type ProductCardProps = {
  onClick: (productId: Product["id"]) => void;
  product: Product;
};

export const ProductCard = ({ onClick, product }: ProductCardProps) => {
  return (
    <Card>
      <Card.Image src={product.image.src} alt={product.image.alt} />

      <Card.Body>
        <Card.Title>
          {product.title}{" "}
          <Badge type="secondary" outline>
            {`${product.price.currency}${product.price.value}`}
          </Badge>
        </Card.Title>

        <p>{product.description}</p>

        <Card.Actions>
          <button
            className="btn btn-primary"
            onClick={() => onClick(product.id)}
          >
            Buy Now
          </button>
          <div>
            {product.tags.map((tag) => (
              <Badge outline key={tag}>
                {tag}
              </Badge>
            ))}
          </div>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
};
