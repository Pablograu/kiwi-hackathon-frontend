import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../providers/AuthProvider";

class Navbar extends Component {
  state = {
    withShadow: false
  };

  handleScroll = e => {
    if (window.scrollY < 30) {
      return this.setState({ withShadow: false });
    } else {
      this.setState({ withShadow: true });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { isLogged, user, logout } = this.props;
    const { username } = user;
    if (isLogged) {
      return (
        <div>
          <p>username: {username}</p>
          <p onClick={logout}>Logout</p>
        </div>
      );
    } else {
      return (
        <div
          className="NavBar"
          style={{
            boxShadow: this.state.withShadow && "0px 0px 8px 2px #000000"
          }}
        >
          <Link to="/">
            <img src="tequila-logo.svg" alt="tequila-sunrise-logo" />
          </Link>
          <div>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          </div>
        </div>
      );
    }
  }
}

export default withAuth(Navbar);
