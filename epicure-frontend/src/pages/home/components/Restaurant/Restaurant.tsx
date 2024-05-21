import Button from "../../../../shared/components/Button/Button";
import "./Restaurant.scss";
import allCardsIcon from "../../../../assets/icons/all-resturant-icon.svg";
import claroImage from "../../../../assets/images/claro.svg"
import { CardList, cardType } from "../../../../shared/components/Card/CardSwiper/CardSwiper.type";
import CardSwipper from "../../../../shared/components/Card/CardSwiper/CardSwiper";

const Restaurant: React.FC = () => {

  const restaurantData: CardList = {
    cards: [{
      id: "5",
      image: claroImage,
      title: "Claro",
      type: "restaurant",
      chefName: "Ran Shmueli",
      stars: 4,
    },
    {
      id: "7",
      image: claroImage,
      title: "Claro",
      type: "restaurant",
      chefName: "Ran Shmueli",
      stars: 4,
    },
    {
      id: "8",
      image: claroImage,
      title: "Claro",
      type: "restaurant",
      chefName: "Ran Shmueli",
      stars: 4,
    },
    {
      id: "9",
      image: claroImage,
      title: "Claro",
      type: "restaurant",
      chefName: "Ran Shmueli",
      stars: 4,
    },
    {
      id: "10",
      image: claroImage,
      title: "Claro",
      type: "restaurant",
      chefName: "Ran Shmueli",
      stars: 4,
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