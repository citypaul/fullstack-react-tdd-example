import { Button } from "fullstack-react-tdd-example-ui";
import React from "react";
import { useMockServiceWorkerDemo } from "./mock-service-worker-queries";

export const MockServiceWorkerExample = () => {
  const { data, refetch, isLoading } = useMockServiceWorkerDemo();

  return (
    <>
      <Button onClick={() => refetch()}>Fetch data</Button>
      {isLoading && <div>Loading...</div>}
      {data && (
        <div className="mockup-code mt-4">
          <pre>
            <code>{JSON.stringify(data, null, 4)}</code>
          </pre>
        </div>
      )}
    </>
  );
};
