import React, { Component } from "react";
import { withAuth } from "../providers/AuthProvider";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Plans from "../components/Plans";
import GetDiscount from "../components/GetDiscount";
import GetPrize from "../components/GetPrize";

class Main extends Component {
  render() {
    return (
      <div>
        <Hero />
        <HowItWorks />
        <Plans />
        <GetDiscount />
        <GetPrize />
      </div>
    );
  }
}

export default withAuth(Main);
