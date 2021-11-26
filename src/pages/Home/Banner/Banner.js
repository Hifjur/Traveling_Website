import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'




const Banner = () => {
  return (
    <div >

      <Carousel className="background-image">
        <Carousel.Item>
          <img height="50%"
            className="img-fluid"
            src="https://i.ibb.co/ZBn91Y8/banner-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="banner-text header-text">Do You Need TO Travel</h3>
            <p className="banner-text paragraph-text">We have excited packages</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height="50%"
            className="img-fluid"
            src="https://i.ibb.co/VJ1DBbX/banner-2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="banner-text header-text">What kind of places do you like?</h3>
            <p className="banner-text paragraph-text">You can choose from our services.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="50%"
            className="img-fluid"
            src="https://i.ibb.co/nkDrPjP/banner-3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="banner-text header-text">Wanna go overseas?</h3>
            <p className="banner-text paragraph-text">You can add Packages too</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;