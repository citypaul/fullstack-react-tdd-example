import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Card } from ".";
import { Badge } from "../badge/badge";
// ts-ignore is needed because the image is not a module
// @ts-ignore
import image from "./story-images/shoe.jpg";

export default {
  title: "Shared Library/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

export const CardWithImage: ComponentStory<typeof Card> = () => (
  <Card>
    <Card.Image src={image} alt="shoe" />

    <Card.Body>
      <Card.Title>
        Card Title <Badge type="secondary">New!</Badge>
      </Card.Title>

      <p>If a dog chews shoes whose shoes does he choose?</p>

      <Card.Actions>
        <button className="btn btn-primary">Buy Now</button>

        <div>
          <Badge outline>Fashion</Badge>
          <Badge outline>Products</Badge>
        </div>
      </Card.Actions>
    </Card.Body>
  </Card>
);

export const WithBottomImage: ComponentStory<typeof Card> = () => (
  <Card>
    <Card.Body>
      <Card.Title>
        Card Title <Badge type="secondary">New!</Badge>
      </Card.Title>

      <p>If a dog chews shoes whose shoes does he choose?</p>

      <Card.Actions>
        <button className="btn btn-primary">Buy Now</button>
      </Card.Actions>
    </Card.Body>
    <Card.Image src={image} alt="shoe" />
  </Card>
);

export const CardWithNoImage: ComponentStory<typeof Card> = () => (
  <Card>
    <Card.Body>
      <Card.Title>
        Card Title <Badge type="secondary">New!</Badge>
      </Card.Title>

      <p>If a dog chews shoes whose shoes does he choose?</p>

      <Card.Actions>
        <button className="btn btn-primary">Buy Now</button>
      </Card.Actions>
    </Card.Body>
  </Card>
);
