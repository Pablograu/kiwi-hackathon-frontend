import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, InputField } from "@kiwicom/orbit-components/lib";

export default class Payment extends Component {
  state = {};

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div style={{ height: "80vh" }}>
        <form className="access-form">
          <h2>Please input your payment details</h2>
          <InputField
            name="card"
            type="text"
            placeholder="Credit card"
            label="Card number"
          />
          <InputField name="cvc" type="text" placeholder="XXX" label="CVC" />
          <InputField
            name="expDate"
            type="date"
            placeholder="MM/YY"
            label="Expiration date"
          />
          <Link to="/Private" style={{ textDecoration: "none" }}>
            <Button onClick={this.props.handleFormSubmit}>
              GIMME THE MONEY!
            </Button>
          </Link>
        </form>
      </div>
    );
  }
}
