import { useEffect, useState } from "react"
import Home from "./HomeDrunkard"
import PlayGame from "./PlayGameDrunkard"
import EndGame from "./EndGameDrunkard"



function DrunkardApp() {
    const [statusGame, setStatusGame] = useState(null)
    const [score, setScore] = useState({})
    const [timeLeft, setTimeLeft] = useState(60); //For clock purposes
    const [cssEffects, setCSSEffects] = useState(null)

    useEffect(() => {
        if (statusGame === "playGame") {
            setScore({
                right: 0,
                wrong: 0,
                total: 0
            })

            const timeOutGame = setTimeout(() => {
               setStatusGame("endGame")
            }, 60000) // Time of how long a game lasts
            // return () => clearTimeout(timeOutGame)

            const intervalTimer = setInterval(() => {
                setTimeLeft((prevTimeLeft) => {
                    if (prevTimeLeft <= 1) {
                        clearInterval(intervalTimer)
                        return 0
                    }
                    return prevTimeLeft - 1
                })
            }, 1000) // Decrementing clock feature by 1 second every second
            
            return () => {
                clearTimeout(timeOutGame)
                clearInterval(intervalTimer)
            } 
        }
    }, [statusGame])

    const handleChangeStatus = (status) => {
        if (status === "playGame") {
            setTimeLeft(60)
        }
        setStatusGame(status)
    }

    const handleChangeScore = (type) => {
        if (type === "right") {
            setScore({
                ...score,
                right: score.right + 1,
                total: score.total + 1
            })
            setCSSEffects("correct")
        } else if (type === "wrong") {
            setScore({
              ...score,
              wrong: score.wrong + 1,
              total: score.total - 1,
            });
            setCSSEffects("incorrect")
        } else {
            return score
        }
    } 

    let layout
    
    switch (statusGame) {
        case "playGame":
            layout = <PlayGame
                onChangeScore={handleChangeScore}
                score={score}
                timeLeft={timeLeft}
                cssEffects={cssEffects}
                setCSSEffects={setCSSEffects} />
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

export default DrunkardApp