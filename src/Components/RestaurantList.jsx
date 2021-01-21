import React from "react";
import { Link } from "react-router-dom";

const RestaurantList = ({ restaurants }) => {
  if (restaurants.length > 0) {
    return (
      <>
        {restaurants.map((e) => {
          const id = e.restaurant.R.res_id;
          return (
            <Link to={`/search/${id}`} key={id} className="result-card">
              <li
                key={id}
                className="result-card"
                // style={{
                //   backgroundImage: `url(${e.restaurant.featured_image})`,
                // }}
              >
                <h2>{e.restaurant.name}</h2>
                <p className="restaurant-cuisine">{e.restaurant.cuisines}</p>
                <p className="rating">
                  {e.restaurant.user_rating.aggregate_rating}
                </p>
              </li>
            </Link>
          );
        })}
      </>
    );
  }
};

export default RestaurantList;
