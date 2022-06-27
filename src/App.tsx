// @ts-nocheck
import React from 'react';
import InitialScreen from './screens/InitialScreen2';
import SecondScreen from "./screens/SecondScreen2";
import ThirdScreen from "./screens/ThirdScreen";
import GameScreen from "./screens/GameScreen";
function App() {
  return (
    <div className="App">
      <InitialScreen/>
      <SecondScreen/>
        <GameScreen/>
        <ThirdScreen/>
    </div>
  );
}

export default App;
