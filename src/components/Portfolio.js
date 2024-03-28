import React from "react";
import "../styles/Portfolio.css"; // Import your CSS file for styling

import portfolioImage1 from "../images/Portfolio-image-1.svg";
import portfolioImage2 from "../images/Portfolio-image-2.svg";
import portfolioImage3 from "../images/Portfolio-image-3.svg";
import portfolioImage4 from "../images/Portfolio-image-4.svg";
import portfolioImage5 from "../images/Portfolio-image-5.svg";

/*  
  import portfolioImage4 from "../images/Portfolio-image-4.svg";
  import portfolioImage5 from "../images/Portfolio-image-5.svg";    */

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-heading">
        <h1>port </h1>
        <h1 className="portfolio-heading-edit"> folio</h1>
      </div>
      <div className="portfolio-gallery-1">
        <img src={portfolioImage1} alt="portfolio-1" />
        <img src={portfolioImage2} alt="portfolio-2" />
        <img src={portfolioImage3} alt="portfolio-3" />
      </div>
      <div className="portfolio-gallery-2">
        <img src={portfolioImage4} alt="portfolio-4" />
        <img src={portfolioImage5} alt="portfolio-5" />
      </div>
    </section>
  );
}
