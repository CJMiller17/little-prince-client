import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  IconButton,
  Container,
} from "@chakra-ui/react";
import "./Drunkard.css";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { updateUser } from "../apis"; 
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../ContextProvider";

const EndGame = ({ score, onGame }) => {

  const { auth, profile } = useContext(AuthContext);
  
  const handleUpdateDrunkardScore = () => {
    const trueScore = profile.profileData.profileData.score_drunkard + score.total

    updateUser({
      profilePrimaryKey: profile.profileData.profileData.id,
      accessToken: auth.accessToken,
      scoreDrunkard: trueScore,
    })
      .then(
        r => {
          profile.setGameOn(false)
        }
    )
  }

  useEffect(() => {
    handleUpdateDrunkardScore()
  },[])


  return (
    <Container
      className="endGame"
      display="flex"
      flexDirection="column"
      alignItems="center"
      // onLoad={handleUpdateDrunkardScore}
    >
      <SimpleGrid columns={1} spacing="3rem" mb="3rem" color="white">
        <div>
          <Heading
            textDecoration="underline"
            size="3xl"
            textAlign="center"
            fontFamily="Amatic SC"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
          >
            Score
          </Heading>
          <Text
            textAlign="center"
            fontSize="5rem"
            textShadow="2px 2px 4px rgba(0,0,0,0.5)"
          >
            {score.total}
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
          _hover={{ bgColor: "gray" }}
          _active={{ color: "#FBD154" }}
          aria-label="home button"
          icon={<IoHome />}
          as={Link}
          to="/gamepage"
          boxShadow="0 10px 10px #0005"
        />
      </SimpleGrid>
    </Container>
  );
};

export default EndGame;
