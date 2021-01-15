import React, { useState, useEffect, useContext } from "react";
import SearchContext from "./SearchContext";

const Gallery = () => {
  const { searchResults, searchComplete, setSearchComplete } = useContext(
    SearchContext
  );
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    if (searchComplete === true) {
      setRestaurants(searchResults);
      setSearchComplete(false);
      console.log(restaurants);
      console.log(searchComplete);
    }
  }, [searchResults]);

  return (
    <div>
      <h3>
        {/* {searchComplete
          ? restaurants.restaurants.map((e) => {
              return <li key={e.restaurant.R.res_id}>{e.restaurant.name}</li>; */}
        {/* }) : ""} */}
      </h3>
    </div>
  );
};

export default Gallery;
