import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Button } from "fullstack-react-tdd-example-ui";
import { Counter } from "./counter";

export default {
  title: "London.js/Counter",
  component: Counter,
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => (
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

export const StaticHtml = Template.bind({});
