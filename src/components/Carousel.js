import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../Styles/Carousel.css'; // Import the CSS file
import blackDish from "../assets/Current.jpg";
import concluded from "../assets/Concluded.jpg";

const MyCarousel = () => {
  return (
    <div className="carousel-container"> {/* Wrapper div */}
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={concluded}
            alt="First slide"  
            style={{
              width: '80%',
              height: '550px', // Set height as needed
              objectFit: 'cover' // Options: 'fill', 'contain', 'cover', 'none', 'scale-down'
            }}
          />
          <Carousel.Caption>
            <h3>Feed Horn</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={blackDish}
            alt="Second slide"
            style={{
              width: '80%',
              height: '550px', // Set height as needed
              objectFit: 'cover' // Options: 'fill', 'contain', 'cover', 'none', 'scale-down'
            }}
          />
          <Carousel.Caption>
            <h3>70 cm Black Dish</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={blackDish}
            alt="Third slide"
            style={{
              width: '90%',
              height: '550px', // Set height as needed
              objectFit: 'cover' // Options: 'fill', 'contain', 'cover', 'none', 'scale-down'
            }}
          />
          <Carousel.Caption>
            <h3>65 cm Red Dish</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;