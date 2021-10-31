import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
  return (
    <div>

      <Carousel className="background-image">
        <Carousel.Item>
          <img height="50%"
            className="img-fluid"
            src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="banner-text header-text">Do You Need TO Travel</h3>
            <p className="banner-text paragraph-text">We have excited paxkages</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height="50%"
            className="img-fluid"
            src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1219&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="banner-text header-text">What kind of places do you like?</h3>
            <p className="banner-text paragraph-text">You can choose from our services.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid"
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
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