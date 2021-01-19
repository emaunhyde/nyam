import React from "react";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ restaurants }) => {
  if (restaurants.length > 0) {
    return (
      <>
        <ul>
          <RestaurantCard restaurants={restaurants} />
        </ul>
      </>
    );
  }
};

export default RestaurantList;
