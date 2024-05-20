import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
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
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={24}
          slidesPerView={1.5}
          navigation
          breakpoints={{
            900: {
              autoplay: false,
              slidesPerView: 3,
              touchRatio: 1
            }
              
           }}
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