import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";

const Listing = ({ match }) => {
  const [listing, setListing] = useState(null);

  async function searchListing({ match }) {
    const key = process.env.REACT_APP_ZOMATO_KEY;
    const url = `https://developers.zomato.com/api/v2.1/restaurant?res_id=${match.params.id}`;

    const myHeaders = new Headers({
      "user-key": `${key}`,
    });

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(url, requestOptions);
    const result = await response.json();

    return result;
  }

  useEffect(() => {
    searchListing({ match }).then((result) => setListing(result));
  }, []);

  if (listing !== null) {
    return (
      <div>
        <ListItem listing={listing} />
      </div>
    );
  }

  return <div></div>;
};

export default Listing;
