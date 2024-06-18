// Dependencies
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

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

function Layout() {
  return (
    <>
        <Outlet />
    </>
  )
}

const customTheme = extendTheme({
  colors: {
    customDarkBlue: {500: "#3C6286"},
    customBlue: {500: "#82B0E1"},
    customLightBlue: {500: "#B8D4E6"},
    customOrange: {500: "#C7834A"},
    customRedish: {500: "#C67E63"},
    customMaroon: {500: "#A3646D"},
    customYellow: {500: "#F0BF73"},
    customPurple: {500: "#6C6381"},
    customGray: {500: "#787585"},
    customLightPurple: {500: "#C0B1BE"},
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
        element: <LampApp />,
      },
      {
        path: "/conceited",
        element: <ConceitedApp />,
      },
      {
        path: "/drunkard",
        element: <DrunkardApp />,
      },
      {
        // path: "/business",
        // element: <BusinessApp />,
      },
      {
        path: "/geographer",
        element: <GeographerApp />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/gamepage",
        element: <GamePage />,
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
