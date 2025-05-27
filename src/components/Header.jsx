"use client";

import { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { BsSun, BsMoon } from "react-icons/bs";

function Header({ theme, toggleTheme }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="py-3 shadow-sm"
      bg={theme === "dark" ? "dark" : "light"}
      variant={theme === "dark" ? "dark" : "light"}
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href="#home" className="logo fw-bold fs-4">
          <span className="colored-text">Hannah</span>Hogan
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              className="navbar-links"
              href="#about"
              onClick={() => setExpanded(false)}
            >
              About
            </Nav.Link>
            <Nav.Link
              className="navbar-links"
              href="#projects"
              onClick={() => setExpanded(false)}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              className="navbar-links"
              href="#experience"
              onClick={() => setExpanded(false)}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              className="navbar-links"
              href="#personal"
              onClick={() => setExpanded(false)}
            >
              Personal
            </Nav.Link>
            <Nav.Link
              className="navbar-links"
              href="#contact"
              onClick={() => setExpanded(false)}
            >
              Contact
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <Button
              className="me-2 outline-button"
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? <BsSun /> : <BsMoon />}
            </Button>
            <Button className="colored-button" href="#contact">
              Hire Me
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
