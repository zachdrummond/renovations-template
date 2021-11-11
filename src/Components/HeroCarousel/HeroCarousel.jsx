import { Carousel } from "react-bootstrap";

// SECTION - HomePage
// SUMMARY - Displays Bootstrap Carousel of hero images, info, and buttons
const HeroCarousel = ({
  image1,
  title1,
  caption1,
  image2,
  title2,
  caption2,
  image3,
  title3,
  caption3,
}) => {
  return (
    <Carousel>
      <Carousel.Item>
        {image1}
        <Carousel.Caption>
          <h3>{title1}</h3>
          <p>{caption1}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {image2}
        <Carousel.Caption>
          <h3>{title2}</h3>
          <p>{caption2}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {image3}
        <Carousel.Caption>
          <h3>{title3}</h3>
          <p>{caption3}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroCarousel;
