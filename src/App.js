import React from "react";
import Container from "react-bootstrap/Container";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Packages from "./components/Packages";
import PackagesInfo from "./components/PackagesInfo";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

import "./App.css";

export default function App() {
  return (
    <div className="App" id="home">
      <Container fluid>
        <Hero />
        <Intro />
        <Packages />
        <PackagesInfo />
        <Portfolio />
        <Contact />
      </Container>
    </div>
  );
}
