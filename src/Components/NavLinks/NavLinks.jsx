import { Button, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

// SECTION - Navbar
// SUMMARY - Displays the links to the page, phone number, and quote button
const NavLinks = () => {
  return (
    <Nav className="mx-auto">
      <NavDropdown title="Services">
        <NavDropdown.Item href="#">Kitchen Remodeling</NavDropdown.Item>
        <NavDropdown.Item href="#">Basement Finishing</NavDropdown.Item>
        <NavDropdown.Item href="#">
          Home Renovations and Additions
        </NavDropdown.Item>
      </NavDropdown>
      <Nav.Link as={NavLink} to="/renovations-template/portfolio">Portfolio</Nav.Link>
      <NavDropdown title="About">
        <NavDropdown.Item as={NavLink} to="/renovations-template/about">About Us</NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/renovations-template/process">Our Process</NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/renovations-template/contact">Contact Us</NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/renovations-template/reviews">Reviews</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Pricing">
        <NavDropdown.Item href="#">Kitchen Remodeling</NavDropdown.Item>
        <NavDropdown.Item href="#">Basement Finishing</NavDropdown.Item>
        <NavDropdown.Item href="#">
          Home Renovations and Additions
        </NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/">(123) 456-7890</Nav.Link>
      <Button variant="primary">Get a Quote</Button>
    </Nav>
  );
};

export default NavLinks;
