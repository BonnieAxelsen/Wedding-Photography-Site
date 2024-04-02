import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";

import "../styles/PackagesInfo.css";
import "../styles/PackagesInfoAccordion.css";

import packagesimage1 from "../images/packages-1.png";
import packagesimage2 from "../images/packages-2.png";
import packagesimage3 from "../images/packages-3.png";

export default function PackagesInfo() {
  return (
    <section className="packages-info">
      <Row className="packages-info-row">
        <Col className="packages-info-col" md={4}>
          <img src={packagesimage1} alt="packagesimage-1" />
          <div>
            <h3>four hours</h3>
            <h4>$1500</h4>
          </div>
          <div className="packages-info-text-wrapper">
            <p className="packages-info-text">
              Perfect for a first look, an elopement or a quick capture of a
              ceremony. Short and sweet!
            </p>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <p className="accordion-heading">inclusions</p>
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <p>One professional photographer</p>
                    </li>
                    <li>
                      <p>
                        Pre-wedding consultation to discuss your vision and
                        preferences
                      </p>
                    </li>
                    <li>
                      <p>
                        Coverage of key moments such as first look, the
                        ceremony, exchange of vows, and formal portraits
                      </p>
                    </li>
                    <li>
                      <p>Digital gallery of edited high-resolution images</p>
                    </li>
                    <li>
                      <p>
                        Printing rights for personal use and online gallery for
                        easy sharing with friends and family
                      </p>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Col>
        <Col className="packages-info-col-middle" md={4}>
          <img src={packagesimage2} alt="packagesimage-2" />
          <div>
            <h3>eight hours</h3>
            <h4>$2500</h4>
          </div>
          <div className="packages-info-text-wrapper">
            <p className="packages-info-text">
              For weddings with fewer guests or a tight schedule, covering main
              events and reception highlights.
            </p>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <p className="accordion-heading">inclusions</p>
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <p>
                        Two professional photographers for comprehensive
                        coverage
                      </p>
                    </li>
                    <li>
                      <p>
                        Pre-wedding consultation to discuss your vision/
                        preferences and timeline planning
                      </p>
                    </li>
                    <li>
                      <p>
                        Coverage of getting ready, ceremony, formal portraits,
                        and reception highlights
                      </p>
                    </li>
                    <li>
                      <p>Digital gallery of edited high-resolution images</p>
                    </li>
                    <li>
                      <p>Custom-designed 10x10 wedding album with 20 pages</p>
                    </li>
                    <li>
                      <p>
                        Printing rights for personal use and online gallery for
                        easy sharing with friends and family
                      </p>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Col>
        <Col className="packages-info-col" md={4}>
          <img src={packagesimage3} alt="packagesimage-3" />
          <div>
            <h3>twelve hours</h3>
            <h4>$4500</h4>
          </div>
          <div className="packages-info-text-wrapper">
            <p className="packages-info-text">
              From the getting ready, all the way to the party, cake and
              fireworks. Your full day captured!
            </p>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <p className="accordion-heading">inclusions</p>
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <p>
                        Full-day coverage, by a team of three professional
                        photographers
                      </p>
                    </li>
                    <li>
                      <p>
                        Pre-wedding consultation, timeline planning, and venue
                        walkthrough
                      </p>
                    </li>
                    <li>
                      <p>
                        Coverage of entire day from pre-ceremony preparations to
                        reception festivities
                      </p>
                    </li>
                    <li>
                      <p>
                        Drone photography for stunning aerial shots (where
                        permitted)
                      </p>
                    </li>
                    <li>
                      <p>Digital gallery of edited high-resolution images</p>
                    </li>
                    <li>
                      <p>Custom-designed 12x12 wedding album with 30 pages</p>
                    </li>
                    <li>
                      <p>
                        Two parent albums (8x8) duplicates of the main album
                      </p>
                    </li>
                    <li>
                      <p>
                        Highlight video reel capturing the essence of your day
                      </p>
                    </li>
                    <li>
                      <p>
                        Printing rights for personal use and online gallery for
                        easy sharing with friends and family
                      </p>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Col>
      </Row>
    </section>
  );
}
