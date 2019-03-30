import React, { Component } from 'react';

class PreferencesForm extends Component {

  handleClickCity = (city) => {
    this.props.handleClickCity(city)
  }

  handleClickContinent = (continent) => {
    this.props.handleClickContinent(continent)
  }

  ContinentInput = () => {
    const {subscriptionType,selectedContinent , handleChangeContinents, queryListContinents} = this.props;
    if (subscriptionType === 'Standard') {
      return(
        <div>
          <input type="text" name="selectedContinent" value={selectedContinent} onChange={handleChangeContinents}/>
          {queryListContinents.map((continent, index) => {
          return <p value={continent.name} key={`id=${index}`} onClick={() => {
                  this.handleClickContinent(continent.name)
                  }}>{continent.name}</p>
          })}
        </div>
       )
    }
  }

  render() {
    const ContinentInput = () => {
      const {subscriptionType,selectedContinent , handleChangeLocations, queryListContinents} = this.props;
      if (subscriptionType === 'Standard') {
        return(
          <div>
            <input type="text" name="selectedContinent" value={selectedContinent} onChange={handleChangeLocations}/>
            {queryListContinents.map((continent, index) => {
            return <p value={continent.name} key={`id=${index}`} onClick={() => {
                    this.handleClickContinent(continent.name)
                    }}>{continent.name}</p>
            })}
          </div>
         )
      }
    }
    const { startingPoint, handleChangeCities, handleFormSubmit, queryListCitites} = this.props;
    return (
      <form onSubmit={handleFormSubmit}>
        <label>Origin:</label>
          <input type="text" name="startingPoint" value={startingPoint} onChange={handleChangeCities}/>
            {queryListCitites.map((location, index) => {
              return <p value={location.name} key={`id=${index}`} onClick={() => {
                this.handleClickCity(location.name)
              }}>{location.name}</p>
            })}
          <input type="submit" value="Signup" />
          <ContinentInput/>
      </form>
    )
  }
}

export default PreferencesForm;