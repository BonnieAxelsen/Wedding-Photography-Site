import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";

import "../styles/Footer.css"; // Import your CSS file for styling
/*     */

import soMeImage1 from "../images/SoMe-image-1.svg";
import soMeImage2 from "../images/SoMe-image-2.svg";
import soMeImage3 from "../images/SoMe-image-3.svg";
import soMeImage4 from "../images/SoMe-image-4.svg";
import soMeImage5 from "../images/SoMe-image-5.svg";

export default function Footer() {
  return (
    <section className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-so-me">
          <div className="footer-so-me-gallery">
            <img src={soMeImage1} alt="so-me-1" />
            <img src={soMeImage2} alt="so-me-2" />
            <img src={soMeImage3} alt="so-me-3" />
            <img src={soMeImage4} alt="so-me-4" />
            <img src={soMeImage5} alt="so-me-5" className="so-me-last-image" />
          </div>
        </div>
        <div className="footer-nav">
          <div className="footer-logo">
            <Navbar.Brand href="/" className="header-title">
              <h2>green</h2>
              <h2 className="title-edit">spectra</h2>
            </Navbar.Brand>
          </div>
          <div className="footer-links">
            <Nav className="nav-links">
              <Nav.Link href="#intro">who we are</Nav.Link>
              <Nav.Link href="#packages">packages</Nav.Link>
              <Nav.Link href="#portfolio">portfolio</Nav.Link>
            </Nav>
            <Nav className="nav-links">
              <Nav.Link href="mailto:bonniekhill94@gmail.com" target="_blank">
                contact
              </Nav.Link>
              <Nav.Link href="">instagram</Nav.Link>
              <Nav.Link href="/">home</Nav.Link>
            </Nav>
          </div>
          <div className="footer-contact">
            <Button
              href="mailto:bonniekhill94@gmail.com"
              className="contact-btn"
              target="_blank"
            >
              get in touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
