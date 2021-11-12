import { Button, Col, Container, Row } from "react-bootstrap";

const PortfolioSection = ({ title }) => {
  return (
    <Container className="my-5 text-center">
      <h1>{title} Portfolio</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque
        voluptas error quae voluptatem veritatis, tempore, minus iure expedita
        provident adipisci! Molestiae quos pariatur consectetur excepturi
        quisquam fugit facilis odio.
      </p>
      <Row>
        <Col>
          <h5>550+</h5>
          <h5>Kitchens Remodeled</h5>
        </Col>
        <Col>
          <h5>25+</h5>
          <h5>Basements Finished</h5>
        </Col>
        <Col>
          <h5>20+</h5>
          <h5>Home Renovations and Additions Completed</h5>
        </Col>
      </Row>
      <Button variant="outline-primary">Find More Inspiration</Button>
    </Container>
  );
};

export default PortfolioSection;
