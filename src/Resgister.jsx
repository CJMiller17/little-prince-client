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
import { IoHome } from "react-icons/io5";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Form1 = () => {
  const [show, setShow] = useState(false);
  
  const handleClick = () => setShow(!show);
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
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
            placeholder="ex. Splashing, giggling, etc..."
            onChange={}
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
          >
            <option>Yes I do!</option>
            <option>No, not really...</option>
          </Select>
        </FormControl>
      </Flex>

      <Text fontSize={"md"} mt="5%">
        I can tell that I am going to like you!
      </Text>
    </>
  );
};

const Form2 = () => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        To see with our hearts
      </Heading>

      <SimpleGrid columns={2} spacing={5} mb="3%">
        <FormControl>
          <FormLabel htmlFor="color" fontWeight={"normal"}>
            What color moves you?
          </FormLabel>
          <Input id="color" placeholder="ex. auburn, fuchsia, flaxen..." />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="elephants" fontWeight={"normal"}>
            How many elephants can fit on your planet?
          </FormLabel>
          <NumberInput>
            <NumberInputField id="elephants" />
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
        />
        <FormHelperText></FormHelperText>
      </FormControl>
    </>
  );
};

const Form3 = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        What is essential...
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl mr="5%" mb="2%">
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            What do the adults call you?
          </FormLabel>
          <Input id="first-name" placeholder="First Name" />
          <FormHelperText fontSize="xs" as="sup">
            Enter a name you want to be referred to
          </FormHelperText>
        </FormControl>

        <FormControl mr="5%">
          <FormLabel htmlFor="username" fontWeight={"normal"}>
            What would you like to be called?
          </FormLabel>
          <Input id="username" placeholder="Username" />
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
                type={show ? "text" : "password"}
                placeholder="Enter password"
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
                type={show ? "text" : "password"}
                placeholder="Confirm password"
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

export default function Multistep() {
  const toast = useToast();
  const history = useNavigate();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);

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
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              {step !== 1 ? (
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
              ) : (
                <IconButton
                  colorScheme="blue"
                  aria-label="home button"
                  icon={<IoHome />}
                  as={RouterLink}
                  to="/"
                  width="7rem"
                  mr="5%"
                />
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
                onClick={() => {
                  toast({
                    title: "Account created.",
                    description: "We've created your account for you.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
                }}
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
