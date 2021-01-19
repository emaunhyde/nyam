import React from "react";
import { Link } from "react-router-dom";

const RestaurantList = ({ restaurants }) => {
  if (restaurants.length > 0) {
    return (
      <>
        <ul>
          {restaurants.map((e) => {
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
                  <p>{e.restaurant.user_rating.aggregate_rating}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      </>
    );
  }
};

export default RestaurantList;
