import React from "react";
import { Button } from "@kiwicom/orbit-components/lib";

export default function Plans() {
  return (
    <div className="plans">
      <h2 style={{ padding: "0 3rem" }}>Choose your plan!</h2>
      <div className="how-boxes">
        <div className="how-box">
          <img src="choose.svg" alt="choose" />
          <h5>Basic plan</h5>
          <p>5% discount in all your purchases in Kiwi.com</p>
          <p>Chance to win an amazing trip</p>
          <p>We will chose your destination #surprisefactor</p>
        </div>
        <div className="how-box">
          <img src="start.svg" alt="start" />
          <h5>Standard plan</h5>
          <p>10% discount in all your purchases in Kiwi.com</p>
          <p>Chance to win an amazing trip with someone</p>
          <p>Chose the continent you would like to visit</p>
        </div>
        <div className="how-box">
          <img src="travel-the-world.svg" alt="world" />
          <h5>Premium plan</h5>
          <p>15% discount in all your purchases in Kiwi.com</p>
          <p>Chance to win an amazing trip with someone</p>
          <p>Pick 5 destinations and we will select one for you</p>
        </div>
      </div>
      <Button>GET STARTED</Button>
    </div>
  );
}
