import React from "react";
import { Button } from "@kiwicom/orbit-components/lib";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Get the oportunnity of winning a great trip with Sunrise</h1>
        <p>
          Do you travel as much as you would like? Have you ever wanted to go to
          Japan but you never find the time? Tequila Sunrise by Kiwi can get you
          there, join our subscription plan and win a once in a life time trip
          every month. Not convinced? what about a 5% discount in all of your
          trips.
        </p>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <Button>GET STARTED</Button>
        </Link>
      </div>
      <img src="island-hero.jpeg" alt="img" />
    </div>
  );
}
