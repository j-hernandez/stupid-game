import React from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import ScoreBoard from './components/ScoreBoard';

//this.props.score
function App() {
  return (
    <div className="App">
      <GameBoard  style={{border:"3px blue;"}}/>
      <ScoreBoard style={{border:"3px green;"}} />
    </div>
  );
}

export default App;
