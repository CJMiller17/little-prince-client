import React, { useState, useEffect } from "react";
import PuzzleBoard from "./components/PuzzleBoard";
import "./Geographer.css";

const App = () => {
  const [size, setSize] = useState(3); // Default to 3x3
  const [images, setImages] = useState([]);

  const changeDifficulty = (newSize) => {
    setSize(newSize);
    // Load images based on the selected size
    const imagesPath = `src/Geographer/images/${newSize}x${newSize}/map`;
    console.log(imagesPath)
    const imagesArray = Array.from(
      { length: newSize * newSize },
      (_, index) => `${imagesPath}/${index + 1}.png`
    );
    setImages(imagesArray);
    console.log("Images Array: ", imagesArray)
    console.log("Image?: ", images)
  };

  useEffect(() => {
    changeDifficulty(size)
},[])


  const changeImage = () => {
    // Optionally implement image change logic here
  };

  return (
    <div className="app">
      <h1>Slider Puzzle</h1>
      <div className="controls">
        <button onClick={() => changeDifficulty(3)}>3x3</button>
        <button onClick={() => changeDifficulty(4)}>4x4</button>
        <button onClick={() => changeDifficulty(5)}>5x5</button>
        <button onClick={changeImage}>Change Image</button>
      </div>
      <PuzzleBoard size={size} images={images} />
    </div>
  );
};

export default App;
