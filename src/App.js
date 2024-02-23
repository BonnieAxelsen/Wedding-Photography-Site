import React from "react";
import Container from "react-bootstrap/Container";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Packages from "./components/Packages";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Container fluid>
        <Hero />
        <Intro />
        <Packages />
      </Container>
    </div>
  );
}
