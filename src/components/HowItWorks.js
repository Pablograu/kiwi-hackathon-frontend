import React from "react";

export default function HowitWorks() {
  return (
    <div className="how">
      <h2 style={{ padding: "0 3rem" }}>How does it work?</h2>
      <div className="how-boxes">
        <div className="how-box">
          <img src="choose.png" alt="choose" />
          <h5>Choose a plan</h5>
          <p>
            FlyKiwi memberships grant you access to special discounts and makes
            you eligible for one of the four super trips that we will raffle
            every year! Starting at 5€ a month
          </p>
        </div>
        <div className="how-box">
          <img src="start.png" alt="start" />
          <h5>Start Booking</h5>
          <p>
            Up to 15% disccount is available in each and every trip you book.
            Also, more booking mean higher probability to be among the raffle
            winners.
          </p>
        </div>
        <div className="how-box">
          <img src="travel-the-world.png" alt="world" />
          <h5>Win a Free ticket to your dream destination</h5>
          <p>
            Every four months FlyKiwi raffles the trip of your dreams. You
            select your dates and can choose one destination among five options.
          </p>
        </div>
      </div>
    </div>
  );
}
