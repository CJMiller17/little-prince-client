import React, { useState, useEffect } from "react";
import { Box, Text, Heading, Button, ButtonGroup, SimpleGrid } from "@chakra-ui/react";
import PuzzleBoard from "./components/PuzzleBoard";
import "./Geographer.css";

import _3x3_1 from "../public/images/3x3/map/1.png";
import _3x3_2 from "../public/images/3x3/map/2.png";
import _3x3_3 from "../public/images/3x3/map/3.png"; 
import _3x3_4 from "../public/images/3x3/map/4.png"; 
import _3x3_5 from "../public/images/3x3/map/5.png"; 
import _3x3_6 from "../public/images/3x3/map/6.png"; 
import _3x3_7 from "../public/images/3x3/map/7.png"; 
import _3x3_8 from "../public/images/3x3/map/8.png"; 
import _3x3_9 from "../public/images/3x3/map/9.png";

import _4x4_1 from "../public/images/4x4/map/1.png"
import _4x4_2 from "../public/images/4x4/map/2.png";
import _4x4_3 from "../public/images/4x4/map/3.png";
import _4x4_4 from "../public/images/4x4/map/4.png";
import _4x4_5 from "../public/images/4x4/map/5.png";
import _4x4_6 from "../public/images/4x4/map/6.png";
import _4x4_7 from "../public/images/4x4/map/7.png";
import _4x4_8 from "../public/images/4x4/map/8.png";
import _4x4_9 from "../public/images/4x4/map/9.png";
import _4x4_10 from "../public/images/4x4/map/10.png";
import _4x4_11 from "../public/images/4x4/map/11.png";
import _4x4_12 from "../public/images/4x4/map/12.png";
import _4x4_13 from "../public/images/4x4/map/13.png";
import _4x4_14 from "../public/images/4x4/map/14.png";
import _4x4_15 from "../public/images/4x4/map/15.png";
import _4x4_16 from "../public/images/4x4/map/16.png";

import _5x5_1 from "../public/images/5x5/map/1.png";
import _5x5_2 from "../public/images/5x5/map/2.png";
import _5x5_3 from "../public/images/5x5/map/3.png";
import _5x5_4 from "../public/images/5x5/map/4.png";
import _5x5_5 from "../public/images/5x5/map/5.png";
import _5x5_6 from "../public/images/5x5/map/6.png";
import _5x5_7 from "../public/images/5x5/map/7.png";
import _5x5_8 from "../public/images/5x5/map/8.png";
import _5x5_9 from "../public/images/5x5/map/9.png";
import _5x5_10 from "../public/images/5x5/map/10.png";
import _5x5_11 from "../public/images/5x5/map/11.png";
import _5x5_12 from "../public/images/5x5/map/12.png";
import _5x5_13 from "../public/images/5x5/map/13.png";
import _5x5_14 from "../public/images/5x5/map/14.png";
import _5x5_15 from "../public/images/5x5/map/15.png";
import _5x5_16 from "../public/images/5x5/map/16.png";
import _5x5_17 from "../public/images/5x5/map/17.png";
import _5x5_18 from "../public/images/5x5/map/18.png";
import _5x5_19 from "../public/images/5x5/map/19.png";
import _5x5_20 from "../public/images/5x5/map/20.png";
import _5x5_21 from "../public/images/5x5/map/21.png";
import _5x5_22 from "../public/images/5x5/map/22.png";
import _5x5_23 from "../public/images/5x5/map/23.png";
import _5x5_24 from "../public/images/5x5/map/24.png";
import _5x5_25 from "../public/images/5x5/map/25.png";


const PlayGameGeographer = ({ score, timeLeft}) => {
  const [size, setSize] = useState(3); // Default to 3x3
  const [images, setImages] = useState([]);
  const [isSolved, setIsSolved] = useState(false);
  const [points, setPoints] = useState("100");


  const changeDifficulty = (newSize) => {
    setSize(newSize);

    // Changing Point display
    let newPoints;
    if (newSize === 3) {
      newPoints = "100";
    } else if (newSize === 4) {
      newPoints = "400";
    } else if (newSize === 5) {
      newPoints = "1,000";
    }
    setPoints(newPoints);

    const images_3x3 = [
      _3x3_1,
      _3x3_2,
      _3x3_3,
      _3x3_4,
      _3x3_5,
      _3x3_6,
      _3x3_7,
      _3x3_8,
      _3x3_9,
    ];
    const images_4x4 = [
      _4x4_1,
      _4x4_2,
      _4x4_3,
      _4x4_4,
      _4x4_5,
      _4x4_6,
      _4x4_7,
      _4x4_8,
      _4x4_9,
      _4x4_10,
      _4x4_11,
      _4x4_12,
      _4x4_13,
      _4x4_14,
      _4x4_15,
      _4x4_16,
    ];
    const images_5x5 = [
      _5x5_1,
      _5x5_2,
      _5x5_3,
      _5x5_4,
      _5x5_5,
      _5x5_6,
      _5x5_7,
      _5x5_8,
      _5x5_9,
      _5x5_10,
      _5x5_11,
      _5x5_12,
      _5x5_13,
      _5x5_14,
      _5x5_15,
      _5x5_16,
      _5x5_17,
      _5x5_18,
      _5x5_19,
      _5x5_20,
      _5x5_21,
      _5x5_22,
      _5x5_23,
      _5x5_24,
      _5x5_25,
    ];

    // Should select the images based on size
    let selectedImages;
    if (newSize === 3) {
      selectedImages = images_3x3;
    } else if (newSize === 4) {
      selectedImages = images_4x4;
    } else if (newSize === 5) {
      selectedImages = images_5x5;
    }

    // Shuffle and set the images
    const shuffledImages = selectedImages.sort(() => Math.random() - 0.5);
    setImages(shuffledImages);
    setIsSolved(false);
  };

  useEffect(() => {
    changeDifficulty(size);
  }, []); // Size as a dependency??

  
  const handleWin = () => {
    setIsSolved(true);
    alert("Congratulations! You have solved the puzzle.");
  };

  
  const formattedTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <Box className="App-geographer" width="100%">
      {/* <Heading fontFamily="Amatic SC" fontSize="6xl">
        Slider Puzzle
      </Heading> */}
      <ButtonGroup
        className="controls"
        display="flex"
        justifyContent="space-evenly"
        flexWrap="wrap"
        mt="1rem"
      >
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
      <SimpleGrid
        columns={{ base: 1, md: 2 }} // 1 column on small screens, 2 columns on medium and above
        spacing={{ base: 4, md: 10 }}
        display="flex"
        justifyContent="space-between"
        // mb=".7rem"
      >
        <Heading
          fontFamily="Amatic SC"
          fontSize="lg"
          display="flex"
          alignItems="center"
        >
          <Text
            fontSize="2xl"
            textDecoration="underline"
            textShadow="0 2px 2px #0009"
            mr="2"
          >
            Worth:
          </Text>
          <Text textShadow="0 2px 2px #0009">{points} points</Text>
        </Heading>
        <Box
          textShadow="0 2px 2px #0009"
          alignSelf="center"
          color={timeLeft <= 30 ? "red" : "inherit"}
          fontWeight={timeLeft <= 30 ? "bold" : "inherit"}
        >
          Time Left:{formattedTime(timeLeft)}
        </Box>
      </SimpleGrid>
      <PuzzleBoard size={size} images={images} onWin={handleWin} />
    </Box>
  );
};

export default PlayGameGeographer;
