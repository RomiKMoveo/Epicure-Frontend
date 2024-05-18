import React from "react";
import "./Card.scss";
import { starImageArray } from "./starRating";
import { CardInterface } from "./Card.type";


const Card: React.FC <CardInterface> = ({
  image,
  title,
  chefName,
  restaurantName,
  ingredients,
  price,
  stars,
  icon,
  type
}) => {
  return (
    <div className={`${type}`}>
      <figure>
        <img src={image} alt={title} className="image" />
        <figcaption className="title">{title}</figcaption>
      </figure>
      <div className="card-info">
          <div className="chef-name">{chefName}</div>
          <div className="stars">
            {stars && <img src={starImageArray[stars]} className="stars" alt='stars-rating' />}
          </div>
          <div className="card-footer">{price && <h2 className="price">{price}</h2>}</div>
      </div>
    </div>
  );
};

export default Card;