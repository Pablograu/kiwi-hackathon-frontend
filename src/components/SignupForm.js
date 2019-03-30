import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, InputField } from "@kiwicom/orbit-components/lib";

class SignupForn extends Component {
  render() {
    const {
      username,
      email,
      password,
      handleChange,
      handleNextStep
    } = this.props;
    return (
      <div style={{ height: "80vh" }}>
        <form className="access-form">
          <h2 style={{ marginBottom: "2rem" }}>Please sign up</h2>
          <InputField
            label="Username"
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleChange}
            required
          />
          <InputField
            label="Email"
            type="email"
            value={email}
            name="email"
            placeholder="Your email"
            onChange={handleChange}
            help={<div />}
            required
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            value={password}
            placeholder="Shhh.. password"
            onChange={handleChange}
            required
          />
          <Button onClick={handleNextStep}>NEXT</Button>
          <p>
            Already have account?
            <Link to={"/login"}> Login</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default SignupForn;
