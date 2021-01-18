import React from "react";

const RestaurantList = ({ restaurants }) => {
  const restaurant = restaurants.restaurants;
  console.log(restaurant);
  return (
    <div>
      {/* {restaurant.map((e) => {
        return (
          <div className="result-card">
            <h4>{e.restaurant.name}</h4>
            <p>{e.cuisines}</p>
            <p>{e.user_rating.aggregate_rating}</p>
          </div>
        );
      })} */}
    </div>
  );
};

export default RestaurantList;
