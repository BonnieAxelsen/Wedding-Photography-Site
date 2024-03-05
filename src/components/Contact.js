import React from "react";
import { Button } from "react-bootstrap";

import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-content">
        <h1>ready to say 'i do?'</h1>
        <div className="contact-text">
          <p>
            Reach out, and let's embark on a journey, where every moment is
            encapsulated with the beauty and emotion it deserves
          </p>
          <Button href="#" className="contact-btn">
            get in touch
          </Button>
        </div>{" "}
      </div>
    </div>
  );
}
