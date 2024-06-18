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

  const submit = () => {
    getToken({ username, password })
      .then((data) => {
        console.log("Does this match Token Response.data?: ", data);
        auth.setAccessToken(data.access);
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
      py={{ base: "12", md: "24" }}
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
            <Heading >
              Log in to your account
            </Heading>
            <Text color="gray.400" fontSize="xs">
              Don't have an account?
              <Button bgColor="blue" variant="link" size="md" fontSize=".6rem" letterSpacing=".01rem">
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
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input
                  id="Username"
                  type="text"
                  color="blue"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormControl>
              <PasswordField password={password} setPassword={setPassword} />
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="link" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <SimpleGrid columns={2} spacing="0">
              <Button colorScheme="blue" width="50%" onClick={submit}>
                Sign in
              </Button>
              <IconButton
                colorScheme="blue"
                aria-label="home button"
                icon={<IoHome />}
                as={Link}
                to="/"
                width="10"
              />
            </SimpleGrid>
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
      <FormLabel htmlFor="password">Password</FormLabel>
      <InputGroup>
        <InputRightElement>
          <IconButton
            variant="link"
            aria-label={isOpen ? "Mask password" : "Reveal password"}
            icon={isOpen ? <HiEyeOff /> : <HiEye />}
            onClick={onClickReveal}
          />
        </InputRightElement>
        <Input
          id="password"
          ref={mergeRef}
          color="blue"
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
