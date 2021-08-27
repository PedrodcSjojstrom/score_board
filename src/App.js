import React, {Component}  from 'react';
import "./App.css";
import Header from './components/Header';
import Player from './components/Player';
import Footer from './components/Footer';

class App extends Component {

  state = {
    players: [],
    gameStage:'',
  }
   prevPlayerId = 0;
  handleScoreChange= (iPerson,iScore, e) =>{
   /*  if(e.target.value.match(/^[0-9,-]+$/)) */
    const scoresCopy= this.state.players[iPerson].rScores 
    scoresCopy[iScore]=e.target.value
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

  handleAddPlayer = (name) => {
    this.setState(prevState =>{
      return {
        players: [
        ...prevState.players,
          {
            name: name,
            id: this.prevPlayerId += 1,
            rScores:[0,0,0,0,0,0,0],

          }
        ]
      }
      
    });
  }

  scoreSum = (scores)=> {
    //just sum the array
    let total =0;
    for (let i=0;i<scores.length;i++){
      total+=parseInt(scores[i]);
    }
    return total
  }
  getHighScore = () => {
    let totals=[]
    for (let i=0;i<this.state.players.length;i++){
     totals=[...totals, this.scoreSum(this.state.players[i].rScores)]
    }
    const highScore = Math.min(...totals);
    if (highScore) {
      return highScore;
    } 
    return null;
  }
  getTotalPoints = () =>{
    let totals=[]
    for (let i=0;i<this.state.players.length;i++){
     totals=[...totals, this.scoreSum(this.state.players[i].rScores)]
    }
    return this.scoreSum(totals);
  }

  render () {
    const highScore = this.getHighScore();
    console.log(highScore)
    return (
      <div className="scoreboard">
        <Header
        totalPlayers={this.state.players.length}
        totalPoints={this.getTotalPoints()} 
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
        <Footer addPlayer={this.handleAddPlayer}/>
        
        
      </div>
    );
  }
  
}

export default App;
