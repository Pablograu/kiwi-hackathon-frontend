import React, { Component } from 'react'
import { Button } from "@kiwicom/orbit-components/lib";

class CodeSection extends Component {
  render() {
    return (
      <div className="code-section">
        <div>
          <p>Your Plan allows XX% disscount</p>
          <p>Introduice your code in your next kiwi.com booking</p>
          <p>Remember! the more bookings in kiwi the more chances to get selected</p>
        </div>
        <div className="code-part">
          <p className="code">800813Z</p>
          <p>copy code</p>
          <Button size='small'>
            Go to kiwi.com
          </Button>
        </div>
      </div>
    )
  }
}

export default CodeSection