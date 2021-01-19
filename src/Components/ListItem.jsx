import React from "react";

const ListItem = (listing) => {
  const restaurant = listing.listing;
  return (
    <div>
      <h3>{restaurant.name}</h3>
      <h4>{restaurant.cuisines}</h4>
      <h5>{restaurant.highlights}</h5>
      <h5>{restaurant.location.address}</h5>
      <h6>{restaurant.timings}</h6>
    </div>
  );
};

export default ListItem;
