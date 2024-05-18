import React, { Component } from "react";
import ScoreTracker from "./ScoreTracker.jsx";
import CountdownTimer from "./CountdownTimer.jsx";

export class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 30
    };
  }

  setMinutes = (setMinutes) => {
    this.setState({
      minutes: setMinutes
    });
  }

  render() {
    return (
        <div>
            <h2>{this.minutes}</h2>
            <h1 className="title text-light"> Rummikub World Championship Companion</h1>
                <CountdownTimer setMinutes={this.setMinutes}/>
                <ScoreTracker setMinutes={this.setMinutes}/>
        </div>     
  )};
}
export default Parent;