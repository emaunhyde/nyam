// styling sheet
import "./App.css";
import Bootstrap from "bootstrap/dist/css/bootstrap.css";

// library functionality
import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";

// component imports
import SearchContext from "./Components/SearchContext";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Gallery from "./Components/Gallery";
import Listing from "./Components/Listing";
import Footer from "./Components/Footer";

//
//
//
//

function App() {
  const [searchComplete, setSearchComplete] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);

  //geolocation callback functions for success and failure

  function Coords(geo) {
    let crds = geo.coords;
    setLongitude(crds.longitude);
    setLatitude(crds.latitude);
  }

  function Error(err) {
    console.log(`Error${err.code}: ${err.message}`);
  }

  //geolocation side effect on home page render

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(Coords, Error);
  }, []);

  //
  //
  //
  //

  return (
    <main>
      <Navbar />
      <SearchContext.Provider
        value={{
          searchResults,
          setSearchResults,
          longitude,
          latitude,
          searchComplete,
          setSearchComplete,
        }}
      >
        <Route exact path="/">
          <Header />
        </Route>
        <Route exact path="/search">
          <Search />
          <Gallery />
        </Route>
        <Route exact path="/search/:id" component={Listing} />
      </SearchContext.Provider>

      <Footer />
    </main>
  );
}

export default App;
