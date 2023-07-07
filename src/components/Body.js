import { RestaurantList } from "../constant";
import RestrauntCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import {users} from "../utils/userContext";

const Body = () => {
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState(" ");
  const isOnline = useOnline();

   const {user, setUser}= useContext(users);

  useEffect(() => {
    //API call withoput dependcy so it use useffect only once after render
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4764152&lng=77.5121366&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //optional chaining

    setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  // conditional rendering
  // if restaurnat is empty - shimmer ui
  // if rest hasa data = actual ui
  //it is by if else(ternary) in return stmt
  // if(!isOnline){
  //   return  <h1>OOPS! Seems like  you are OFFLINE</h1>
  // }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
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
        <input
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <h1>{searchInput}</h1>
      </div>

      <div className="Restraunt-list">
        {filterRestaurants.length ? (
          filterRestaurants.map((EachObj) => {
            return (
              <Link to={"/ResMenu/" + EachObj.data.id} key={EachObj.data.id}>
                <RestrauntCard {...EachObj.data} />
              </Link>
            );
          })
        ) : (
          <h1>NO reuslt</h1>
        )}
      </div>
    </>
  );
};

export default Body;
