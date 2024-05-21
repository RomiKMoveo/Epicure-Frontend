import 'swiper/css';
import { CardList, cardType } from "../../../../shared/components/Card/CardSwiper/CardSwiper.type";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Chef.scss";
import allCardsIcon from "../../../../assets/icons/all-resturant-icon.svg";
import Button from "../../../../shared/components/Button/Button";
import CardSwipper from "../../../../shared/components/Card/CardSwiper/CardSwiper";
import yossisImage from "../../../../assets/images/yossi-shitrit-image.svg";
import OnzaImage from "../../../../assets/images/onza.svg";
import kitchenMarketImage from "../../../../assets/images/kitchen-market.svg";
import MashyaImage from "../../../../assets/images/mashya.svg"

const Chef: React.FC = () => {
  const chefData: CardList = {
    cards: [{
      id: "1",
      image: OnzaImage,
      title: "Onza",
      type: "restaurant",
      
    },
    {
      id: "2",
      image: kitchenMarketImage,
      title: "Kitchen Market",
      type: "restaurant",
      
    },
    {
      id: "3",
      image: MashyaImage,
      title: "Mashya",
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
            <div className="about-chef-image-container">
              <div style={ {backgroundImage: `url(${yossisImage})`} } className="chef-image">
                <div className="chef-name">Yossi Shitrit</div>
              </div>

              <div className="chef-description">
                Chef Yossi Shitrit has been living and breathing his 
                culinary dreams for more than two decades, including 
                running the kitchen in his first restaurant, the fondly-
                remembered Violet, located in Moshav  Udim. Shitrit's 
                creativity and culinary  acumen born of long experience  
                are expressed in the every detail of each and every dish.
              </div>
         
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