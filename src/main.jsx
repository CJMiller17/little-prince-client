// Dependencies
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom'

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
import { AuthContextProvider, GameContextProvider } from './ContextProvder.jsx'

function Layout() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <GameContextProvider>
      <RouterProvider router = { router } />
    </GameContextProvider>
  </AuthContextProvider>
)
