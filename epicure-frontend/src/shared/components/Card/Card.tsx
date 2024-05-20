import React from "react";
import "./Card.scss";
import { starImageArray } from "./starRating";
import { CardProps } from "./Card.type";
import nisIcon from "../../../assets/icons/nis-icon.svg";
import IconsArray from "./iconsArray";



const Card: React.FC<CardProps> = ({ card, cardType }) => {
  return (
    <div className={`card ${card.type}`}>
      <figure>
        <img src={card.image} alt={card.title} className={`card-image ${card.type}`}/>
        <figcaption className={`card-title ${card.type}`}>{card.title}</figcaption>
      </figure>
      <div className={`card-body ${card.type}`}>
        <div className={`chef-name ${card.type}`}>{card.chefName}</div>
          {card.stars && 
           <div className={`stars-rating ${card.type}`}>
            <img src={starImageArray[card.stars]} alt="stars-rating" />
          </div>
        }
        {card.icon &&
          <div className={`icon-container ${card.type}`}>
            <img src={IconsArray[card.icon]} alt="Icon name" />
          </div>
        }
        <div>{card.ingredients && <span className={`ingredients ${card.type}`}>{card.ingredients}</span>}</div>
        {card.price &&
          <div className={`price ${card.type}`}>
            <hr />
            <img src={nisIcon} alt="ils" className={`nis-icon ${card.type}`} />
            <span className={`price-value ${card.type}`}>{card.price} </span>
            <hr />
          </div>
        }
      </div>
    </div>
  );
};

export default Card;