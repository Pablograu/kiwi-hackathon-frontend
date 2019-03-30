import React, { Component } from 'react'
import { Button } from "@kiwicom/orbit-components/lib";

class DatesForm extends Component {
  render() {
    return (
      <div>
        <p>Choose dates between 30/05/2019 & 30/06/2019</p>
        <form>
          <input disabled></input>
          <input type="Date"></input>
          <input type="Date"></input>
          <Button size='small'>
              Search
          </Button>
        </form>
      </div>
    )
  }
}

export default DatesForm;
