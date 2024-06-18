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
  SimpleGrid,
  useConst,
  ButtonGroup,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { forwardRef, useContext, useRef, useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi"
import { IoHome } from "react-icons/io5"
import { AuthContext } from "./ContextProvider";
import { getToken } from "./apis"


const Login = () => {
  const { auth } = useContext(AuthContext)
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   // Prevent scrolling
  //   document.body.style.overflow = "hidden";

  //   // Cleanup function to reset the overflow property
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, []);

  const submit = () => {
    getToken({ username, password })
      .then((response) => {
        console.log("Does this match Token Response?: ", response);
        auth.setAccessToken(response.data.access);
        console.log("Auth.setAccessToken: ", auth.accessToken) //This is always from the previous render.
      })
      .then(() => {
        navigate("/gamepage");
      })
      .catch((error) => {
        console.log("Error Logging In: ", error);
      });
  };
  

  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "12" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack
        spacing="1"
        py={{ base: "0", sm: "8" }}
        px={{ base: "4", sm: "10" }}
        bg={{ base: "transparent", sm: "white" }}
        boxShadow="dark-lg"
        borderRadius="xl"
      >
        <Stack spacing="6">
          <Stack spacing={{ base: "0", md: "1" }} textAlign="center">
            <Heading fontFamily="Lobster Two" color="#3C6286">
              Log in to your account
            </Heading>
            <Text color="gray.400" fontSize="sm">
              Don't have an account?
              <Button
                ml=".5rem"
                color="white"
                bgColor="#82B0E1"
                variant="link"
                size="md"
                fontSize=".7rem"
                letterSpacing=".001rem"
                _hover={{ bgColor: "gray" }}
                _active={{ color: "#F0BF73" }}
                as={Link}
                to="/register"
                textDecoration="none"
              >
                Sign up
              </Button>
            </Text>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "white" }}
          boxShadow="inner"
          borderRadius="xl"
        >
          <Stack spacing="1">
            <Stack spacing="1">
              <FormControl>
                <FormLabel
                  htmlFor="username"
                  color="#3C6286"
                  fontSize="1.5rem"
                  fontWeight="500"
                >
                  Username
                </FormLabel>
                <Input
                  mt="-1rem"
                  id="Username"
                  focusBorderColor="#6C6381"
                  borderRadius="xl"
                  type="text"
                  color="#82B0E1"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  size="xl"
                />
              </FormControl>
              <PasswordField password={password} setPassword={setPassword} />
            </Stack>
            <Flex>
              <Checkbox defaultChecked color="#3C6286" colorScheme="customBlue">
                Remember me
              </Checkbox>
              <Spacer />
              <Button
                variant="link"
                p=".3rem"
                fontSize=".6rem"
                bg="#82B0E1"
                _hover={{ bgColor: "gray" }}
                _active={{ color: "#F0BF73" }}
                color="white"
                letterSpacing=".01rem"
                justifyItems="right"
              >
                Forgot password?
              </Button>
            </Flex>
            <ButtonGroup>
              <Button
                colorScheme="customDarkBlue"
                width="50%"
                onClick={submit}
                _hover={{ bgColor: "gray" }}
                _active={{ color: "#F0BF73" }}
              >
                Sign in
              </Button>
              <IconButton
                alignSelf="center"
                colorScheme="customDarkBlue"
                _hover={{ bgColor: "gray" }}
                _active={{ color: "#F0BF73" }}
                aria-label="home button"
                icon={<IoHome />}
                as={Link}
                to="/"
              />
            </ButtonGroup>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

export default Login;

export const PasswordField = forwardRef(({ password, setPassword, ...props}, ref) => {
  const { isOpen, onToggle } = useDisclosure();
  const inputRef = useRef(null);
  const mergeRef = useMergeRefs(inputRef, ref);

  const onClickReveal = () => {
    onToggle();
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  };

  return (
    <FormControl>
      <FormLabel
        htmlFor="password"
        color="#3C6286"
        fontSize="1.5rem"
        fontWeight="500"
      >
        Password
      </FormLabel>
      <InputGroup size="xl">
        <InputRightElement>
          <IconButton
            variant="link"
            color="#82B0E1"
            aria-label={isOpen ? "Mask password" : "Reveal password"}
            bg="none"
            boxShadow="none"
            icon={isOpen ? <HiEyeOff /> : <HiEye />}
            onClick={onClickReveal}
            _hover={{ color: "gray", bg: "none" }}
          />
        </InputRightElement>
        <Input
          mt="-1"
          id="password"
          ref={mergeRef}
          borderRadius="xl"
          focusBorderColor="#6C6381"
          color="#82B0E1"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={isOpen ? "text" : "password"}
          autoComplete="current-password"
          required
          {...props}
        />
      </InputGroup>
    </FormControl>
  );
});

PasswordField.displayName = "PasswordField";
