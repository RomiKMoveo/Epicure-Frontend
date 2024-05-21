import { CardList, cardType } from "../../../../shared/components/Card/CardSwiper/CardSwiper.type";
import CardSwipper from "../../../../shared/components/Card/CardSwiper/CardSwiper";

import "./Restaurant.scss";
import Button from "../../../../shared/components/Button/Button";
import allCardsIcon from "../../../../assets/icons/all-resturant-icon.svg";
import claroImage from "../../../../assets/images/claro.svg"
import luminaImage from "../../../../assets/images/lumina.svg";
import tigerLillyImage from "../../../../assets/images/tiger-lily.svg";
import kabKemImage from "../../../../assets/images/Kab kem 2.svg";
import yaPanImage from "../../../../assets/images/Yapan.svg";

const Restaurant: React.FC = () => {

  const restaurantData: CardList = {
    cards: [{
      id: "5",
      image: claroImage,
      title: "Claro",
      type: "restaurant",
      chefName: "Ran Shmueli",
      stars: 3,
    },
    {
      id: "7",
      image: luminaImage,
      title: "Lumina",
      type: "restaurant",
      chefName: "Meir Adoni",
      stars: 3,
    },
    {
      id: "8",
      image: tigerLillyImage,
      title: "Tiger Lilly",
      type: "restaurant",
      chefName: "Yanir Green",
      stars: 1,
    },
    {
      id: "9",
      image: kabKemImage,
      title: "Kab Kem",
      type: "restaurant",
      chefName: "Yariv Malili",
      stars: 4,
    },
    {
      id: "10",
      image: yaPanImage,
      title: "Ya Pan",
      type: "restaurant",
      chefName: "Yuval ben Neria",
      stars: 2,
    }],
    cardType: cardType.DISH,
  };

  const handleClick = () => {
    console.log("Button clicked!");
  }

  return (
    <>
      <div className="restaurant-container">
        <div className='restaurant-title'>popular restaurant in epicure:</div>
        <CardSwipper cards={restaurantData.cards} cardType={restaurantData.cardType}></CardSwipper>
        <Button text="All Restaurants" height="35px" icon={allCardsIcon} color="primary-color-black" backGroundColor=" var(--transparent-color)" onClick={handleClick} children={undefined} ></Button>
      </div>
    </>
  );
};

export default Restaurant;