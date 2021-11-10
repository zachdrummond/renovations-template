import { Col, Row } from "react-bootstrap";
// SECTION - HomePage
// SUMMARY - Displays an image, title, and text split horizontally
const SideBySideSection = ({ id, title, image, text, direction }) => {
  return (
    <section>
      <Row>
        <Col>
          {direction === "left" ? image : direction === "right" ? text : ""}
        </Col>
        <Col>
          {direction === "left" ? text : direction === "right" ? image : ""}
        </Col>
      </Row>
    </section>
  );
};

export default SideBySideSection;
