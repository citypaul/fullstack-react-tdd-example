import { Button, Input } from "fullstack-react-tdd-example-ui";
import React from "react";
import { useProductSearch } from "./product-search.queries";

export const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
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
