import React, { Component } from 'react'

export default class CountDown extends Component {
  state= {
    days: 1,
    hours: 56,
    minutes: 23,
    seconds: 0,
  }

  componentDidMount() {
    this.startMinutes();
    this.startSeconds();
  }

  startMinutes = () => {
    setInterval(() => {
      const minutesUpdare = this.state.minutes
      if (minutesUpdare === 0) {
        this.setState({
          minuts: 60,
        })
      } else {
        this.setState({
          minutes: minutesUpdare-1
        })
      }
    }, 100000)
  }

  startSeconds = () => {
    setInterval(() => {
      const secondsUpdare = this.state.seconds
      if (secondsUpdare === 0) {
        this.setState({
          seconds: 60,
        })
      } else {
        this.setState({
          seconds: secondsUpdare-1
        })
      }
    }, 1000)
  }

  render() {
    const {days, hours, minutes, seconds} = this.state
    return (
      <div  className="countdown-section">
        <p className="title">The KiwiFly Raffle will take place soon!</p>
        <div className="count-down-container">
          <div className="count-down-part">
            <p>{days}</p>
            <p>days</p>
          </div>
          <div className="count-down-part">
            <p>: {hours}</p>
            <p>hours</p>
          </div>
          <div className="count-down-part">
            <p>: {minutes}</p>
            <p>minutes</p>
          </div>
          <div className="count-down-part">
            <p>: {seconds}</p>
            <p>seconds</p>
          </div>
        </div>
      </div>
    )
  }
}

