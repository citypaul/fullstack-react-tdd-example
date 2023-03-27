import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Card } from ".";
// ts-ignore is needed because the image is not a module
// @ts-ignore
import image from "./story-images/shoe.jpg";

export default {
  title: "Shared Library/Card",
  args: {
    img: image,
    imgAlt: "Shoe",
  },
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
