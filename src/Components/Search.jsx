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
    const url = `https://developers.zomato.com/api/v2.1/search?q=${searchString}
    &count=20&lat=${latitude}&lon=${longitude}&radius=5000&sort=rating&order=asc`;

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

  // submit function calling the apisearcher function

  function handleSubmit(event) {
    event.preventDefault();
    searchAPI(searchString).then((result) => {
      const restaurant = result.restaurants;
      setSearchResults(restaurant);
      setSearchComplete(true);
      setSearchString("");
    });
  }

  // setting search string as user types

  function handleChange(event) {
    setSearchString(event.target.value);
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="input"
          placeholder="dumplings? pasta? burger? all of them?"
          name="searchTerms"
          onChange={handleChange}
          required
        />

        <button type="submit" className="inputbtn">
          search
        </button>
      </form>
    </div>
  );
};

export default Search;
