import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../styles/PortfolioInfo.css";

import portfolioinfoimage1 from "../images/portfolio-info-image-1.svg";
import portfolioinfoimage2 from "../images/portfolio-info-image-2.svg";
import portfolioinfoimage3 from "../images/portfolio-info-image-3.svg";

export default function PortfolioInfo() {
  return (
    <section className="portfolio-info" id="portfolio-info">
      <div className="portfolio-info-text">
        <p>
          In a world full of unique souls, we're here to weave a photographic
          tale that mirrors their authenticity and comfort. Say goodbye to
          conventional poses – we're on a mission to craft an atmosphere that
          lets our couples be their raw, real selves. Through our lens, we
          strive not just to freeze moments in time, but to artfully intertwine
          emotions, creating a vivid tapestry that resonates with depth and
          timelessness.
        </p>
      </div>
      <div className="portfolio-info-layout">
        <Row className="portfolio-info-row">
          <Col className="portfolio-info-col" md={4}>
            <img src={portfolioinfoimage1} alt="portfolioinfoimage-1" />
            <div className="portfolio-info-image-text">
              <h4>nadya & harry</h4>
              <p>21.09.2020</p>
            </div>
          </Col>
          <Col className="portfolio-info-col" md={4}>
            <img src={portfolioinfoimage2} alt="portfolioinfoimage-2" />
            <div className="portfolio-info-image-text">
              <h4>alex & christopher</h4>
              <p>17.06.2021</p>
            </div>
          </Col>
          <Col className="portfolio-info-col" md={4}>
            <img src={portfolioinfoimage3} alt="portfolioinfoimage-3" />
            <div className="portfolio-info-image-text">
              <h4>henrik & margit</h4>
              <p>13.10.2022</p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
