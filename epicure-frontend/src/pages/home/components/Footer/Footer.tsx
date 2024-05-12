import "./Footer.scss";
import { Link } from 'react-router-dom';


const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <div className="footer-links">
          <Link to="/" className="link">Contact Us</Link>
          <Link to="/" className="link">Term of Use</Link>
          <Link to="/" className="link">Privacy Policy</Link>
        </div>
      </footer>
    </>
  );
};
export default Footer;