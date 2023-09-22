import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //local state variable(scope- only in the component) ==super powerful state variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  //The above code can also be written as below because useState returns an array and we are just destructuring thethe array in the above line
  //   const arr = useState(resList);
  //   console.log(arr);
  //   const listOfRestaurants = arr[0];
  //   const setListOfRestaurants = arr[1];
  //   console.log(listOfRestaurants);
  //   console.log(setListOfRestaurants);
  // normal JS variable(scope- only in the function)
  let listOfRestaurantsJS = [
    {
      info: {
        id: "243625",
        name: "KFC",
        cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        avgRating: 3.8,
        sla: {
          deliveryTime: 23,
        },
      },
    },
    {
      info: {
        id: "243626",
        name: "Dominos",
        cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
        costForTwo: "₹500 for two",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        avgRating: 4.3,
        sla: {
          deliveryTime: 35,
        },
      },
    },
  ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            //as soon as you change setListOfRestaurants react will find all the out the diff and update the UI
            setListOfRestaurants(filteredList);
            // console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
