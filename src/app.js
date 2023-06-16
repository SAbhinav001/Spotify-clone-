import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/body.js";
import Footer from "./components/Footer.js";


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
      <Body />
      <Footer/>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
