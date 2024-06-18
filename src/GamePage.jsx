import {
    Button,
    IconButton,
} from "@chakra-ui/react";
import React, { useEffect, useState, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import ProfilePage from "./ProfilePage";
import { getCurrentUserProfile } from "./apis";
import { AuthContext } from "./ContextProvider";






const GamePage = () => {
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate()


    const handleSubmit = () => {
        // const retrievedToken = localStorage.getItem("accessToken")
    console.log("HANDLE SUBMIT Token: ", auth.accessToken)
    getCurrentUserProfile(auth.accessToken)
      .then((response) => {
        console.log("Data: ", response.data);
        // auth.setAccessToken(data.access);
        navigate("/profile");
      })
      .catch((error) => {
        console.log("Error Logging In: ", error);
      });
  };

    

  return (
    <>
      <Button colorScheme="blue" variant="outline" as={Link} to="/lamplighter">
        LampLighter
      </Button>

      <Button colorScheme="blue" variant="outline" as={Link} to="/conceited">
        Conceited Man
      </Button>

      <Button colorScheme="blue" variant="outline" as={Link} to="/drunkard">
        Drunkard
      </Button>

      <Button colorScheme="blue" variant="outline" as={Link} to="/business">
        Business Man
      </Button>

      <Button colorScheme="blue" variant="outline" as={Link} to="/geographer">
        Geographer
      </Button>
      
        <IconButton
            aria-label="upload profile image"
            icon={<CgProfile />}
            isRound
            onClick={handleSubmit}
          />
    </>
  );
};

export default GamePage;
