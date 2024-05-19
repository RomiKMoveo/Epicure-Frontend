import Button from "../../../../shared/components/Button/Button";
import "./Restaurant.scss";
import allCardsIcon from "../../../../assets/icons/all-resturant-icon.svg";
import Card from "../../../../shared/components/Card/Card";
import claroImage from "../../../../assets/images/claro.svg"

const Restaurant: React.FC = () => {

  const restaurant= {
    image: claroImage,
    title: "Claro",
    type: "restaurant",
    chefName: "Ran Shmueli",
    stars: 4,

  }

  const handleClick = () => {
    console.log("Button clicked!");
  }

  return (
    <>
      <div className="restaurant-container">
        <div className='restaurant-title'>popular restaurant in epicure:</div>
        <div className="card-container">
        <Card image={restaurant.image} title={restaurant.title} type={restaurant.type} chefName={restaurant.chefName} stars={restaurant.stars} ></Card>
        </div>
        <Button text="All Restaurants" height="35px" icon={allCardsIcon} color="primary-color-black" backGroundColor=" var(--transparent-color)" onClick={handleClick} children={undefined} ></Button>
      </div>
      
    </>
  );
};

export default Restaurant;