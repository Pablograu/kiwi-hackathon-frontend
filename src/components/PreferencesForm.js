import React, { Component } from "react";
import { Button, InputField } from "@kiwicom/orbit-components/lib";

class PreferencesForm extends Component {
  handleClickCity = city => {
    this.props.handleClickCity(city);
  };

  handleClickContinent = continent => {
    this.props.handleClickContinent(continent);
  };

  render() {
    // const ContinentInput = () => {
    //   const {subscriptionType, selectedContinent , handleChangeContinents, queryListContinents} = this.props;
    //   if (subscriptionType === 'Standard') {
    //     return(
    //       <React.Fragment>
    //         <label>Select the continent you would like to travel to:</label>
    //         <input ref={(input) => { this.textInput = input; }} type="text" name="selectedContinent" value={selectedContinent} onChange={handleChangeContinents}/>
    //         {queryListContinents.map((continent, index) => {
    //         return <p value={continent.name} key={`id=${index}`} onClick={() => {
    //                 this.handleClickContinent(continent.name)
    //                 }}>{continent.name}</p>
    //         })}
    //       </React.Fragment>
    //      )
    //   }
    // }
    const {
      startingPoint,
      handleChangeCities,
      handleFormSubmit,
      queryListCitites,
      queryListContinents,
      selectedContinent,
      handleChangeContinents
    } = this.props;
    return (
      <div style={{ height: "80vh" }}>
        <form onSubmit={handleFormSubmit} className="access-form">
          <InputField
            label="Origin:"
            type="text"
            name="startingPoint"
            value={startingPoint}
            onChange={handleChangeCities}
          />
          {queryListCitites.map((city, index) => {
            return (
              <p
                value={city.name}
                key={`id=${index}`}
                onClick={() => {
                  this.handleClickCity(city.name);
                }}
              >
                {city.name}
              </p>
            );
          })}
          <InputField
            label="Select the continent you would like to travel to:"
            ref={input => {
              this.textInput = input;
            }}
            type="text"
            name="selectedContinent"
            value={selectedContinent}
            onChange={handleChangeContinents}
          />
          {queryListContinents.map((continent, index) => {
            return (
              <p
                value={continent.name}
                key={`id=${index}`}
                onClick={() => {
                  this.handleClickContinent(continent.name);
                }}
              >
                {continent.name}
              </p>
            );
          })}
          <Button type="submit">CONFIRM SELECTION</Button>
        </form>
      </div>
    );
  }
}

export default PreferencesForm;
