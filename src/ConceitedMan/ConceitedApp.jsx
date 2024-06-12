import Home from "./Home"
import PlayGame from "./PlayGame"
import EndGame from "./EndGame"
import { useEffect, useState } from "react"

// Future implementation of openAi to generate the paragraph:

/*
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "your-api-key",
});
const openai = new OpenAIApi(configuration);

async function generateText(prompt) {
  const response = await openai.createCompletion({
    model: "text-davinci-004",
    prompt: prompt,
    max_tokens: 150,
  });
  return response.data.choices[0].text;
}

const prompt =
  "Write a paragraph in the style of 'Le Petit Prince' where the conceited man talks about himself.";
generateText(prompt).then((text) => console.log(text));
*/




function ConceitedApp() {
    const [statusGame, setStatusGame] = useState(null)
    const [score, setScore] = useState(null)

    useEffect(() => {
        if (statusGame === "playGame") {
            setScore({
                right: 0,
                wrong: 0
            })
            const timeOutGame = setTimeout(() => {
               setStatusGame("endGame")
            }, 60000)
           return () => clearTimeout(timeOutGame) 
        }
    }, [statusGame])

    const handleChangeStatus = (status) => {
        setStatusGame(status)
    }

    const handleChangeScore = (type) => {
        if (type === "right") {
            setScore({
                ...score,
                right: score.right +1
            })
        } else {
            setScore({
                ...score,
                wrong: score.wrong + 1
            })
        }
    } 

    let layout
    
    switch (statusGame) {
        case "playGame":
            layout = <PlayGame onChangeScore={handleChangeScore}/>
            break
        case "endGame":
            layout = <EndGame score={score} onGame={handleChangeStatus}/>
            break
        default:
            layout = <Home onGame={handleChangeStatus} />
            break
    }
    
    return (
        <div className="App">
            { layout }
        </div>
    )
}

export default ConceitedApp