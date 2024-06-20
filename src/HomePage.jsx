import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  IconButton,
  InputGroup,
  InputRightElement,
  useDisclosure,
  useMergeRefs,
  ButtonGroup,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, {useEffect} from "react";

const Homepage = () => {
  
  // useEffect(() => {
  //   // Prevent scrolling
  //   document.body.style.overflow = "hidden";

  //   // Cleanup function to reset the overflow property
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [])

  return (
    <Container maxW="2xl" py={{ base: "20" }} px={{ base: "0", sm: "8" }}>
      <Stack spacing="8">
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "white" }}
          boxShadow="dark-lg"
          borderRadius="xl"
        >
          <Stack spacing="6">
            <Heading
              fontFamily="Lobster Two"
              color="#3C6286"
              textAlign="center"
              size="4xl"
            >
              The Little Prince Returns
            </Heading>
            <Heading
              fontFamily="Lobster Two"
              size="md"
              color="#B8D4E6"
              mt="-6"
              textAlign="center"
              textShadow="2px 1px 0px gray"
            >
              A 'Le Petit Prince' Adventure Game
            </Heading>
            <Text color="gray.500" fontSize="xl">
              The Little Prince has come back and is looking for Antoine. Help
              him find the pilot as he recounts his adventures.
            </Text>

            <ButtonGroup
              spacing="6"
              colorScheme="customDarkBlue"
              justifyContent="space-between"
            >
              <Button
                variant="solid"
                as={Link}
                to="/login"
                textDecoration="none"
                fontSize="lg"
                _hover={{ bgColor: "gray" }}
                _active={{ color: "#FBD154" }}
                boxShadow="0 10px 10px #0003"
              >
                Returning?
              </Button>

              <Button
                color="#3C6286"
                variant="outline"
                as={Link}
                to="/register"
                textDecoration="none"
                fontSize="lg"
                _hover={{ bgColor: "#B8D4E6" }}
                _active={{ color: "#FBD154" }}
                boxShadow="0 10px 10px #0003"
              >
                New?
              </Button>

              <Button
                color="#3C6286"
                variant="outline"
                as={Link}
                to="/about"
                textDecoration="none"
                fontSize="lg"
                _hover={{ bgColor: "#B8D4E6" }}
                _active={{ color: "#FBD154" }}
                boxShadow="0 10px 10px #0003"
              >
                About
              </Button>
            </ButtonGroup>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

export default Homepage
