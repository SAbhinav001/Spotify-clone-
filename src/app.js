import React, { lazy , Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/body.js";
import Footer from "./components/Footer.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//RouterProvider is a component

import About from "./components/about.js";
import Error from "./components/eror.js";
import Contact from "./components/contact.js";
import ResMenu from "./components/ResMenu.js";
import Profile from "./components/profile.js"
import useOnline from "./utils/useOnline"
import Shimmer from "./components/shimmer.js"
import Game from "./components/TicToe.js";


const InstaMart = lazy(() => import("./components/Instamart.js"))
             

const AppLayout = () => {

  const isOnline =  useOnline();
  if(!isOnline){
    return  <h1>OOPS! Seems like  you are OFFLINE</h1>
  }

  return (
    <>
      <Header />
      {/* <Body /> */}
      <Outlet />
      <Footer />
    </>
  );
};
 
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        // children:[
        //   {
        //     path:"profile",
        //     element:<Profile />,
        //   }
        // ]          to get this under about componet page use outlet insiode about comp.
      },
      {
        path:"/about/profile",
        element:<Profile />
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/ResMenu/:id",
        element: <ResMenu />,
      },
      {
        path:"/Instamart",
        element: <Suspense fallback ={<Shimmer/>}><InstaMart /></Suspense>
      },
      {
        path:"/game",
        element: <Game />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
