import React, {Component}  from 'react';
import "./App.css";
import Header from './components/Header';
import Player from './components/Player';

class App extends Component {

  render () {
    return (
      <div className="scoreboard">
        <Header />
        <Player />
  
        {/* PLAYERS===================== */}
         {/* ->/PLAYERS===================== */}
        {/* FOOTER===================== */}
        <form>
          <input 
          type="text"
          //pass ref to the ref attribute 
          placeholder="Enter a player's name" 
          />
          <input type="submit" value="Add player" />
        </form>
        
      </div>
    );
  }
  
}

export default App;
