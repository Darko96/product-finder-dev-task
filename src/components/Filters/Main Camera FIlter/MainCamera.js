import React, { useState, useEffect } from "react";
import "./MainCamera.css";

const MainCamera = (props) => {
  const array = props.sortByCamera;
  const [moreThan, setMoreThan] = useState("");
  const [regular, setRegular] = useState("");
  const [lessThan, setLessThan] = useState("");

  const selectedCameraHandler = (event) => {
    if (event.target.value === "more") {
      const more = array.filter((phone) => {
        if (phone.camera >= 48) {
          return phone;
        }
      });
      setRegular("");
      setLessThan("");
      setMoreThan(more);
    } else if (event.target.value === "48") {
      const reg = array.filter((phone) => {
        if (phone.camera === 48) {
          return phone;
        }
      });
      setLessThan("");
      setMoreThan("");
      setRegular(reg);
    } else if (event.target.value === "less") {
      const less = array.filter((phone) => {
        if (phone.camera < 48) {
          return phone;
        }
      });
      setRegular("");
      setMoreThan("");
      setLessThan(less);
    }
  };

  useEffect(() => {
    if (moreThan.length > 0) {
      props.onAddCameraFilter(moreThan);
    } else if (regular.length > 0) {
      props.onAddCameraFilter(regular);
    } else if (lessThan.length > 0) {
      props.onAddCameraFilter(lessThan);
    }
  }, [moreThan, regular, lessThan]);

  return (
    <div className="filter">
      <label className="filter__title">Main Camera:</label>
      <div className="select__container">
        <select className="select" onChange={selectedCameraHandler}>
          <option value="choose">Choose camera</option>
          <option value="more">More than 48MP</option>
          <option value="48">48MP</option>
          <option value="less">Less than 48MP</option>
        </select>
      </div>
    </div>
  );
};

export default MainCamera;
