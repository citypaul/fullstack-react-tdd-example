import React from "react";

export type CardImageProps = {
  src: string;
  alt: string;
};

const CardComponent = ({ children }: { children: React.ReactNode }) => (
  <div className="card w-96 bg-base-100 shadow-xl">{children}</div>
);

CardComponent.Title = ({ children }: { children: React.ReactNode }) => (
  <h2 className="card-title">{children}</h2>
);

CardComponent.Image = ({ src, alt }: CardImageProps) => (
  <figure>
    <img className="card-image" src={src} alt={alt} />
  </figure>
);

CardComponent.Body = ({ children }: { children: React.ReactNode }) => (
  <div className="card-body">{children}</div>
);

CardComponent.Footer = ({ children }: { children: React.ReactNode }) => (
  <div className="card-footer">{children}</div>
);

CardComponent.Actions = ({ children }: { children: React.ReactNode }) => (
  <div className="card-actions justify-between items-end">{children}</div>
);

export const Card = CardComponent;
