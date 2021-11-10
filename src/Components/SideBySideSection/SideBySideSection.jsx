import { Col, Container, Row, Stack } from "react-bootstrap";
// SECTION - HomePage
// SUMMARY - Displays an image, title, and text split horizontally
const SideBySideSection = ({ id, title, image, text, direction }) => {
  // SUMMARY - Stacks the title vertically over the text
  // ARGUMENTS - title (type - string) and text (type - string)
  // RETURNS - A new object (React Element <div>)
  const AlignTitleText = (title, text) => {
    return (
      <Stack>
        <h3>{title}</h3> <hr />
        {text}
      </Stack>
    );
  };

  return (
    <Container className="my-5">
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
