import React from "react";

import "../styles/FooterEnd.css"; // Import your CSS file for styling

export default function FooterEnd() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional, smooth scrolling animation
    });
  };

  return (
    <div className="footer-end" id="footer">
      <div className="footer-end-content">
        <p>copyright bonnie axelsen 2024</p>
        <p onClick={scrollToTop} style={{ cursor: "pointer" }}>
          back to top ↑
        </p>
      </div>
    </div>
  );
}
