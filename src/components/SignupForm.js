import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, InputField } from "@kiwicom/orbit-components/lib";

class SignupForn extends Component {
  render() {
    const { username, email, password, handleChange, handleNextStep} = this.props;
    return (
      <div>
        <form>
          <InputField
            label="Username"
            type="text"
            name="username"
            value={username}
            placeholder="Placeholder"
            onChange={handleChange}
            required
          />
          <InputField
            type="email"
            label="Email"
            value={email}
            name="email"
            placeholder="Email"
            onChange={handleChange}
            help={<div />}
            required
          />
          <InputField
            type="password"
            label="Password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <Button onClick={handleNextStep}>
            Next
          </Button>
        </form>

        <p>Already have account? 
          <Link to={"/login"}> Login</Link>
        </p>
      </div>
    )
  }
}

export default SignupForn;