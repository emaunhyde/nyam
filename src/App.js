// style sheet
import "./App.css";

// library functionality
import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";

// component imports
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";

function App() {
  const initialState = {};
  const [searchComplete, setSearchComplete] = useState(false);
  const [searchResults, setSearchResults] = useState("");

  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);

  //geolocation callback functions for success and failure

  function Coords(geo) {
    let crds = geo.coords;
    setLongitude(crds.longitude);
    setLatitude(crds.latitude);
    console.log(latitude, longitude);
  }
  function Error(err) {
    console.log(`Error${err.code}: ${err.message}`);
  }

  //geolocation side effect

  useEffect(() => {
    const location = navigator.geolocation.getCurrentPosition(Coords, Error);
  }, []);

  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <Header />

      <Route
        exact
        path="/search"
        render={() => (
          <Search
            latitude={latitude}
            longitude={longitude}
            setSearchComplete={setSearchComplete}
            setSearchResults={setSearchResults}
            searchResults={searchResults}
          />
        )}
      />
      <Gallery searchResults={searchResults} />

      <footer>
        <Footer />
      </footer>
      <>
        <main></main>
      </>
    </>
  );
}

export default App;
