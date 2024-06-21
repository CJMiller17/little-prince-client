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
  console.log("This script is being run", auth)
  console.log("Profile Again: ", profile);
  console.log("Primary Key: ", profile.profileData.profileData.account_name.id,)
  

  const handleUpdateDrunkardScore = () => {
    console.log('Tot Score: ', score.total)
    const trueScore = profile.profileData.profileData.score_drunkard + score.total
    console.log("Prev Score: ", profile.profileData.profileData.score_drunkard);
    console.log("TS: ", trueScore)

    updateUser({
      profilePrimaryKey: profile.profileData.profileData.id,
      accessToken: auth.accessToken,
      scoreDrunkard: trueScore,
    })
      .then(
        r => {
          console.log('in the updateUser of Drunk Sam: ', trueScore)
          profile.setGameOn(false)
        }
    )
    //   .then(
    //   profile.setProfileData({
    //     ...profile.profileData.profileData,
    //     score_drunkard: trueScore
    //   }
    //   )
    // );
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
      <SimpleGrid columns={1} spacing="3rem" mb="3rem">
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
    </Container>
  );
};

export default EndGame;
