import { Col, Container, Navbar, Row } from "react-bootstrap";
import Company from "../../Components/Company/Company";

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom">
      <Container>
        <Row>
          <Col>
            <Company />
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Footer;
