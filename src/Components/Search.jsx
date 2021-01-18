import React, { useState, useContext } from "react";
import SearchContext from "./SearchContext";

const Search = () => {
  // imported context information
  const {
    longitude,
    latitude,
    setSearchResults,
    setSearchComplete,
  } = useContext(SearchContext);

  // search info -  user input
  const [searchString, setSearchString] = useState("");

  // api search function occuring on form submit

  async function searchAPI(searchString) {
    const key = process.env.REACT_APP_ZOMATO_KEY;
    const url = `https://developers.zomato.com/api/v2.1/search?q=${searchString}&lat=${latitude}
    &lon=${longitude}&radius=500&sort=real_distance&order=asc&start=0&count=20`;

    var myHeaders = new Headers({
      "user-key": `${key}`,
    });

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(url, requestOptions);
    const result = await response.json();

    return result;
  }

  // submit function calling the apisearcher function

  function handleSubmit(event) {
    event.preventDefault();
    searchAPI(searchString).then((result) => {
      setSearchResults(result);
      setSearchComplete(true);
      setSearchString("");
    });
  }

  // setting search string as user types

  function handleChange(event) {
    setSearchString(event.target.value);
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
