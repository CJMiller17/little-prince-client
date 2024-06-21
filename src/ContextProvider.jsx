import React, { createContext, useEffect, useReducer, useState } from "react"
import { gameReducer, initialState } from "./Reducer"
import { getCurrentUserProfile } from "./apis"

// Game Context for component states
export const GameContext = createContext()

export const GameContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(gameReducer, initialState)

    return (
        <GameContext.Provider value={{ state, dispatch }} >
            {children}
        </GameContext.Provider>
    )
}


// Auth Context for authentication 
export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const currentToken = JSON.parse(localStorage.getItem("accessToken"));
  const [accessToken, setAccessToken] = useState(currentToken || null);
  const [profileData, setProfileData] = useState({});
  const [gameOn, setGameOn] = useState(false)

  useEffect(() => {
    // console.log("THE TOKEN BE THIS TOKEN (NOT JRR): ", accessToken)
    localStorage.setItem("accessToken", JSON.stringify(accessToken));
  }, [accessToken]);
  
  const auth = {
    accessToken,
    setAccessToken,
  };

  const profile = {
    profileData,
    setProfileData,
    setGameOn,
  };

    
  useEffect(() => {
      if (auth.accessToken) {
          getCurrentUserProfile(auth.accessToken)
          .then((response) => {
              console.log("Current User Data: ", response.data);
              profile.setProfileData((currentData) => ({
                  ...currentData,
                  profileData: response.data
                }));
            })
            .catch((error) => {
                console.log("Error Logging In: ", error);
            });;
      }
    }, [auth.accessToken, gameOn]);
    

  return (
    <AuthContext.Provider value={{ auth, profile }}>
      {children}
    </AuthContext.Provider>
  );
}