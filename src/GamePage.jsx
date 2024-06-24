import {
  Button,
  Box,
  Image,
  IconButton,
  useColorModeValue,
  Tooltip
} from "@chakra-ui/react";
import React, { useEffect, useState, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { getCurrentUserProfile } from "./apis";
import { AuthContext } from "./ContextProvider";
import { useToast } from "@chakra-ui/react";

import Rose from "./public/assets/princes_planet.png"
import King from "./public/assets/kings_planet.png";
import Conceited from "./public/assets/conceited_planet.png";
import Drunkard from "./public/assets/drunkard_planet.png";
import LockedDrunkard from "./public/assets/lockedDrunkard.png";
import Business from "./public/assets/businessmna_planet.png";
import Lamplighter from "./public/assets/lamplighter_planet.png";
import Geographer from "./public/assets/geographer_planet.png";
import LockedGeographer from "./public/assets/lockedGeographer.png"
import Earth from "./public/assets/earth.png";



const planets = [
  {
    id: 1,
    name: "Princes Home Planet",
    image: Rose,
    unlockedImage: Rose,
    gameRoute: "/rose",
    locked: true,
    requiredPoints: "2,000pts",
  },
  {
    id: 2,
    name: "Asteroid 325",
    image: King,
    unlockedImage: King,
    gameRoute: "/king",
    locked: true,
    requiredPoints: "2,500pts",
  },
  {
    id: 3,
    name: "Asteroid 326",
    image: Conceited, // Starting Game Planet
    unlockedImage: Conceited,
    gameRoute: "/conceited",
    locked: false,
    requiredPoints: "",
  },
  {
    id: 4,
    name: "Asteroid 327",
    image: LockedDrunkard, // Next Easiest Planet
    unlockedImage: Drunkard,
    gameRoute: "/drunkard",
    locked: true, // Used to be false
    requiredPoints: "50pts",
  },
  {
    id: 5,
    name: "Asteroid 328",
    image: Business,
    unlockedImage: Business,
    gameRoute: "/business",
    locked: true,
    requiredPoints: "3,000pts",
  },
  {
    id: 6,
    name: "Asteroid 329",
    image: Lamplighter,
    unlockedImage: Lamplighter,
    gameRoute: "/lamplighter",
    locked: true,
    requiredPoints: "3,500pts",
  },
  {
    id: 7,
    name: "Asteroid 330",
    image: LockedGeographer, // Last Planet with a functioning game
    unlockedImage: Geographer,
    gameRoute: "/geographer",
    locked: true, // Used to be false
    requiredPoints: "150pts",
  },
  {
    id: 8,
    name: "Earth",
    image: Earth,
    unlockedImage: Earth,
    gameRoute: "/earth",
    locked: true,
    requiredPoints: "10,000pts",
  },
];

const GamePage = ({ updatedPlanets }) => {
    const { auth, profile } = useContext(AuthContext);
    const navigate = useNavigate()    
    const toast = useToast()

    
  const handleSubmit = () => {
      navigate("/profile");
    }
  
  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    auth.setAccessToken(null)
    toast({
      title: "Logout Successful",
      description: "You've been logged out.",
      status: "success",
      duration: 3000,
      position: "top",
      isClosable: false,
    });
    navigate("/");
  };
  
  const handlePlanetClick = (planet) => {
    if (planet.locked) {
      toast({
        title: "Planet Locked",
        description: "You need more points to unlock this planet.",
        status: "warning",
        position: "top",
        duration: 2000,
      });
    } else {
      navigate(planet.gameRoute)
      } 
    }

  const waveAmplitude = 35
  const waveFrequency = 23.5
    

  return (
    <>
      <Box
        className="stars"
        position="relative"
        width="100%"
        height="100vh"
        backgroundColor="black"
        display="flex"
        overflow="hidden" // No overflow stars. Need to make sure its mobile friendly
        justifyContent="right"
      >
        <Box
          className="twinkling"
          position="absolute"
          width="10000px"
          height="100%"
          backgroundImage="url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/twinkling.png')"
          backgroundRepeat="repeat"
          backgroundSize="1000px 1000px"
          animation="move-background 70s linear infinite"
        />
        
        <IconButton
          aria-label="view profile info"
          icon={<CgProfile />}
          onClick={handleSubmit}
          zIndex="3"
          marginTop=".5rem"
          maxW="1.5rem"
          _hover={{
            transform: "scale(1.05)",
          }}
        />
        <IconButton
          aria-label="logout button"
          icon={<IoIosLogOut />}
          onClick={handleLogOut}
          zIndex="3"
          margin=".5rem"
          maxW="1.5rem"
          _hover={{
            transform: "scale(1.05)",
          }}
        />
        {planets.map((planet, index) => (  // Mapping over planets
          <Box
            key={planet.id}
            position="absolute"
            top={`${40 + waveAmplitude * Math.sin(waveFrequency * index)}%`}
            left={`${8 + index * 12}%`}
            transform="translate(-50%, -10%)"
            zIndex="3"
          >
            <Tooltip
              label={`${planet.name} ${"\b\r"} ${planet.requiredPoints}`}
              placement="top"
              hasArrow
              fontSize="xl"
              fontWeight="bold"
              offset={[0, -50]}
            >
              <Button
                onClick={() => handlePlanetClick(planet)}
                variant="unstyled"
                boxShadow="none"
                border="none"
                bg="none"
                _hover={{
                  transform: "scale(1.15)",
                  boxShadow: "none", // Ensuring no shadow on hover
                  borderColor: "purple",
                }}
                _focus={{
                  boxShadow: "none", // Ensuring no shadow on focus
                }}
                _active={{
                  boxShadow: "none", // Ensuring no shadow when active (clicked)
                }}
                transition="transform 0.2s"
              >
                <Image
                  src={planet.locked ? planet.image : planet.unlockedImage} // Handles which image to put
                  alt={planet.name}
                  boxSize={{
                    base: "120px",
                    sm: "150px",
                    md: "170px",
                    lg: "190px",
                  }}
                />
              </Button>
            </Tooltip>
            {index < planets.length - 1 && (
              <Box
                position="absolute"
                width="100px"
                height="2px"
                top="50%"
                left="50%"
              />
            )}
          </Box>
        ))}
      </Box>
    </>
  );
};

export default GamePage;
