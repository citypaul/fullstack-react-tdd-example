import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Switch } from ".";

export default {
  title: "Shared Library/Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Primary = Template.bind({});
