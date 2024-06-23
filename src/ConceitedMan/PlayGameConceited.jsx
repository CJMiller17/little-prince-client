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
    Text,
    Input,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./Conceited.css";

const PlayGame = ({ onChangeScore }) => {
    const [defaultData] = useState("The conceited man stood proudly on his tiny planet, his nose held high in the air. 'I am the most handsome, the most intelligent, and the most admired in all the universe,' he proclaimed, not noticing that he was the only inhabitant of his world. 'Applaud me!' he would demand")
    const [dataTyping, setDataTyping] = useState([])
    const [textTyping, setTextTyping] = useState({
        value: "",
        position: 0
    })

    useEffect(() => {
        const addWord = (quantity = 20) => {
            const arrayDefaultDB = defaultData.split(" ")
            const dataTypingTest = []
            for (let index = 0; index < quantity; index++) {
                const position = Math.floor(Math.random() * arrayDefaultDB.length)
                dataTypingTest.push({
                    value: arrayDefaultDB[position],
                    status: null
                })
            }
            setDataTyping(dataTypingTest)
        }
        if (dataTyping.length === 0 || textTyping.position >= dataTyping.length) {
            addWord()
            setTextTyping({ ...textTyping, position: 0})
        }
    }, [textTyping.position])
    
    const handleChangeTyping = e => {
        const valueInput = e.target.value
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
        const dataCheck = dataTyping
        const wordCheck = dataCheck[textTyping.position].value
        if (textTyping.value === wordCheck) {
            dataCheck[textTyping.position].status = true
            onChangeScore("right")
        } else {
            dataCheck[textTyping.position].status = false
            onChangeScore("wrong");
        }
        setDataTyping(dataCheck)
        setTextTyping({
            value: "",
            position: textTyping.position + 1
        })
    }
    console.log(dataTyping)

    return (
      <Box className="playing-conceited" maxW="30rem" color="white">
        <UnorderedList
          className="list"
          borderRadius="xl"
          boxShadow="dark-lg"
          ml="0"
          mb="2rem"
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
