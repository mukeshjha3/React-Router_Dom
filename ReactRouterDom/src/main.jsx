import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Service from "./Component/Service";
import Contact from "./Component/Contact";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
// import Footer from "./Component/Footer";
// import Header from "./Component/Header";
import ErrorPage from "./Component/ErrorPage";
import App from "./App";


                                                                    // 1st way for Routing 
// const router = createBrowserRouter([

//   {
//     path : '/',
//     element: <Login />,
//   },

//   {
//     path : '/signup',
//     element: <Signup />,
//   },

//   {
//     path : '/home',
//     element: <><Header /><Home/> <Footer/></>,
//   },

//   {
//     path : '/about',
//     element: <><Header /><About/> <Footer/></>,
//   },

//   {
//     path : '/contact',
//     element: <><Header /><Contact/> <Footer/></>,
//   },

//   {
//     path : '/service',
//     element: <><Header /><Service/> <Footer/></>,
//   },

//   {
//     path : '*',
//     element: <ErrorPage/>,
//   }

// ]);

                                                                          // 2nd way for Routing 

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <Signup />,
  },

  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      ,
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/service",
        element: <Service />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
