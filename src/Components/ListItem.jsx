import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Map from "./Map";

const ListItem = (listing) => {
  const restaurant = listing.listing;
  const [photos, setPhotos] = useState([]);
  const key = process.env.REACT_APP_PEXELS_KEY;
  const url = `https://api.pexels.com/v1/search?query=${restaurant.cuisines}&per_page=1`;

  // fetching image using api's information on restaurant's cuisine type offerings

  async function searchPhotos() {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        Authorization: `${key}`,
      },
    });
    const result = await response.json();
    return result;
  }

  useEffect(() => {
    searchPhotos().then((result) => {
      setPhotos(result);
    });
  }, []);

  if (photos.length === 0) {
    return <div></div>;
  }
  return (
    <div>
      <Image src={`${photos.photos[0].src.landscape}`} fluid />
      <h3>{restaurant.name}</h3>
      <h4>{restaurant.cuisines}</h4>
      <h5>{restaurant.highlights}</h5>
      <h5>{restaurant.location.address}</h5>
      <h6>{restaurant.timings}</h6>
      {/* <div>
        <Map />
      </div> */}
    </div>
  );
};

export default ListItem;
