import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import SignupForm from '../components/SignupForm';
import PlanForm from '../components/PlanForm';
import PreferencesForm from '../components/PreferencesForm';
import tequilaLocationsService from '../lib/tequila-locations-service'

class Signup extends Component {

  state = {
    username: "",
    email: "",
    password: "",
    step: 1,
    subscriptionType: null,
    startingPoint: '',
    queryList: [],
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {username, email, password, subscriptionType, startingPoint} = this.state;
    this.props.signup({ username, email, password, subscriptionType, startingPoint})
      .catch(error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleChangeLocations = (event) => {
    const {value} = event.target;
    tequilaLocationsService.checkFlights(value)
    .then((data) => {
      this.setState({
        queryList: data.locations
      })
    })
    .catch(error => console.log(error))
  }

  handleNextStep = (event) => {
    const currentStep = this.state.step;
    this.setState({
      step: currentStep+1
    })
  }

  handleCahngePlan = (plan) => {
    const currentStep = this.state.step;
    this.setState({
      step: currentStep + 1,
      plan: plan,
    })
  }

  render() {
    const { username, email, password , step, subscriptionType, queryList} = this.state;
    if (step === 1) {
      return(<SignupForm 
      username={username} 
      email={email} 
      password={password} 
      handleChange={this.handleChange} 
      handleNextStep={this.handleNextStep}/>)
    } else if (step === 2) {
      return(<PlanForm 
      handleCahngePlan={this.handleCahngePlan}
      handleNextStep={this.handleNextStep}/>)
    } else if (step === 3) {
      return(<PreferencesForm 
      subscriptionType={subscriptionType}
      handleFormSubmit={this.handleFormSubmit}
      handleChangeLocations={this.handleChangeLocations}
      queryList={queryList}
      />)
    }
  }
}

export default withAuth(Signup);