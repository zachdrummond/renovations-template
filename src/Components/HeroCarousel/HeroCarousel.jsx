import { Carousel } from "react-bootstrap";
//import IMAGES from "../../images/images";

// SECTION - HomePage
// SUMMARY - Displays Bootstrap Carousel of hero images, info, and buttons
const HeroCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <svg
          className="bd-placeholder-img"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <rect width="100%" height="100%" fill="#777"></rect>
        </svg>
        <Carousel.Caption>
          <h3>First Slide Label</h3>
          <p>Add Caption Here</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <svg
          className="bd-placeholder-img"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <rect width="100%" height="100%" fill="#777"></rect>
        </svg>
        <Carousel.Caption>
          <h3>Second Slide Label</h3>
          <p>Add Caption Here</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <svg
          className="bd-placeholder-img"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <rect width="100%" height="100%" fill="#777"></rect>
        </svg>
        <Carousel.Caption>
          <h3>Third Slide Label</h3>
          <p>Add Caption Here</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroCarousel;
