import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Virtual } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Card from '../Card';
import { CardList } from './CardSwiper.type';
import { CardInterface } from '../Card.type';
import './CardSwiper.scss';
import { SwipperConfig } from './SwipperConfig';
import { useEffect, useState } from 'react';

const CardSwipper: React.FC<CardList> = ({ cards, cardType }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="card-container">
       <Swiper{...SwipperConfig}
        modules={[Virtual, Navigation]}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        navigation={windowWidth >= 900 ? true : false}
        virtual
      >
        <div className='cards-swipper'>
          {cards.map((card: CardInterface) => (
            <SwiperSlide key={card._id}>
              <Card card={card} cardType={cardType} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      
    </div>
  );
};

export default CardSwipper;
