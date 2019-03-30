import React from "react";

export default function Plans() {
  return (
    <div className="plans">
      <h2 style={{ padding: "0 3rem" }}>Choose your plan!</h2>
      <div className="how-boxes">
        <div className="how-box">
          <img src="choose.svg" alt="choose" />
          <h5>Choose a plan</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            vero veritatis rerum amet voluptatibus, fuga eius nisi dicta
            exercitationem delectus libero at deserunt, officiis possimus sequi
            porro cupiditate dolor aspernatur?
          </p>
        </div>
        <div className="how-box">
          <img src="start.svg" alt="start" />
          <h5>Start Booking</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            vero veritatis rerum amet voluptatibus, fuga eius nisi dicta
            exercitationem delectus libero at deserunt, officiis possimus sequi
            porro cupiditate dolor aspernatur?
          </p>
        </div>
        <div className="how-box">
          <img src="travel-the-world.svg" alt="world" />
          <h5>Win a Free ticket to your dream destination</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            vero veritatis rerum amet voluptatibus, fuga eius nisi dicta
            exercitationem delectus libero at deserunt, officiis possimus sequi
            porro cupiditate dolor aspernatur?
          </p>
        </div>
      </div>
      <button>GET STARTED</button>
    </div>
  );
}
