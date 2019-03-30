import React from "react";

export default function Footer() {
  return (
    <div className="foot">
      <div className="foot-compo">
        <div className="links-foot">
          <a href="">Privacy</a>
          <a href="">Hmm.. Cookies</a>
          <a href="">Terms and Conditions</a>
        </div>
        <div className="flykiwi">
          <h5>FlyKiwi©2019</h5>
        </div>
      </div>
      <div className="foot-sn">
        <img src="facebook.svg" alt="facebook" />
        <img src="insta.svg" alt="instagram" />
        <img src="linkedin.svg" alt="linkedin" />
        <img src="mail.svg" alt="mail" />
      </div>
    </div>
  );
}
