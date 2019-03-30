import React, { Component } from "react";
import { withAuth } from "../providers/AuthProvider";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Plans from "../components/Plans";

class Main extends Component {
  render() {
    return (
      <div>
        <Hero />
        <HowItWorks />
        <Plans />
      </div>
    );
  }
}

export default withAuth(Main);
