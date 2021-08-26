import React, { Component } from "react";
import PropType from "prop-types";

class Input extends Component {
  static propTypes = {};

  
  render() {
    const {score,iScore,iPerson,handleScore} = this.props;
    return (
      <input
        type="text"
        className="round-score"
        value={score}
        onChange={(e)=>handleScore(iPerson, iScore, e)}
      ></input>
    );
  }
}

export default Input;
