import { Col, Container, Row } from "react-bootstrap";
import Company from "../../Components/Company/Company";
import Email from "../../Components/Icons/Email";
import GitHub from "../../Components/Icons/GitHub";
import House from "../../Components/Icons/House";
import Phone from "../../Components/Icons/Phone";

// SECTION - Footer
// SUMMARY - Displays the Footer Section with Company Info, Contact Info, and Design Info
const Footer = () => {
  return (
    <footer className="py-3 mt-5 bg-dark text-light">
      <Container className="text-center">
        <Row>
          <Col>
            <Company />
          </Col>
          <Col>
            <h4>Get in Touch</h4>
            <ul className="list-unstyled">
              <li>
                <House />
              </li>
              <li>
                <Phone />
              </li>
              <li>
                <Email />
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>
              &copy;{new Date().getFullYear()} | Your Company Name | All Rights
              Reserved
            </h5>
            <span>Website Designed by </span>
            <GitHub />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
