import { Button, Input } from "fullstack-react-tdd-example-ui";
import React from "react";
import { useProductSearch } from "./product-search.queries";

// if products are returned, they should be displayed as a list of product cards
// if no products are returned, a message should be displayed
// if an error occurs, a message should be displayed

export const ProductSearch = () => {
  const { data, isLoading } = useProductSearch();

  if (isLoading) return <div>Loading...</div>;

  console.log(data);

  return (
    <div>
      <Input label="Product Search:" className="mb-2" />
      <Button>Search</Button>
    </div>
  );
};
