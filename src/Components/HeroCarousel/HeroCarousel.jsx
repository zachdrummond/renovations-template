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
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {image2}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {image2}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroCarousel;
