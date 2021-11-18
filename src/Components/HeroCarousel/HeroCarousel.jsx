import { Carousel } from "react-bootstrap";
import IMAGES from "../../images/images";

// SECTION - HomePage
// SUMMARY - Displays Bootstrap Carousel of hero images, info, and buttons
const HeroCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
      <img
      className="d-block w-100"
      src={IMAGES.placeholder}
      alt="First slide"
    />
        <Carousel.Caption>
          <h3>First Slide Label</h3>
          <p>Add Caption Here</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
      className="d-block w-100"
      src={IMAGES.placeholder}
      alt="First slide"
    />
        <Carousel.Caption>
        <h3>Second Slide Label</h3>
          <p>Add Caption Here</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
      className="d-block w-100"
      src={IMAGES.placeholder}
      alt="First slide"
    />
        <Carousel.Caption>
        <h3>Third Slide Label</h3>
          <p>Add Caption Here</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroCarousel;
