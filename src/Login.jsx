import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  IconButton,
  InputGroup,
  InputRightElement,
  useDisclosure,
  useMergeRefs,
  ButtonGroup,
  Flex,
  Spacer,
  useToast,
  SimpleGrid,
} from "@chakra-ui/react";
import { forwardRef, useContext, useRef, useState } from "react"
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
  const toast = useToast()


  const submit = () => {
    const insensitiveUsername = username.toLowerCase()
    getToken({ username: insensitiveUsername, password })
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
        toast({
          title: "Login failed",
          description: "Invalid username or password. Please try again.",
          status: "error",
          duration: 3000,
          position: "top",
          isClosable: false,
        });
      });
  };
  

  return (
    <Container maxW="xl" py={{ base: "20" }} px={{ base: "0", sm: "8" }}>
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
                boxShadow="0 4px 4px #0005"
                size="md"
                fontSize=".7rem"
                letterSpacing=".001rem"
                _hover={{ bgColor: "gray" }}
                _active={{ color: "#FBD154" }}
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
                  fontWeight="xl"
                >
                  Username
                </FormLabel>
                <Input
                  id="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  focusBorderColor="#6C6381"
                />
              </FormControl>
              <PasswordField password={password} setPassword={setPassword} />
            </Stack>
            <Flex maxW="20rem" justifyContent="space-between">
              <Checkbox
                defaultChecked
                color="#3C6286"
                styles={{ control: { bg: "#3C6286" } }}
              >
                Remember me
              </Checkbox>
              {/* <Button
                variant="link"
                fontSize=".6rem"
                bg="#3C6286"
                _hover={{ bgColor: "gray" }}
                _active={{ color: "#FBD154" }}
                color="white"
                letterSpacing=".01rem"
              >
                Forgot password?
              </Button> */}
            </Flex>
            <ButtonGroup mt="1rem">
              <Button variant="solid" onClick={submit}>
                Sign in
              </Button>
              <IconButton
                alignSelf="center"
                _hover={{ bgColor: "gray" }}
                _active={{ color: "#FBD154" }}
                aria-label="home button"
                icon={<IoHome />}
                as={Link}
                to="/"
                boxShadow="0 10px 10px #0005"
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
        fontWeight="xl"
      >
        Password
      </FormLabel>
      <InputGroup maxW="20rem">
        <Input
          id="password"
          name="password"
          type={isOpen ? "text" : "password"}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          focusBorderColor="#6C6381"
          fontFamily="Shadows Into Light Two"
          ref={mergeRef}
          autoComplete="current-password"
          {...props}
        />
        <InputRightElement>
          <IconButton
            color="#82B0E1"
            aria-label={isOpen ? "Mask password" : "Reveal password"}
            bg="none"
            boxShadow="none"
            icon={isOpen ? <HiEyeOff /> : <HiEye />}
            onClick={onClickReveal}
            _hover={{ color: "gray", bg: "none" }}
          />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
});

PasswordField.displayName = "PasswordField";
