import "./Chef.scss";
import allCardsIcon from "../../../../assets/icons/all-cards-icon.svg";
import Button from "../../../../shared/components/Button/Button";
import Card from "../../../../shared/components/Card/Card";
import onzaImage from "../../../../assets/images/onza.svg";

const Chef: React.FC = () => {
  const chef= {
    image: onzaImage,
    title: "Onza",
    type: "chef",
    chefName: "Ran Shmueli"
  }  
  const handleClick = () => {
      console.log("Button clicked!");
    }
  return (
    <>
      <div className="chef-container">
      <div className='chef-title'>CHEF OF THE WEEK:</div>
      <Card image={chef.image} title={chef.title} type={chef.type}></Card>
      <Button text="All Restaurants" height="35px" icon={allCardsIcon} color="primary-color-black" backGroundColor=" var(--transparent-color)" onClick={handleClick} children={undefined} ></Button>
      </div>
      
    </>
  );
};

export default Chef;