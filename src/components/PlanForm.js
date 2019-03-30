import React, { Component } from 'react';

class PlanForm extends Component {
  render() {
    const {handleChange, handleNextStep} = this.props;
    return (
      <form onSubmit={handleNextStep}>
        <input type="submit" value="Next Step" />
      </form>
    )
  }
}

export default PlanForm;