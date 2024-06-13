import React from "react";
import "../Geographer.css";

const Tile = ({ index, size, image, onClick }) => {
  // Boolean that determines if the tile should be blank, with no background image
  const isBlank = image === null;

  console.log("IMAGE", image)

  return (
    <div
      className={`tile ${isBlank ? "blank" : ""}`} // Conditional CSS class
      onClick={onClick}
      style={{
        width: `calc(100% / ${1})`, // These were dynamic, but I prefer the inherited way
        height: `calc(100% / ${1})`,
        backgroundImage: isBlank ? "none" : `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
};

export default Tile;
