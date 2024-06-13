import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
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
        modules={[Navigation]}
        navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }}
      >
        <div className='cards-swipper'>
          {cards.map((card: CardInterface) => (
            <SwiperSlide key={card._id}>
              <Card card={card} cardType={cardType} />
            </SwiperSlide>
          ))}
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
      
    </div>
  );
};

export default CardSwipper;
