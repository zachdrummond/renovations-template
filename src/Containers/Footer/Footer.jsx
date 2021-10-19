import { Col, Container, Row } from "react-bootstrap";
import Company from "../../Components/Company/Company";

const Footer = () => {
  return (
    <footer className="py-3 bg-dark text-light fixed-bottom">
      <Container className="text-center">
        <Row>
          <Col>
            <Company />
          </Col>
          <Col>
            <h4>Get in Touch</h4>
            <ul className="list-unstyled">
              <li>Address</li>
              <li>Phone</li>
              <li>Email</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>
              &copy;{new Date().getFullYear()} | Company Name | All Rights
              Reserved
            </h5>
            <span>Website Designed by Zach Drummond </span>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
