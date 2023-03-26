import { Button } from "fullstack-react-tdd-example-ui";
import React from "react";
import { FormExample } from "./components";

export const App = () => {
  return (
    <div className="container mx-auto p-4">
      <main>
        <h1>App main entry point</h1>
        <FormExample />
      </main>
    </div>
  );
};
