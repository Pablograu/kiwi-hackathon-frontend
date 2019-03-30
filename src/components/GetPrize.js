import React from "react";
import { Button } from "@kiwicom/orbit-components/lib";
import { Link } from "react-router-dom";

export default function GetPrize() {
  return (
    <div className="hero">
      <div className="hero-text getPrizeText">
        <h2>Travel prize</h2>
        <p>
          With Sunrise you get great discounts in kiwi.com and the AWESOME
          opportunity of winning a trip to any destination in the world, with
          tickets valued up until 1000€
        </p>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <Button>GET STARTED</Button>
        </Link>
      </div>
      <div className="getPrizePhoto">
        <img
          src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"
          alt="plane"
        />
      </div>
    </div>
  );
}
