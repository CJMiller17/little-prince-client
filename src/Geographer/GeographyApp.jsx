import Home from "./HomeGeographer";
import PlayGame from "./PlayGameGeographer";
import EndGame from "./EndGameGeographer";
import { useEffect, useState } from "react";

function GeographerApp() {
  const [statusGame, setStatusGame] = useState(null);
  const [score, setScore] = useState(null);
  const [timeLeft, setTimeLeft] = useState(300); //For clock purposes

  useEffect(() => {
    if (statusGame === "playGame") {
      setScore({
        right: 0,
        wrong: 0,
      });

      const timeOutGame = setTimeout(() => {
        setStatusGame("endGame");
      }, 300000);
      // return () => clearTimeout(timeOutGame);

      const intervalTimer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft <= 1) {
            clearInterval(intervalTimer);
            return 0;
          }
          return prevTimeLeft - 1;
        });
      }, 1000); // Decrementing clock feature by 1 second every second

      return () => {
        clearTimeout(timeOutGame);
        clearInterval(intervalTimer);
      };
    }
  }, [statusGame]);

  const handleChangeStatus = (status) => {
    setStatusGame(status);
  };

  const handleChangeScore = (type) => {
    if (type === "right") {
      setScore({
        ...score,
        right: score.right + 1,
      });
    } else {
      setScore({
        ...score,
        wrong: score.wrong + 1,
      });
    }
  };

  let layout;

  switch (statusGame) {
    case "playGame":
      layout = (
        <PlayGame
          onChangeScore={handleChangeScore}
          score={score}
          timeLeft={timeLeft}
        />
      );
      break;
    case "endGame":
      layout = <EndGame score={score} onGame={handleChangeStatus} />;
      break;
    default:
      layout = <Home onGame={handleChangeStatus} />;
      break;
  }

  return <div className="App">{layout}</div>;
}

export default GeographerApp;
