import { useState, useRef } from "react";
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
  IconButton,
  Container,
  Stack
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Link, Link as RouterLink, useNavigate } from "react-router-dom";
import { createUser } from "./apis"



export default function Multistep() {
  const toast = useToast();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("")
  const [sound, setSound] = useState("");


  //State for the form data
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    avatar: null,
    butterflies: "",
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
    const { name, value, files } = e.target;
    let parsedValue = value === 'yes' || value === 'no' ? value === 'yes' : value
    
    const insensitiveUsername = (username) => {
      return username.toLowerCase(); // Convert username to lowercase
    }

    if (name === "username") {
      parsedValue = insensitiveUsername(value);
    }
    
    if (name === "sound" && value.trim() !== "") {
      setSound(parsedValue)
      setProgress(33.33)
      return
    }

    setFormData((prev) => ({
      ...prev,
      [name]: name === "avatar" ? files[0] : parsedValue,
    }));
    
    if (name === "avatar") {
      // setFormData((prev) => ({ ...prev, avatar: files[0] }))
      setImageUploaded(true)
    }
    // } else {
    //   setFormData((prev) => ({...prev, [name]: value}))
    // }
    
  };

  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);
    // console.log("Password: ", confirmPassword)
  };

  const isFormValid = () => {
    return (
      // formData.sound !== "" &&
      formData.butterflies !== "" &&
      formData.elephants !== "" &&
      formData.color !== "" &&
      // formData.bestFriend !== "" &&
      formData.name !== "" &&
      formData.username !== "" &&
      formData.password !== "" &&
      confirmPassword !== ""
    );
  };

  const handleSubmit = () => {
    // console.log("Form Data: ", formData);
    
    const notify = (toastAPICall) => {
      toast({
        duration: 3000,
        isClosable: false,
        ...toastAPICall,
      })
    }
    if (formData.password !== confirmPassword) {
      notify({
        title: "Password Mismatch",
        description: "Passwords do not match. Please try again.",
        status: "error",
      });
      return
    } 
    if (!isFormValid()) {
      notify({
        title: "Missing Information",
        description: "The form isn't complete.",
        status: "error",
      });
      return
    }

    createUser(formData, notify);
    navigate("/login");
  }

  return (
    <>
      <Container maxW="2xl" py={{ base: "20" }} px={{ base: "0", sm: "8" }}>
        <Stack
          borderWidth="1px"
          rounded="lg"
          boxShadow="dark-lg"
          p={6}
          as="form"
        >
          <Progress
            hasStripe
            colorScheme="customYellow"
            value={progress}
            mb="5%"
            mx="5%"
            isAnimated
            id="smooth-progress"
            sx={{
              "& > div:first-of-type": {
                transitionProperty: "width",
                transitionDuration: "1s",
              },
            }}
          ></Progress>
          {step === 1 ? (
            <Form1 formData={formData} handleInputChange={handleInputChange} />
          ) : step === 2 ? (
            <Form2 formData={formData} handleInputChange={handleInputChange} />
          ) : (
            <Form3
              formData={formData}
              handleInputChange={handleInputChange}
              handleConfirmPasswordChange={handleConfirmPasswordChange}
              imageUploaded={imageUploaded}
              setImageUploaded={setImageUploaded}
              confirmPassword={confirmPassword}
            />
          )}
          <ButtonGroup mt="5%">
            <Flex w="100%" justifyContent="space-between">
              <Flex>
                {step === 1 ? (
                  <Button
                    variant="solid"
                    as={Link}
                    to="/"
                    onClick={() => {
                      setStep(step - 1);
                      setProgress(0); // progress - 33.33
                    }}
                    mr="10px"
                  >
                    Home
                  </Button>
                ) : (
                  <Button
                    variant="solid"
                    onClick={() => {
                      setStep(step - 1);
                      setProgress(progress - 33.33); // (step -2 ) * 33.33
                    }}
                    mr="10px"
                  >
                    Back
                  </Button>
                )}
                <Button
                  variant="outline"
                  isDisabled={step === 3}
                  onClick={() => {
                    setStep(step + 1);
                    if (step === 3) {
                      setProgress(100);
                    } else {
                      setProgress(progress + 33.33); // step * 33.33
                    }
                  }}
                >
                  Next
                </Button>
              </Flex>
              {step === 3 ? (
                <Button
                  variant="solid"
                  bgColor="#A3646D"
                  onClick={handleSubmit}
                  _hover= {
                    {bgColor: "#C7834A"}
                  }
                >
                  Submit
                </Button>
              ) : null}
            </Flex>
          </ButtonGroup>
        </Stack>
      </Container>
    </>
  );
}

const Form1 = ({ formData, handleInputChange, sound }) => {
  
  return (
    <>
      <Heading
        fontFamily="Lobster Two"
        w="100%"
        textAlign={"center"}
        mb="2%"
        mt={"-1rem"}
        color="#3C6286"
      >
        You must be new!
      </Heading>
      <Text textAlign="center" fontSize="xl" mb="10" color="#82B0E1" mt="-1rem">
        Let's get to know one another
      </Text>

      <Flex>
        <FormControl>
          <FormLabel
            htmlFor="sound"
            fontWeight={"xl"}
            fontSize="1.5rem"
            color="#3C6286"
          >
            What's your favorite sound?
          </FormLabel>
          <Input
            id="sound"
            name="sound"
            value={sound}
            focusBorderColor="#6C6381"
            placeholder="ex. Splashing, giggling, etc..."
            sx={{
              "::placeholder": {
                color: "#C0B1BE",
              },
            }}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl ml="5%">
          <FormLabel
            htmlFor="butterflies"
            fontWeight={"xl"}
            color="#3C6286"
            fontSize="1.5rem"
          >
            Do you collect butterflies?
          </FormLabel>
          <Select
            id="butterflies"
            height="2.5rem"
            name="butterflies"
            placeholder="Let me think..."
            focusBorderColor="#6C6381"
            boxShadow="md"
            sx={{ color: "#C0B1BE" }}
            size="sm"
            fontSize="1.5rem"
            borderRadius="lg"
            rounded="md"
            onChange={handleInputChange}
            value={formData.butterflies}
            m={"10px 0px"}
          >
            <option value="true">Yes I do!</option>
            <option value="false">No, not really...</option>
          </Select>
        </FormControl>
      </Flex>

      <Text fontSize="xl" color="#3C6286">
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
        color="#3C6286"
        textAlign={"center"}
        mt="-1rem"
      >
        To see with our hearts...
      </Heading>

      <SimpleGrid columns={2} spacing={5}>
        <FormControl>
          <FormLabel
            maxW="11rem"
            htmlFor="color"
            fontWeight={"xl"}
            fontSize="1.5rem"
            color="#3C6286"
          >
            What color moves you?
          </FormLabel>
          <Input
            id="color"
            name="color"
            placeholder="ex. plum, sage, flaxen..."
            onChange={handleInputChange}
            value={formData.color}
            focusBorderColor="#6C6381"
            sx={{
              "::placeholder": {
                color: "#C0B1BE",
              },
            }}
          />
        </FormControl>

        <FormControl>
          <SimpleGrid columns={2}>
            <FormLabel
              htmlFor="elephants"
              fontWeight={"xl"}
              fontSize="1.5rem"
              color="#3C6286"
              maxW="7rem"
            >
              How many elephants can fit on your planet?
            </FormLabel>
            <NumberInput maxW="4rem" alignSelf="center">
              <NumberInputField
                id="elephants"
                name="elephants"
                min={0}
                color="#82B0E1"
                shadow="md"
                onChange={e => handleInputChange(e)}
                value={formData.elephants}
                placeholder="Ex. 42"
                textAlign="start"
                fontSize="2xl"
                borderRadius="lg"
                padding=".5rem"
                focusBorderColor="red"
                sx={{
                  "::placeholder": {
                    color: "#C0B1BE",
                  },
                  ":focus": {
                    borderColor: "#6C6381", 
                    boxShadow: "0 0 0 1px #6C6381",
                  },
                }}
              />
            </NumberInput>
          </SimpleGrid>
        </FormControl>
      </SimpleGrid>

      <FormControl id="best-friend" mt={1}>
        <FormLabel fontSize="1.5rem" fontWeight="xl" color="#3C6286">
          How does your best friend make you feel?
        </FormLabel>
        <Textarea
          placeholder="ex. They make me feel..."
          rows={2}
          shadow="md"
          fontSize="1.5rem"
          onChange={handleInputChange}
          value={formData.bestFriend}
          color="#82B0E1"
          focusBorderColor="#6C6381"
          borderRadius="lg"
          textAlign="start"
          paddingLeft="1rem"
          size="xl"
          sx={{
            "::placeholder": {
              color: "#C0B1BE",
            },
          }}
        />
        <FormHelperText></FormHelperText>
      </FormControl>
    </>
  );
};


const Form3 = ({
  formData,
  handleInputChange,
  handleConfirmPasswordChange,
  imageUploaded,
  setImageUploaded,
  confirmPassword,
}) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const fileInputRef = useRef(null);

  const handleUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <Heading
        fontFamily="Lobster Two"
        w="100%"
        textAlign={"center"}
        mt={"-1rem"}
        color="#3C6286"
      >
        What is essential...
      </Heading>
      <FormControl
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
      >
        <Box flex="1">
          <FormLabel
            htmlFor="name"
            fontSize="1.4rem"
            fontWeight={"xl"}
            color="#3C6286"
            alignSelf="center"
          >
            What do the adults call you?
          </FormLabel>
          <Input
            id="name"
            name="name"
            width="12rem"
            placeholder="Enter your first name"
            onChange={handleInputChange}
            value={formData.name}
            focusBorderColor="#6C6381"
            sx={{
              "::placeholder": {
                color: "#C0B1BE",
              },
            }}
          />
        </Box>
        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          alignItems={{ base: "center", md: "flex-start" }}
          marginTop={{ base: "4", md: "0" }}
        >
          <IconButton
            aria-label="upload profile image"
            icon={<CgProfile />}
            isRound
            marginLeft="2"
            onClick={handleUpload}
          />
          <Input
            ref={fileInputRef}
            type="file"
            accept=".png, .jpg, .jpeg"
            name="avatar"
            onChange={(e) => {
              handleInputChange(e);
              setImageUploaded(true);
            }}
            display="none"
          />
          {imageUploaded && formData.avatar && (
            <Text fontSize="xs" color="green.500" mt="1">
              {formData.avatar.name} Loaded Successfully
            </Text>
          )}
          {!imageUploaded && (
            <FormHelperText fontSize="xs" as="sup" marginTop="1" marginLeft="4">
              Upload a profile image
            </FormHelperText>
          )}
        </Box>
      </FormControl>

      <FormControl mr="5%">
        <FormLabel
          htmlFor="username"
          fontWeight="xl"
          fontSize="1.4rem"
          color="#3C6286"
        >
          What would you like to be called?
        </FormLabel>
        <Input
          id="username"
          name="username"
          placeholder="Create a unique username"
          maxW="25rem"
          onChange={handleInputChange}
          value={formData.username}
          focusBorderColor="#6C6381"
          autoComplete="username"
          sx={{
            "::placeholder": {
              color: "#C0B1BE",
            },
          }}
        />
      </FormControl>

      <SimpleGrid columns={2} spacing={5}>
        <FormControl>
          <FormLabel
            htmlFor="password"
            fontWeight={"xl"}
            fontSize="1.4rem"
            color="#3C6286"
          >
            Password:
          </FormLabel>
          <InputGroup>
            <Input
              // pr="4.5rem"
              name="password"
              type={show ? "text" : "password"}
              placeholder="Create Password"
              onChange={handleInputChange}
              value={formData.password}
              focusBorderColor="#6C6381"
              fontFamily="Shadows Into Light Two"
              autoComplete="new-password"
              sx={{
                "::placeholder": {
                  color: "#C0B1BE",
                },
              }}
            />
            <InputRightElement>
              <IconButton
                color="#82B0E1"
                aria-label={show ? "Mask password" : "Reveal password"}
                bg="none"
                boxShadow="none"
                icon={show ? <HiEyeOff /> : <HiEye />}
                onClick={handleClick}
                _hover={{ color: "gray", bg: "none" }}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel
            htmlFor="confirm-password"
            fontWeight={"xl"}
            fontSize="1.4rem"
            color="#3C6286"
            isTruncated
          >
            Confirm Password:
          </FormLabel>
          <InputGroup>
            <Input
              name="confirmPassword"
              type={show ? "text" : "password"}
              placeholder="Confirm password" // I need to make a check where the two passwords are identical.
              onChange={handleConfirmPasswordChange}
              value={confirmPassword}
              focusBorderColor="#6C6381"
              fontFamily="Shadows Into Light Two"
              autoComplete="new-password"
              sx={{
                "::placeholder": {
                  color: "#C0B1BE",
                },
              }}
            />
          </InputGroup>
        </FormControl>
      </SimpleGrid>
    </>
  );
};

