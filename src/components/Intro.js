import React from "react";
import "../styles/Intro.css";

export default function Intro() {
  return (
    <section className="intro" id="intro">
      <div className="intro-layout">
        <div className="intro-content">
          <div>
            <h3>Designed for nature lovers</h3>
          </div>
          <div>
            <p>
              We're a duo of visual enchantment, weaving our photographic charm
              amidst the whispering trees! Nestled in the mystical embrace of
              the Yarra Valley and the captivating Dandenong region of Victoria,
              our mission is to choreograph a dance between you and nature.
            </p>
            <p className="intro-last-paragraph">
              We craft images that become timeless love affairs, each glance a
              rekindling of your special day. Moody and profound undertones? Oh,
              they're our artistic heartbeat!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
