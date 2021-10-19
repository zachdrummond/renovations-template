import { Col, Container, Navbar, Row } from "react-bootstrap";
import Company from "../../Components/Company/Company";

const Footer = () => {
  return (
    <Navbar bg="dark" fixed="bottom">
      <Container>
        <Row>
          <Col>
            <Company />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Footer;
