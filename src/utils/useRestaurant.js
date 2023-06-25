import { useState, useEffect } from "react";

const useRestaurant = (id) => {
  const [Startingmenu, getMenu] = useState(null);
  const [Mainmenu, getMainMenu] = useState([]);

  useEffect(() => {
    getResturantMenu(); 
  }, []);

  async function getResturantMenu() {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=" +
        id
    );
    const json = await data.json();

    const restaurantData = json?.data?.cards[0];
    const Menu =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;
    getMenu(restaurantData);
    getMainMenu(Menu);
  }

  return [Startingmenu, Mainmenu];
};

export default useRestaurant;
