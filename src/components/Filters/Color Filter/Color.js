import React, { useState, useEffect } from "react";
import "./Color.css";

const Color = (props) => {
  const [colorBlack, setColorBlack] = useState("");
  const [colorCream, setColorCream] = useState("");
  const [colorLavender, setColorLavender] = useState("");
  const [colorGreen, setColorGreen] = useState("");
  const [colorBlue, setColorBlue] = useState("");

  const array = props.sortByColor;

  const selectedColorHandler = (event) => {
    if (event.target.value === "black") {
      const black = array.filter((phone) => {
        if (
          phone.color.includes("black") ||
          phone.color.includes("phantom-black")
        ) {
          return phone;
        }
      });
      setColorBlack(black);
    } else if (event.target.value === "cream") {
      const cream = array.filter((phone) => {
        if (phone.color.includes("cream")) {
          return phone;
        }
      });
      setColorCream(cream);
    } else if (event.target.value === "lavender") {
      const lavender = array.filter((phone) => {
        if (phone.color.includes("lavender")) {
          return phone;
        }
      });
      setColorLavender(lavender);
    } else if (event.target.value === "green") {
      const green = array.filter((phone) => {
        if (
          phone.color.includes("green") ||
          phone.color.includes("dark-green")
        ) {
          return phone;
        }
      });
      setColorGreen(green);
    } else if (event.target.value === "blue") {
      const blue = array.filter((phone) => {
        if (
          phone.color.includes("blue") ||
          phone.color.includes("light-blue")
        ) {
          return phone;
        }
      });
      setColorBlue(blue);
    }
  };

  useEffect(() => {
    if (colorBlack.length > 0) {
      props.onAddColorFilter(colorBlack);
    } else if (colorCream.length > 0) {
      props.onAddColorFilter(colorCream);
    } else if (colorLavender.length > 0) {
      props.onAddColorFilter(colorLavender);
    } else if (colorGreen.length > 0) {
      props.onAddColorFilter(colorGreen);
    } else if (colorBlue.length > 0) {
      props.onAddColorFilter(colorBlue);
    }
  }, [colorBlack, colorCream, colorLavender, colorGreen, colorBlue]);

  return (
    <div className="filter">
      <label className="filter__title">Color:</label>
      <div className="select__container">
        <select className="select" onChange={selectedColorHandler}>
          <option value="choose">Choose color</option>
          <option value="black">Black</option>
          <option value="cream">Cream</option>
          <option value="lavender">Lavender</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </div>
    </div>
  );
};

export default Color;
