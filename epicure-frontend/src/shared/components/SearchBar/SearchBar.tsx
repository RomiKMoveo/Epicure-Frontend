import SearchIcon from "../../../assets/icons/input-search-icon.svg";
import "./SearchBar.scss";

const SearchBar: React.FC<{ mobileNav?: boolean }> = ({ mobileNav }) => {
  
  
  return (
    <>
      <div className="search-bar">
          <button>
              <img src={SearchIcon} alt='search icon'/>
          </button>
          <input type='text' placeholder='Search for restaurant cuisine, chef'/>
      </div>
    </>
  );
};

export default SearchBar;