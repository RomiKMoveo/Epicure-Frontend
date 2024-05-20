import React from "react";
import "./Card.scss";
import { starImageArray } from "./starRating";
import { CardInterface } from "./Card.type";
import nisIcon from "../../../assets/icons/nis-icon.svg";
import IconsArray from "./iconsArray";

const Card: React.FC<CardInterface> = ({
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
    <div className={`card ${type}`}>
      <figure>
        <img src={image} alt={title} className={`card-image ${type}`}/>
        <figcaption className={`card-title ${type}`}>{title}</figcaption>
      </figure>
      <div className={`card-body ${type}`}>
        <div className={`chef-name ${type}`}>{chefName}</div>
          {stars && 
           <div className={`stars-rating ${type}`}>
            <img src={starImageArray[stars]} alt="stars-rating" />
          </div>
        }
        {icon &&
          <div className={`icon-container ${type}`}>
            <img src={IconsArray[icon]} alt="Icon name" />
          </div>
        }
        <div>{ingredients && <span className={`ingredients ${type}`}>{ingredients}</span>}</div>
        {price &&
          <div className={`price ${type}`}>
            <hr />
            <img src={nisIcon} alt="ils" className={`nis-icon ${type}`} />
            <span className={`price-value ${type}`}>{price} </span>
            <hr />
          </div>
        }
      </div>
    </div>
  );
};

export default Card;