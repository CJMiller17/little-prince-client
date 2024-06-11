import Home from "./Home"
import PlayGame from "./PlayGame"
import EndGame from "./EndGame"
import { useEffect, useState } from "react"

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