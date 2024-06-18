import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUserProfile, deleteUser } from "./apis";
import { AuthContext } from "./ContextProvider";

export default function ProfilePage({ username, name, avatar }) {
    const [profile, setProfile] = useState(null)
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate()
    
    console.log("Props?: ", auth.accessToken)

    const handleDelete = () => {
        deleteUser(auth, profile.id)
            .then(() => {
                console.log("User profile deleted")
                navigate("/")
            })
            .catch((error) => {
            console.log("Deletion error: ", error)
        })
    }

    console.log("Props Now?: ", username, name, avatar);

    // useEffect(() => {
    //   getCurrentUserProfile(auth.accessToken)
    //     .then((response) => {
    //       setProfile(response.data);
    //     })
    //     .catch((error) => {
    //       console.log("Error fetching profile: ", error);
    //     });
    // }, [auth.accessToken]);

  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={avatar}
          mb={4}
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
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {name}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          @{username}
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          Scores: Birds: Rare Items:
        </Text>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #NewPlayer
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #Unlocked 3 Planets
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #BirdCollector
          </Badge>
        </Stack>

        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            _focus={{
              bg: "gray.200",
            }}
          >
            Close
          </Button>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
          >
            Update
          </Button>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"red.400"}
                      color={"white"}
                      onClick={handleDelete}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "red.500",
            }}
            _focus={{
              bg: "red.600",
            }}
          >
            Delete
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
