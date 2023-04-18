import { render, RenderOptions } from "@testing-library/react";
import React, { ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "../store";

export const testQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // so we dont need to wait 3 times which is the default
      retry: false,
      cacheTime: 0,
    },
  },
});

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={testQueryClient}>
      <Provider store={store}>{children}</Provider>
    </QueryClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
