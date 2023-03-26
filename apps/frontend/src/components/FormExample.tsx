import { Button, Input } from "fullstack-react-tdd-example-ui";
import React from "react";

export const FormExample = () => {
  return (
    <form className="max-w-xs flex flex-col gap-4">
      <Input label="First name" className="text-red-500" />
      <Input label="Email Address" type={"email"} />
      <Input label="Password" type={"password"} />
      <Button>Submit</Button>
    </form>
  );
};
