import { Container, Navbar } from "react-bootstrap";
import Company from "../../Components/Company/Company";
import NavLinks from "../../Components/NavLinks/NavLinks";

const Navigation = () => {
  return (
    <Navbar bg="light" sticky="top">
      <Container>
        <Company />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavLinks />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
