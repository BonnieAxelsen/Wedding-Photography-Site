import React from "react";
import "../styles/PortfolioInfo.css";

import portfolioInfoImage1 from "../images/Portfolio-info-image-1.svg";

import portfolioInfoImage2 from "../images/Portfolio-info-image-2.svg";
import portfolioInfoImage3 from "../images/Portfolio-info-image-3.svg";

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
        <div className="portfolio-info-layout-group">
          <img src={portfolioInfoImage1} alt="portfolio-info-1" />
          <div className="portfolio-info-layout-text">
            <h4>nadya & harry</h4>
            <p>21.09.2020</p>
          </div>
        </div>
        <div className="portfolio-info-layout-group">
          <img src={portfolioInfoImage2} alt="portfolio-info-2" />
          <div className="portfolio-info-layout-text">
            <h4>alex & christopher</h4>
            <p>17.06.2021</p>
          </div>
        </div>
        <div className="portfolio-info-layout-group">
          <img src={portfolioInfoImage3} alt="portfolio-info-3" />
          <div className="portfolio-info-layout-text">
            <h4>henrik & margit</h4>
            <p>13.10.2022</p>
          </div>
        </div>
      </div>
    </section>
  );
}
