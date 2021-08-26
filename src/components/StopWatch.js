import React, { Component } from "react";

class StopWatch extends Component {
  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0,
    seconds: "00",
    minutes: "00",
    hours: "00",
  };

  handleStopwatch = () => {
    this.setState((prevState) => ({
      isRunning: !prevState.isRunning,
    }));
    if (!this.state.isRunning) {
      this.setState({ previousTime: Date.now() });
    }
  };

  handleReset = () => {
    this.setState({
      elapsedTime: 0,
      seconds: 0,
      minutes: 0,
      hours: 0,
    });
  };

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 100);
  }
  componentWillUnmount() {
    //this method is called when the component is about to unmount, is another lifecycle method
    clearInterval(this.intervalID);
    //clear Interval clears all functions set to repeat periodicly with setInterval
    // this is done to prevent memori leaks, to prevent the function to continue to excecute after the component is unmounted
  }

  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now();
      const secCounter = Math.floor(this.state.elapsedTime / 1000);
      const seconds = this.transform(secCounter % 60);
      const minutes = this.transform(parseInt(secCounter / 60));
      const hours = this.transform(parseInt(secCounter / 60 / 60));

      this.setState((prevState) => ({
        previousTime: now,
        elapsedTime: prevState.elapsedTime + (now - this.state.previousTime),
        seconds: seconds,
        minutes: minutes,
        hours: hours,
      }));
    }
  };

  transform = (num) => {
    let strNum = num + "";
    if (num < 10) {
      strNum = "0" + strNum;
      return strNum;
    } else {
      return strNum;
    }
  };
  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">
          {this.state.hours}:{this.state.minutes}:{this.state.seconds}
        </span>
        <button onClick={this.handleStopwatch}>
          {this.state.isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default StopWatch;
