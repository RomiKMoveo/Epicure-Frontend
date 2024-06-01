import { useEffect, useState } from "react";
import { cardType } from "../../../../shared/components/Card/CardSwiper/CardSwiper.type";
import CardSwipper from "../../../../shared/components/Card/CardSwiper/CardSwiper";

import "./Restaurant.scss";
import Button from "../../../../shared/components/Button/Button";
import allCardsIcon from "../../../../assets/icons/all-resturant-icon.svg";
import { getPopularRestaurants } from "../../../../services/homePage.service";
import { CardInterface } from "../../../../shared/components/Card/Card.type";


const Restaurant: React.FC = () => {
  const [restaurantData, setRestaurantData] = useState<CardInterface[]>(); 
  //put fetchChefData here...

  useEffect(() => {
    const fetchChefData = async () => {
        try {
            const data: CardInterface[] = await getPopularRestaurants();
            setRestaurantData(data);
        } catch (error) {
            console.error(error);
        }
    };

    fetchChefData();
}, []);

if(!restaurantData) {
  return null;
}

  const handleClick = () => {
    console.log("Button clicked!");
  }

  return (
    <>
      <div className="restaurant-container">
        <div className='restaurant-title'>popular restaurant in epicure:</div>
        <CardSwipper cards={restaurantData} cardType={cardType.restaurant}></CardSwipper>
        <Button text="All Restaurants" height="35px" icon={allCardsIcon} color="primary-color-black" backGroundColor=" var(--transparent-color)" onClick={handleClick} children={undefined} ></Button>
      </div>
    </>
  );
};

export default Restaurant;