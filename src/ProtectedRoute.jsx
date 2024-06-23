import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./ContextProvider";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

// Properly await GetToken by using return

const ProtectedRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const toast = useToast();
  const navigate = useNavigate()

  useEffect(() => {
    if (auth.accessToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [auth.accessToken]);

  if (!isAuthenticated) {
    toast({
      title: "Login Required",
      description: "You have to login to go to that page.",
      status: "warning",
      duration: 3000,
      isClosable: false,
    });
    navigate("/login")
  }

  return children;
};

export default ProtectedRoute;
