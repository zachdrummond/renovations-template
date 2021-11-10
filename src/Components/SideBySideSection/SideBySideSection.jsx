import { Col, Container, Row } from "react-bootstrap";
// SECTION - HomePage
// SUMMARY - Displays an image, title, and text split horizontally
const SideBySideSection = ({ id, title, image, text, direction }) => {
  const AlignTitleText = (title, text) => {
    return (
      <div>
        {title} <hr />
        {text}
      </div>
    );
  };

  return (
    <Container>
      <Row>
        <Col>
          {direction === "left"
            ? image
            : direction === "right"
            ? AlignTitleText(title, text)
            : ""}
        </Col>
        <Col>
          {direction === "left"
            ? AlignTitleText(title, text)
            : direction === "right"
            ? image
            : ""}
        </Col>
      </Row>
    </Container>
  );
};

export default SideBySideSection;
