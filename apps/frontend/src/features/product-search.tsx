import { Button, Input } from "fullstack-react-tdd-example-ui";
import React from "react";
import { ProductCard } from "../components";
import { useProductSearch } from "./product-search.queries";

export const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const { data, refetch, isLoading } = useProductSearch(searchTerm);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Input
        label="Product Search:"
        className="mb-2"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button onClick={() => refetch()} disabled={!searchTerm}>
        Search
      </Button>

      <div className="flex gap-4 mt-4">
        {data?.map((product) => (
          <ProductCard key={product.id} product={product} onClick={() => {}} />
        ))}
      </div>
    </div>
  );
};
