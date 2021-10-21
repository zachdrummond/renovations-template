import { Form, FloatingLabel } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <FloatingLabel label="First and Last Name" className="mb-3">
        <Form.Control type="text" placeholder="First Name Last Name" />
      </FloatingLabel>
      <FloatingLabel label="Phone Number">
        <Form.Control type="number" placeholder="XXX-XXX-XXXX" />
      </FloatingLabel>
      <FloatingLabel label="Phone Number">
        <Form.Control type="number" placeholder="XXX-XXX-XXXX" />
      </FloatingLabel>
    </>
  );
};

export default Contact;
