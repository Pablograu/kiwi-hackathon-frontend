import React, { Component } from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Private from "./pages/Private";
import Winner from "./pages/Winner";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Booking from "./pages/Booking";
import Payment from "./components/Payment";
import AuthProvider from "./providers/AuthProvider";
import "./App.css";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div>
          <Navbar />
          <Switch>
            <AnonRoute exact path="/" component={Main} />
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute exact path="/private" component={Private} />
            <PrivateRoute path="/private/winner" component={Winner} />
            <PrivateRoute path="/booking" component={Booking} />
          </Switch>
          <Footer />
        </div>
      </AuthProvider>
    );
  }
}

export default App;
