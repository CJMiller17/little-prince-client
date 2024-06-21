import { Box, Button, Heading, SimpleGrid, Text, IconButton } from "@chakra-ui/react";
import "./Conceited.css";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";


const EndGame = ({ score, onGame}) => {
    return (
      <Box
        className="endGame"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <SimpleGrid columns={2} spacing="3rem" mb="3rem">
          <div>
            <Heading
              textDecoration="underline"
              size="2xl"
              textAlign="center"
              fontFamily="Amatic SC"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
            >
              Right Word
            </Heading>
            <Text
              textAlign="center"
              fontSize="5rem"
              textShadow="2px 2px 4px rgba(0,0,0,0.5)"
            >
              {score.right}
            </Text>
          </div>
          <div>
            <Heading
              textDecoration="underline"
              size="2xl"
              fontFamily="Amatic SC"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
            >
              Wrong Word
            </Heading>
            <Text
              textAlign="center"
              fontSize="5rem"
              textShadow="2px 2px 4px rgba(0,0,0,0.5)"
            >
              {score.wrong}
            </Text>
          </div>
        </SimpleGrid>
        <SimpleGrid
          columns={2}
          display="flex"
          justifyContent="center"
          spacing="3"
        >
          <Button
            colorScheme="customDarkBlue"
            onClick={() => onGame("playGame")}
            _hover={{ bgColor: "gray" }}
            _active={{ color: "#FBD154" }}
          >
            Play Again
          </Button>
          <IconButton
            size="md"
            maxW="1.5rem"
            p=".2rem"
            alignSelf="center"
            colorScheme="customDarkBlue"
            _hover={{ bgColor: "gray" }}
            _active={{ color: "#FBD154" }}
            aria-label="home button"
            icon={<IoHome />}
            as={Link}
            to="/gamepage"
            boxShadow="0 10px 10px #0005"
          />
        </SimpleGrid>
      </Box>
    );
};

export default EndGame;
