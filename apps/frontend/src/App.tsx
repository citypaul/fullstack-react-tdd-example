import React from "react";
import { Provider } from "react-redux";
import { ProductSearch } from "./features";
import { store } from "./store";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

export const App = () => {
  return (
    <Provider store={store}>
      <div className="container mx-auto p-4">
        <main>
          <ProductSearch />
        </main>
      </div>
    </Provider>
  );
};
