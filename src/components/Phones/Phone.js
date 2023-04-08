import "./Phone.css";
import { useState } from "react";

const Phone = (props) => {
  const [selectedColor, setSelectedColor] = useState(props.color[0]);

  const selectColorHandler = (col) => {
    setSelectedColor(col);
  };

  const currentLink = props.images.filter((img) => {
    return img[selectedColor];
  });

  let link;
  for (let obj of currentLink) {
    for (const value of Object.values(obj)) {
      link = value;
    }
  }

  return (
    <div className="phone-card">
      <h1 className="phone__title">{props.model}</h1>
      <div className="phone__img-box">
        <img src={link} className="phone__img" alt="phone img"></img>
      </div>
      <div className="color-picker">
        <h4 className="color-desc">
          Color :{" "}
          <span className="color-value">
            {selectedColor.replace(/-/g, " ")}
          </span>
        </h4>
        <div className="color__samples">
          {props.color.map((col, index) => (
            <div
              key={index}
              onClick={() => selectColorHandler(col)}
              className={`color__sample color__sample--${col} ${
                selectedColor === col ? "active" : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
      <div className="phone-specs">
        <p>
          Series: <span>{props.series}</span>
        </p>
        <p>
          Main Camera: <span>{props.camera}MP</span>
        </p>
        <p>
          Sim: <span>{props.sim}</span>
        </p>
        <p className="price">
          Price: <span>{props.price}R</span>
        </p>
      </div>
      <div className="learn-more__box">
        <a
          href={props.url}
          title="Learn More about Galaxy S23"
          className="learn-more__btn"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Phone;
