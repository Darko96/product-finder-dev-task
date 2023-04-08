import { useState, useEffect } from "react";
import "./SortBy.css";

const SortBy = (props) => {
  const [phonesArray, setPhonesArrays] = useState(props.sortBy);
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    const sortedCameras = [...phonesArray].sort((a, b) => {
      if (sortOption === "price") {
        return b.price - a.price;
      } else if (sortOption === "camera") {
        return b.camera - a.camera;
      } else {
        return a;
      }
    });
    setPhonesArrays(sortedCameras);
  }, [sortOption]);

  useEffect(() => {
    props.onAddSortedBy(phonesArray);
  }, [phonesArray]);

  const handleSort = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <div className="filter">
      <div className="filter__control">
        <label className="filter__title">Sort by:</label>
        <select onChange={handleSort}>
          <option value="choose">Choose a way to sort</option>
          <option value="price">Price (High to Low)</option>
          <option value="camera">Camera (Hight to Low)</option>
        </select>
      </div>
    </div>
  );
};

export default SortBy;
