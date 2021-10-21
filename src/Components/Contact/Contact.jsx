import { Col, Container, Form, FloatingLabel, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <Container>
      <Form>
        <Row>
          <Col>
            <FloatingLabel label="First and Last Name">
              <Form.Control type="text" placeholder="First Name Last Name" />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel label="Phone Number" className="mb-3">
              <Form.Control type="number" placeholder="XXX-XXX-XXXX" />
            </FloatingLabel>
          </Col>
        </Row>
        <FloatingLabel label="Email Address" className="mb-3">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel label="Address" className="mb-3">
          <Form.Control type="text" placeholder="1234 Main St" />
        </FloatingLabel>
        <Row>
          <Col md={6}>
            <FloatingLabel label="City" className="mb-3">
              <Form.Control type="text" placeholder="City Name" />
            </FloatingLabel>
          </Col>
          <Col md={4}>
            <FloatingLabel label="State" className="mb-3">
              <Form.Control type="text" placeholder="State Name" />
            </FloatingLabel>
          </Col>
          <Col md={2}>
            <FloatingLabel label="Zip Code" className="mb-3">
              <Form.Control type="text" placeholder="Zip Code" />
            </FloatingLabel>
          </Col>
        </Row>
        <FloatingLabel label="Description">
          <Form.Control
            as="textarea"
            placeholder="Briefly Describe Your Project"
          />
        </FloatingLabel>
      </Form>
    </Container>
  );
};

export default Contact;
