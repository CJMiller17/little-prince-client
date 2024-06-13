// src/components/PuzzleBoard.js
import React, { useState, useEffect } from "react";
import Tile from "./Tile";
import "../Geographer.css";

const PuzzleBoard = ({ size, images }) => {
  const [tiles, setTiles] = useState([]);
  const [blankIndex, setBlankIndex] = useState(size * size - 1);

  useEffect(() => {
    initializePuzzle();
  }, [size, images]);

  const initializePuzzle = () => {
    const tempTiles = [];
    for (let i = 0; i < size * size; i++) {
      tempTiles.push(i);
    }
    tempTiles.sort(() => Math.random() - 0.5); // Shuffle tiles
    setTiles(tempTiles);
    setBlankIndex(tempTiles.indexOf(size * size - 1)); // Blank tile
  };

  const swapTiles = (index) => {
    if (isAdjacent(index)) {
      const newTiles = [...tiles];
      [newTiles[index], newTiles[blankIndex]] = [
        newTiles[blankIndex],
        newTiles[index],
      ];
      setTiles(newTiles);
      setBlankIndex(index);
    }
  };

  const isAdjacent = (index) => {
    const row = Math.floor(index / size);
    const col = index % size;
    const blankRow = Math.floor(blankIndex / size);
    const blankCol = blankIndex % size;
    return (
      (row === blankRow && Math.abs(col - blankCol) === 1) ||
      (col === blankCol && Math.abs(row - blankRow) === 1)
    );
  };

  return (
    <div
      className="puzzle-board"
      style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
    >
      {tiles.map((tileIndex, index) => (
        <Tile
          key={index}
          index={index}
          size={size}
          image={tileIndex === size * size - 1 ? null : images[tileIndex]}
          onClick={() => swapTiles(index)}
        />
      ))}
    </div>
  );
};

export default PuzzleBoard;
