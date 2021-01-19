import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Header = () => {
  const [photos, setPhotos] = useState([]);
  const key = process.env.REACT_APP_PEXELS_KEY;
  const url = `https://api.pexels.com/v1/search?query=meal&per_page=3`;

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

  if (photos.length < 1) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  } else {
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={photos.photos[0].src.landscape}
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={photos.photos[1].src.landscape}
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={photos.photos[2].src.landscape}
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
};

export default Header;
