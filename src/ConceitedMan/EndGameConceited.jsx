import { Box, Button, Heading, SimpleGrid, Text, IconButton } from "@chakra-ui/react";
import "./Conceited.css";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../ContextProvider";
import { updateUser } from "../apis"


const EndGame = ({ score, onGame }) => {
  
    const { auth, profile } = useContext(AuthContext);

  const handleUpdateConceitedScore = () => {
      // console.log("handleUpdateConceitedScore called");
      const trueScore =
        profile.profileData.profileData.score_conceited_man + score.right;

      updateUser({
        profilePrimaryKey: profile.profileData.profileData.id,
        accessToken: auth.accessToken,
        scoreConceited: trueScore,
      }).then((r) => {
        // console.log("updateUser successful", r);
        profile.setGameOn(false);
      });
    };

    useEffect(() => {
      handleUpdateConceitedScore();
    }, []);

    return (
      <Box
        className="endGame"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <SimpleGrid columns={2} spacing="3rem" mb="3rem" color="white" textAlign="center">
          <div>
            <Heading
              textDecoration="underline"
              fontFamily="Amatic SC"
              size="2xl"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
            >
              Right Word
            </Heading>
            <Text
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
            variant="solid"
            onClick={() => onGame("playGame")}
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
            boxShadow="0 10px 10px #0003"
          />
        </SimpleGrid>
      </Box>
    );
};

export default EndGame;
