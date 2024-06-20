import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
import "./Conceited.css";

const Home = ({ onGame }) => {
  return (
    <div className="home">
      <div className="title">The Conceited Man</div>
      <div className="author">Asteroid 326</div>
      <Stack direction="column" spacing="1"> 
        <Button onClick={() => onGame("playGame")} className="btnPlay">
          Play Game
        </Button>

        <Button
          size="xs"
          onClick={() => onGame("playGame")}
          className="btnPlay"
        >
          Rules
        </Button>
      </Stack>
    </div>
  );
};

export default Home;
