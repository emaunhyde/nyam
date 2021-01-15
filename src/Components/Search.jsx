import React, { useEffect, useState, useContext } from "react";
import SearchContext from "./SearchContext";

const Search = () => {
  // imported context information
  const {
    longitude,
    latitude,
    searchResults,
    setSearchResults,
    setSearchComplete,
    searchComplete,
  } = useContext(SearchContext);

  // search states

  const [searchString, setSearchString] = useState("");

  // api search function occuring on form submit

  function searchAPI(searchString) {
    const key = process.env.REACT_APP_ZOMATO_KEY;
    const url = `https://developers.zomato.com/api/v2.1/search?lat=${latitude}&lon=${longitude}&sort=real_distance&query=${searchString}&radius=500&count=20`;

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
        console.log(searchResults);
        console.log(searchComplete);
      })
      .catch((error) => console.log("error", error));
  }

  // submit function calling the apisearcher function

  function handleSubmit(event) {
    event.preventDefault();
    searchAPI(searchString);
  }

  // setting search string as user types

  function handleChange(event) {
    setSearchString(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="input"
          placeholder=" stop frowning and tell us what you're looking for"
          name="searchTerms"
          onChange={handleChange}
          required
        />

        <button type="submit">go</button>
      </form>
    </div>
  );
};

export default Search;
