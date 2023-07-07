import { useParams } from "react-router-dom";
import { CDN_IMG_URL } from "../constant";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import useRestaurant from "../utils/useRestaurant"
import { useDispatch } from "react-redux";
import { addItmes } from "../utils/cartSlice";

const ResMenu = () => {
  const data = useParams();
  const { id } = useParams();
  //const {id} = usePAram();
  //

  const [Startingmenu , Mainmenu] =  useRestaurant(id)

  const dispatch = useDispatch();
  const handleAdd = (name) => {
    dispatch(addItmes(name))
  }
  

  //we can use only one usestae , i just made this for my ease


  // early return or use ternary operwtion
  if (!Startingmenu) {
    return <Shimmer />;
  }
  return (
    <div className="Menu-items">
      {/* <h1>Restaurant id : {id} </h1>
            <img src = {CDN_IMG_URL + cloudinaryImageId} /> */}
      <div>
        <h1>{Startingmenu?.card?.card?.info?.name}</h1>
        <img
          src={CDN_IMG_URL + Startingmenu?.card?.card?.info?.cloudinaryImageId}
        />
      </div>
      <div>
        <h1>Main Menu</h1>
        <ul>
          { Mainmenu.map((obj) => {
            return(
              <div style={{display:"flex"}}>
                <li key={obj.card.info.id}>{obj?.card?.info?.name}</li>
              <button onClick={() => handleAdd(obj?.card?.info?.name)}>Clik here to add</button>
              </div>
            )
          })}
          
        </ul>
       
      </div>
    </div>
  );
};

export default ResMenu;
