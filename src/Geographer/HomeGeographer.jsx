import {
  Button,
  Heading,
  Stack,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  IconButton,
  SimpleGrid,
} from "@chakra-ui/react";
import { IoHome } from "react-icons/io5";
import "./Geographer.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = ({ onGame }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="home">
      <Heading
        fontSize="7xl"
        textAlign="center"
        color="white"
        textShadow="0 10px 10px #000"
        fontFamily="Amatic SC"
        mt="-3rem"
      >
        The Geographer
      </Heading>
      <Text
        textShadow="0 10px 10px #000"
        fontSize="xl"
        textAlign="center"
        color="white"
      >
        Asteroid 330
      </Text>
      <Stack display="flex" alignItems="center">
        <Button variant="solid" mt="3rem" onClick={() => onGame("playGame")}>
          Play Game
        </Button>
        <SimpleGrid
          columns={2}
          display="flex"
          justifyContent="center"
          spacing="3"
        >
          <Button variant="solid" onClick={onOpen} maxW="3.9rem" size="xs">
            Rules
          </Button>
          <IconButton
            size=".5rem"
            maxW="1.5rem"
            p=".2rem"
            alignSelf="center"
            _hover={{ bgColor: "gray" }}
            _active={{ color: "#FBD154" }}
            aria-label="home button"
            icon={<IoHome />}
            as={Link}
            to="/gamepage"
            boxShadow="0 10px 10px #0003"
          />
        </SimpleGrid>
      </Stack>
      <RulesModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default Home;

const RulesModal = ({ isOpen, onClose }) => {
  const [scrollBehavior, setScrollBehavior] = useState("inside");

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={scrollBehavior}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="3xl" textAlign="center" color="#3C6286">
            Geographer Gameplay Rules
          </ModalHeader>
          <ModalHeader
            color="#C67E63"
            fontSize="xl"
            textAlign="center"
            mt="-2rem"
            textShadow="0 5px 5px #0003"
          >
            Slider Puzzle Game
          </ModalHeader>
          <ModalBody color="#3C6286">
            The Little Prince landed on a planet where the only inhabitant is a
            geographer who has never traveled or explored. The Little Prince is
            having a hard time piecing together a map to show the geographer his
            own planet. It is up to you to{" "}
            <em>
              <strong>SLIDE</strong>
            </em>{" "}
            all the map pieces together correctly in order to help the Little
            Prince move onto the next planet.
            <Text fontSize="md" color="#C67E63" mt=".5rem">
              Note: You can choose a harder difficulty, but the timer doesn't stop. Choose wisely and choose quickly!
              The larger the puzzle, the larger the reward!
            </Text>
          </ModalBody>
          <ModalFooter alignSelf="center">
            <Button
              onClick={onClose}
              _hover={{ bgColor: "#82B0E1" }}
              _active={{ color: "#FBD154" }}
            >
              Got it!
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
