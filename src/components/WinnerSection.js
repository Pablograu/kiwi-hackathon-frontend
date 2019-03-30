import React, { Component } from 'react'
import { Button } from "@kiwicom/orbit-components/lib";

export default class WinnerSection extends Component {
  render() {
    return (
      <div className="winner-section">
        <div>
          <p>Congratulations!</p>
          <p>You are the winner!</p>
          <Button size='small' onClick={this.props.handleClick}>
              PROCESS TO BOOK YOUR FLIGHT
          </Button>
        </div>
      </div>
    )
  }
}
