import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
      <div className="footer-so-me">
        <Row className="footer-so-me-row">
          <Col className="footer-so-me-col" xs={6} md={2}>
            <img src={soMeImage1} alt="so-me-1" />
          </Col>
          <Col className="footer-so-me-col" xs={6} md={2}>
            <img src={soMeImage2} alt="so-me-2" />
          </Col>
          <Col className="footer-so-me-col" xs={6} md={2}>
            <img src={soMeImage3} alt="so-me-3" />
          </Col>
          <Col className="footer-so-me-col" xs={6} md={2}>
            <img src={soMeImage4} alt="so-me-4" />
          </Col>{" "}
          <Col className="footer-so-me-col" xs={6} md={2}>
            <img className="so-me-image-last" src={soMeImage5} alt="so-me-5" />
          </Col>
        </Row>
      </div>
    </section>
  );
}
