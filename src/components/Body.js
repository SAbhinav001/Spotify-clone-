import { RestaurantList } from "../constant";
import RestrauntCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

function filterData(searchInput, Restaurants) {
  return Restaurants.filter((Restraunt) =>
    Restraunt?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
}

const Body = () => {
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");


  useEffect(() => {
    //API call withoput dependcy so it use useffect only once after render
   getRestaurant();
  }, []);

    async function getRestaurant() {
       const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4764152&lng=77.5121366&page_type=DESKTOP_WEB_LISTING");
       const json =   await data.json();
       //optional chaining
       
          setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
          setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        }

 
    // conditional rendering
    // if restaurnat is empty - shimmer ui
    // if rest hasa data = actual ui
    //it is by if else(ternary) in return stmt

  return allRestaurants?.length===0 ?(<Shimmer />):(
    <>
      <div className="search-constainer">
        <input
          type="text"
          className="search-bar"
          placeholder="search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setFilterRestaurants(data);

          }}
        >
          Search
        </button>
      </div>
      <div className="Restraunt-list">
        {
          filterRestaurants.length? (filterRestaurants.map((EachObj) => {
             return (<RestrauntCard {...EachObj.data} key={EachObj.data.id} />);
          })): (<h1>NO reuslt</h1>) 
        }
      </div>
    </>
  );
};

export default Body;
