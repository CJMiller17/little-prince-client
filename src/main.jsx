// Dependencies
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react";

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
import TestApp from "./LampLighter/LampApp.jsx" 
import ConceitedApp from './ConceitedMan/ConceitedApp.jsx';
import DrunkardApp from './Drunkard/DrunkardApp.jsx';
import BusinessApp from './BusinessMan/BusinessApp.jsx';

function Layout() {
  return (
    <>
        <Outlet />
    </>
  )
}

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
        element: <TestApp />,
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
        path: "/business",
        element: <BusinessApp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <AuthContextProvider>
      <GameContextProvider>
        <RouterProvider router={router} />
      </GameContextProvider>
    </AuthContextProvider>
  </ChakraProvider>
);
