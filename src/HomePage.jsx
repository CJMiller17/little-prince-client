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
        boxShadow={{ base: "none", sm: "md" }}
        borderRadius={{ base: "none", sm: "xl" }}
      >
        <Stack spacing="6">
          <Heading size={{ base: "xs", md: "sm" }}>
            The Little Prince Game
          </Heading>
          <Text color="gray.500">
            The Little Prince returns and is looking for Antoine. Help him find
            the pilot as he recounts his adventures.
          </Text>

          <ButtonGroup spacing="6">
            <Button colorScheme="blue" variant="solid" as={Link} to="/login">
              Returning?
            </Button>

            <Button
              colorScheme="blue"
              variant="outline"
              as={Link}
              to="/register"
            >
              New?
            </Button>

            <Button colorScheme="blue" variant="outline" as={Link} to="/about">
              About
            </Button>
          </ButtonGroup>
        </Stack>
      </Box>
    </Stack>

    <Button colorScheme="blue" variant="outline" as={Link} to="/lamplighter">
      LampLighter
    </Button>

    <Button colorScheme="blue" variant="outline" as={Link} to="/conceited">
      Conceited Man
    </Button>

    <Button colorScheme="blue" variant="outline" as={Link} to="/drunkard">
      Drunkard
    </Button>

    <Button colorScheme="blue" variant="outline" as={Link} to="/business">
      Business Man
    </Button>
  </Container>
);

export default Homepage
