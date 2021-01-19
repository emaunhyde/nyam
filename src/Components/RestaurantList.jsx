import React from "react";

const RestaurantList = ({ restaurants }) => {
  if (restaurants.length !== 0) {
    return (
      <div>
        <p>{restaurants[0].restaurant.name}</p>
        {restaurants.map((e) => {
          return (
            <div className="result-card">
              <h4>{e.restaurant.name}</h4>
              <p>{e.restaurant.cuisines}</p>
              <p>{e.restaurant.user_rating.aggregate_rating}</p>
            </div>
          );
        })}
      </div>
    );
  }
};

export default RestaurantList;
