import { Button, Nav, NavDropdown } from "react-bootstrap";

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
      <Nav.Link href="/">Portfolio</Nav.Link>
      <NavDropdown title="About">
        <NavDropdown.Item href="#">About Us</NavDropdown.Item>
        <NavDropdown.Item href="#">Our Process</NavDropdown.Item>
        <NavDropdown.Item href="#">Contact Us</NavDropdown.Item>
        <NavDropdown.Item href="#">Reviews</NavDropdown.Item>
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
