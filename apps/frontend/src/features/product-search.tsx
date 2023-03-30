import { Product } from "fullstack-react-tdd-example-types";
import { Button, Input } from "fullstack-react-tdd-example-ui";
import React from "react";
import { ProductCard } from "../components";
import { useProductSearch } from "./product-search.queries";

const ProductResultsList = ({ products }: { products: Product[] }) => {
  if (products.length === 0) return <div>No products found</div>;

  return (
    <div className="flex gap-4 mt-4">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} onClick={() => {}} />
      ))}
    </div>
  );
};

export const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const { data, refetch, isLoading, isError } = useProductSearch(searchTerm);

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
      {isError && <div>Error fetching data</div>}
      {isLoading && <div>Loading...</div>}
      {data && <ProductResultsList products={data} />}
    </div>
  );
};
