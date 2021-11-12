import { Button, Col, Container, Row, Stack } from "react-bootstrap";

const PortfolioSection = ({ title, image1, image2, image3 }) => {
  return (
    <Container className="my-5 text-center">
      <h1>{title} Portfolio</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        optio dolore nihil quae impedit molestias, nostrum deleniti quo ducimus
        rem voluptas repellat. Aliquam amet, dicta excepturi corporis rem
        dolorem! Iste.
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
      <Stack direction="horizontal" gap={3} className="mb-4">
        {image1}
        {image2}
        {image3}
      </Stack>
      <Button variant="outline-primary">Find More Inspiration</Button>
    </Container>
  );
};

export default PortfolioSection;
