// import { useEffect, useState } from "react";
// import "./Conceited.css";

// const PlayGame = ({ onChangeScore }) => {
//   // Sentences pulled from
//   const sentences = [
//     "The conceited man stood proudly on his tiny planet, his nose held high in the air.",
//     "'I am the most handsome, the most intelligent, and the most admired in all the universe,' he proclaimed.",
//     "'Applaud me!' he would demand.",
//     "He didn't notice that he was the only inhabitant of his world.",
//     "'Everyone must admire me for my unmatched brilliance and charm,' he said.",
//   ];
//   // Sentence to be typed
//   const [dataTyping, setDataTyping] = useState([]);
//   // User input per word
//   const [textTyping, setTextTyping] = useState({ value: "", position: 0 });
//   const [difficulty, setDifficulty] = useState("easy");
//   const [timeLimit, setTimeLimit] = useState(60);

//   const difficulties = {
//     easy: { words: ["tiny", "proudly", "handsome", "demand"], time: 60 },
//     medium: {
//       words: ["inhabitant", "admired", "proclaimed", "brilliance"],
//       time: 60,
//     },
//     hard: {
//       words: ["unmatched", "intelligent", "conceited", "applaud"],
//       time: 30,
//     },
//   };

//   useEffect(() => {
//     // Randomly selects a sentence and sets it in dataTyping. Resets textTyping.
//     const addSentence = () => {
//       const randomIndex = Math.floor(Math.random() * sentences.length);
//       setDataTyping([{ value: sentences[randomIndex], status: null }]);
//       setTextTyping({ value: "", position: 0 });
//     };
//     // Adds a new sentence if there are no sentences or if the current sentence has been fully typed.
//     if (dataTyping.length === 0 || textTyping.position >= dataTyping.length) {
//       addSentence();
//     }
//   }, [textTyping.position, sentences, dataTyping.length]);

//   useEffect(() => {
//     // Updates the selected difficulty
//     setTimeLimit(difficulties[difficulty].time);
//   }, [difficulty]);

//   const handleChangeTyping = (e) => {
//     // Current value of the input field
//     const valueInput = e.target.value;
//     // If not a space, updates state. If it is a space, it runs checkResult.
//     if (valueInput !== " ") {
//       setTextTyping({
//         ...textTyping,
//         value: valueInput,
//       });
//     } else if (textTyping.value.trim() !== "") {
//       checkResult();
//     }
//   };

//   // Checks to see if typed matches target sentence
//   const checkResult = () => {
//     const dataCheck = dataTyping;
//     const wordCheck = dataCheck[textTyping.position].value;
//     // Checks to see if the trimmed input matches the target sentence
//     if (textTyping.value.trim() === wordCheck) {
//       dataCheck[textTyping.position].status = true;
//       onChangeScore("right");
//     } else {
//       dataCheck[textTyping.position].status = false;
//       onChangeScore("wrong");
//     }
//     setDataTyping(dataCheck);
//     // Resets input field and increments its position
//     setTextTyping({
//       value: "",
//       position: textTyping.position + 1,
//     });
//   };

//   const handleDifficultyChange = (e) => {
//     setDifficulty(e.target.value);
//   };

//   return (
//     <div className="playing">
//       <div className="difficulty-selector">
//         <label>Select Difficulty: </label>
//         {/* Difficulty Drop down */}
//         <select value={difficulty} onChange={handleDifficultyChange}>
//           <option value="easy">Easy</option>
//           <option value="medium">Medium</option>
//           <option value="hard">Hard</option>
//         </select>
//       </div>
//       <ul className="list">
//         {dataTyping.map((sentence, index) => (
//           <li
//             key={index}
//             className={
//               sentence.status === true
//                 ? "true"
//                 : sentence.status === false
//                 ? "false"
//                 : ""
//             }
//           >
//             {sentence.value}
//           </li>
//         ))}
//       </ul>
//       <div className="inputForm">
//         <input
//           type="text"
//           onChange={handleChangeTyping}
//           value={textTyping.value}
//         />
//       </div>
//         {/* Shows remaining tim */}
//       <div>Time remaining: {timeLimit} seconds</div>
//     </div>
//   );
// };

// export default PlayGame;

import {
    Button,
    Box,
    UnorderedList,
    ListItem,
    Stack,
    SimpleGrid,
    Text,
    Input,
} from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../ContextProvider";
import "./Conceited.css";

const PlayGame = ({ onChangeScore, score, timeLeft }) => {
  const [defaultData] = useState(
    `"I am the most handsome, the most intelligent, and the most admired in all the universe.
Applaud me! I am magnificent.
I am the most handsome person in the entire universe.
No one can match my brilliance and charm.
Everyone should admire me and my incredible intellect.
I am the most important person on my planet.
My presence alone makes this world a better place.
I deserve constant applause for my greatness.
There is no one as talented and gifted as I am.
Every word I say is a pearl of wisdom.
People should be grateful to witness my magnificence.
I am the epitome of perfection.
All should bow down to my superior intelligence.
My beauty is unparalleled in the entire galaxy.
I am the center of the universe, and everyone revolves around me.
My opinions are always correct and should be revered.
There is no task too great for someone as exceptional as me.
I am the ultimate example of what it means to be extraordinary.
The world is lucky to have someone as remarkable as me.
My talents are boundless, and everyone should acknowledge them.
I am the pinnacle of success and achievement.
No one can outshine my brilliance and grandeur."`
  );
  const [dataTyping, setDataTyping] = useState([])
  const [currentSentence, setCurrentSentence] = useState("")
  const { profile } = useContext(AuthContext);
  
    const [textTyping, setTextTyping] = useState({
        value: "",
        position: 0,
        wordIndex: 0
    })

    useEffect(() => {
        const addSentence = () => {
        const arrayDefaultDB = defaultData.split(".")
        const position = Math.floor(Math.random() * arrayDefaultDB.length)
        const sentence = arrayDefaultDB[position].trim()
        setCurrentSentence(sentence)
        setDataTyping(sentence.split(" ").map(word => ({ value: word.toLowerCase(), status: null })))
      }


            // for (let index = 0; index < quantity; index++) {
            //     const position = Math.floor(Math.random() * arrayDefaultDB.length)
            //     dataTypingTest.push({
            //         value: arrayDefaultDB[position].toLowerCase(),
            //         status: null
            //     })
            // }
            // setDataTyping(dataTypingTest)
        
      if (dataTyping.length === 0 || textTyping.wordIndex >= dataTyping.length) {
          addSentence()
          setTextTyping({ ...textTyping, position: 0, wordIndex: 0 })
      }
    }, [textTyping.wordIndex])
    
    const handleChangeTyping = e => {
        const valueInput = e.target.value.toLowerCase()
        if (!valueInput.includes(" ")) {
            setTextTyping({
                ...textTyping,
                value: valueInput
            })
        } else if (textTyping.value !== "") {
            checkResult()
        }
    }

    const checkResult = () => {
        const dataCheck = [...dataTyping]
        const wordCheck = dataCheck[textTyping.wordIndex].value
        if (textTyping.value === wordCheck) {
            dataCheck[textTyping.wordIndex].status = true
            onChangeScore("right")
        } else {
            dataCheck[textTyping.wordIndex].status = false
            onChangeScore("wrong");
        }
        setDataTyping(dataCheck)
        setTextTyping({
            value: "",
            position: textTyping.position + 1,
            wordIndex: textTyping.wordIndex + 1
        })
        profile.setGameOn(true);
    }
    // console.log(dataTyping)

    return (
      <Box className="playing-conceited" maxW="30rem" color="white">
        <UnorderedList
          className="list"
          borderRadius="xl"
          boxShadow="dark-lg"
          ml="0"
          mb=".7rem"
        >
          {dataTyping.map((word, index) => (
            <ListItem
              key={index}
              p="10px"
              display="inline-block"
              textShadow="0 2px 2px #0009"
              className={
                word.status === true
                  ? "true"
                  : word.status === false
                  ? "false"
                  : ""
              }
              fontSize="1.5rem"
            >
              {word.value}
            </ListItem>
          ))}
        </UnorderedList>
        <SimpleGrid
          columns={1}
          display="flex"
          justifyContent="space-around"
          mb=".7rem"
        >
          <Box
            textShadow="0 2px 2px #0009"
            color={timeLeft <= 10 ? "red" : "inherit"}
            fontWeight={timeLeft <= 10 ? "bold" : "inherit"}
          >Time Left:{timeLeft}</Box>
          <Text
            textShadow="0 2px 2px #0009"
          >
            Score: {score.right}
          </Text>
        </SimpleGrid>
        <Box display="flex" justifyContent="center">
          <Input
            type="text"
            focusBorderColor="#6C6381"
            onChange={handleChangeTyping}
            value={textTyping.value}
            color="white"
          />
        </Box>
      </Box>
    ); 
};

export default PlayGame;
