import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import "./CardSwiper.scss";
import { CardList } from './CardSwiper.type';
import { CardInterface } from '../Card.type';
import Card from '../Card';
import CardSwipperConfig from "./CardSwipperConfig";


const CardSwipper: React.FC<CardList> = ({ cards, cardType }) => {
  return (
    <div className="card-container">
       <Swiper {...CardSwipperConfig(24)}> 

        {cards.map((card: CardInterface) => (
          <SwiperSlide key={card.id}>
            <Card card={card} cardType={cardType} ></Card>
          </SwiperSlide>
        ))}
      </Swiper>
  </div>
  );
};

export default CardSwipper;