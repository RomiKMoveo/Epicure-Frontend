import "./HomePage.scss";
import About from "./components/About/About";
import Chef from "./components/Chef/Chef";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import IconsMeaning from "./components/IconsMeaning/IconsMeaning";




const HomePage: React.FC = () => {

  return (
    <>
      <div className="homePage">
 
        <div className="App">
            <Header />
            <Hero />
            <h1>popular restaurant in epicure:</h1>
            <h1>Signature Dish Of:</h1>
            <IconsMeaning />
            <Chef />
            <About />
            <Footer />
        </div>
      </div>      
    </>
  );
};

export default HomePage;