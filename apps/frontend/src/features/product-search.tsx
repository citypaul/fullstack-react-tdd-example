import { Product } from "fullstack-react-tdd-example-types";
import { Button, Input } from "fullstack-react-tdd-example-ui";
import React from "react";
import { ProductCard } from "../components";
import { useLazyGetProductBySearchTermQuery } from "../services/product";

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

  const [getProducts, results] = useLazyGetProductBySearchTermQuery();

  return (
    <div>
      <Input
        label="Product Search:"
        className="mb-2"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button onClick={() => getProducts(searchTerm)} disabled={!searchTerm}>
        Search
      </Button>
      {results.isError && <div>Error fetching data</div>}
      {results.isLoading && <div>Loading...</div>}

      {results.data && <ProductResultsList products={results.data} />}
    </div>
  );
};
