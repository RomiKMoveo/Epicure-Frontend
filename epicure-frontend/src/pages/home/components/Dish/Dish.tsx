import "./Dish.scss";
import allCardsIcon from "../../../../assets/icons/all-resturant-icon.svg";
import Button from "../../../../shared/components/Button/Button";
import padKiMao from "../../../../assets/images/pad-ki-mao.svg";
import Card from "../../../../shared/components/Card/Card";

const Dish: React.FC = () => {
  const dish= {
    image: padKiMao,
    title: "Pad Ki Mao",
    type: "dish",
    ingredients: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
    price: 88,
    icon: "spicy"
  }
  const handleClick = () => {
    console.log("Button clicked!");
  }
  return (
    <>
      <div className="dish-container">
      <div className='dish-title'>Signature Dish Of:</div>
      <div className="card-container">
        <Card image={dish.image} title={dish.title} type={dish.type} ingredients={dish.ingredients} price={dish.price} icon={dish.icon}></Card>
        </div>
      <Button text="All Restaurants" height="35px" icon={allCardsIcon} color="primary-color-black" backGroundColor=" var(--transparent-color)" onClick={handleClick} children={undefined} ></Button>
      </div>
      
    </>
  );
};

export default Dish;