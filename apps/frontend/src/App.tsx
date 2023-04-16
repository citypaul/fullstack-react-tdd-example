import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
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
          <RouterProvider router={router} />
        </main>
      </div>
    </Provider>
  );
};
