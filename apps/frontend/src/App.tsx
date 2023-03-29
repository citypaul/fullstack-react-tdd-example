import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { FormExample } from "./components";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto p-4">
        <main>
          <FormExample />
        </main>
      </div>
    </QueryClientProvider>
  );
};
