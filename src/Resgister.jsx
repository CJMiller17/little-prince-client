import { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputGroup,
  Textarea,
  Text,
  FormHelperText,
  InputRightElement,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  IconButton,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { Link, Link as RouterLink, useNavigate } from "react-router-dom";
import { createUser } from "./apis"



export default function Multistep() {
  const toast = useToast();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);

  //State for the form data
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    avatar: null,
    butterflies: false,
    elephants: 0,
    games: "",
    color: "",
    birds: 0,
    scorePrince: 0,
    scoreKing: 0,
    scoreConceited: 0,
    scoreDrunkard: 0,
    scoreBusiness: 0,
    scoreLamplighter: 0,
    scoreGeographer: 0,
    scoreEarth: 0,
    scoreTotal: 0,
    item1: 0,
    item2: 0,
    item3: 0
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = value === "true" || value === "false" ? value === "true" : value
    setFormData({
      ...formData,
      [name]: parsedValue,
    });
  };

  const handleSubmit = () => {
    console.log("Form Data: ", formData)
    createUser(formData);
    toast({
      //Maybe change this depending on backend response?
      title: "Account Created Successfully",
      description: "You're account has been created successfully!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    // navigate("/");
}

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        {step === 1 ? (
          <Form1 formData={formData} handleInputChange={handleInputChange} />
        ) : step === 2 ? (
          <Form2 formData={formData} handleInputChange={handleInputChange} />
        ) : (
          <Form3 formData={formData} handleInputChange={handleInputChange} />
        )}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              {step === 1 ? (
                <Button
                  onClick={() => {
                    setStep(step - 1);
                    setProgress(progress - 33.33);
                  }}
                  colorScheme="teal"
                  variant="solid"
                  w="7rem"
                  mr="5%"
                  as={Link}
                  to="/"
                >
                  Home
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    setStep(step - 1);
                    setProgress(progress - 33.33);
                  }}
                  colorScheme="teal"
                  variant="solid"
                  w="7rem"
                  mr="5%"
                >
                  Back
                </Button>
              )}
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}

const Form1 = ({ formData, handleInputChange }) => {
  
  return (
    <>
      <Heading
        fontFamily="Lobster Two"
        w="100%"
        textAlign={"center"}
        fontWeight="normal"
        mb="2%"
      >
        You must be new!
      </Heading>
      <Text textAlign="center" fontSize={"small"} mb="10">
        Let's get to know one another
      </Text>

      <Flex>
        <FormControl>
          <FormLabel htmlFor="sound" fontWeight={"normal"}>
            What's your favorite sound?
          </FormLabel>
          <Input
            id="sound"
            name="sound"
            placeholder="ex. Splashing, giggling, etc..."
            color="blue"
          />
        </FormControl>

        <FormControl ml="5%">
          <FormLabel htmlFor="butterflies" fontWeight={"normal"}>
            Do you collect butterflies?
          </FormLabel>
          <Select
            id="butterflies"
            name="butterflies"
            placeholder="Let me think..."
            focusBorderColor="brand.400"
            shadow="md"
            size="md"
            w="full"
            rounded="md"
            onChange={handleInputChange}
            value={formData.butterflies}
          >
            <option value="true">Yes I do!</option>
            <option value="false">No, not really...</option>
          </Select>
        </FormControl>
      </Flex>

      <Text fontSize={"md"} mt="5%">
        I can tell that I am going to like you!
      </Text>
    </>
  );
};

const Form2 = ({formData, handleInputChange}) => {
  return (
    <>
      <Heading
        fontFamily="Lobster Two"
        w="100%"
        textAlign={"center"}
        fontWeight="normal"
        mb="2%"
      >
        To see with our hearts...
      </Heading>

      <SimpleGrid columns={2} spacing={5} mb="3%">
        <FormControl>
          <FormLabel htmlFor="color" fontWeight={"normal"}>
            What color moves you?
          </FormLabel>
          <Input
            id="color"
            name="color"
            placeholder="ex. auburn, fuchsia, flaxen..."
            onChange={handleInputChange}
            value={formData.color}
            color="blue"
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="elephants" fontWeight={"normal"}>
            How many elephants can fit on your planet?
          </FormLabel>
          <NumberInput>
            <NumberInputField
              id="elephants"
              name="elephants"
              min={0}
              onChange={handleInputChange}
              value={formData.elephants}
              color="blue"
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
      </SimpleGrid>

      <FormControl id="best-friend" mt={1}>
        <FormLabel
          fontSize="md"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          How does your best friend make you feel?
        </FormLabel>
        <Textarea
          placeholder="ex. They make me feel..."
          rows={3}
          shadow="sm"
          focusBorderColor="brand.400"
          fontSize={{
            sm: "sm",
          }}
          onChange={handleInputChange}
          value={formData.bestFriend}
          color="blue"
        />
        <FormHelperText></FormHelperText>
      </FormControl>
    </>
  );
};

const Form3 = ({formData, handleInputChange}) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  
  return (
    <>
      <Heading
        fontFamily="Lobster Two"
        w="100%"
        textAlign={"center"}
        fontWeight="normal"
      >
        What is essential...
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl mr="5%" mb="2%">
          <FormLabel htmlFor="name" fontWeight={"normal"}>
            What do the adults call you?
          </FormLabel>
          <Input
            id="name"
            name="name"
            placeholder="First Name"
            onChange={handleInputChange}
            value={formData.name}
            color="blue"
          />

          <FormHelperText fontSize="xs" as="sup">
            Enter a name you want to be referred to
          </FormHelperText>
        </FormControl>

        <FormControl>
          <IconButton
            aria-label="upload profile image"
            icon={<CgProfile />}
            isRound
          />
          <Input
            type="file"
            accept=".png, .jpg, .jpeg"
            name="avatar"
            onChange={handleInputChange}
          />
          <FormHelperText fontSize="xs" as="sup">
            Upload a profile image
          </FormHelperText>
        </FormControl>

        <FormControl mr="5%">
          <FormLabel htmlFor="username" fontWeight={"normal"}>
            What would you like to be called?
          </FormLabel>
          <Input
            id="username"
            name="username"
            placeholder="Username"
            onChange={handleInputChange}
            value={formData.username}
            color="blue"
          />
          <FormHelperText fontSize="xs" as="sup">
            Create a unique username
          </FormHelperText>
        </FormControl>

        <SimpleGrid columns={2} spacing={5}>
          <FormControl>
            <FormLabel htmlFor="password" fontWeight={"normal"} mb="2%">
              Password:
            </FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                name="password"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                onChange={handleInputChange}
                value={formData.password}
                color="blue"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="confirm-password" fontWeight={"normal"} mb="2%">
              Confirm Password:
            </FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                name="confirmPassword"
                type={show ? "text" : "password"}
                placeholder="Confirm password" // I need to make a check where the two passwords are identical.
                color="blue"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </SimpleGrid>
      </SimpleGrid>
    </>
  );
};

