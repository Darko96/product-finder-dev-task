import React, { useState, useEffect } from "react";
import "./BackToTheTopBtn.css";
import arrowUp from "../../assets/icons/Arrow 1.png";

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isVisible = scrollY > 300;
      setIsVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button className="back-to-top" onClick={handleClick}>
      <img src={arrowUp} alt="arrow up"></img>
    </button>
  );
}

export default BackToTopButton;
