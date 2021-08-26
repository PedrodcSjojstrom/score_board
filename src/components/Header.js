import React, { Component } from "react";
import PropType from "prop-types";
import StopWatch from "./StopWatch";

class Header extends Component {
  static propTypes = {};
  calculateTotalPoints= (players) => {
    let points =0;
    for (let i=0;i<players.length;i++){
      const arr=players[i].rScores;
      const reducer = (accumulator, curr) => accumulator + curr;
      points += arr.reduce(reducer)
    }
    return points

  }
  render() {
    const {totalPlayers, players}= this.props;
    return (
      <header>
        {/* <!-- Stats --> */}
        <table className="stats">
          <tbody>
            <tr>
              <td>Players:</td>
              <td>{totalPlayers}</td>
            </tr>
            <tr>
              <td>Points:</td>
              <td>{this.calculateTotalPoints(players)}</td>
            </tr>
            {/* <tr>
              <td>Round:</td>
              <td>0</td>
            </tr> */}
          </tbody>
        </table>
        {/* <!-- Header text --> */}
        <h1>Continental Scoreboard</h1>
        {/* <!-- Timer --> */}
        <StopWatch/>
      </header>
    );
  }
}

export default Header;