import React from 'react';
import RollDice from './RollDice';
import Lottery from './Lottery';
import Flipper from './Flipper';
import BoxContainer from './BoxContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <RollDice />
      <Lottery />
      <Flipper />
      <BoxContainer />
    </div>
  );
}

export default App;