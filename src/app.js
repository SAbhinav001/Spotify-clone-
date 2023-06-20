import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/body.js";
import Footer from "./components/Footer.js";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
//RouterProvider is a component

import About from "./components/about.js"
import Error from "./components/eror.js"
import Contact from "./components/contact.js"




/*
            -Header
                -LOGO
                -List item (right side)
                -Cart
            -Body
                -Search BAr
                -Res lois
                    -Res card (lot ofit)
                        -img
                        -Name
                        -Rating
                        -Cusones
            -Footer
                -Links
            */

const AppLayout = () => {
  return (
    <>
      <Header />
       {/* <Body /> */}
       <Outlet />
      <Footer />
    </>
  );
};

// MORMAL ROUTE
// const appRouter = createBrowserRouter([
// {
//   path:"/",
//   element: <AppLayout />,
//   errorElement: <Error />,
// },

// {
//   path:"/about",
//   element: <About />,
// },

// ]);


// NESTED ROUTE  , if We want header and footer for every loading 

const appRouter = createBrowserRouter([
{
  path:"/",
  element: <AppLayout />,
  errorElement: <Error />,
  children : [
    {
      path:"/",
      element: <Body />,
    },
    {
      path:"/about",
      element: <About />,
    },
    {
      path:"/Contact",
      element: <Contact />,
    },
  ]
},


]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

