import React from "react";

export type CardProps = {
  img: string;
  imgAlt: string;
};

export const Card = (props: CardProps) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={props.img} alt={props.imgAlt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-between items-end">
          <button className="btn btn-primary">Buy Now</button>

          <div>
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};
