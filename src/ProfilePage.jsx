import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  IconButton,
  Badge,
  useColorModeValue,
  ButtonGroup
} from "@chakra-ui/react";
import { ArrowBackIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUserProfile, deleteUser } from "./apis";
import { AuthContext } from "./ContextProvider";
import { baseURL } from "./apis";

export default function ProfilePage({ username, name, avatar }) {
    const { auth, profile } = useContext(AuthContext);
    const navigate = useNavigate()
  
    console.log("Profile: ", profile)
    console.log("BaseURL: ", baseURL);
  
    const handleDelete = () => {
      console.log("Auth: ", auth, "Profile.id: ", profile)
          deleteUser(auth, profile.profileData.profileData.id)
            .then(() => {
              navigate("/");
            })
            .catch((error) => {
              console.log("Deletion error: ", error);
            });
      }

  
  const profileImage = baseURL + profile.profileData.profileData.profile_image;
  console.log("ProfileImage Path: ", profileImage)

  return (
    <Center py={{ base: "20" }} px={{ base: "0", sm: "8" }}>
      <Box
        width={"320px"}
        boxShadow="dark-lg"
        borderRadius="xl"
        rounded={"lg"}
        textAlign={"center"}
        py={{ base: "5" }}
      >
        <Avatar
          size={"2xl"}
          src={profileImage}
          mb={3}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: "green.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={"4xl"} fontFamily="Lobster Two" color="#3C6286">
          {profile.profileData.profileData.name}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={3} fontSize="sm">
          @{profile.profileData.profileData.account_name.username}
        </Text>
        <Text
          textAlign={"center"}
          color="#82B0E1"
          textDecoration="underline"
          fontSize={"1.5rem"}
          fontWeight={"xl"}
          mb={1}
        >
          Scores:
        </Text>

        <Stack align={"center"} justify={"center"} direction={"column"} mb={6}>
          <Badge
            px={2}
            py={1}
            color="#3C6286"
            minW="6.5rem"
            textAlign="left"
            bg={useColorModeValue("gray.100", "gray.800")}
            fontWeight={"xl"}
            fontSize="1rem"
          >
            Asteroid 326: {profile.profileData.profileData.score_conceited_man}
          </Badge>
          <Badge
            px={2}
            py={1}
            color="#3C6286"
            minW="6.5rem"
            textAlign="left"
            bg={useColorModeValue("gray.100", "gray.800")}
            fontWeight={"xl"}
            fontSize="1rem"
          >
            Asteroid 327: {profile.profileData.profileData.score_drunkard}
          </Badge>
          <Badge
            px={2}
            py={1}
            color="#3C6286"
            minW="6.5rem"
            textAlign="left"
            bg={useColorModeValue("gray.100", "gray.800")}
            fontWeight={"xl"}
            fontSize="1rem"
          >
            Asteroid 330: {profile.profileData.profileData.score_geographer}
          </Badge>
          <Badge
            px={2}
            py={1}
            color="#3C6286"
            minW="6.5rem"
            textAlign="left"
            bg={useColorModeValue("gray.300", "gray.800")}
            fontWeight={"xl"}
            fontSize="1rem"
          >
            Total Score: {profile.profileData.profileData.total_score}
          </Badge>
        </Stack>

        <ButtonGroup spacing="4" colorScheme="customDarkBlue">
          <IconButton
            flex={1}
            alignSelf={"center"}
            bgColor="#3C6286"
            color="white"
            fontSize="lg"
            variant="solid"
            textDecoration="none"
            _hover={{ bgColor: "gray" }}
            _active={{ color: "#FBD154" }}
            boxShadow="0 10px 10px #0003"
            as={Link}
            to="/gamepage"
            icon={<ArrowBackIcon />}
          >
            Back
          </IconButton>
          <IconButton
            flex={1}
            color="#3C6286"
            variant="outline"
            textDecoration="none"
            fontSize="lg"
            _hover={{ bgColor: "#B8D4E6" }}
            _active={{ color: "#FBD154" }}
            boxShadow="0 10px 10px #0003"
            icon={<EditIcon />}
          >
            Update
          </IconButton>
          <IconButton
            flex={1}
            bg={"#A3646D"}
            color={"white"}
            onClick={handleDelete}
            fontSize="lg"
            _hover={{ bgColor: "gray" }}
            _active={{ color: "#FBD154" }}
            boxShadow="0 10px 10px #0003"
            icon={<DeleteIcon />}
          >
            Delete
          </IconButton>
        </ButtonGroup>
      </Box>
    </Center>
  );
}
