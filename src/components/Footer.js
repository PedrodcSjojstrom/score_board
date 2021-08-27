import React, { Component } from "react";
import PropType from "prop-types";

class Footer extends Component {
  playerInput = React.createRef();
  //create ref  

  handleSubmit = (e) => {
      e.preventDefault();
      this.props.addPlayer(this.playerInput.current.value);
      e.currentTarget.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
        type="text" 
        ref={this.playerInput}
        //pass ref to the ref attribute 
        placeholder="Enter a player's name" 
        />

        <input type="submit" value="Add player" />
      </form>
    );
  }
}

export default Footer;
