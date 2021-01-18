import React, { useState, useEffect, useContext } from "react";
import SearchContext from "./SearchContext";
import RestaurantList from "./RestaurantList";

const Gallery = () => {
  const { searchResults, searchComplete, setSearchComplete } = useContext(
    SearchContext
  );
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    if (searchComplete === true) {
      setRestaurants(searchResults);
      setSearchComplete(false);
    }
  }, [searchResults, restaurants, searchComplete, setSearchComplete]);

  return (
    <div>
      <RestaurantList restaurants={restaurants} />
    </div>
  );
};

export default Gallery;
