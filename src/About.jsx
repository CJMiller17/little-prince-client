import { IconButton, Heading, Container, Stack, ButtonGroup, Box, Text, Image} from "@chakra-ui/react";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import Fox from "../src/public/assets/fox.png"
import Prince from "../src/public/assets/le_prince.png";
import Rose from "../src/public/assets/rose.png";



function About() {
  return (
    <>
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
                size="2xl"
              >
                About The Little Prince Returns
              </Heading>
              <Text color="gray.500" fontSize="xl">
                It has been many years since our Little Prince first came to our
                planet, and now he has returned. He is eager to find Antoine so
                he can share with him all of his new adventures. But first he
                has to catch us up to speed as he retells of his original
                journey. As you play through the games on each planet, the
                Prince will reminisce about his travels. Can you help the our
                Prince find his friend?
              </Text>
              <Stack
                direction="row"
                display="flex"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Image
                  // borderRadius="full"
                  boxSize="100px"
                  src={Rose}
                  alt="The Rose from Le Petit Prince"
                />
                <Image
                  // borderRadius="full"
                  boxSize="200px"
                  src={Prince}
                  alt="The Prince from Le Petit Prince"
                />
                <Image
                  // borderRadius="full"
                  boxSize="120px"
                  src={Fox}
                  alt="The Fox from Le Petit Prince"
                />
              </Stack>
              <ButtonGroup display="flex" justifyContent="center">
                <IconButton
                  colorScheme="blue"
                  aria-label="home button"
                  icon={<IoHome />}
                  as={Link}
                  to="/"
                  width="1.5rem"
                  mr="5%"
                />
              </ButtonGroup>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </>
  );
}

export default About;