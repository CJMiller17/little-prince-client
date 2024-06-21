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
  SimpleGrid
} from "@chakra-ui/react";
import { IoHome } from "react-icons/io5";
import "./Conceited.css";
import { Link } from "react-router-dom";

const Home = ({ onGame }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="home">
      <Heading
        fontSize="7xl"
        textAlign="center"
        textShadow="0 10px 10px #000"
        fontFamily="Amatic SC"
        mt="-3rem"
      >
        The Conceited Man
      </Heading>
      <Text textShadow="0 10px 10px #000" fontSize="xl" textAlign="center">
        Asteroid 326
      </Text>
      <Stack>
        <Button
          mt="3rem"
          onClick={() => onGame("playGame")}
          colorScheme="customDarkBlue"
          _hover={{ bgColor: "gray" }}
          _active={{ color: "#FBD154" }}
        >
          Play Game
        </Button>
        <SimpleGrid columns={2} display="flex" justifyContent="center" spacing="3">
          <Button
            margin="0"
            colorScheme="customDarkBlue"
            onClick={onOpen}
            _hover={{ bgColor: "gray" }}
            _active={{ color: "#FBD154" }}
            size="xs"
          >
            Rules
          </Button>
          <IconButton
            size=".5rem"
            maxW="1.5rem"
            p=".2rem"
            alignSelf="center"
            colorScheme="customDarkBlue"
            _hover={{ bgColor: "gray" }}
            _active={{ color: "#FBD154" }}
            aria-label="home button"
            icon={<IoHome />}
            as={Link}
            to="/gamepage"
            boxShadow="0 10px 10px #0005"
          />
        </SimpleGrid>
      </Stack>
      <RulesModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default Home;


const RulesModal = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="3xl" textAlign="center" color="#3C6286">
            Conceited Man Gameplay Rules
          </ModalHeader>
          <ModalCloseButton
            color="white"
            bg="#3C6286"
            _hover={{ bgColor: "#82B0E1" }}
            _active={{ color: "#FBD154" }}
          />
          <ModalBody color="#3C6286">
            These are the rules. Many much rules are we!
          </ModalBody>

          <ModalFooter alignSelf="center">
            <Button
              colorScheme="customDarkBlue"
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
}