import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";

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
    <div className="listing-container">
      <div className="listing-image">
        <Image src={`${photos.photos[0].src.landscape}`} fluid />
      </div>
      <div className="listing-info">
        <h3>{restaurant.name}</h3>
        <h4 className="cuisines">{restaurant.cuisines}</h4>
        <h4 className="highlights">
          {restaurant.highlights.map((e) => {
            return (
              <p className="highlight" key={e}>
                {e}
              </p>
            );
          })}
        </h4>
        <h4 className="address">{restaurant.location.address}</h4>
        <h4 className="hours">{restaurant.timings}</h4>
      </div>
      <div className="listing-buttons">
        <a href={`${restaurant.menu_url}`} className="listinglink">
          <button>menu</button>
        </a>
        <a href={`${restaurant.photos_url}`} className="listinglink">
          <button>pics</button>
        </a>
        <a href={`${restaurant.url}`} className="listinglink">
          <button>gimme</button>
        </a>
      </div>
    </div>
  );
};

export default ListItem;
