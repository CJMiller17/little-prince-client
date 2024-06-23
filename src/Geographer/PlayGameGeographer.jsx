import React, { useState, useEffect } from "react";
import { Box, Text, Heading, Button, ButtonGroup } from "@chakra-ui/react";
import PuzzleBoard from "./components/PuzzleBoard";
import "./Geographer.css";

const App = () => {
  const [size, setSize] = useState(3); // Default to 3x3
  const [images, setImages] = useState([]);
  const [isSolved, setIsSolved] = useState(false);
  const [points, setPoints] = useState("100");


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
    // Chaning Point display
    let newPoints
    if (newSize === 3) {
      newPoints = "100";
    } else if (newSize === 4) {
      newPoints = "400";
    } else if (newSize === 5) {
      newPoints = "1,000";
    }
    setPoints(newPoints);

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
    changeDifficulty(size);
  }, []);

  useEffect(() => {
    checkIfSolved();
  }, [images]);

  const changeImage = () => {
    // Future added change images
  };

  return (
    <Box className="App-geographer" width="100%">
      {/* <Heading fontFamily="Amatic SC" fontSize="6xl">
        Slider Puzzle
      </Heading> */}
      <ButtonGroup className="controls" display="flex" justifyContent="space-evenly" flexWrap="wrap">
        <Button
          variant="solid"
          width="5rem"
          onClick={() => changeDifficulty(3)}
        >
          3x3
        </Button>
        <Button
          variant="solid"
          width="5rem"
          onClick={() => changeDifficulty(4)}
        >
          4x4
        </Button>
        <Button
          variant="solid"
          width="5rem"
          onClick={() => changeDifficulty(5)}
        >
          5x5
        </Button>
        {/* <button onClick={changeImage}>Change Image</button> */}
      </ButtonGroup>
      {/* {isSolved ? <Text fontSize="3rem" >Congratulations! You solved the puzzle!</Text> : null} */}
      <Heading fontFamily="Amatic SC" fontSize="lg">
        <Text fontSize="2xl" textDecoration="underline">
          Worth:
        </Text>{" "}
        {points} points
      </Heading>
      <PuzzleBoard size={size} images={images} />
    </Box>
  );
};

export default App;
