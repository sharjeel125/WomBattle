import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import companyLogo from "../assets/images/logo-1.png";

export default function Header() {
  return (
    <>
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <img
              src={companyLogo}
              style={{ width: "12%", height: "12%", }}
              alt="BigCo Inc. logo"
            />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav.Link
                href="#connect "
                style={{ justifyContent: "flex-end", color: "white" }}
              >
               <Button variant="primary">Connect Wallet</Button>
              </Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
