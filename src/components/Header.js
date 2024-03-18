// Header.js
import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button } from "react-bootstrap";
import "../styles/Header.css";
import "../styles/Offcanvas.css";

export default function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      setIsScrolledUp(scrollTop < lastScrollTop);
      setIsHeaderVisible(scrollTop <= lastScrollTop || scrollTop < 10);
      setIsAtTop(scrollTop === 0);

      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header
      className={`header ${
        isScrolledUp && !isAtTop ? "change-background" : ""
      } ${isHeaderVisible ? "" : "hidden"}`}
    >
      <div className="nav">
        <div className="header-title">
          <h2>green</h2>
          <h2 className="title-edit">spectra</h2>
        </div>
        <>
          {["lg"].map((expand) => (
            <Navbar
              key={expand}
              expand={expand}
              collapseOnSelect="true"
              sticky="top"
            >
              <Navbar.Brand href="/">
                <div className="logo">gs</div>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                scroll="true"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <a href="/" className="header-title">
                      <h2>green</h2>
                      <h2 className="title-edit">spectra</h2>
                    </a>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="nav-links">
                    <Nav.Link href="#intro">who we are</Nav.Link>
                    <Nav.Link href="#packages-info">packages</Nav.Link>
                    <Nav.Link href="#portfolio">portfolio</Nav.Link>
                    <div className="offcanvas-button-edit">
                      <Button href="#contact" className="contact-btn">
                        get in touch
                      </Button>
                    </div>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Navbar>
          ))}
        </>
      </div>
    </header>
  );
}
