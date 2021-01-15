import React, { useEffect, useState, useContext } from "react";
import SearchContext from "./SearchContext";

const Search = () => {
  const {
    longitude,
    latitude,
    searchResults,
    setSearchResults,
    setSearchComplete,
    searchComplete,
  } = useContext(SearchContext);
  //   function HandleSearch() {

  useEffect(() => {
    const key = process.env.REACT_APP_ZOMATO_KEY;
    const input = "wings";
    const url = `https://developers.zomato.com/api/v2.1/search?lat=${latitude}&lon=${longitude}&sort=real_distance&query=${input}&radius=500&count=20`;

    var myHeaders = new Headers({
      "user-key": `${key}`,
    });

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setSearchResults(result);
        setSearchComplete(true);
      })
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

        <button type="submit">go</button>
      </form>
    </div>
  );
};

export default Search;
