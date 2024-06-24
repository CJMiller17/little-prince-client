import React, { useState, useEffect, useContext } from "react";
import "./Drunkard.css"
import { Button, Box, Container, Heading, Input, Text, SimpleGrid } from "@chakra-ui/react";
import { AuthContext } from "../ContextProvider";
import words from "./words";


const PlayGameDrunkard = ({onChangeScore, score, timeLeft, cssEffects, setCSSEffects }) => {
  const [currentWord, setCurrentWord] = useState("");
  const [hint, setHint] = useState("");
  const [input, setInput] = useState("");
  const [correctWord, setCorrectWord] = useState("");
  const [guessedWords, setGuessedWords] = useState([])
  const { profile } = useContext(AuthContext)

  useEffect(() => {
    initGame();
  }, []);


  const initGame = () => {
    const randomObj = getRandomWord() // words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }

    setCurrentWord(wordArray.join(""));
    setHint(randomObj.hint);
    setCorrectWord(randomObj.word.toLowerCase());
    setInput("");
    // setCSSEffects(null)
    profile.setGameOn(true);
  };

  // Eoins idea of ensured random
  const getRandomWord = () => {
    let randomIndex = Math.floor(Math.random() * words.length);
    let randomObj = words[randomIndex];
    // Ensure the word hasn't been guessed yet
    while (guessedWords.includes(randomObj.word)) {
      randomIndex = Math.floor(Math.random() * words.length);
      randomObj = words[randomIndex];
    }
    return randomObj;
  };

  const handleCheckWord = () => {
    if (!input.trim()) { // Error Handle blank input
      return;
    }

    if (input.trim().toLowerCase() !== correctWord) {
      onChangeScore("wrong")
      setCSSEffects("incorrect")
    } else {
      onChangeScore("right");
      setCSSEffects("correct")
    }
      setGuessedWords([...guessedWords, correctWord]);
      initGame()
    }
    

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleCheckWord()
    }
  }

  return (
    <Container maxW="md" color="white">
      <Box className="container-drunkard" maxW="100%">
        <Box className="display-drunkard" p="1rem" borderRadius="xl">
          <Heading
            fontSize="8rem"
            fontFamily="Amatic SC"
            display="flex"
            flexWrap="wrap"
            overflowWrap="break-word"
            wordBreak="break-word"
            lineHeight="6rem"
            textShadow="0 2px 2px #0009"
          >
            {currentWord}
          </Heading>
          <Box m="1rem 0rem" textShadow="0 2px 2px #0009">
            <Text textDecoration="underline">Hint:</Text> {hint}
          </Box>
        </Box>
        <SimpleGrid
          columns={1}
          display="flex"
          justifyContent="space-around"
          mb=".7rem"
        >
          <Box textShadow="0 2px 2px #0009">Time Left:{timeLeft}</Box>
          <Text
            textShadow="0 2px 2px #0009"
            className={`score ${
              cssEffects === "correct"
                ? "correct"
                : cssEffects === "incorrect"
                ? "incorrect"
                : ""
            }`}
          >
            Score: {score.total}
          </Text>
        </SimpleGrid>
        <SimpleGrid spacing="2" display="flex" justifyContent="center">
          <Input
            type="text"
            spellCheck="false"
            placeholder="Enter a valid word"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            focusBorderColor="#6C6381"
            onKeyDown={handleKeyDown}
            borderRadius="xl"
            color="white"
            fontSize="1.9rem"
          />
          <Button
            onClick={handleCheckWord}
            display="flex"
            className="check-word"
            fontSize="xl"
            _hover={{ bgColor: "gray" }}
            _active={{ color: "#FBD154" }}
          >
            Check Word
          </Button>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default PlayGameDrunkard;
