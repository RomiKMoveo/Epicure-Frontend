import CardSwipper from "../../../../shared/components/Card/CardSwiper/CardSwiper";
import { CardList, cardType } from "../../../../shared/components/Card/CardSwiper/CardSwiper.type";

import "./Dish.scss";
import allCardsIcon from "../../../../assets/icons/all-resturant-icon.svg";
import Button from "../../../../shared/components/Button/Button";
import padKiMaoImage from "../../../../assets/images/pad-ki-mao.svg";
import garbanzoFritoImage from "../../../../assets/images/garbanzo-frito.svg";
import smokedPizzaImage from "../../../../assets/images/smoked-pizza.svg";
import redFarmImage from "../../../../assets/images/red-farm.svg";
import taMaLaKoImage from "../../../../assets/images/ta ma la ko.svg";

const Dish: React.FC = () => {
  const dishesData: CardList = {
      cards: [{
        id: "4",
        image: padKiMaoImage,
        title: "Pad Ki Mao",
        type: "dish",
        ingredients: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
        price: 88,
        icon: "spicy"
      },
      {
        id: "15",
        image: garbanzoFritoImage,
        title: "Garbanzo Frito",
        type: "dish",
        ingredients: "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
        price: 98,
        icon: "spicy"
      },
      {
        id: "14",
        image: smokedPizzaImage,
        title: "Smoked Pizza",
        type: "dish",
        ingredients: "Basil dough, cashew butter, demi-glace,bison & radish, demi-glace,bison & radish",
        price: 65,
        icon: "vegan"
      },
      {
        id: "16",
        image: taMaLaKoImage,
        title: "Ta Ma La Ko",
        type: "dish",
        ingredients: "Tofu, Spekkoek Peanuts, Spicy Manis, Pear Yakitori, Spicy Manis, Pear Yakitori",
        price: 98,
        icon: "spicy"
      },
      {
        id: "5",
        image: redFarmImage,
        title: "Red Farm",
        type: "dish",
        ingredients: "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
        price: 65,
        icon: "vegetarian"
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