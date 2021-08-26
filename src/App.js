import React, {Component}  from 'react';
import "./App.css";
import Header from './components/Header';
import Player from './components/Player';

class App extends Component {

  state = {
    players: [
      {
        name: "Guil",
        id: 1,
        rScores:[0,0,0,0,0,0,0],
        
      },
      {
        name: "Treasure",
        id: 2, 
        rScores:[0,0,0,0,0,0,0],
        
      },
      {
        name: "Ashley",
        id: 3, 
        rScores:[0,0,0,0,0,0,0],
        
      },
      {
        name: "James",
        id: 4, 
        rScores:[0,0,0,0,0,0,0],
        
      }
    ],
    gameStage:'',
  }
  handleScoreChange= (iPerson,iScore, e) =>{
    const scoresCopy= this.state.players[iPerson].rScores 
    scoresCopy[iScore]=parseInt(e.target.value)
    this.setState({
      rScores: scoresCopy
    })
  }
  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  scoreSum = (scores)=> {
    //just sum the array
    const reducer = (accumulator, curr) => accumulator + curr;
    return scores.reduce(reducer)
  }
  getHighScore = () => {
    let totals=[]
    for (let i=0;i<this.state.players.length;i++){
      totals=[...totals, ...this.state.players[i].rScores];
    }
    console.log(totals)
    const highScore = Math.max(...totals);
    if (highScore) {
      return highScore;
    } 
    return null;
  }

  render () {
    const highScore = this.getHighScore();
    return (
      <div className="scoreboard">
        <Header
        totalPlayers={this.state.players.length}
        players={this.state.players} 
        />
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            id={player.id}
            key={player.id.toString()}
            rScores={player.rScores}
            index={index}
            handleScore={this.handleScoreChange}
            scoreSum={this.scoreSum(player.rScores)}
            isHighScore={highScore===this.scoreSum(player.rScores)}
            removePlayer={this.handleRemovePlayer}
          />
        )}
  
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
