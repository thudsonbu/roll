import React from 'react';
import Deck from './Deck';
import RollDice from './RollDice';
import Lottery from './Lottery';
import Flipper from './Flipper';
import BoxContainer from './BoxContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Deck />
      <RollDice />
      <Lottery />
      <Flipper />
      <BoxContainer />
    </div>
  );
}

export default App;