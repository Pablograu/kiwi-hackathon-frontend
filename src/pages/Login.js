import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { Button, InputField } from "@kiwicom/orbit-components/lib";

class Login extends Component {
  state = {
    username: "",
    password: "",
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state

    this.props.login({ username, password })
      .then(() => {})
      .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <form>
          <InputField
            label="Username"
            type="text"
            name="username"
            value={username}
            placeholder="Placeholder"
            onChange={this.handleChange}
            required
          />
          <InputField
            type="password"
            label="Password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={this.handleChange}
            required
          />
          <Button onClick={this.handleFormSubmit}>
            Login
          </Button>
        </form>
        <p>You don't have an account? 
          <Link to={"/signup"}> SignUp</Link>
        </p>
      </div>
    )
  }
}

export default withAuth(Login);
