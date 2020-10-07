import React from "react";
import { Container, Navbar } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <Navbar fixed="bottom" variant="dark" bg="dark">
        <Container className="d-flex justify-content-center">
          <h4 className="light">This is the footer</h4>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
