import "./Chef.scss";
import allCardsIcon from "../../../../assets/icons/all-resturant-icon.svg";
import Button from "../../../../shared/components/Button/Button";
import 'swiper/css';
import { CardList, cardType } from "../../../../shared/components/Card/CardSwiper/CardSwiper.type";
import "swiper/css/navigation";
import "swiper/css/pagination";
import claroImage from "../../../../assets/images/claro.svg"
import CardSwipper from "../../../../shared/components/Card/CardSwiper/CardSwiper";
import yossisImage from "../../../../assets/images/Shef.svg";

const Chef: React.FC = () => {
  const chefData: CardList = {
    cards: [{
      id: "1",
      image: claroImage,
      title: "Claro",
      type: "restaurant",
      
    },
    {
      id: "2",
      image: claroImage,
      title: "Claro",
      type: "restaurant",
      
    },
    {
      id: "3",
      image: claroImage,
      title: "Claro",
      type: "restaurant",
      
    }],
    cardType: cardType.CHEF,
  };
   
  const handleClick = () => {
      console.log("Button clicked!");
    }
  return (
    <>
    <div className="chef-container">
        <div className="chef-title">CHEF OF THE WEEK:</div>
        <div className="about-the-chef-container">
            <img src={yossisImage} alt="yossisImage"/>
            <p className="chef-description">
              Chef Yossi Shitrit has been living and breathing his 
              culinary dreams for more than two decades, including 
              running the kitchen in his first restaurant, the fondly-
              remembered Violet, located in Moshav  Udim. Shitrit's 
              creativity and culinary  acumen born of long experience  
              are expressed in the every detail of each and every dish.
            </p>
        </div>
        <div className="chef-restaurants-container">
          <div className="chef-restaurants-container-title">Yossi's Restaurans</div>
          <CardSwipper cards={chefData.cards} cardType={chefData.cardType}></CardSwipper>
          <Button text="All Restaurants" height="35px" icon={allCardsIcon} color="primary-color-black" backGroundColor=" var(--transparent-color)" onClick={handleClick} children={undefined} ></Button>
        </div>
      </div>
    </>
  );
};

export default Chef;