import React from "react";
import Cards from "./Cards";
import Navigation from "./Navigation";
import HomeInfo from "./HomeInfo";
import { Navbar } from "react-bootstrap";
import Footer from "./Footer";

function Home() {
  return (
    <div className="Home">
      <Navigation />
      <Cards />
      <Footer />{" "}
    </div>
  );
}

export default Home;
