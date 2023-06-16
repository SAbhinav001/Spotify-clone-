import { RestaurantList } from "../constant";
import RestrauntCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchInput, Restaurants) {
 
    return Restaurants.filter((Restraunt) =>  Restraunt.data.name.includes(searchInput));
}

const Body = () => {
  const [Restaurants, setRestaurants] = useState(RestaurantList);
  const [searchInput, setSearchInput] = useState("");

  return (
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
            const data = filterData(searchInput, Restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="Restraunt-list">
        {Restaurants.map((EachObj) => {
          return <RestrauntCard {...EachObj.data} key={EachObj.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
