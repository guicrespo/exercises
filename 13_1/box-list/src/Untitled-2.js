import React from 'react';
import Cofre from './Cofre'
import './App.css';
​
function App() {
  return (
    <div className="App">
      <Cofre correctPassword="12345" alertMessageData={({safeOwner: 'Lucas', alertPhrase: 'Não passará'})}>
        <img src="https://f.jwwb.nl/public/s/c/w/temp-mozdoqoyjvjdwsgkkoxn/treasure_chest_312572-2.jpg" alt="My awesome chest filled with gold" />
      </Cofre>
    </div>
  );
}
​
export default App;