import React from "react";
import { Provider } from "react-redux";
import {
  NavLink,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Counter, FormExample } from "./components";
import { ProductSearch } from "./features";
import { store } from "./store";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <>
          <nav className="navbar bg-indigo-100 mb-4 rounded-md">
            <ol className="menu menu-horizontal px-1">
              <li>
                <a
                  href="http://localhost:3001"
                  target="_blank"
                  rel="noreferrer"
                >
                  Modal
                </a>
              </li>

              <li>
                <a
                  href="http://localhost:6006"
                  target="_blank"
                  rel="noreferrer"
                >
                  Storybook
                </a>
              </li>

              <li>
                <NavLink
                  to="counter-use-state"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Counter (use state)
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="counter-use-reducer"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Counter (use reducer)
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="form-example"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Form
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="product-search"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Product Search
                </NavLink>
              </li>
            </ol>
          </nav>
          <Outlet />
        </>
      }
    >
      <Route path="/">
        <Route path="counter-use-state" element={<Counter />} />
        <Route path="counter-use-reducer" element={<Counter />} />
        <Route path="form-example" element={<FormExample />} />
        <Route path="product-search" element={<ProductSearch />} />
      </Route>
    </Route>
  )
);

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
