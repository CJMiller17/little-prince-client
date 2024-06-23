import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  ButtonGroup,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Homepage = () => {
  
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
              // textShadow="2px 1px 0px  gray"
            >
              A 'Le Petit Prince' Adventure Game
            </Heading>
            <Text color="gray.500" fontSize="xl">
              The Little Prince has come back and is looking for Antoine. Help
              him find the pilot as he recounts his adventures.
            </Text>

            <ButtonGroup
              justifyContent="space-between"
            >
              <Button
                variant="solid"
                as={Link}
                to="/login"
              >
                Returning?
              </Button>

              <Button
                variant="outline"
                as={Link}
                to="/register"
              >
                New?
              </Button>

              <Button
                variant="outline"
                as={Link}
                to="/about"
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
