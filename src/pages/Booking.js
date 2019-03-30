import React, { Component } from 'react'
import Options from '../components/Options'
import DatesForm from '../components/DatesForm'

class Booking extends Component {
  render() {
    return (
      <div>
        <Options></Options>
        <DatesForm></DatesForm>
      </div>
    )
  }
}

export default Booking;