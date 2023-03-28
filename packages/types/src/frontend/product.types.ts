type ProductPrice = {
  currency: "£" | "$" | "€";
  value: number;
};

type ProductImage = {
  src: string;
  alt: string;
};

export type Product = {
  id: string;
  title: string;
  description: string;
  image: ProductImage;
  price: ProductPrice;
  tags: string[];
};
