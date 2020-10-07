import React from "react";
import { Container, Image, Jumbotron } from "react-bootstrap";
import Navigation from "./Navigation";
import office from "../assets/theofficebg.jpg";
import Footer from "./Footer";

function About() {
  return (
    <div className="About">
      <Navigation />
      <Container
        className="text-center"
        style={{ height: "100vh", width: "100%", padding: "40px" }}
      >
        <h2 className="card-title">Dunder Mifflin</h2>
        <Image className="overlay" src={office} fluid />
        <h5 class="">
          Officia id cupidatat est consequat in fugiat incididunt exercitation
          quis minim labore consequat consectetur. Duis adipisicing dolore elit
          commodo ad elit. Labore amet reprehenderit sunt dolor voluptate
          pariatur. Elit ex aliquip non incididunt sint nisi do. Aliqua non aute
          est aliquip nostrud mollit excepteur.
        </h5>
        <Footer />
      </Container>
    </div>
  );
}

export default About;
