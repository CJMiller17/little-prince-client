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
import Rose from '../src/public/assets/princes_planet.jpg'
import King from "../src/public/assets/kings_planet.jpg";
import Conceited from "../src/public/assets/conceited_planet.jpg";
import Drunkard from "../src/public/assets/drunkard_planet.jpg";
import Business from "../src/public/assets/businessman_planet.jpg";
import Lamplighter from "../src/public/assets/lamplighter_planet.jpg";
import Geographer from "../src/public/assets/geographer_planet.jpg";
import Earth from "../src/public/assets/earth.jpg";



const planets = [
  {
    id: 1,
    name: "Rose",
    image: Rose, // Why does the name appear behind the image?
    gameRoute: "/rose",
  },
  {
    id: 2,
    name: "King",
    image: King, // Why does the name appear behind the image?
    gameRoute: "/king",
  },
  {
    id: 3,
    name: "Conceited Man",
    image: Conceited,
    gameRoute: "/conceited",
  },
  {
    id: 4,
    name: "Drunkard",
    image: Drunkard,
    gameRoute: "/drunkard",
  },
  {
    id: 5,
    name: "Business Man",
    image: Business,
    gameRoute: "/business",
  },
  {
    id: 6,
    name: "Lamplighter",
    image: Lamplighter,
    gameRoute: "/lamplighter",
  },
  {
    id: 7,
    name: "Geographer",
    image: Geographer,
    gameRoute: "/geographer",
  },
  {
    id: 8,
    name: "Earth",
    image: Earth,
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
        <IconButton
          aria-label="upload profile image"
          icon={<CgProfile />}
          isRound
          onClick={handleSubmit}
        />
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
              <Image
                src={planet.image}
                alt={planet.name}
                boxSize="200px"
                borderRadius="10%"
              />
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
    </>
  );
};

export default GamePage;
