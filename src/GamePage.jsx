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
import { IoIosLogOut } from "react-icons/io";
import { getCurrentUserProfile } from "./apis";
import { AuthContext } from "./ContextProvider";
import Rose from "./public/assets/princes_planet.png"
import King from "./public/assets/kings_planet.png";
import Conceited from "./public/assets/conceited_planet.png";
import Drunkard from "./public/assets/drunkard_planet.png";
import Business from "./public/assets/businessmna_planet.png";
import Lamplighter from "./public/assets/lamplighter_planet.png";
import Geographer from "./public/assets/geographer_planet.png";
import Earth from "./public/assets/earth.png";







import { useToast } from "@chakra-ui/react";



const planets = [
  {
    id: 1,
    name: "Rose",
    image: Rose, // Why does the name appear behind the image?
    gameRoute: "/rose",
    locked: true,
  },
  {
    id: 2,
    name: "King",
    image: King, // Why does the name appear behind the image?
    gameRoute: "/king",
    locked: true,
  },
  {
    id: 3,
    name: "Conceited Man",
    image: Conceited,
    gameRoute: "/conceited",
    locked: false,
  },
  {
    id: 4,
    name: "Drunkard",
    image: Drunkard,
    gameRoute: "/drunkard",
    locked: false,
  },
  {
    id: 5,
    name: "Business Man",
    image: Business,
    gameRoute: "/business",
    locked: true,
  },
  {
    id: 6,
    name: "Lamplighter",
    image: Lamplighter,
    gameRoute: "/lamplighter",
    locked: true,
  },
  {
    id: 7,
    name: "Geographer",
    image: Geographer,
    gameRoute: "/geographer",
    locked: false,
  },
  {
    id: 8,
    name: "Earth",
    image: Earth,
    gameRoute: "/earth",
    locked: true,
  },
];

const GamePage = () => {
    const { auth, profile } = useContext(AuthContext);
    const navigate = useNavigate()    
    const toast = useToast()

    
  const handleSubmit = () => {
      navigate("/profile");
    }
  
  const handleLogout = () => {
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
          onClick={handleLogout}
          zIndex="3"
          margin=".5rem"
          maxW="1.5rem"
          _hover={{
            transform: "scale(1.05)",
          }}
        />
        {planets.map((planet, index) => (
          <Box
            key={planet.id}
            position="absolute"
            top={`${40 + waveAmplitude * Math.sin(waveFrequency * index)}%`}
            left={`${8 + index * 12}%`}
            transform="translate(-50%, -50%)"
            zIndex="3"
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
              <Image src={planet.image} alt={planet.name} boxSize="190px" />
            </Button>
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
