import { Button, Input } from "fullstack-react-tdd-example-ui";
import React from "react";

export const FormExample = () => {
  // don't read into this code too much, it's just an example
  // we're using it here to show how to test a form
  // and to demonstrate how we can change the design of the form
  // without breaking the tests

  const [firstName, setFirstName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [submitSuccess, setSubmitSuccess] = React.useState(false);

  if (submitSuccess) {
    return <p>Form submitted</p>;
  }

  return (
    <form
      className="max-w-xs flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();

        if (password) {
          setSubmitSuccess(true);
        } else {
          // just simulating a client-side validation error
          setPasswordError("Password is required");
        }
      }}
    >
      <Input
        label="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Input
        label="Email Address"
        type={"email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Password"
        type={"password"}
        value={password}
        error={passwordError}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button>Submit</Button>
    </form>
  );
};
