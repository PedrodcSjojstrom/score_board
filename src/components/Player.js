import React, { Component } from "react";
import PropType from "prop-types";
import Input from "./Input";
import Crown from "./Crown";

class Player extends Component {
  static propTypes = {};
  render() {
    const {
      name,
      rScores,
      handleScore,
      scoreSum,
      removePlayer,
      id,
      isHighScore,
    } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            ✖
          </button>
          <Crown 
          isHighScore={isHighScore} 
          
          />
          {name}
        </span>
        {rScores.map((score, index) => (
          <Input
            score={score}
            iScore={index}
            iPerson={this.props.index}
            handleScore={handleScore}
            key={index.toString()}
          />
        ))}
        <div className="player-total">{scoreSum}</div>
      </div>
    );
  }
}

export default Player;
