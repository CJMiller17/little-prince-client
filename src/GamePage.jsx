import {
  Button,
  Box,
  Image,
  IconButton,
  useColorModeValue
} from "@chakra-ui/react";
import React, { useEffect, useState, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { getCurrentUserProfile } from "./apis";
import { AuthContext } from "./ContextProvider";

const planets = [
  {
    id: 1,
    name: "Rose",
    image: "src/public/assets/princes_planet.jpg", // Why does the name appear behind the image?
    gameRoute: "/rose",
  },
  {
    id: 2,
    name: "King",
    image: "src/public/assets/kings_planet.jpg", // Why does the name appear behind the image?
    gameRoute: "/king",
  },
  {
    id: 3,
    name: "Conceited Man",
    image: "src/public/assets/conceited_planet.jpg",
    gameRoute: "/conceited",
  },
  {
    id: 4,
    name: "Drunkard",
    image: "src/public/assets/drunkard_planet.jpg",
    gameRoute: "/drunkard",
  },
  {
    id: 5,
    name: "Business Man",
    image: "src/public/assets/businessman_planet.jpg",
    gameRoute: "/business",
  },
  {
    id: 6,
    name: "Lamplighter",
    image: "src/public/assets/lamplighter_planet.jpg",
    gameRoute: "/lamplighter",
  },
  {
    id: 7,
    name: "Geographer",
    image: "src/public/assets/geographer_planet.jpg",
    gameRoute: "/geographer",
  },
  {
    id: 8,
    name: "Earth",
    image: "src/public/assets/earth.jpg",
    gameRoute: "/earth",
  },
];

const GamePage = () => {
    const { auth, profile } = useContext(AuthContext);
    const navigate = useNavigate()    

    const handleSubmit = () => {
    console.log("HANDLE SUBMIT Token: ", auth.accessToken)
    getCurrentUserProfile(auth.accessToken)
      .then((response) => {
        console.log("Data: ", response.data);
        profile.setProfileData(currentData => ({
          ...currentData, profileData: response.data
        }))
        navigate("/profile");
      })
      .catch((error) => {
        console.log("Error Logging In: ", error);
      });
    }
  
  const handlePlanetClick = (route) => {
      navigate(route)
    }

    

  return (
    <>
      <Box
        position="relative"
        width="100%"
        height="100vh"
        // backgroundColor="black"
      >
        {planets.map((planet, index) => (
          <Box
            key={planet.id}
            position="absolute"
            top={`${index * 20 + 10}%`}
            left={`${index * 10 + 10}%`}
            transform="translate(-50%, -50%)"
            
          >
            <Button
              onClick={() => handlePlanetClick(planet.gameRoute)}
              variant="outlined"
              boxShadow="none"
              bg="none"
              color="black"
            >
              <Image src={planet.image} alt={planet.name} boxSize="200px" borderRadius="10%" />
            </Button>
            {index < planets.length - 1 && (
              <Box
                position="absolute"
                width="100px"
                height="2px"
                top="50%"
                left="50%"
                transform="translateX(-50%) translateY(-50%)"
              />
            )}
          </Box>
        ))}
      </Box>

      <IconButton
        aria-label="upload profile image"
        icon={<CgProfile />}
        isRound
        onClick={handleSubmit}
      />
    </>
  );
};

export default GamePage;
