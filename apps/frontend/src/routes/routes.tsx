import {
  NavLink,
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { FormExample, UseReducerCounter, UseStateCounter } from "../components";
import { ProductSearch } from "../features";

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
        <Route path="counter-use-state" element={<UseStateCounter />} />
        <Route path="counter-use-reducer" element={<UseReducerCounter />} />
        <Route path="form-example" element={<FormExample />} />
        <Route path="product-search" element={<ProductSearch />} />
      </Route>
    </Route>
  )
);
