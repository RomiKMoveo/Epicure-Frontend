import "./Dish.scss";
import allCardsIcon from "../../../../assets/icons/all-resturant-icon.svg";
import Button from "../../../../shared/components/Button/Button";
import padKiMao from "../../../../assets/images/pad-ki-mao.svg";
import CardSwipper from "../../../../shared/components/Card/CardSwiper/CardSwiper";
import { CardList, cardType } from "../../../../shared/components/Card/CardSwiper/CardSwiper.type";

const Dish: React.FC = () => {
  const dishesData: CardList = {
      cards: [{
        id: "4",
        image: padKiMao,
        title: "Pad Ki Mao",
        type: "dish",
        ingredients: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
        price: 88,
        icon: "spicy"
      },
      {
        id: "14",
        image: padKiMao,
        title: "Pad Ki Mao",
        type: "dish",
        ingredients: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
        price: 88,
        icon: "spicy"
      },
      {
        id: "15",
        image: padKiMao,
        title: "Pad Ki Mao",
        type: "dish",
        ingredients: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
        price: 88,
        icon: "spicy"
      },
      {
        id: "16",
        image: padKiMao,
        title: "Pad Ki Mao",
        type: "dish",
        ingredients: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
        price: 88,
        icon: "spicy"
      },
      {
        id: "5",
        image: padKiMao,
        title: "Pad Ki Mao",
        type: "dish",
        ingredients: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
        price: 88,
        icon: "spicy"
      }],
      cardType: cardType.RESTAURANT
    }
  
  const handleClick = () => {
    console.log("Button clicked!");
  }
  return (
    <>
      <div className="dish-container">
        <div className="dish-title">Signature Dish Of:</div>
          <CardSwipper cards={dishesData.cards} cardType={dishesData.cardType}></CardSwipper>
          <Button text="All Restaurants" height="35px" icon={allCardsIcon} color="primary-color-black" backGroundColor=" var(--transparent-color)" onClick={handleClick} children={undefined} ></Button>
      </div>
      
    </>
  );
};

export default Dish;