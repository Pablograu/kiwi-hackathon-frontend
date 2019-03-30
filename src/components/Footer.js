import React from "react";

export default function Footer() {
  return (
    <div className="foot">
      <div className="foot-compo">
        <div className="links-foot">
          <a href="">Privacy</a>
          <a href="">Cookies Policy</a>
          <a href="">Terms and Conditions</a>
        </div>
        <div className="flykiwi">
          <h5>FlyKiwi©2019</h5>
        </div>
      </div>
      <div className="foot-sn">
        <a
          href="https://www.facebook.com/kiwicom247/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="facebook.svg" alt="facebook" />
        </a>
        <a
          href="https://www.instagram.com/kiwicom247/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="insta.svg" alt="instagram" />
        </a>
        <a
          href="https://www.linkedin.com/company/kiwi.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="linkedin.svg" alt="linkedin" />
        </a>
        <a
          href="https://www.facebook.com/kiwicom247/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="mail.svg" alt="mail" />
        </a>
      </div>
    </div>
  );
}
