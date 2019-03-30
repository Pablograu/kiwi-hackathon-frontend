import React, { Component } from 'react'
import Options from '../components/Options'
import DatesForm from '../components/DatesForm'
import { Redirect } from 'react-router-dom';
import { Link } from '@kiwicom/orbit-components/lib/icons';

class Booking extends Component {
  state = {
    step: 1,
    departure: '',
    return: '',
    redirect: false,
    deeplink: '',
  }

  handleOnClick = (deeplink) => {
    window.location = deeplink;
    // this.setState({
    //   redirect: true,
    //   deeplink
    // })
  }

  handleOnChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleNextStep = ( ) => {
    const newStep = this.state.step
    this.setState({
      step: newStep + 1,
    })
  }

  render() {
    const {redirect, step, departure, deeplink} = this.state;
    if (redirect === true) {
      return (<Link to={deeplink}/>)
    }
    if(step === 1) {
      return(
        <div>
          <DatesForm 
          handleNextStep={this.handleNextStep}
          handleOnChange={this.handleOnChange}
          departure={departure}
          return={this.state.return}
          />
        </div>)
    } else if (this.state.step === 2) {
      return (
        <div>
          <Options
            departure={this.state.departure}
            return={this.state.return}
            handleOnClick={this.handleOnClick}
          />
        </div>)
    }
  }
}

export default Booking;