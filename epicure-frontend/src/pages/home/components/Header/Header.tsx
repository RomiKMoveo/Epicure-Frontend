import './Header.scss';
import hamburger from '../../../../assets/icons/hamburger-icon.svg';

import epicureLogo from '../../../../assets/icons/epicure-logo.svg';
import epicureName from '../../../../assets/icons/epicure-name.svg';

import searchIcon from '../../../../assets/icons/search-icon.svg';
import userIcon from '../../../../assets/icons/user-icon.svg';
import bagIcon from '../../../../assets/icons/bag-icon.svg'

const Header: React.FC = () => {

  return (
    <>
    <header className="header">
      <div className="header-menu">
        <div className='left-menu'>
          <div className='hamburger-container'>
            <img className="hamburger" src={hamburger} alt="Epicure Logo" />
          </div>
          <div className="logo-container">
            <div >
              <img className="epicure-logo" src={epicureLogo} alt="epicure"></img>

            </div>
            <img className="epicure-name" src={epicureName} alt="logo"></img>
          </div>
          <div className="hamburger-menu">
            <div>Restaurants</div>
            <div>Chefs</div>
          </div>
        </div>
        <nav className="right-menu">
          <img src={searchIcon} alt="Magnifying Glass" />
          <img src={userIcon} alt="User Icon" />
          <img src={bagIcon} alt="Bag Icon" />
        </nav>
      </div>
    </header>
  </>
);
};



export default Header;