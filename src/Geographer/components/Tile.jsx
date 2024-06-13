// src/components/Tile.js
import React from "react";
import "../Geographer.css";

const Tile = ({ index, size, image, onClick }) => {
  const isBlank = image === null;

  return (
    <div
      className={`tile ${isBlank ? "blank" : ""}`}
      onClick={onClick}
      style={{
        width: `calc(100% / ${size})`,
        height: `calc(100% / ${size})`,
        backgroundImage: isBlank ? "none" : `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
};

export default Tile;
