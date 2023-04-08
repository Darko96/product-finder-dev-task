import "./Search.css";
import { useState } from "react";
import searchIcon from "../../assets/icons/search-icon.png";

function Search(props) {
  const [search, setSearch] = useState("");

  const searchInputHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchHandler = (event) => {
    event.preventDefault();
    props.onAddSearch(search);
  };

  return (
    <div className="search">
      <div className="search__container">
        <h1 className="search__title">Search products by names or series:</h1>
        <form className="search__box">
          <input
            className="search__input"
            placeholder="Search..."
            onChange={searchInputHandler}
          ></input>
          <button className="search__btn" onClick={searchHandler}>
            <img
              src={searchIcon}
              alt="search icon"
              className="search__btn-icon"
            />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
