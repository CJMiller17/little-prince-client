import React, { useState, useEffect } from "react";
import Tile from "./Tile";
import "../Geographer.css";

const PuzzleBoard = ({ size, images }) => {
  console.log("Puzzle Image: ", images)
  const [tiles, setTiles] = useState([]); // Holds the order of the tiles
  const [blankIndex, setBlankIndex] = useState(size * size - 1); // Holds index of blank tile

  useEffect(() => {
    initializePuzzle(); // Restarts if size (3x3 etc) changes or if the image is changed
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
    if (isAdjacent(index)) { // Adjacent?
      const newTiles = [...tiles];
      [newTiles[index], newTiles[blankIndex]] = [ // Swap functionality
        newTiles[blankIndex],
        newTiles[index],
      ];
      setTiles(newTiles);
      setBlankIndex(index);
    }
  };

  // Magical Math
  const isAdjacent = (index) => {
    const row = Math.floor(index / size);
    const col = index % size;
    const blankRow = Math.floor(blankIndex / size);
    const blankCol = blankIndex % size;
    return (
      (row === blankRow && Math.abs(col - blankCol) === 1) || // The abs determines if it is just 1 away
      (col === blankCol && Math.abs(row - blankRow) === 1)
    );
  };

  return (
    <div
      className="puzzle-board"
      style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }} // Columns set to number(3, 4, or 5)
    >
      {tiles.map((tileIndex, index) => (
        <Tile
          key={index}
          index={index}
          size={size}
          image={tileIndex === size * size - 1 ? null : images[tileIndex]} //
          onClick={() => swapTiles(index)} //Makes each tile clickable
        />
      ))}
    </div>
  );
};

export default PuzzleBoard;
