import React, { Component } from "react";
import { withAuth } from "../providers/AuthProvider";
import SignupForm from "../components/SignupForm";
import PlanForm from "../components/PlanForm";
import PreferencesForm from "../components/PreferencesForm";
import tequilaLocationsService from "../lib/tequila-locations-service";

class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    step: 1,
    subscriptionType: "Standard",
    startingPoint: "",
    selectedContinent: "",
    queryListCitites: [],
    queryListContinents: []
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const {
      username,
      email,
      password,
      subscriptionType,
      startingPoint
    } = this.state;
    this.props
      .signup({ username, email, password, subscriptionType, startingPoint })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleChangeCities = event => {
    this.handleChange(event);
    const { value } = event.target;
    tequilaLocationsService
      .checkFlights(value, "city")
      .then(data => {
        this.setState({
          queryListCitites: data.locations
        });
      })
      .catch(error => console.log(error));
  };

  handleChangeContinents = event => {
    this.handleChange(event);
    const { value } = event.target;
    tequilaLocationsService
      .checkFlights(value, "continent")
      .then(data => {
        console.log(data);
        this.setState({
          queryListContinents: data.locations
        });
      })
      .catch(error => console.log(error));
  };

  handleNextStep = () => {
    const currentStep = this.state.step;
    this.setState({
      step: currentStep + 1
    });
  };

  handleClickCity = locationName => {
    console.log(locationName);
    this.setState({
      queryListCitites: [],
      startingPoint: locationName
    });
  };

  handleClickContinent = continentName => {
    console.log(continentName);
    this.setState({
      queryListContinents: [],
      selectedContinent: continentName
    });
  };

  handleChangePlan = plan => {
    const currentStep = this.state.step;
    this.setState({
      step: currentStep + 1,
      plan: plan
    });
  };

  render() {
    const {
      username,
      email,
      password,
      step,
      subscriptionType,
      queryListCitites,
      startingPoint,
      queryListContinents
    } = this.state;
    if (step === 1) {
      return (
        <SignupForm
          username={username}
          email={email}
          password={password}
          handleChange={this.handleChange}
          handleNextStep={this.handleNextStep}
        />
      );
    } else if (step === 2) {
      return (
        <PlanForm
          handleChange={this.handleChangePlan}
          handleNextStep={this.handleNextStep}
        />
      );
    } else if (step === 3) {
      return (
        <PreferencesForm
          subscriptionType={subscriptionType}
          handleFormSubmit={this.handleFormSubmit}
          handleChangeCities={this.handleChangeCities}
          handleChangeContinents={this.handleChangeContinents}
          queryListCitites={queryListCitites}
          queryListContinents={queryListContinents}
          handleClickCity={this.handleClickCity}
          handleClickContinent={this.handleClickContinent}
          startingPoint={startingPoint}
        />
      );
    }
  }
}

export default withAuth(Signup);
