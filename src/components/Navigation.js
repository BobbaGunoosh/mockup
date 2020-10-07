import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import img from "../assets/tags.svg";

function Navigation() {
  return (
    <>
      <Navbar
        className="justify-content-between"
        bg="dark"
        variant="dark"
        fixed="top"
      >
        <Navbar.Brand href="#home">
          <img
            src={img}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />{" "}
          Title of Website
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>

          <Nav.Link href="/about">About</Nav.Link>

          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default Navigation;
