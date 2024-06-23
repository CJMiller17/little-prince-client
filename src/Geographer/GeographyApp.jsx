import React, { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";
import PuzzleBoard from "./components/PuzzleBoard";
import "./Geographer.css";



const App = () => {
  const [size, setSize] = useState(3); // Default to 3x3
  const [images, setImages] = useState([]);
  const [isSolved, setIsSolved] = useState(false);

  const checkIfSolved = () => {
    const expectedOrder = Array.from(
      { length: size * size },
      (_, index) => index + 1
    );
    const currentOrder = images.map((image) =>
      parseInt(image.split("/").pop().split(".")[0])
    );
    if (JSON.stringify(currentOrder) === JSON.stringify(expectedOrder)) {
      setIsSolved(true);
    } else {
      setIsSolved(false);
    }
  };


  const changeDifficulty = (newSize) => {
    setSize(newSize);
    // Load images based on the selected size
    const imagesPath = `src/public/images/${newSize}x${newSize}/map`; // src/public/assets/images/3x3/map
    const imagesArray = Array.from(
      { length: newSize * newSize },
      (_, index) => `${imagesPath}/${index + 1}.png`
    );
    setImages(imagesArray);
    setIsSolved(false);
  };

  useEffect(() => {
    changeDifficulty(size)
},[])

  useEffect(() => {
    checkIfSolved();
  }, [images]);

  const changeImage = () => {
    // Future added change images
  };

  return (
    <div className="App-geographer">
      <h1>Slider Puzzle</h1>
      <div className="controls">
        <button onClick={() => changeDifficulty(3)}>3x3</button>
        <button onClick={() => changeDifficulty(4)}>4x4</button>
        <button onClick={() => changeDifficulty(5)}>5x5</button>
        <button onClick={changeImage}>Change Image</button>
      </div>
      {isSolved ? <Text fontSize="3rem" >Congratulations! You solved the puzzle!</Text> : null}
      <PuzzleBoard size={size} images={images} />
    </div>
  );
};

export default App;
