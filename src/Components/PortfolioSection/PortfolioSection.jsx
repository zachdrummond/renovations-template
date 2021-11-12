import { Button, Card, Container, Stack } from "react-bootstrap";

const PortfolioSection = ({title}) => {
  return (
    <Container className="my-5 text-center">
      <h1>{title} Portfolio</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque
        voluptas error quae voluptatem veritatis, tempore, minus iure expedita
        provident adipisci! Molestiae quos pariatur consectetur excepturi
        quisquam fugit facilis odio.
      </p>
    </Container>
  );
};

export default PortfolioSection;
