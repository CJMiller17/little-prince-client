import React, { useState, useEffect } from "react";
import WordScramble from "./WordScramble";
import ScoreArea from "./ScoreArea";
import Modal from "./Modal";
import "./Drunkard.css"

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


const DrunkardApp = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [hint, setHint] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [correctWord, setCorrectWord] = useState("");

  useEffect(() => {
    initGame();
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      handleEndGame();
    }
  }, [timeLeft]);

  const initGame = () => {
    setTimeLeft(30);
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
  };

  const handleCheckWord = () => {
    if (!input) {
      setModalMessage("Please enter the word to check!");
      setShowModal(true);
      return;
    }

    if (input.toLowerCase() !== correctWord) {
      setScore((prevScore) => Math.max(prevScore - 1, 0));
      setModalMessage(`Oops, ${input} is not the correct word`);
      setShowModal(true);
    } else {
      setScore((prevScore) => prevScore + 1);
      setModalMessage(
        `Congrats! ${correctWord.toUpperCase()} is the correct word`
      );
      setShowModal(true);
      initGame();
    }
  };

  const handleEndGame = () => {
    setModalMessage(
      `Time off! ${correctWord.toUpperCase()} was the correct word. You lost the game!`
    );
    setShowModal(true);
    setScore(0);
  };

  return (
    <div className="container">
      <div
        className="startArea"
        style={{ display: timeLeft === 0 ? "block" : "none" }}
      >
        <button onClick={initGame}>Start Game</button>
      </div>
      <div
        className="content"
        style={{ display: timeLeft > 0 ? "block" : "none" }}
      >
        <WordScramble
          currentWord={currentWord}
          hint={hint}
          timeLeft={timeLeft}
          input={input}
          setInput={setInput}
          handleCheckWord={handleCheckWord}
          initGame={initGame}
        />
        <ScoreArea score={score} />
      </div>
      {showModal && (
        <Modal message={modalMessage} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default DrunkardApp;
