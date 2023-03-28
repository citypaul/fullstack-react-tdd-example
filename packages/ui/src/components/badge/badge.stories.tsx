import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Badge } from "./badge";

export default {
  title: "Shared Library/Badge",
  component: Badge,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["primary", "secondary", "success"],
      },
    },
  },
  args: {
    children: "Badge",
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args}>{args.children}</Badge>
);

export const Default = Template.bind({});
Default.args = {
  outline: false,
  type: "primary",
};

export const Types = () => (
  <div className="flex flex-col gap-2">
    <Badge type="primary">Primary</Badge>
    <Badge type="secondary">Secondary</Badge>
    <Badge type="success">Success</Badge>
  </div>
);
