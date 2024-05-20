import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Card from '../Card';
import { CardList } from './CardSwiper.type';
import { CardInterface } from '../Card.type';
import './CardSwiper.scss';


const CardSwipper: React.FC<CardList> = ({ cards, cardType }) => {
  return (
    <div className="card-container">
      <Swiper
        >
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