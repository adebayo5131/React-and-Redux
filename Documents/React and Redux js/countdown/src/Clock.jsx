/* Clock Component */

import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

 /* Update the time and Display the updated time */
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  /* Thid runs when component has completely rendered onto the application
  This also updateds and runs at a specific interval */
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  /* Check if an integer is less than 10 and had a 0 as a prefix */
  leading0(num) {
    return num < 10 ? '0' + num : num;
  }

  /* Get timer until the sepcific deadline passed in */
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));


    this.setState({days, hours, minutes, seconds});
  }

  render() {

    /* Return the clock.jsx to the class tag defined in app.jsx */
    return (
      <div>
        <div className="Clock-days">{this.leading0(this.state.days)} days</div>
        <div className="Clock-hours">{this.leading0(this.state.hours)} hours</div>
        <div className="Clock-minutes">{this.leading0(this.state.minutes)} minutes</div>
        <div className="Clock-seconds">{this.leading0(this.state.seconds)} seconds</div>
      </div>
    )
  }
}
export default Clock;