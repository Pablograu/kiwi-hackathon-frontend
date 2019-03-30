import React, { Component } from 'react'
import { Button, InputField } from "@kiwicom/orbit-components/lib";
import { withAuth } from '../providers/AuthProvider';

class DatesForm extends Component {
  render() {
    return (
      <div>
        <form>
          <InputField 
            disabled
            label="From"
            value={this.props.user.startingPoint}
          />
          <InputField
            label="Departure"
            type="date"
            name="departure"
            value={this.props.departure}
            placeholder="Placeholder"
            onChange={this.props.handleOnChange}
            required
          />
           <InputField
            label="Return"
            type="date"
            name="return"
            value={this.props.return}
            onChange={this.props.handleOnChange}
            placeholder="Placeholder"
            required
          />
          <Button size='small' onClick={this.props.handleNextStep}>
              Search
          </Button>
        </form>
      </div>
    )
  }
}

export default withAuth(DatesForm);
