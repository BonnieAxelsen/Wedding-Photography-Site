import React from "react";
import "../styles/Test.css"; // Import your CSS file for styling

import portfolioImage1 from "../images/Portfolio-image-1.svg";
import portfolioImage2 from "../images/Portfolio-image-2.svg";
import portfolioImage3 from "../images/Portfolio-image-3.svg";

/*
 */

export default function Test() {
  return (
    <section className="portfolio-info" id="portfolio">
      <div className="test-1">
        <div className="test-group">
          <img src={portfolioImage1} alt="portfolio-1" />
          <p>hello world</p>
        </div>
        <div className="test-group">
          <img src={portfolioImage2} alt="portfolio-2" />
          <p>hello world</p>
        </div>
        <div className="test-group">
          <img src={portfolioImage3} alt="portfolio-3" />
          <p>hello world</p>
        </div>
      </div>
    </section>
  );
}
