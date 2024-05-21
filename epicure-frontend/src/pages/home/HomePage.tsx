import "./HomePage.scss";
import About from "./components/About/About";
import Chef from "./components/Chef/Chef";
import Dish from "./components/Dish/Dish";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import IconsMeaning from "./components/IconsMeaning/IconsMeaning";
import Restaurant from "./components/Restaurant/Restaurant";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="home-page">
        <Header />
        <Hero />
        <Restaurant></Restaurant>
        <Dish></Dish>
        <IconsMeaning />
        <Chef />
        <About />
        <Footer />
      </div>      
    </>
  );
};

export default HomePage;