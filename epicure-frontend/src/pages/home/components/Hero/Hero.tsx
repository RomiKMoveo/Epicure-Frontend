import "./Hero.scss";
import SearchBar from "../../../../shared/components/SearchBar/SearchBar";
const Hero: React.FC = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-background">
          <div className="overlay">
            <div className="overlay-text">Epicure works with the top chef restaurants in Tel Aviv</div>
            <SearchBar></SearchBar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;