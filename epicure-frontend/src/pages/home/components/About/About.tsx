import "./About.scss";
import aboutLogo from "../../../../assets/images/epicure-logo.svg";
import appleStore from "../../../../assets/images/button-app-store.svg";
import googlePlay from "../../../../assets/images/button-google-play.svg";



const About: React.FC = () => {

  return (
    <>
      <section className="about">
        <figure className="epicure-logo-container">
          <img src={aboutLogo} alt="aboutLogo" />
        </figure>

        <div className="about-contact-container">
          <div className="button-container">
            <img className="button-logo" src={appleStore} alt="applePay" />
            <img className="button-logo" src={googlePlay} alt="googlePay" />
          </div>

          <div className="contact-title">ABOUT US:</div>
          <div className="contact-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
                lacus vel justo fermentum bibendum non eu ipsum. Cras porta
                malesuada eros, eget blandit turpis suscipit at. Vestibulum sed
                massa in magna sodales porta. Vivamus elit urna, dignissim a
                vestibulum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
                lacus vel justo fermentum bibendum no eu ipsum. Cras porta
                malesuada eros.
              </p>
            </div>
          </div>
      </section>
    </>
  );
};

export default About;