import {
  Button,
  Col,
  Container,
  Form,
  FloatingLabel,
  Row,
} from "react-bootstrap";

// SECTION - 
// SUMMARY - Displays the Contact Section with a header and forms for Name, Phone, Email, Address, Description, and Image Uploads
const Contact = () => {
  return (
    <Container id="Contact Us">
      <h1 className="text-center">Tell Us About Your Project</h1>
      <Form>
        <Row>
          <Col>
            <FloatingLabel label="First and Last Name">
              <Form.Control
                type="text"
                placeholder="First Name Last Name"
                required
              />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel label="Phone Number" className="mb-3">
              <Form.Control type="number" placeholder="XXX-XXX-XXXX" required />
            </FloatingLabel>
          </Col>
        </Row>
        <FloatingLabel label="Email Address" className="mb-3">
          <Form.Control type="email" placeholder="name@example.com" required />
        </FloatingLabel>
        <FloatingLabel label="Address" className="mb-3">
          <Form.Control type="text" placeholder="1234 Main St" required />
        </FloatingLabel>
        <Row>
          <Col md={6}>
            <FloatingLabel label="City" className="mb-3">
              <Form.Control type="text" placeholder="City Name" required />
            </FloatingLabel>
          </Col>
          <Col md={4}>
            <FloatingLabel label="State" className="mb-3">
              <Form.Control type="text" placeholder="State Name" required />
            </FloatingLabel>
          </Col>
          <Col md={2}>
            <FloatingLabel label="Zip Code" className="mb-3">
              <Form.Control type="text" placeholder="Zip Code" required />
            </FloatingLabel>
          </Col>
        </Row>
        <FloatingLabel label="Description" className="mb-3">
          <Form.Control
            as="textarea"
            placeholder="Briefly Describe Your Project"
            required
          />
        </FloatingLabel>
        <Button type="submit">Submit form</Button>
      </Form>
    </Container>
  );
};

export default Contact;
