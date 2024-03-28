import React from "react";
import { Button } from "react-bootstrap";

import "../styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h1>ready to say 'i do?'</h1>
        <div className="contact-text">
          <p>
            Reach out, and let's embark on a journey, where every moment is
            encapsulated with the beauty and emotion it deserves
          </p>
          <Button
            href="mailto:bonniekhill94@gmail.com"
            className="contact-btn"
            target="_blank"
          >
            get in touch
          </Button>
        </div>
      </div>
    </section>
  );
}
