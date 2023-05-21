import { Button } from "fullstack-react-tdd-example-ui";

export const Counter = () => (
  <div className="stat">
    <h2 className="stat-title">Count</h2>
    <p className="stat-value">0</p>
    <div className="stat-actions">
      <div className="btn-group">
        <Button>Increment</Button>
        <Button>Decrement</Button>
        <Button>Reset</Button>
      </div>
    </div>
  </div>
);
