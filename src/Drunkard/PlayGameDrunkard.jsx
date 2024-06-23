import React, { useState, useEffect, useContext } from "react";
import "./Drunkard.css"
import { Button, Box, Container, Heading, Input, Text, SimpleGrid } from "@chakra-ui/react";
import { AuthContext } from "../ContextProvider";

let words = [
  {
    word: "baobab",
    hint: "A large tree that the Little Prince worries will overtake his planet",
  },
  {
    word: "asteroid",
    hint: "Small celestial bodies, like the one the Little Prince lives on",
  },
  {
    word: "rose",
    hint: "The flower that the Little Prince loves and cares for",
  },
  {
    word: "pilot",
    hint: "The profession of the narrator who meets the Little Prince in the desert",
  },
  { word: "sheep", hint: "Animal the Little Prince asks the pilot to draw" },
  {
    word: "drawing",
    hint: "Art created by the pilot, initially misunderstood by adults",
  },
  {
    word: "hat",
    hint: "What adults think the pilot's drawing of a snake swallowing an elephant is",
  },
  {
    word: "fox",
    hint: "Animal that teaches the Little Prince about taming and friendship",
  },
  {
    word: "tame",
    hint: "What the fox asks the Little Prince to do to him to make him unique",
  },
  {
    word: "geographer",
    hint: "The scientist who only records things without seeing them firsthand",
  },
  { word: "king", hint: "Monarch who believes he rules over everything" },
  {
    word: "vain",
    hint: "Adjective describing the man who wants to be admired by everyone",
  },
  {
    word: "drunkard",
    hint: "Person who drinks to forget that he is ashamed of drinking",
  },
  {
    word: "lamp",
    hint: "What the lamplighter is responsible for lighting and extinguishing",
  },
  { word: "desert", hint: "Place where the Little Prince meets the pilot" },
  {
    word: "snake",
    hint: "Creature that offers to help the Little Prince return to his planet",
  },
  { word: "echo", hint: "What the Little Prince hears in the mountains" },
  {
    word: "garden",
    hint: "Where the Little Prince finds many roses like his own",
  },
  {
    word: "stars",
    hint: "Celestial objects that the Little Prince loves to watch",
  },
  {
    word: "water",
    hint: "Precious resource the pilot and the Little Prince find in the desert",
  },
  {
    word: "well",
    hint: "Source of water the Little Prince and the pilot discover",
  },
  { word: "planet", hint: "Celestial body that the Little Prince visits" },
  {
    word: "aviator",
    hint: "Another word for pilot, the narrator of the story",
  },
  { word: "child", hint: "Represents innocence and imagination in the story" },
  { word: "railway", hint: "Tracks where the switchman works" },
  {
    word: "switchman",
    hint: "Man who sorts out trains according to the passengers' wishes",
  },
  { word: "merchant", hint: "Person selling thirst-quenching pills" },
  {
    word: "thorns",
    hint: "What the Little Prince's rose has to protect herself",
  },
  { word: "volcano", hint: "The Little Prince cleans these on his planet" },
  { word: "echo", hint: "What the Little Prince hears in the mountains" },
  {
    word: "sunset",
    hint: "Beautiful view the Little Prince enjoys on his planet",
  },
  { word: "desert", hint: "Place where the Little Prince meets the pilot" },
  { word: "boa", hint: "Type of snake in the pilot's first drawing" },
  {
    word: "friendship",
    hint: "Theme central to the relationship between the Little Prince and the fox",
  },
  {
    word: "explorer",
    hint: "Someone who travels to discover new places, like the Little Prince",
  },
  { word: "secret", hint: "What the fox reveals about seeing with the heart" },
  {
    word: "night",
    hint: "Time of day when the Little Prince often looks at the stars",
  },
  {
    word: "flowers",
    hint: "What the Little Prince finds in the garden on Earth",
  },
  {
    word: "stars",
    hint: "Celestial objects that the Little Prince loves to watch",
  },
  {
    word: "imagination",
    hint: "What adults often lack according to the Little Prince",
  },
  {
    word: "mirror",
    hint: "Reflective surface, metaphor for seeing one's true self",
  },
  { word: "earth", hint: "The planet where the Little Prince meets the pilot" },
  {
    word: "adults",
    hint: "Group often depicted as lacking imagination and understanding",
  },
  { word: "journey", hint: "The Little Prince's travels to different planets" },
  { word: "exploration", hint: "Act of traveling to learn about new places" },
  { word: "truth", hint: "What the Little Prince seeks in his interactions" },
  {
    word: "parable",
    hint: "A simple story used to illustrate a moral or lesson",
  },
  { word: "innocence", hint: "Quality represented by the Little Prince" },
  {
    word: "responsibility",
    hint: "What the Little Prince feels towards his rose",
  },
  {
    word: "adventure",
    hint: "What the Little Prince experiences on his travels",
  },
  {
    word: "love",
    hint: "Central theme, especially regarding the Little Prince's rose",
  },
  {
    word: "memory",
    hint: "What the narrator holds onto after meeting the Little Prince",
  },
  {
    word: "eternity",
    hint: "Concept related to the Little Prince's thoughts on life and death",
  },
  {
    word: "parable",
    hint: "A simple story used to illustrate a moral or lesson",
  },
  { word: "wisdom", hint: "What the Little Prince gains from his encounters" },
  { word: "purity", hint: "Quality symbolized by the Little Prince" },
  { word: "rosebush", hint: "Plant that produces roses" },
  { word: "truth", hint: "What the Little Prince seeks in his interactions" },
  {
    word: "childhood",
    hint: "Period of life associated with innocence and imagination",
  },
  {
    word: "moonlight",
    hint: "Light from the moon, often creating a dreamy atmosphere",
  },
  { word: "starry", hint: "Describes a night filled with visible stars" },
  { word: "foxhole", hint: "Burrow where the fox lives" },
  {
    word: "fantasy",
    hint: "Genre that describes the Little Prince's adventures",
  },
  {
    word: "philosophy",
    hint: "Study of fundamental nature of knowledge, reality, and existence",
  },
  {
    word: "miracle",
    hint: "An extraordinary event, like the Little Prince's journey",
  },
  {
    word: "turbine",
    hint: "A rotary mechanical device that the pilot might need to repair",
  },
  {
    word: "echoes",
    hint: "Repeating sounds, like those the Little Prince hears in the mountains",
  },
  {
    word: "baobabs",
    hint: "Trees that the Little Prince fears will destroy his planet",
  },
];


const PlayGameDrunkard = ({onChangeScore, score, timeLeft, cssEffects, setCSSEffects }) => {
  const [currentWord, setCurrentWord] = useState("");
  const [hint, setHint] = useState("");
  const [input, setInput] = useState("");
  const [correctWord, setCorrectWord] = useState("");
  const { profile } = useContext(AuthContext)

  useEffect(() => {
    initGame();
  }, []);


  const initGame = () => {
    const randomObj = words[Math.floor(Math.random() * words.length)];
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

  const handleCheckWord = () => {
    if (!input) { // Error Handle blank input
      return;
    }

    if (input.toLowerCase() !== correctWord) {
      onChangeScore("wrong")
      setCSSEffects("incorrect")
    } else {
      onChangeScore("right");
      setCSSEffects("correct")
    }
    
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
