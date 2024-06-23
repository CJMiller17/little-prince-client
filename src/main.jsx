// Dependencies
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { CgEye, CgHome } from "react-icons/cg";

// CSS
import "./index.css"

// Components
import HomePage from './HomePage.jsx'
import Login from './Login.jsx'
import Register from './Resgister.jsx'
import About from './About.jsx'
import ErrorPage from './ErrorPage.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { AuthContextProvider, GameContextProvider } from './ContextProvider.jsx'
import LampApp from "./LampLighter/LampApp.jsx" 
import ConceitedApp from './ConceitedMan/ConceitedApp.jsx';
import DrunkardApp from './Drunkard/DrunkardApp.jsx';
// import BusinessApp from './BusinessMan/BusinessApp.jsx';
import GeographerApp from './Geographer/GeographyApp.jsx';
import ProfilePage from './ProfilePage.jsx'
import GamePage from './GamePage.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';

function Layout() {
  return (
    <>
        <Outlet />
    </>
  )
}

const customTheme = extendTheme({
  colors: {
    customRed: { 500: "#C67E63" },
    customMaroon: { 500: "#A3646D" },
    customYellow: { 500: "#F0BF73" },
  },
  components: {
    Button: {
      variants: {
        solid: {
          bgColor: "#3C6286",
          border: "none",
          boxShadow: "0 10px 10px #0003",
          color: "white",
          fontSize: "xl",
          size: "md",
          textDecoration: "none",
          width: "6rem",
          _hover: {
            bgColor: "gray",
          },
          _active: {
            color: "#FBD154",
            bgColor:"gray"
          },
        },
        outline: {
          bgColor: "white",
          borderColor: "#3C6286",
          boxShadow: "0 10px 10px #0003",
          color: "#3C6286",
          fontSize: "xl",
          size: "md",
          textDecoration: "none",
          width: "6rem",
          _hover: {
            bgColor: "#B8D4E6",
          },
          _active: {
            color: "#FBD154",
          },
        },
      },
    },
    Input: {
      baseStyle: {
        field: {
          borderColor: "#C0B1BE", // Light Purple
          borderRadius: "lg",
          boxShadow: "md",
          color: "#82B0E1", // Reg. Blue
          fontSize: "1.5rem",
          maxW: "20rem",
          paddingLeft: "1rem",
          size: "xl",
          textAlign: "start",
          type: "text",
          sx: {
            "::placeholder": {
              color: "#C0B1BE",
            },
          },
        },
      },
    },
  },
});

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/lamplighter",
        element: (
          <ProtectedRoute>
            <LampApp />
          </ProtectedRoute>
        ),
      },
      {
        path: "/conceited",
        element: (
          <ProtectedRoute>
            <ConceitedApp />
          </ProtectedRoute>
        ),
      },
      {
        path: "/drunkard",
        element: (
          <ProtectedRoute>
            <DrunkardApp />
          </ProtectedRoute>
        ),
      },
      {
        // path: "/business",
        // element: <BusinessApp />,
      },
      {
        path: "/geographer",
        element: (
          <ProtectedRoute>
            <GeographerApp />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/gamepage",
        element: (
          <ProtectedRoute>
            <GamePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={customTheme} resetCSS={false}>
    <AuthContextProvider>
      <GameContextProvider>
        <RouterProvider router={router} />
      </GameContextProvider>
    </AuthContextProvider>
  </ChakraProvider>
);
