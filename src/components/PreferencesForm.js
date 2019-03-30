import React, { Component } from 'react';

class PreferencesForm extends Component {
  render() {
    const { startingPoint, handleChangeLocations, handleFormSubmit, queryList} = this.props;
    return (
      <form onSubmit={handleFormSubmit}>
        <label>Origin:</label>
          <input type="text" name="startingPoint" value={startingPoint} onChange={handleChangeLocations}/>
            {queryList.map((location, index) => {
              return <p value={location.name} key={`id=${index}`}>{location.name}</p>
            })}
          <input type="submit" value="Signup" />
      </form>
    )
  }
}

export default PreferencesForm;