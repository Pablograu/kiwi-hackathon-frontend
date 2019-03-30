import React, { Component } from 'react'

export default class CountDown extends Component {
  state= {
    days: 40,
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
          seconds: 60,
        })
      } else {
        this.setState({
          minutes: minutesUpdare-1
        })
      }
    }, 10000)
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
      <div>
        <p>The KiwiFly Raffle will take place soon!</p>
        <div>
          <p>{days}</p>
          <p>days</p>
        </div>
        <div>
          <p>: {hours}</p>
          <p>hours</p>
        </div>
        <div>
          <p>: {minutes}</p>
          <p>minutes</p>
        </div>
        <div>
          <p>: {seconds}</p>
          <p>seconds</p>
        </div>
      </div>
    )
  }
}

