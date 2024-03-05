import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../styles/PackagesInfo.css";

import packageimage1 from "../images/package-1.png";
import packageimage2 from "../images/package-2.png";
import packageimage3 from "../images/package-3.png";

export default function PackagesInfo() {
  return (
    <div className="packages-info">
      <div className="-">
        <Row>
          <Col md>
            <img src={packageimage1} alt="packageimage-1" />
          </Col>
          <Col md>
            <img src={packageimage2} alt="packageimage-2" />
          </Col>
          <Col md>
            <img src={packageimage3} alt="packageimage-3" />
          </Col>
        </Row>
      </div>
    </div>
  );
}
