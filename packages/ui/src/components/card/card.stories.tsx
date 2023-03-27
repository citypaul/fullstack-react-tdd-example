import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Card } from ".";

export default {
  title: "Shared Library/Card",
  args: {},
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card />;

export const Primary = Template.bind({});
