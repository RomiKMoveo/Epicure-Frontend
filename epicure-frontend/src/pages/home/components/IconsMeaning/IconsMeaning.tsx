import "./IconsMeaning.scss";
import spicyIcon from "../../../../assets/icons/ spicy-icon.svg";
import vegetarianIcon from "../../../../assets/icons/ vegetarian-icon.svg";
import veganIcon from "../../../../assets/icons/vegan-icon.svg";
import IconMeaningItem from "./IconMeaningItem/IconsMeaningItem";

const iconsMeaning: React.FC = () => {
  const iconsMeaningIcons = [
    { icon: spicyIcon, alt: "spicy", caption: "Spicy" },
    { icon: vegetarianIcon, alt: "vegetarian", caption: "Vegetarian" },
    { icon: veganIcon, alt: "vegan", caption: "Vegan" },
  ];
  return (
    <>
      <section className="icons-meaning-container">
        <div className="icons-meaning-title ">THE MEANING OF OUR ICONS:</div>
        <ul className="icons-list-container">
          {iconsMeaningIcons.map(({ icon, alt, caption }) => (
            <IconMeaningItem key={alt} icon={icon} alt={alt} caption={caption} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default iconsMeaning;