import "./IconsMeaning.scss";
import spicyIcon from "../../../../assets/icons/ spicy-icon.svg";
import vegetarianIcon from "../../../../assets/icons/ vegetarian-icon.svg";
import veganIcon from "../../../../assets/icons/vegan-icon.svg";

const HomePage: React.FC = () => {
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
              <figure key={alt} className="icon-meaning-item">
                <img src={icon} alt={alt} className="icon-img" />
                <figcaption className="icon-caption">{caption}</figcaption>
              </figure>
            ))}
        </ul>
      </section>
    </>
  );
};

export default HomePage;