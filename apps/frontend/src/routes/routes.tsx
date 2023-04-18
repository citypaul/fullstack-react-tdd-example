import {
  NavLink,
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { FormExample, UseReducerCounter, UseStateCounter } from "../components";
import { MockServiceWorkerExample } from "../features";
import {
  ReactQueryProductSearch,
  ReduxProductSearch,
} from "../features/product-search/";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <>
          <nav className="lg:navbar bg-indigo-100 mb-4 rounded-md">
            <ol className="menu lg:menu-horizontal px-1 m-1">
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
                  to="mock-service-worker"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Mock Service Worker
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="product-search-react-query"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Product Search (React Query)
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="product-search-redux"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Product Search (Redux Toolkit Query)
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
        <Route
          path="mock-service-worker"
          element={<MockServiceWorkerExample />}
        />
        <Route
          path="product-search-react-query"
          element={<ReactQueryProductSearch />}
        />
        <Route path="product-search-redux" element={<ReduxProductSearch />} />
      </Route>
    </Route>
  )
);
