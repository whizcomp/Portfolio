import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Resume from "../Victor_kipkoech.pdf";
import { ExternalLink as External } from "react-external-link";
export default function NavBar() {
  return (
    <Navbar bg="dark">
      <Navbar.Brand href="#home" className="text-light ps-3">
        My Portfolio
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <External className="btn btn-danger" href={Resume} download>
          {" "}
          Resume
        </External>
        <Nav.Link href="#contact" style={{ color: "tomato" }}>
          Contact
        </Nav.Link>

        <Nav.Link href="#skills" style={{ color: "tomato" }}>
          Skills
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
