import React from "react";
import { Button } from "@kiwicom/orbit-components/lib";

export default function GetPrize() {
  return (
    <div className="getPrizeContainer">
      <div className="getPrizeText">
        <h2>Travel prize</h2>
        <p>
          With Sunrise you get great discounts in kiwi.com and the AWESOME
          opportunity of winning a trip to any destination in the world, with
          tickets valuated in 500€
        </p>
        <Button>GET STARTED</Button>
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
