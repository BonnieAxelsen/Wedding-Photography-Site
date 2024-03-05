import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button } from "react-bootstrap";

import "../styles/Header.css";
import "../styles/Offcanvas.css";

export default function OffcanvasExample() {
  return (
    <header>
      <div className="nav">
        <div className="header-title">
          <h2>green</h2>
          <h2 className="title-edit">spectra</h2>
        </div>
        <>
          {["lg"].map((expand) => (
            <Navbar key={expand} expand={expand} className="navbar">
              <Navbar.Brand href="#">
                <div className="logo">gs</div>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <div className="header-title">
                      <h2>green</h2>
                      <h2 className="title-edit">spectra</h2>
                    </div>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {" "}
                  <Nav className="nav-links">
                    <Nav.Link href="#action1">packages</Nav.Link>
                    <Nav.Link href="#action2">portfolio</Nav.Link>
                    <Nav.Link href="#action3">contact</Nav.Link>
                    <Button href="#" className="contact-btn">
                      get in touch
                    </Button>{" "}
                  </Nav>
                </Offcanvas.Body>{" "}
              </Navbar.Offcanvas>
            </Navbar>
          ))}
        </>
      </div>
    </header>
  );
}
