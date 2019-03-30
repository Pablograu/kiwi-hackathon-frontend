import React, { Component } from "react";

class PlanForm extends Component {
  render() {
    const { handleChange, handleNextStep } = this.props;
    return (
      <form onSubmit={handleNextStep}>
        <div className="subs-plans">
          <div className="plan1" />
          <div className="plan2" />
          <div className="plan3" />
        </div>
        <input type="submit" value="Next Step" />
      </form>
    );
  }
}

export default PlanForm;
