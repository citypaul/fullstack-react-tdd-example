import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ProductSearch } from "./features";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto p-4">
        <main>
          <ProductSearch />
        </main>
      </div>
    </QueryClientProvider>
  );
};
