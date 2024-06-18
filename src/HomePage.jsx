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

const Homepage = () => (
  <Container
    maxW="lg"
    py={{ base: "12", md: "24" }}
    px={{ base: "0", sm: "8" }}
  >
    <Stack spacing="8">
      <Box
        py={{ base: "0", sm: "8" }}
        px={{ base: "4", sm: "10" }}
        bg={{ base: "transparent", sm: "white" }}
        boxShadow="dark-lg"
        borderRadius="xl"
      >
        <Stack spacing="6">
          <Heading fontFamily="Lobster Two" color="#3C6286">
            The Little Prince Game
          </Heading>
          <Text color="gray.400">
            The Little Prince has come back and is looking for Antoine. Help him
            find the pilot as he recounts his adventures.
          </Text>

          <ButtonGroup spacing="6" colorScheme="customDarkBlue">
            <Button variant="solid" as={Link} to="/login">
              Returning?
            </Button>

            <Button color="#3C6286" variant="outline" as={Link} to="/register">
              New?
            </Button>

            <Button color="#3C6286" variant="outline" as={Link} to="/about">
              About
            </Button>
          </ButtonGroup>
        </Stack>
      </Box>
    </Stack>
  </Container>
);

export default Homepage
