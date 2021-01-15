import React, { useState, useEffect, useContext } from "react";
import SearchContext from "./SearchContext";

const Gallery = () => {
  const { searchResults } = useContext(SearchContext);
  const [restaurants, setRestaurants] = useState([]);

  //   useEffect(() => {

  //   setRestaurants(searchResults);
  //   console.log(restaurants);
  //   }, [searchResults]);

  return (
    <div>
      <h3>
        {/* {restaurants.restaurants.map((e) => {
          return <p>{e.restaurant.name}</p>;
        })} */}
      </h3>
    </div>
  );
};

export default Gallery;
