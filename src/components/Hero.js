import React from "react";
import { Button } from "@kiwicom/orbit-components/lib";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>The trip of your dreams is <span class="title-hero">closer than you think!</span></h1>
        <p>
          With FlyKiwi you have guaranteed discounts at kiwi.com and the awesome opportunity to win a trip to any part of the world!
        </p>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <Button>GET STARTED</Button>
        </Link>
      </div>
      <img src="miami_2.png" alt="img-presentation" />
    </div>
  );
}
