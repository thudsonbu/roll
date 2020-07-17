import React from 'react';
import RollDice from './RollDice';
import Lottery from './Lottery';
import Flipper from './Flipper';
import './App.css';

function App() {
  return (
    <div className="App">
      <RollDice />
      <Lottery />
      <Flipper />
    </div>
  );
}

export default App;
