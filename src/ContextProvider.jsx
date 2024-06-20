import React, { createContext, useEffect, useReducer, useState } from "react"
import { gameReducer, initialState } from "./Reducer"

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
    const currentToken = JSON.parse(localStorage.getItem("accessToken"))
    const [accessToken, setAccessToken] = useState(currentToken || null)
    const [profileData, setProfileData] = useState(null)

    useEffect(() => {
        // console.log("THE TOKEN BE THIS TOKEN (NOT JRR): ", accessToken)
        localStorage.setItem("accessToken", JSON.stringify(accessToken))
    }, [accessToken])

    const auth = {
      accessToken,
      setAccessToken,
    };

    const profile = {
        profileData,
        setProfileData,
    }

    return (
        <AuthContext.Provider value={{ auth, profile }}>
            {children}
        </AuthContext.Provider>
    )
}