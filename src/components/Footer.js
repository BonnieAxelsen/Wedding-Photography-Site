import React from "react";
import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";

import "../styles/Footer.css"; // Import your CSS file for styling
/*   import { Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

 */

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

        <hr />

        <div className="footer-nav">
          {/* */}
          <div className="footer-links">
            <Nav className="nav-links">
              <Nav.Link href="/" className="left-nav-text-mobile">
                home
              </Nav.Link>
              <Nav.Link href="#intro" className="right-nav-text-mobile">
                who we are
              </Nav.Link>
              <Nav.Link href="#packages" className="left-nav-text-mobile">
                packages
              </Nav.Link>
              <Nav.Link href="#portfolio" className="right-nav-text-mobile">
                portfolio
              </Nav.Link>
              <Nav.Link
                href="mailto:bonniekhill94@gmail.com"
                className="left-nav-text-mobile"
                target="_blank"
              >
                contact
              </Nav.Link>
              <Nav.Link href="" className="right-nav-text-mobile">
                instagram
              </Nav.Link>
            </Nav>
          </div>
          <div className="footer-title-wrapper">
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
