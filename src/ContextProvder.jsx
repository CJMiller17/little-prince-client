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
    // const currentRefreshToken = JSON.parse(localStorage.getItem("refreshToken"))
    
    const [accessToken, setAccessToken] = useState(currentToken || [])
    // const [refreshToken, setRefreshToken] = useState(currentRefreshToken || [])

    useEffect(() => {
        localStorage.setItem("accessToken", JSON.stringify(accessToken))
    }, [accessToken])

    // useEffect(() => {
    //     localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
    // }, [refreshToken]);

    const auth = {
      accessToken,
      setAccessToken,
      // refreshToken,
      // setRefreshToken,
    };

    return (
        <AuthContext.Provider value={{ auth }}>
            {children}
        </AuthContext.Provider>
    )
}