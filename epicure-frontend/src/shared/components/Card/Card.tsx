import React from "react";
import "./Card.scss";
import { starImageArray } from "./starRating";
import { CardProps } from "./Card.type";
import nisIcon from "../../../assets/icons/nis-icon.svg";
import IconsArray from "./iconsArray";



const Card: React.FC<CardProps> = ({ card, cardType }) => {
  return (
    <div className={`card ${cardType}`}>
      <img src={card.image} alt={card.title} className={`card-image ${cardType}`}/>
      <div className={`card-body ${cardType}`}>
        <div className={`card-title ${cardType}`}>{card.title}</div>
        <div className={`chef-name ${cardType}`}>{card.chefName}</div>
          {card.stars && 
           <div className={`stars-rating ${cardType}`}>
            <img src={starImageArray[card.stars]} alt="stars-rating" />
          </div>
        }
        {card.icon &&
          <div className={`icon-container ${cardType}`}>
            <img src={IconsArray[card.icon]} alt="Icon name" />
          </div>
        }
        <div>{card.ingredients && <span className={`ingredients ${cardType}`}>{card.ingredients}</span>}</div>
        {card.price &&
          <div className={`price ${cardType}`}>
            <hr />
            <img src={nisIcon} alt="ils" className={`nis-icon ${cardType}`} />
            <span className={`price-value ${cardType}`}>{card.price} </span>
            <hr />
          </div>
        }
      </div>
    </div>
  );
};

export default Card;