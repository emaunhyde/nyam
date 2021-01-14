import React, { useState, useEffect } from "react";

const Gallery = ({ searchResults }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    setRestaurants(searchResults.restaurants);
    console.log(restaurants[0].restaurant.name);
  }, [searchResults]);

  return (
    <div>
      <h3></h3>
    </div>
  );
};

export default Gallery;
