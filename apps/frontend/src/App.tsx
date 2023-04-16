import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { store } from "./store";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

// App here is not explicitly tested.

// That's because I'm just using it to create a menu of links to the other components
// for the purpose of making it easy to navigate to them for my talk

// In a real app, the entry point can still be tested in the same way as any other component.

// If you want to test the entry point, you can do so by providing an in memory router
// appropriate for tests using
// https://reactrouter.com/web/api/MemoryRouter

// This mock would be used in test-utils.tsx

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
