import React, { useState } from "react";
import { Link } from "react-router-dom";

function RestaurantCard(restaurants) {
  return (
    <div>
      {restaurants.restaurants.map((e) => {
        const id = e.restaurant.R.res_id;

        return (
          <Link to={`/search/${id}`} key={id}>
            <li
              key={id}
              className="result-card"
              style={{
                backgroundImage: `url(${e.restaurant.featured_image})`,
              }}
            >
              <h4>{e.restaurant.name}</h4>
              <p>{e.restaurant.cuisines}</p>
            </li>
          </Link>
        );
      })}
    </div>
  );
}

export default RestaurantCard;
