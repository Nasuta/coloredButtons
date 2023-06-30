import React, { useState } from "react";
import './App.css';

const ColorButtons = () => {
  const [color, setColor] = useState("");

  const handleButtonClick = (color) => {
    setColor(color);
  };

  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const getColorStyle = () => {
    switch (color) {
      case "red":
        return { color: "red" };
      case "green":
        return { color: "green" };
      case "blue":
        return { color: "blue" };
    
    }
  };

  return (
    <div>
      <div className="colors" style={getColorStyle()}>{capitalizeFirstLetter(color)}</div>
      <div>
        <button className="red" onClick={() => handleButtonClick("red")}>Red</button>
        <button className="green" onClick={() => handleButtonClick("green")}>Green</button>
        <button className="blue" onClick={() => handleButtonClick("blue")}>Blue</button>
      </div>
    </div>
  );
};

export default ColorButtons;
