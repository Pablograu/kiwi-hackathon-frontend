import React, { Component } from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Private from "./pages/Private";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AuthProvider from "./providers/AuthProvider";
import "./App.css";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div>
          <Navbar />
          <Hero />
          <HowItWorks />
          <Switch>
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
