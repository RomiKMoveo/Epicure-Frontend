import 'swiper/css';
import { cardType } from "../../../../shared/components/Card/CardSwiper/CardSwiper.type";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from 'react';

import "./Chef.scss";
import allCardsIcon from "../../../../assets/icons/all-resturant-icon.svg";
import Button from "../../../../shared/components/Button/Button";
import CardSwipper from "../../../../shared/components/Card/CardSwiper/CardSwiper";
import { IChef } from '../../../../shared/components/Card/models/chef.models';
import { getChefOfTheWeek } from '../../../../services/homePage.service';

const Chef: React.FC = () => {  
  const [chefData, setChefData] = useState<IChef>(); 
  
  useEffect(() => {
    const fetchChefData = async () => {
        try {
            const data : IChef = await getChefOfTheWeek();
            setChefData(data);
        } catch (error) {
            console.error(error);
        }
    };

    fetchChefData();
}, []);

if(!chefData) {
  return null;
}

function getFirstName(str: string): string {
  if (!str) return ''; 
  return str.split(' ')[0];
}
  const handleClick = () => {
      console.log("Button clicked!");
      console.log( chefData.image);
    }
  return (
    <>
    <div className="chef-container">
        <div className="chef-title">CHEF OF THE WEEK:</div>
            <div className="about-chef-image-container">
              <div style={ {backgroundImage: `url(${chefData.image})`} } className="chef-image">
                <div className="chef-name">{chefData.title}</div>
              </div>
              <div className="chef-description">{chefData.description}</div>
          </div>
   
          <div className="chef-restaurants-container">
              <div className="chef-restaurants-container-title">{getFirstName(chefData.title)}'s Restaurans</div>
              <CardSwipper cards={chefData.restaurants} cardType={cardType.chef}></CardSwipper>
              <Button text="All Restaurants" height="35px" icon={allCardsIcon} color="primary-color-black" backGroundColor=" var(--transparent-color)" onClick={handleClick} children={undefined} ></Button>
          </div>
      </div>
    </>
  );
};

export default Chef;