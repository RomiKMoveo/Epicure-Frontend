import React from "react";
import "./Card.scss";
import { starImageArray } from "./starRating";
import { CardInterface } from "./Card.type";
import nisIcon from "../../../assets/icons/nis-icon.svg";
import IconsArray from "./iconsArray";

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
      <div className="card-body">
          <div className="chef-name">{chefName}</div>
          <div className="stars">
            {stars && <img src={starImageArray[stars]} className="stars" alt='stars-rating' />}
          </div>
          {icon && 
            <div className="icon-container">
            <img src={IconsArray[icon]} alt='Icon name' />
            </div>
            }
          <div>{ingredients && <span className="ingredients">{ingredients}</span>}</div>
          
          {price &&
            <div className='price'>
              <hr></hr>
                <img src={nisIcon} alt='ils' className='nis-icon'/>
                <span className='price-value'>{price} </span>
              <hr></hr>
            </div>
          }
      </div>
    </div>
  );
};

export default Card;