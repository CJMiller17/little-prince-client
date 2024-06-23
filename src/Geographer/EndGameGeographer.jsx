import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  IconButton,
} from "@chakra-ui/react";
import "./Geographer.css";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";

const EndGame = ({ score, onGame }) => {
  return (
    <Box
      className="endGame"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Heading
        color="white"
        fontFamily="Amatic SC"
        size="2xl"
        style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
      >
        You didn't solve the puzzle...
      </Heading>
      <Text
        color="white"
        fontSize="2xl"
        style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
      >
        Better luck next time!
      </Text>
      <SimpleGrid
        columns={2}
        display="flex"
        justifyContent="center"
        spacing="3"
        mt="4rem"
      >
        <Button variant="solid" onClick={() => onGame("playGame")}>
          Play Again
        </Button>
        <IconButton
          size="md"
          maxW="1.5rem"
          p=".2rem"
          alignSelf="center"
          _hover={{ bgColor: "gray" }}
          _active={{ color: "#FBD154" }}
          aria-label="home button"
          icon={<IoHome />}
          as={Link}
          to="/gamepage"
          boxShadow="0 10px 10px #0003"
        />
      </SimpleGrid>
    </Box>
  );
};

export default EndGame;
