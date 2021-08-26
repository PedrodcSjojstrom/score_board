import React, { Component } from "react";
import PropType from "prop-types";
import StopWatch from "./StopWatch";

class Header extends Component {
  static propTypes = {};
  render() {
    return (
      <header>
        {/* <!-- Stats --> */}
        <table className="stats">
          <tbody>
            <tr>
              <td>Players:</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Points:</td>
              <td>0</td>
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