import { Container, Navbar } from "react-bootstrap";
import CompanyLogo from "../../Components/CompanyLogo/CompanyLogo";
import NavLinks from "../../Components/NavLinks/NavLinks";

// SECTION - Navbar
// SUMMARY - Displays the Navbar Section with the Company Logo and Nav Links
const Navigation = () => {
  return (
    <Navbar bg="light" variant="light" sticky="top">
      <Container>
        <CompanyLogo />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavLinks />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
