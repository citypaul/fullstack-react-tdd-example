import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Input } from ".";

export default {
  title: "Shared Library/Input",
  args: {
    placeholder: "Placeholder",
    label: "Label",
  },
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
