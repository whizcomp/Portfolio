import React from "react";
import { Navbar, Nav } from "react-bootstrap";
export default function NavBar() {
  return (
    <Navbar bg="dark">
      <Navbar.Brand href="#home" className="text-light ps-3">
        Navbar with text
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link href="#contact" style={{ color: "tomato" }}>
          Contact
        </Nav.Link>
        <Nav.Link href="#about" style={{ color: "tomato" }}>
          About me
        </Nav.Link>
        <Nav.Link href="#skills" style={{ color: "tomato" }}>
          Skills
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
