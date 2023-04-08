import "./LoadMore.css";
import { useState } from "react";
import arrowDownIcon from "../../assets/icons/Polygon 3.png";

const LoadMore = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const loadMoreHandler = () => {
    setIsClicked(true);
    props.load(true);
  };

  return (
    <div className="load-more__container">
      {isClicked ? (
        <button
          style={{ display: "none" }}
          className="load-more__btn"
          onClick={loadMoreHandler}
        >
          Load more products <img src={arrowDownIcon} alt="arrow down"></img>
        </button>
      ) : (
        <button className="load-more__btn" onClick={loadMoreHandler}>
          Load more products <img src={arrowDownIcon} alt="arrow down"></img>
        </button>
      )}
    </div>
  );
};

export default LoadMore;
