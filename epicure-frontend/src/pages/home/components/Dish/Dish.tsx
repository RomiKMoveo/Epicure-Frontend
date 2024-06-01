import CardSwipper from "../../../../shared/components/Card/CardSwiper/CardSwiper";
import { cardType } from "../../../../shared/components/Card/CardSwiper/CardSwiper.type";
import { useEffect, useState } from "react";

import "./Dish.scss";
import allCardsIcon from "../../../../assets/icons/all-resturant-icon.svg";
import Button from "../../../../shared/components/Button/Button";
import { CardInterface } from "../../../../shared/components/Card/Card.type";
import { getSignatureDishes } from "../../../../services/homePage.service";


const Dish: React.FC = () => {
  const [dishData, setDishData] = useState<CardInterface[]>(); 
  
  useEffect(() => {
    const fetchChefData = async () => {
        try {
            const data: CardInterface[] = await getSignatureDishes();
            setDishData(data);
        } catch (error) {
            console.error(error);
        }
    };

    fetchChefData();
}, []);

if(!dishData) {
  return null;
}

  const handleClick = () => {
    console.log("Button clicked!");
  }
  return (
    <>
      <div className="dish-container">
        <div className="dish-title">Signature Dish Of:</div>
          <CardSwipper cards={dishData} cardType={cardType.dish}></CardSwipper>
          <Button text="All Restaurants" height="35px" icon={allCardsIcon} color="primary-color-black" backGroundColor=" var(--transparent-color)" onClick={handleClick} children={undefined} ></Button>
      </div>
      
    </>
  );
};

export default Dish;