import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Button } from ".";

export default {
  title: "Shared Library/Button",
  args: {
    variant: "primary",
    children: "I am an example title",
  },
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});

Secondary.args = {
  variant: "secondary",
  children: "I am a secondary button",
};
