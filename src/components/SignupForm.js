import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@kiwicom/orbit-components/lib";

class SignupForn extends Component {
  render() {
    const { username, email, password, handleChange, handleNextStep} = this.props;
    return (
      <div>
        <form>
          <label>Username:</label>
          <input type="text" name="username" value={username} onChange={handleChange}/>
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={handleChange} />
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={handleChange} />
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