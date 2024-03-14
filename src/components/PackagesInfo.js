import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";

import "../styles/PackagesInfo.css";

import packageimage1 from "../images/package-1.png";
import packageimage2 from "../images/package-2.png";
import packageimage3 from "../images/package-3.png";

export default function PackagesInfo() {
  return (
    <div className="package-info" id="packages-info">
      <Row className="package-info-row">
        <Col className="package-info-col" md={4}>
          <img src={packageimage1} alt="packageimage-1" />
          <div className="package-info-headings">
            <h3>three hours</h3>
            <h4>$750</h4>
          </div>
          <div className="package-info-text">
            <p>
              Perfect for a first look, an elopement or a quick capture of a
              ceremony. Short and sweet!
            </p>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>inclusions</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Col>
        <Col className="package-info-col-middle" md={4}>
          <img src={packageimage2} alt="packageimage-2" />
          <div className="package-info-headings">
            <h3>six hours</h3>
            <h4>$1450</h4>
          </div>
          <div className="package-info-text">
            <p>
              For weddings with few guests or a tight schedule, covering
              everything up to the reception.
            </p>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>inclusions</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Col>{" "}
        <Col className="package-info-col" md={4}>
          <img src={packageimage3} alt="packageimage-3" />
          <div className="package-info-headings">
            <h3>twelve hours</h3>
            <h4>$2800</h4>
          </div>
          <div className="package-info-text">
            <p>
              From the getting ready, all the way to the party, cake and
              fireworks. Your full day captured!
            </p>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>inclusions</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Col>
      </Row>
    </div>
  );
}
