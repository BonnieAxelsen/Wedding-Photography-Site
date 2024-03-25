import React from "react";
import Container from "react-bootstrap/Container";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Packages from "./components/Packages";
import PackagesInfo from "./components/PackagesInfo";
import PortfolioInfo from "./components/PortfolioInfo";

import Contact from "./components/Contact";

/*;
import Portfolio from "./components/Portfolio";

import Test from "./components/Test";
*/

import "./App.css";

export default function App() {
  return (
    <div className="app" id="home">
      <Container fluid>
        <Hero />
        <Intro />
        <Packages />
        <PackagesInfo /> {/*  <Test />   <Portfolio />  */}
        <PortfolioInfo />
        <Contact />
      </Container>
    </div>
  );
}
