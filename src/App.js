import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";

const key = process.env.REACT_APP_ZOMATO_KEY;

var myHeaders = new Headers({
  "user-key": `${key}`,
});

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

function App() {
  useEffect(() => {
    fetch(
      "https://developers.zomato.com/api/v2.1/search?city_id=289&count=20",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="App">
      <h1>hello</h1>
      <p></p>
    </div>
  );
}

export default App;
