import React, { useEffect, useState } from "react";

const Search = ({
  latitude,
  longitude,
  setSearchResults,
  setSearchComplete,
  searchResults,
}) => {
  //   function HandleSearch() {
  useEffect(() => {
    const key = process.env.REACT_APP_ZOMATO_KEY;
    const input = "wings";

    var myHeaders = new Headers({
      "user-key": `${key}`,
    });

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(
      `https://developers.zomato.com/api/v2.1/search?lat=${latitude}&lon=${longitude}&sort=real_distance&query=${input}&radius=500&count=20`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setSearchResults(result))
      .catch((error) => console.log("error", error));
  }, []);
  //   }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="what city are you in?"
          name="searchTerms"
          required
        />
        {console.log(searchResults)}
        <button type="submit">go</button>
      </form>
    </div>
  );
};

export default Search;
