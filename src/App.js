import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';


const App = () => {
  return (
    <header>
        <h1>Scoreboard</h1>
        <span className="stats">PLayers: 1</span>
        <div classNmae="player">
      <span className="player-name">
        Guil
      </span>
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">35</span>
        <button className="counter-action decrement"> + </button>
    </div>
    </div>

    </header>
  );
}

const Player = () => {
return (
    <div classNmae="player">
      <span className="player-name">
        Guil
      </span>
<div className="counter">
  <button className="counter-action decrement"> - </button>
  <span className="counter-score">35</span>
  <button className="counter-action decrement"> + </button>
</div>
    </div>

);

}

export default App;


